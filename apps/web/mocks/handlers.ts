import { http, HttpResponse } from "msw";
import { getDb, setDb, saveDb } from "@/mocks/db";
import { split, bookingTotal, priceWithStake } from "@/lib/econ";

export const handlers = [
    // health
    http.get("/api/health", () => HttpResponse.json({ ok: true })),
    // stays list (basic)
    http.get("/api/stays", ({ request }) => {
        const url = new URL(request.url);
        const city = url.searchParams.get("city");
        const db = getDb();
        let stays = db.stays;
        if (city) stays = stays.filter((s) => s.city === city);
        return HttpResponse.json({ items: stays, total: stays.length });
    }),
    // funds list
    http.get("/api/funds", () => {
        const db = getDb();
        return HttpResponse.json({ items: db.funds, total: db.funds.length });
    }),
    // jobs list
    http.get("/api/jobs", () => {
        const db = getDb();
        return HttpResponse.json({ items: db.jobs, total: db.jobs.length });
    }),
    // job accept
    http.post("/api/jobs/:id/accept", ({ params }) => {
        const id = params.id as string;
        const db = saveDb((d) => {
            const job = d.jobs.find((j) => j.id === id);
            if (job) job.status = "accepted";
        });
        return HttpResponse.json({ ok: true, items: db.jobs });
    }),
    // job complete
    http.post("/api/jobs/:id/complete", ({ params }) => {
        const id = params.id as string;
        const db = saveDb((d) => {
            const job = d.jobs.find((j) => j.id === id);
            if (job) job.status = "completed";
        });
        return HttpResponse.json({ ok: true, items: db.jobs });
    }),
    // admin config
    http.get("/api/admin/config", () => {
        const db = getDb();
        return HttpResponse.json(db.config);
    }),
    http.post("/api/admin/config", async ({ request }) => {
        const db = getDb();
        const body = (await request.json()) as Record<string, unknown>;
        const next = { ...db, config: { ...db.config, ...(body || {}) } };
        setDb(next);
        return HttpResponse.json(next.config);
    }),
    // portfolio (mock)
    http.get("/api/portfolio", ({ request }) => {
        const url = new URL(request.url);
        const userId = url.searchParams.get("user") ?? "investor_01";
        const db = getDb();
        const portfolio = db.portfolios[userId] ?? { positions: [], distributions: [] };
        return HttpResponse.json({ portfolio });
    }),
    // month-end distributions
    http.post("/api/portfolio/month-end", () => {
        const db = saveDb((d) => {
            const now = new Date().toISOString().slice(0, 10);
            Object.values(d.portfolios).forEach((pf) => {
                const dist = pf.positions.reduce((acc, p) => acc + p.units * 0.001, 0); // small per-unit distribution
                if (dist > 0) pf.distributions.push({ t: now, amount: Math.round(dist * 100) / 100 });
            });
        });
        return HttpResponse.json({ ok: true, portfolios: db.portfolios });
    }),
    // trade buy/sell
    http.post("/api/trade", async ({ request }) => {
        const body = (await request.json()) as { userId: string; fundId: string; side: "buy" | "sell"; units: number };
        const db = saveDb((d) => {
            const pf = (d.portfolios[body.userId] ||= { positions: [], distributions: [] });
            const pos = pf.positions.find((p) => p.fundId === body.fundId);
            const price = d.funds.find((f) => f.id === body.fundId)?.price ?? 1;
            if (body.side === "buy") {
                if (pos) {
                    pos.units += body.units;
                    pos.costBasis += body.units * price;
                } else {
                    pf.positions.push({ fundId: body.fundId, units: body.units, costBasis: body.units * price });
                }
            } else {
                if (pos) {
                    pos.units = Math.max(0, pos.units - body.units);
                    pos.costBasis = Math.max(0, pos.costBasis - body.units * price);
                }
            }
        });
        return HttpResponse.json({ portfolio: db.portfolios[body.userId] });
    }),
    // stake update for host/provider
    http.post("/api/stake", async ({ request }) => {
        const body = (await request.json()) as { userId: string; stake: number };
        const db = saveDb((d) => {
            const user = d.users.find((u) => u.id === body.userId);
            if (user) user.stake = body.stake;
        });
        return HttpResponse.json({ ok: true, user: db.users.find((u) => u.id === body.userId) });
    }),
    // bookings create
    http.post("/api/bookings", async ({ request }) => {
        const body = (await request.json()) as { stayId: string; guestId: string; nights: number };
        const db = getDb();
        const stay = db.stays.find((s) => s.id === body.stayId);
        if (!stay) return HttpResponse.json({ error: "stay_not_found" }, { status: 404 });
        const nightly = priceWithStake(stay.baseNightly, stay.hostStakeLevel);
        const subtotal = bookingTotal(nightly, body.nights, stay.cleaningFee);
        const parts = split(subtotal, db.config.splits);
        const booking = {
            id: `b_${Date.now()}`,
            stayId: stay.id,
            guestId: body.guestId,
            checkIn: new Date().toISOString(),
            checkOut: new Date(Date.now() + body.nights * 86400000).toISOString(),
            guests: 2,
            subtotal,
            splits: parts,
            status: "confirmed" as const,
        };
        saveDb((d) => d.bookings.push(booking));
        return HttpResponse.json(booking);
    }),
    // bookings query by host or guest
    http.get("/api/bookings", ({ request }) => {
        const url = new URL(request.url);
        const hostId = url.searchParams.get("host");
        const guestId = url.searchParams.get("guest");
        const db = getDb();
        let items = db.bookings;
        if (hostId) {
            const hostStayIds = new Set(db.stays.filter((s) => s.hostId === hostId).map((s) => s.id));
            items = items.filter((b) => hostStayIds.has(b.stayId));
        }
        if (guestId) items = items.filter((b) => b.guestId === guestId);
        return HttpResponse.json({ items, total: items.length });
    }),
];

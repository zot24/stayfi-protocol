StayFi – decentralized hospitality protocol (front‑end mock)

## Overview

Front-end prototype of the StayFi protocol: RWA-backed property tokens, DePIN service coordination, and governance operations. This repo contains the web app (Next.js) only; smart contracts and indexing services are out of scope for this mock.

Key docs:

- Litepaper: /litepaper (or apps/web/content/litepaper.md)
- Investor pitch: INVESTOR_PITCH.md

## Getting Started

Run the development server:

```bash
make install
make dev
```

Open <http://localhost:3000>.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Tech: Next.js 15 (App Router) + TypeScript, Tailwind + shadcn/ui, React Query, Zustand, Recharts, MSW.

Monorepo structure (selected):

- apps/web – Next.js app (this mock)
- mocks – API mocks (MSW) and fixtures
- lib – simple helpers / deterministic econ

Key routes:

- /explore – browse stays with filters and ranking
- /stay/[id] – stay detail with fee split donut
- /invest – funds grid with sparkline and APY
- /invest/[id] – buy/sell mock for a fund
- /investor/portfolio – positions table
- /services – service marketplace (jobs board)
- /provider/staking – stake slider
- /host/payouts – computed splits table
- /admin – fee split sliders (global recompute)

## Environment

Create apps/web/.env.local with:

```
# Resend for waitlist email forwarding
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=StayFi <noreply@stayfi.xyz>
WAITLIST_FORWARD_TO=info@stayfi.xyz
```

These variables are used by the Next.js route at /api/waitlist.

## Docker

```bash
docker compose up --build
```

## Quick demo flow (2–3 minutes)

1) Guest → explore Asunción → open a stay → donut → book
2) Host → increase stake → see rank/discount → payouts update
3) Investor → buy 100 in city fund → portfolio updates
4) Provider → accept/complete job → reputation tick
5) Admin → change splits → donuts/tables update globally

## Deployment

Recommended: Vercel (Next.js). Set Environment Variables above for Production and Preview environments.

Optional: Cloudflare Pages using next-on-pages.

## Contributing

This is a product prototype. PRs that improve developer experience, UI/UX polish, docs, or test coverage are welcome. For protocol discussions, open a GitHub Discussion first.

## Security & Disclaimer

- This repository contains NO production smart contracts or wallets.
- The front-end uses mocked data via MSW; do not treat values as financial advice.
- If you discover a security issue, please disclose responsibly via <team@stayfi.xyz>.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

Deploy on Vercel: <https://vercel.com> – follow Next.js deployment docs for App Router.

"use client";

import { useQuery } from "@tanstack/react-query";
import type { Stay } from "@/mocks/schemas";

export default function HostListingsPage() {
    const { data } = useQuery<{ items: Array<{ id: string; title: string; city: string }> }>({
        queryKey: ["host_listings"],
        queryFn: async () => {
            const res = await fetch("/api/stays");
            const json: { items: Stay[] } = await res.json();
            return { items: json.items.filter((s) => s.hostId === "host_01").map((s) => ({ id: s.id, title: s.title, city: s.city })) };
        },
    });
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Listings</h1>
            <ul className="space-y-2 text-sm">
                {data?.items?.map((s) => (
                    <li key={s.id} className="border rounded p-3 flex items-center justify-between">
                        <span>{s.title} – {s.city}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}



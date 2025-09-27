"use client";

import { useQuery } from "@tanstack/react-query";

export default function HostPayoutsPage() {
    const { data } = useQuery<{ items: Array<{ id: string; stayId: string; subtotal: number; splits: { host: number; providers: number; protocol: number; reserve: number } }> }>({
        queryKey: ["host_payouts"],
        queryFn: async () => {
            const res = await fetch("/api/bookings?host=host_01");
            return res.json();
        },
    });
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Payouts</h1>
            <table className="w-full text-sm">
                <thead className="text-left">
                    <tr>
                        <th className="py-2">Booking</th>
                        <th>Stay</th>
                        <th>Subtotal</th>
                        <th>Host</th>
                        <th>Providers</th>
                        <th>Protocol</th>
                        <th>Reserve</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.items?.map((b) => (
                        <tr key={b.id} className="border-t">
                            <td className="py-2">{b.id}</td>
                            <td>{b.stayId}</td>
                            <td>${b.subtotal}</td>
                            <td>${b.splits.host}</td>
                            <td>${b.splits.providers}</td>
                            <td>${b.splits.protocol}</td>
                            <td>${b.splits.reserve}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}




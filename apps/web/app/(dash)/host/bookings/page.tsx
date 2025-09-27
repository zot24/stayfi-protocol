"use client";

import { useQuery } from "@tanstack/react-query";

export default function HostBookingsPage() {
    const { data } = useQuery<{ items: Array<{ id: string; stayId: string; checkIn: string; checkOut: string; subtotal: number }> }>({
        queryKey: ["host_bookings"],
        queryFn: async () => {
            const res = await fetch("/api/bookings?host=host_01");
            return res.json();
        },
    });
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Bookings</h1>
            <table className="w-full text-sm">
                <thead className="text-left">
                    <tr>
                        <th className="py-2">Booking</th>
                        <th>Stay</th>
                        <th>Dates</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.items?.map((b) => (
                        <tr key={b.id} className="border-t">
                            <td className="py-2">{b.id}</td>
                            <td>{b.stayId}</td>
                            <td>{new Date(b.checkIn).toLocaleDateString()} → {new Date(b.checkOut).toLocaleDateString()}</td>
                            <td>${b.subtotal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}





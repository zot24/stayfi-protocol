"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { Stay } from "@/mocks/schemas";
import { priceWithStake, bookingTotal, split } from "@/lib/econ";
import { PriceBreakdown } from "@/components/booking/PriceBreakdown";
import { useConfig } from "@/store/config";
import { AvailabilityCalendar } from "@/components/booking/AvailabilityCalendar";

export default function StayDetailPage() {
    const appSplits = useConfig((s) => s.splits);
    const params = useParams<{ id: string }>();
    const { data } = useQuery<{ item: Stay | null }>({
        queryKey: ["stay", params.id],
        queryFn: async () => {
            const res = await fetch(`/api/stays?id=${params.id}`);
            const list = await res.json();
            const item = (list.items as Stay[]).find((s) => s.id === params.id) ?? null;
            return { item };
        },
    });
    const stay = data?.item;
    if (!stay) return <main className="container mx-auto p-6">Not found</main>;
    const nightly = priceWithStake(stay.baseNightly, stay.hostStakeLevel);
    const nights = 2;
    const subtotal = bookingTotal(nightly, nights, stay.cleaningFee);
    const splits = split(subtotal, appSplits);
    return (
        <main className="container mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-semibold">{stay.title}</h1>
            <p className="text-muted-foreground">{stay.city} · Max {stay.maxGuests} guests</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <PriceBreakdown subtotal={subtotal} splits={splits} />
                <AvailabilityCalendar />
            </div>
        </main>
    );
}



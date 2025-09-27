"use client";

import { useQuery } from "@tanstack/react-query";
import { FundCard } from "@/components/funds/FundCard";
import type { PropertyFund } from "@/mocks/schemas";

export default function InvestPage() {
    const { data } = useQuery<{ items: PropertyFund[] }>({
        queryKey: ["funds"],
        queryFn: async () => {
            const res = await fetch("/api/funds");
            return res.json();
        },
    });
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Invest</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.items?.map((f) => (
                    <FundCard key={f.id} fund={f} />
                ))}
            </div>
        </main>
    );
}



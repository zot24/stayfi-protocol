"use client";

import { useQuery } from "@tanstack/react-query";
import type { Portfolio, PropertyFund } from "@/mocks/schemas";
import { PortfolioTable } from "@/components/investor/PortfolioTable";

export default function PortfolioPage() {
    const { data: pf } = useQuery<{ portfolio: Portfolio }>({
        queryKey: ["portfolio"],
        queryFn: async () => {
            const res = await fetch("/api/portfolio?user=investor_01");
            return res.json();
        },
    });
    const { data: funds } = useQuery<{ items: PropertyFund[] }>({
        queryKey: ["funds"],
        queryFn: async () => {
            const r = await fetch("/api/funds");
            return r.json();
        },
    });
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
            {pf?.portfolio && funds?.items ? (
                <PortfolioTable portfolio={pf.portfolio} funds={funds.items} />
            ) : null}
        </main>
    );
}



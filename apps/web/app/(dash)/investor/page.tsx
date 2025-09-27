"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

export default function InvestorDashboard() {
    const qc = useQueryClient();
    async function monthEnd() {
        await fetch("/api/portfolio/month-end", { method: "POST" });
        qc.invalidateQueries({ queryKey: ["portfolio"] });
    }
    return (
        <main className="container mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-semibold">Investor dashboard</h1>
            <Button onClick={monthEnd}>Simulate month‑end distributions</Button>
        </main>
    );
}





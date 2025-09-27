"use client";

import { useParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { PropertyFund } from "@/mocks/schemas";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function FundDetailPage() {
    const params = useParams<{ id: string }>();
    const qc = useQueryClient();
    const { data } = useQuery<{ items: PropertyFund[] }>({
        queryKey: ["funds"],
        queryFn: async () => {
            const r = await fetch("/api/funds");
            return r.json();
        },
    });
    const fund = data?.items.find((f) => f.id === params.id);
    const trade = useMutation({
        mutationFn: async (vars: { side: "buy" | "sell"; units: number }) => {
            const r = await fetch("/api/trade", { method: "POST", body: JSON.stringify({ userId: "investor_01", fundId: params.id, ...vars }) });
            return r.json();
        },
        onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio"] }),
    });
    if (!fund) return <main className="container mx-auto p-6">Not found</main>;
    return (
        <main className="container mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-semibold">{fund.name}</h1>
            <p className="text-muted-foreground">Price ${fund.price.toFixed(2)} · APY {(fund.teaserApy * 100).toFixed(0)}%</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={fund.history} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
                            <defs>
                                <linearGradient id="nav" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="t" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Area type="monotone" dataKey="nav" stroke="#22c55e" fill="url(#nav)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={fund.history} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
                            <defs>
                                <linearGradient id="dist" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="t" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Area type="monotone" dataKey="dist" stroke="#06b6d4" fill="url(#dist)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => trade.mutate({ side: "buy", units: 100 })}>Buy 100</Button>
                <Button variant="secondary" onClick={() => trade.mutate({ side: "sell", units: 100 })}>Sell 100</Button>
            </div>
        </main>
    );
}



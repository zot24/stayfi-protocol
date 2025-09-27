"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
    { metric: "on‑time", score: 92 },
    { metric: "quality", score: 88 },
    { metric: "communication", score: 90 },
    { metric: "reliability", score: 86 },
    { metric: "complaints", score: 95 },
];

export default function ProviderReputationPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Reputation</h1>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={data} outerRadius={120}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <PolarRadiusAxis />
                        <Radar dataKey="score" stroke="#22c55e" fill="#22c55e" fillOpacity={0.4} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}





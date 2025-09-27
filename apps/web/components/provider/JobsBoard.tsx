"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { ServiceJob } from "@/mocks/schemas";
import { Button } from "@/components/ui/button";

export function JobsBoard() {
    const qc = useQueryClient();
    const { data } = useQuery<{ items: ServiceJob[] }>({
        queryKey: ["jobs"],
        queryFn: async () => {
            const res = await fetch("/api/jobs");
            return res.json();
        },
    });
    return (
        <div className="space-y-3">
            {data?.items?.map((j) => (
                <div key={j.id} className="flex items-center justify-between border rounded p-3">
                    <div className="text-sm">
                        <p className="font-medium">{j.type} · ${j.payout}</p>
                        <p className="text-muted-foreground">{new Date(j.windowStart).toLocaleString()} → {new Date(j.windowEnd).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                        {j.status === "open" && (
                            <Button size="sm" variant="secondary" onClick={async () => { await fetch(`/api/jobs/${j.id}/accept`, { method: "POST" }); qc.invalidateQueries({ queryKey: ["jobs"] }); }}>Accept</Button>
                        )}
                        {j.status === "accepted" && (
                            <Button size="sm" onClick={async () => { await fetch(`/api/jobs/${j.id}/complete`, { method: "POST" }); qc.invalidateQueries({ queryKey: ["jobs"] }); }}>Complete</Button>
                        )}
                        {j.status === "completed" && <span className="text-xs text-emerald-600">Completed</span>}
                    </div>
                </div>
            ))}
        </div>
    );
}



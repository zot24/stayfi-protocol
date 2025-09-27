"use client";

import { Slider } from "@/components/ui/slider";
import { useConfig } from "@/store/config";
import { Button } from "@/components/ui/button";

export function SplitControls() {
    const splits = useConfig((s) => s.splits);
    const setSplits = useConfig((s) => s.setSplits);

    function update(key: keyof typeof splits, value: number) {
        const next = { ...splits, [key]: value };
        const sum = next.host + next.providers + next.protocol + next.reserve;
        // normalize
        setSplits({
            host: next.host / sum,
            providers: next.providers / sum,
            protocol: next.protocol / sum,
            reserve: next.reserve / sum,
        });
    }

    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm">Host {(splits.host * 100).toFixed(0)}%</label>
                <Slider value={[Math.round(splits.host * 100)]} onValueChange={(v) => update("host", v[0] / 100)} />
            </div>
            <div>
                <label className="text-sm">Providers {(splits.providers * 100).toFixed(0)}%</label>
                <Slider value={[Math.round(splits.providers * 100)]} onValueChange={(v) => update("providers", v[0] / 100)} />
            </div>
            <div>
                <label className="text-sm">Protocol {(splits.protocol * 100).toFixed(0)}%</label>
                <Slider value={[Math.round(splits.protocol * 100)]} onValueChange={(v) => update("protocol", v[0] / 100)} />
            </div>
            <div>
                <label className="text-sm">Reserve {(splits.reserve * 100).toFixed(0)}%</label>
                <Slider value={[Math.round(splits.reserve * 100)]} onValueChange={(v) => update("reserve", v[0] / 100)} />
            </div>
            <p className="text-xs text-muted-foreground">Total {(splits.host + splits.providers + splits.protocol + splits.reserve) * 100}% (normalized)</p>
            <Button size="sm" variant="secondary" onClick={async () => { await fetch("/api/admin/config", { method: "POST", body: JSON.stringify({ splits }) }); }}>Persist to config</Button>
        </div>
    );
}



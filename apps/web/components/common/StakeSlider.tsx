"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StakeSlider({ userId, initial }: { userId: string; initial: number }) {
    const [value, setValue] = useState(initial);
    async function save() {
        await fetch("/api/stake", { method: "POST", body: JSON.stringify({ userId, stake: value }) });
    }
    return (
        <div className="space-y-3">
            <label className="text-sm">Stake level: {value}</label>
            <Slider value={[value]} min={0} max={3} step={1} onValueChange={(v) => setValue(v[0])} />
            <Button size="sm" onClick={save}>Update stake</Button>
        </div>
    );
}




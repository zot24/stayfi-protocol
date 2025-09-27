"use client";

import { SplitControls } from "@/components/admin/SplitControls";
import { useConfig } from "@/store/config";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
    const boosts = useConfig((s) => s.flags.boosts);
    const setFlag = useConfig((s) => s.setFlag);
    return (
        <main className="container mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-semibold mb-2">Admin – Fee Splits</h1>
                <SplitControls />
            </div>
            <div className="flex items-center gap-3">
                <Switch checked={boosts} onCheckedChange={async (v) => { setFlag("boosts", v); await fetch("/api/admin/config", { method: "POST", body: JSON.stringify({ flags: { boosts: v } }) }); }} />
                <Label>Enable boosts</Label>
            </div>
        </main>
    );
}



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function JoinWaitlistButton({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function submit() {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
        setLoading(true);
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setDone(true);
                setTimeout(() => setOpen(false), 1400);
            } else {
                const data = await res.json().catch(() => ({}));
                setError(data?.error || "Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    }

    if (!open) {
        return (
            <Button
                size="lg"
                className={cn("gap-2", className)}
                onClick={() => setOpen(true)}
            >
                Join the waitlist
            </Button>
        );
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Join the StayFi waitlist</DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-9 w-full"
                    />
                    <Button onClick={submit} disabled={loading || done}>
                        {done ? "Added" : loading ? "Sending…" : "Submit"}
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    We only email with meaningful updates and launch invites. No spam. Unsubscribe anytime.
                </p>
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
                {done && !error && (
                    <p className="text-sm text-green-600">Thanks! We’ll be in touch soon.</p>
                )}
            </DialogContent>
        </Dialog>
    );
}



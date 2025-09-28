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
    const [toast, setToast] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    async function submit() {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            const msg = "Please enter a valid email";
            setError(msg);
            setToast({ type: "error", message: msg });
            setTimeout(() => setToast(null), 6000);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setDone(true);
                setOpen(false);
                setEmail("");
                setError(null);
                setToast({ type: "success", message: "Thanks! You’re on the StayFi waitlist." });
                setTimeout(() => setToast(null), 6000);
            } else {
                const data = await res.json().catch(() => ({}));
                const msg = data?.error || "Something went wrong";
                setError(msg);
                setToast({ type: "error", message: msg });
                setTimeout(() => setToast(null), 6000);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Button
                size="lg"
                className={cn("gap-2", className)}
                onClick={() => setOpen(true)}
            >
                Join the waitlist
            </Button>
            <Dialog
                open={open}
                onOpenChange={(v) => {
                    setOpen(v);
                    if (v) {
                        setDone(false);
                        setError(null);
                        setEmail("");
                    }
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Join the StayFi waitlist</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-2">
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (done) setDone(false);
                                if (error) setError(null);
                            }}
                            className="h-9 w-full"
                        />
                        <Button onClick={submit} disabled={loading}>
                            {loading ? "Sending…" : "Join"}
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        We only email with meaningful updates and launch invites. No spam. Unsubscribe anytime.
                    </p>
                </DialogContent>
            </Dialog>
            <JoinWaitlistToast toast={toast} onClose={() => setToast(null)} />
        </>
    );
}


// Corner toast (local to this component)
// Renders outside the dialog for both success and error states
export function JoinWaitlistToast({
    toast,
    onClose,
}: {
    toast: { type: "success" | "error"; message: string } | null;
    onClose: () => void;
}) {
    if (!toast) return null;
    const isError = toast.type === "error";
    return (
        <div
            aria-live="polite"
            className="fixed bottom-4 right-4 z-50 w-[320px]"
        >
            <div
                className={cn(
                    "rounded-md p-4 flex items-start gap-3 shadow-lg backdrop-blur-md",
                    isError
                        ? "border border-red-500/30 bg-red-500/15"
                        : "border border-green-600/30 bg-green-600/15"
                )}
            >
                <div
                    className={cn(
                        "mt-0.5 h-2 w-2 rounded-full",
                        isError ? "bg-red-500" : "bg-green-600"
                    )}
                />
                <div className="flex-1 text-sm">{toast.message}</div>
                <button
                    aria-label="Dismiss"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
}



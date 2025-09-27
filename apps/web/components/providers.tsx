"use client";

import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useConfig } from "@/store/config";

const queryClient = new QueryClient();

declare global {
    interface Window {
        __mswStarted?: boolean;
    }
}

export default function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            (async () => {
                if (process.env.NODE_ENV === "development") {
                    const { worker } = await import("@/mocks/browser");
                    if (!window.__mswStarted) {
                        await worker.start({ onUnhandledRequest: "bypass" });
                        window.__mswStarted = true;
                    }
                }
                // Load persisted admin config and hydrate store
                try {
                    const res = await fetch("/api/admin/config");
                    const cfg = await res.json();
                    useConfig.getState().setSplits(cfg.splits);
                } catch { }
            })();
        }
    }, []);

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

type Role = "guest" | "host" | "investor" | "provider" | "admin";

export function Header() {
    return (
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
            <div className="container mx-auto flex items-center justify-between h-14 px-4">
                <Link href="/" className="font-semibold tracking-tight">StayFi</Link>
                <div className="flex items-center gap-3">
                    <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link>
                </div>
            </div>
            <Separator />
        </header>
    );
}

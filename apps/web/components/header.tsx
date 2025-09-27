"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/store/auth";

type Role = "guest" | "host" | "investor" | "provider" | "admin";

export function Header() {
    const role = useAuth((s) => s.role);
    const setRole = useAuth((s) => s.setRole);
    return (
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
            <div className="container mx-auto flex items-center justify-between h-14 px-4">
                <Link href="/" className="font-semibold tracking-tight">stayfi</Link>
                <div className="flex items-center gap-3">
                    <Select value={role} onValueChange={(v: Role) => setRole(v)}>
                        <SelectTrigger className="w-44">
                            <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="guest">Guest</SelectItem>
                            <SelectItem value="host">Host</SelectItem>
                            <SelectItem value="investor">Investor</SelectItem>
                            <SelectItem value="provider">Provider</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Separator />
        </header>
    );
}

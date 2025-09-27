"use client";

import { create } from "zustand";

type Role = "guest" | "host" | "investor" | "provider" | "admin";

type AuthState = {
    role: Role;
    setRole: (r: Role) => void;
};

export const useAuth = create<AuthState>((set) => ({
    role: (typeof window !== "undefined" && (localStorage.getItem("role") as Role)) || "guest",
    setRole: (r) => {
        if (typeof window !== "undefined") localStorage.setItem("role", r);
        set({ role: r });
    },
}));

"use client";

import { create } from "zustand";

export type Splits = { host: number; providers: number; protocol: number; reserve: number };

export type ConfigState = {
    splits: Splits;
    flags: { boosts: boolean };
    setSplits: (s: Splits) => void;
    setFlag: (key: keyof ConfigState["flags"], value: boolean) => void;
};

export const useConfig = create<ConfigState>((set) => ({
    splits: { host: 0.9, providers: 0.05, protocol: 0.03, reserve: 0.02 },
    flags: { boosts: true },
    setSplits: (splits) => set({ splits }),
    setFlag: (key, value) => set((s) => ({ flags: { ...s.flags, [key]: value } })),
}));

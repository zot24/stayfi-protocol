import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "StayFi Technical Litepaper",
    description: "Decentralized Infrastructure for Global Hospitality",
};

export default function LitepaperPage() {
    redirect("/docs/litepaper");
}



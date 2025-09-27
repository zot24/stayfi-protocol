"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewListingPage() {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    async function create() {
        // Mock persist: in a real demo we would POST /api/stays
        alert(`Created listing: ${title} – ${city}`);
    }
    return (
        <main className="container mx-auto p-6 space-y-3">
            <h1 className="text-2xl font-semibold">New listing</h1>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <Button onClick={create}>Create</Button>
        </main>
    );
}





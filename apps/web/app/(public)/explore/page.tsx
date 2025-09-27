"use client";

import { useQuery } from "@tanstack/react-query";
import { StayCard } from "@/components/stays/StayCard";
import type { Stay } from "@/mocks/schemas";
import { useState, useMemo } from "react";
import { SearchFilters } from "@/components/SearchFilters";

export default function ExplorePage() {
    const [city, setCity] = useState("");
    const [sort, setSort] = useState("rank");
    const { data } = useQuery<{ items: Stay[] }>({
        queryKey: ["stays", city],
        queryFn: async () => {
            const qs = city ? `?city=${encodeURIComponent(city)}` : "";
            const res = await fetch(`/api/stays${qs}`);
            return res.json();
        },
    });
    const items = useMemo(() => {
        const arr = [...(data?.items ?? [])];
        if (sort === "price") arr.sort((a, b) => a.baseNightly - b.baseNightly);
        else if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
        else arr.sort((a, b) => b.hostStakeLevel - a.hostStakeLevel);
        return arr;
    }, [data, sort]);
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Explore stays</h1>
            <SearchFilters onCity={setCity} onSort={setSort} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((s) => (
                    <StayCard key={s.id} stay={s} />
                ))}
            </div>
        </main>
    );
}

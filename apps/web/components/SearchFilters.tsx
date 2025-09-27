"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchFilters({ onCity, onSort }: { onCity: (c: string) => void; onSort: (s: string) => void }) {
    return (
        <div className="flex flex-wrap gap-3 mb-4">
            <Input placeholder="City (e.g., asunción)" onChange={(e) => onCity(e.target.value)} className="w-64" />
            <Select defaultValue="rank" onValueChange={onSort}>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rank">Rank</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}



"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export function AvailabilityCalendar() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
        <div className="border rounded p-3">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md" />
        </div>
    );
}





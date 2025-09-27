export type Stay = {
    id: string;
    title: string;
    city: string;
    coords: [number, number];
    photos: string[];
    amenities: string[];
    baseNightly: number;
    cleaningFee: number;
    maxGuests: number;
    hostId: string;
    hostStakeLevel: 0 | 1 | 2 | 3;
    rating: number;
    reviews: number;
    availability: Array<{ date: string; price?: number; blocked?: boolean }>; // ISO date
};

export type Booking = {
    id: string;
    stayId: string;
    guestId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    subtotal: number;
    splits: { host: number; providers: number; protocol: number; reserve: number };
    status: "pending" | "confirmed" | "completed" | "cancelled";
};

export type PropertyFund = {
    id: string;
    name: string;
    city: string;
    teaserApy: number;
    volatility: "low" | "med" | "high";
    tvl: number;
    units: number;
    price: number; // mock nav per share
    history: Array<{ t: string; nav: number; dist: number }>;
};

export type ServiceJob = {
    id: string;
    stayId: string;
    providerId?: string;
    type: "cleaning" | "maintenance";
    payout: number;
    windowStart: string;
    windowEnd: string;
    status: "open" | "accepted" | "completed";
};

export type User = {
    id: string;
    name: string;
    role: "guest" | "host" | "investor" | "provider" | "admin";
    stake: number;
    reputation: number;
};

export type Portfolio = {
    positions: Array<{ fundId: string; units: number; costBasis: number }>;
    distributions: Array<{ t: string; amount: number }>;
};



import staysSeed from "@/mocks/fixtures/stays.json";
import type { Stay, PropertyFund, ServiceJob, User, Portfolio, Booking } from "@/mocks/schemas";
import fundsSeed from "@/mocks/fixtures/funds.json";
import jobsSeed from "@/mocks/fixtures/jobs.json";
import usersSeed from "@/mocks/fixtures/users.json";
import { storage } from "@/lib/db";

type DB = {
    stays: Stay[];
    funds: PropertyFund[];
    jobs: ServiceJob[];
    users: User[];
    portfolios: Record<string, Portfolio>; // by user id
    config: { splits: { host: number; providers: number; protocol: number; reserve: number }; flags: { boosts: boolean } };
    bookings: Booking[];
};

const KEY = "stayfi_db_v1";

function init(): DB {
    const db = storage.get<DB | null>(KEY, null);
    if (db) return db;
    const stays: Stay[] = (staysSeed as any[]).map((s) => ({
        ...s,
        coords: [s.coords[0], s.coords[1]] as [number, number],
    })) as Stay[];
    const funds: PropertyFund[] = fundsSeed as PropertyFund[];
    const jobs: ServiceJob[] = jobsSeed as ServiceJob[];
    const users: User[] = usersSeed as User[];
    const portfolios: Record<string, Portfolio> = {
        investor_01: { positions: [{ fundId: "fund_asu_city", units: 1000, costBasis: 1000 }], distributions: [] },
    };
    const initial: DB = { stays, funds, jobs, users, portfolios, config: { splits: { host: 0.9, providers: 0.05, protocol: 0.03, reserve: 0.02 }, flags: { boosts: true } }, bookings: [] };
    storage.set(KEY, initial);
    return initial;
}

export function getDb(): DB {
    return init();
}

export function setDb(next: DB) {
    storage.set(KEY, next);
}

export function saveDb(mutator: (db: DB) => void): DB {
    const db = getDb();
    mutator(db);
    setDb(db);
    return db;
}



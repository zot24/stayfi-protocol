export type Splits = { host: number; providers: number; protocol: number; reserve: number };

export const defaultSplits: Splits = { host: 0.9, providers: 0.05, protocol: 0.03, reserve: 0.02 };

export function priceWithStake(baseNightly: number, hostStake: number) {
    const discount = [0, 0.01, 0.02, 0.03][hostStake] ?? 0;
    return Math.round(baseNightly * (1 - discount));
}

export function bookingTotal(nightly: number, nights: number, cleaning: number) {
    const subtotal = nightly * nights + cleaning;
    return subtotal;
}

export function split(subtotal: number, splits: Splits = defaultSplits) {
    const host = Math.round(subtotal * splits.host);
    const providers = Math.round(subtotal * splits.providers);
    const protocol = Math.round(subtotal * splits.protocol);
    const reserve = subtotal - host - providers - protocol;
    return { host, providers, protocol, reserve };
}

export function mockApy(occupancy: number, avgNightly: number) {
    const annualNights = 365 * occupancy;
    const annualRev = annualNights * avgNightly;
    return Math.min(0.25, annualRev / 50000);
}



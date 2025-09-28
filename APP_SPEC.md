## stayfi – decentralized airbnb network (front‑end mock)

### Purpose

- **Goal**: Present a demo‑ready, front‑end simulation of a decentralized network for short‑term rentals that combines real‑world asset (RWA) revenue sharing with DePIN‑style service markets and staking incentives.
- **Outcome**: Show how guests, hosts, investors, service providers, and a lightweight protocol admin interact; how incentives align; and how fee splits and staking affect pricing, yields, and rankings.
- **Out of scope**: Any on‑chain logic, wallets, payments, or production‑grade auth/security. Everything is mocked and deterministic for a polished demo.

### Target Audience

- **Hackathon judges, partners, early users** who want to experience the product vision and economics without blockchain integrations yet.

## Product pillars

### 1) RWA simulation (investor economics)

- **Fractional revenue rights**: Properties (or bundled funds) offer shares that entitle holders to a portion of revenue distributions.
- **Investor dashboards**: Show mock APY, occupancy, and per‑period distributions with simple, deterministic time series.
- **Buy/Sell flow**: Simulated orders with slippage and fees update holdings, NAV, and distribution schedules.

### 2) DePIN simulation (supply, services, staking)

- **Stays marketplace**: Guests browse listings, see nightly price, fees, discounts from host staking, and real‑time availability.
- **Service marketplace**: Cleaners/handymen discover tasks, accept work, complete with proof, and build reputation.
- **Staking for hosts/providers**: Stake levels increase search ranking (hosts) and job priority/payout multipliers (providers).

### 3) Ops & economics (protocol levers)

- **Fee split**: By default: 90% host, 5% provider pool, 3% protocol fee, 2% reserve. Admin can change these splits.
- **Global recompute**: Changing splits immediately updates donuts, tables, and derived metrics across the app.
- **Feature flags & boosts**: Toggle early‑host incentives, guest vouchers, provider surges for demos.

## Roles & value proposition

### Guest

- **Browse → book → review** with transparent pricing and a fee split visualization.
- **Trust signals**: Host staking level, ratings, and service quality.

### Host

- **List & manage** properties, calendars, and pricing.
- **Earn payouts** split according to global policy; **stake** to boost ranking and projected revenue.

### Investor

- **Explore** funds/properties with APY and risk bands.
- **Buy/Sell** shares (mocked) to adjust positions; view distributions and PnL trajectories.

### Service Provider

- **Jobs board** with distance, time, payout, and difficulty filters.
- **Accept & complete** tasks with proof; stake to unlock priority and payout lifts.

### Admin

- **Tune levers** (fee splits, boosts, flags) and watch the system update in real time.

## Core user journeys (business flow)

### Guest: explore → book → review

- **Explore**: Map/list with filters (city, dates, price, occupancy, host staking, superhost).
- **Stay page**: Photos, amenities, host staking level, service quality score, and donut showing booking split.
- **Booking**: Select dates/guests and upsells; confirm total; mock pay → success screen with “smart‑lock code” placeholder.
- **Post‑stay review**: 1–5 stars across cleanliness, accuracy, check‑in, value; optional tip to provider pool.

### Host: list → manage → payouts

- **Listing wizard**: Basics → photos → pricing → availability → rules → payout method; shows expected yield by occupancy.
- **Calendar management**: Block/override dates and prices.
- **Payouts**: Table of bookings with computed splits; mock withdrawal.
- **Staking**: Slider to pick stake level; shows reach boost and projected revenue lift.

### Investor: explore → buy/sell → portfolio

- **Invest**: Grid of properties/funds with APY, volatility, TVL, coverage.
- **Fund detail**: NAV line and distributions area; buy/sell panel with slippage and fee estimate.
- **Portfolio**: Holdings, cumulative PnL, next distribution schedule, alerts.

### Service provider: jobs → complete → stake

- **Jobs board**: Filter by distance/time/payout; accept a job → countdown → complete with photo.
- **Staking**: Higher stake improves job priority and payout multipliers.
- **Reputation**: On‑time rate, complaint rate, average rating.

### Admin: levers → experiments

- **Fee split sliders**: Update host/providers/protocol/reserve shares; recompute app‑wide.
- **Boosts**: Early host incentive, guest voucher, provider surge; toggle on/off in demo.
- **Feature flags**: Show/hide modules to tailor the demo.

## Key features (what the demo must showcase)

- **Transparent pricing**: Line items and donut chart show where each booking dollar goes.
- **Deterministic yields**: Simple functions compute APY, NAV drift, and distributions for a stable demo.
- **Staking effects**: Host/provider staking visibly changes ranking, discounts, and payout multipliers.
- **Global controls**: Admin fee changes propagate immediately across UI and computed economics.
- **Local persistence**: State survives refresh to enable a continuous demo narrative.

## Screens & modules (non‑technical)

- **Explore**: Search, filters, ranking, listing cards with price/discounts/ratings.
- **Stay detail**: Gallery, amenities, split donut, instant book.
- **Booking modal**: Dates, guests, upsells, confirmation.
- **Invest**: Fund/property cards with sparkline and APY badge.
- **Fund detail**: NAV line, distributions area, buy/sell widget.
- **Portfolio**: Positions and next distributions.
- **Host dashboard**: Listings, bookings, payouts, staking.
- **Provider dashboard**: Jobs, staking, reputation.
- **Admin**: Fee split sliders, boosts, feature flags.

## Data & behavior (business rules)

- **Pricing**: Host stake applies a small discount to base nightly rate (0–3%).
- **Booking total**: Nights × nightly + cleaning fee.
- **Split**: Subtotal divided into host, providers, protocol, reserve; reserve is the remainder after rounding.
- **Yields**: APY increases with occupancy and average nightly rate, capped (e.g., 25%).
- **Trading**: Buy/sell adjusts portfolio positions and cost basis; simple slippage/fee can be simulated.
- **Jobs**: Accept/complete transitions update status and reputation signals.

## Acceptance criteria (demo readiness)

- **No runtime errors**; all main pages load with seed data.
- **Booking flow** updates payouts and charts deterministically.
- **Changing fee splits** updates all donuts/tables immediately.
- **Stake adjustments** change rankings, discounts, and provider priority.
- **Portfolio** shows non‑zero distributions after a simulated “month end”.

## KPIs (for demo impact)

- **Clarity**: Pricing transparency (donut + line items) understood in seconds.
- **Responsiveness**: Fee split slider changes reflected instantly in UI.
- **Incentives**: Viewers grasp how staking shifts ranking, payouts, and job priority.
- **Composability**: RWA income + DePIN services reinforced through flows.

## 2–3 minute demo script

1) Switch to **Guest** → explore a city → open a stay → pick dates → view split donut → book → success with code.
2) Switch to **Host** → increase stake → refresh explore; show rank/discount effect → check payouts updated.
3) Switch to **Investor** → buy shares in “asunción urban fund” → view portfolio and next distribution.
4) Switch to **Provider** → accept a cleaning job → complete with photo → reputation improves.
5) Switch to **Admin** → change fee splits → watch global recompute across charts and payout tables.

## Roadmap (post‑demo)

- **Seasonality scenarios**: Bull/Bear tourism toggles.
- **Offline mode** and sync on reconnect.
- **Printable itinerary & receipt** for guests.
- **Minimal PWA**: Install prompt and caching.
- **Chain integration**: Replace mocks with real APIs and on‑chain programs.

## Non‑goals (for this phase)

- Wallets, signatures, or payments.
- Production security, identity, or data privacy.
- Complex market microstructure or risk models.

## Risks & assumptions

- **Economics are simplified** for clarity; not production models.
- **Mock data** approximates behavior; numbers are deterministic and illustrative.
- **UI first**: The purpose is storytelling and incentive comprehension, not infrastructure completeness.

## Glossary

- **RWA**: Real‑World Asset; here, revenue rights from real properties.
- **DePIN**: Decentralized Physical Infrastructure Networks; here, human services (cleaning, maintenance) coordinated by incentives.
- **APY**: Annual Percentage Yield; simulated from occupancy and price.
- **Split**: The percentage allocation of booking revenue to stakeholders.

---

## Personas & Jobs‑to‑Be‑Done (JTBD)

- Guest (budget/quality seeker): “Find a trustworthy stay at a fair price with transparent fees.”
- Host (utilization maximizer): “Keep my calendar full at good rates and get paid reliably.”
- Investor (yield seeker): “Get diversified, predictable distributions with clear risk signals.”
- Service provider (gig pro): “See quality jobs first, complete quickly, build reputation, earn more.”
- Admin (protocol operator): “Align incentives and ensure markets stay healthy and fair.”

## User stories (business level)

- As a Guest, I can compare stays and see how staking discounts affect my nightly price.
- As a Host, I can raise my stake to move higher in search and see projected revenue lift.
- As an Investor, I can buy shares of a city fund and immediately see my positions update.
- As a Provider, I can accept a job, complete it with proof, and watch my reputation improve.
- As an Admin, I can change fee splits and watch payouts/charts recompute everywhere.

## Economic levers & example scenarios

- Fee splits (default 90/5/3/2): Move protocol fee from 3% → 5% to showcase treasury growth vs host payout trade‑off.
- Host staking: Level 0 → 3 increases ranking and small guest discount (0–3%).
- Provider staking: Level 0 → 3 boosts job priority and payout multiplier.
- Occupancy shock: Demonstrate how lower occupancy reduces APY and distributions in investor views.

## Persistence & reset behavior

- All mock state persists locally (e.g., localStorage) so the demo survives refresh.
- Provide a reset option (manual: clear site data) to return to seed state between demos.

## Accessibility & localization (demo posture)

- Use clear labels, high‑contrast defaults, and concise copy for charts and sliders.
- Primary language: English; Spanish/Portuguese copy optional later.

## Measurement & KPIs (demo)

- Time‑to‑comprehension: Can a judge explain fee splits within 10 seconds of seeing the donut?
- Interaction rate: Percentage of sessions that use the Admin sliders and see changes propagate.
- Outcome confidence: Post‑demo survey on understanding of incentive alignment across roles.

## Competitive context (high‑level)

- Traditional platforms: Centralized fees, opaque payout logic, limited service‑side incentives.
- stayfi differentiator: Transparent economics, role‑based staking signals, and modular revenue sharing.

## FAQs

- Is this on‑chain? No. This is a front‑end simulation to validate UX and economics.
- Will fees or APY match production? No. Numbers are deterministic placeholders for demonstration.
- Can I connect a wallet? Not in this phase. A later milestone replaces mocks with real APIs and programs.

## Demo runbook (60–120 seconds)

1) Guest: Filter to a city → open stay → donut explains splits → book.
2) Host: Increase stake → show rank/discount change → check payouts.
3) Investor: Buy 100 units in city fund → portfolio updates → point to distributions.
4) Provider: Accept and complete a job → reputation ticks up.
5) Admin: Slide protocol fee → donuts/tables update globally.

## Appendix: Seed data overview (mock)

- Stays: ≥12 across multiple LATAM cities.
- Funds: ≥3 with NAV/distribution history.
- Jobs: ≥20 open tasks; providers can accept/complete.
- Users: ≥5 spanning all roles.

## Business acceptance checklist

- Pricing transparency evident (line items + donut).
- Fee split changes reflected in all relevant charts/tables within a second.
- Staking visibly alters rankings and provider job priority.
- Portfolio shows distributions after simulated month‑end action.

## Next‑phase scope (non‑demo)

- Real APIs and Solana programs replacing MSW mocks.
- Wallet flows and payouts; permissioned admin operations.
- Deeper risk/seasonality modeling and provider surge pricing.

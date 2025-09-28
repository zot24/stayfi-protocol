## StayFi – The Ownership Layer for Global Hospitality (Front-End Mock)

**Version 2.0 | September 2025**

### Purpose

- **Goal**: Present a demo‑ready, front‑end simulation of StayFi - a decentralized protocol that enables fractional ownership of vacation rentals through blockchain technology, combining Real World Asset (RWA) tokenization with a Decentralized Physical Infrastructure Network (DePIN) and a viral TRIP rewards system.
- **Outcome**: Demonstrate the three-token ecosystem (STAY governance, Property ownership, TRIP rewards), show how all participants interact, visualize transparent fee economics, and showcase the viral growth mechanics that turn guests into investors.
- **Out of scope**: Any on‑chain logic, Solana programs, wallet integration, or production security. Everything is mocked with deterministic data for a polished demo experience.

### Target Audience

- **VCs & Investors**: See the viral growth engine and unit economics in action
- **Property Owners**: Experience tokenization benefits and instant liquidity
- **Retail Investors**: Explore $100 fractional ownership opportunities
- **Service Providers**: Understand instant payment and reputation systems
- **Guests**: Discover the "Book Stays, Earn Ownership" value proposition
- **Hackathon judges & partners**: Experience the full product vision without blockchain complexity

## Product pillars

### 1) RWA tokenization (investor economics)

- **Fractional ownership from $100**: Each property tokenized into 2,000 tokens at $100 each
- **Daily yield distribution**: 80% of rental revenue distributed to token holders automatically
- **Instant liquidity**: Trade property tokens 24/7 on simulated DEX with 0.3% fees
- **Target returns**: 10-15% APY from rental income + potential appreciation
- **Investor dashboards**: Real-time portfolio value, yield tracking, and distribution schedules

### 2) DePIN network (decentralized services)

- **Service provider network**: Cleaners, property managers, maintenance workers
- **Instant USDC payments**: No 30-60 day wait like traditional platforms
- **Stake-weighted assignment**: 500 STAY minimum stake for providers
- **Reputation scoring**: On-chain ratings affect job priority and earnings
- **Task marketplace**: Location-based job discovery with transparent payouts
- **Proof of completion**: Photo uploads and guest verification for quality

### 3) TRIP rewards engine (viral growth)

- **Earn TRIP tokens**: Book (10 TRIP/$100), review (50 TRIP), photos (25 TRIP), refer (100 TRIP)
- **Conversion options**: 1000 TRIP → 1 STAY, 5000 TRIP → $100 property token
- **Loyalty tiers**: Bronze/Silver/Gold/Platinum with multipliers up to 2x
- **Viral coefficient 1.4x**: Each user brings 1.4 new users through gamification
- **Psychological triggers**: Progress bars, leaderboards, achievements, streaks
- **10x higher LTV**: Guests become investors, creating evangelists

## Token Economics Overview

### Three-Token Ecosystem

- **STAY (1B fixed supply)**: Governance, staking, protocol value accrual
- **Property Tokens**: Fractional ownership of specific properties, earn rental yield
- **TRIP (unlimited)**: Loyalty rewards convertible to ownership

### Key Economic Metrics

- **Platform fee**: 5% (vs Airbnb's 15%)
- **Minimum investment**: $100 (vs $100K traditional)
- **Transaction cost**: $0.00025 (Solana advantage)
- **State compression**: 1000x cost reduction ($0.002 vs $2 per NFT)
- **Viral coefficient**: 1.4x (each user brings 1.4 new users)
- **LTV/CAC ratio**: 200-400x (vs 4-8x traditional)

### Growth Targets

- **Year 1**: 50 properties, $1.5M GMV, $105K revenue
- **Year 2**: 200 properties, $6M GMV, $420K revenue
- **Year 3**: 1,000 properties, $30M GMV, $2.1M revenue, break-even
- **Year 5**: 10,000 properties, $500M GMV, profitable

## Roles & value proposition

### Guest

- **10% cheaper than Airbnb**: Only 5% platform fee vs 15%
- **Earn TRIP on every action**: Booking, reviewing, sharing photos
- **Convert to ownership**: Stay 10 nights, own a piece forever
- **Transparent pricing**: Visual donut chart shows exact fee distribution
- **Trust signals**: Host staking level, service provider ratings, verified reviews

### Host

- **Tokenize property**: Get 30% value upfront, keep 70% future revenue
- **Instant liquidity**: No need to sell entire property
- **Automated management**: StayFi handles bookings and services
- **Stake STAY for benefits**: Higher search ranking, small guest discounts (0-3%)
- **Direct payouts**: 80% of revenue, no middleman fees

### Investor

- **Start from $100**: Own pieces of global vacation rentals
- **Daily distributions**: Automatic revenue share from bookings
- **10-15% target APY**: From rental yield + appreciation
- **Instant liquidity**: Trade tokens 24/7 on DEX
- **Diversification**: Invest across multiple properties/cities
- **Real-time analytics**: Occupancy rates, revenue trends, NAV tracking

### Service Provider

- **Instant payment**: Get paid in USDC immediately after task completion
- **No platform commission**: Keep 100% of earnings + tips
- **Portable reputation**: On-chain ratings follow you
- **Stake 500 STAY minimum**: Access to task marketplace
- **Earn TRIP rewards**: 20 TRIP per task, bonuses for excellence
- **Location-based matching**: Tasks within your service radius

### Admin

- **Protocol governance**: Adjust fee splits (default 80/15/5)
- **Real-time updates**: Changes propagate instantly across all UI
- **Treasury management**: STAY buybacks and liquidity provision
- **Feature toggles**: Demo different scenarios and incentives
- **Analytics dashboard**: Network growth, revenue, token metrics

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
- **Three-token system**: STAY governance, Property ownership tokens, TRIP rewards in action
- **Viral mechanics**: See TRIP earnings, conversion options, tier progression
- **Instant liquidity**: Mock DEX trading for property tokens with real-time pricing
- **Service coordination**: Task assignment algorithm, instant payments, reputation
- **Staking effects**: Host/provider staking visibly changes ranking, discounts, and payout multipliers.
- **Global controls**: Admin fee changes propagate immediately across UI and computed economics.
- **Local persistence**: State survives refresh to enable a continuous demo narrative.

## Technology Advantages (Simulated)

- **Solana benefits**: Sub-cent transactions, 0.4s confirmations, 65K TPS capacity
- **State compression**: Shows 1000x cost savings on property NFTs
- **Native USDC**: No bridging required for payments
- **Compressed NFTs**: Each property stored for $0.002 instead of $2
- **Merkle trees**: Visualize how millions of properties scale affordably

## Property Lifecycle (What Demo Shows)

**Week 0: Discovery**

- Scout submits property (stakes 100 STAY)
- Community interest gauge via voting

**Week 1-2: Structuring**

- Token economics modeling
- Marketing material preparation

**Week 3-4: Funding**

- Token sale opens ($100 minimum)
- 30% sold = funding confirmed
- Liquidity pool initialization

**Week 5+: Operations**

- Live on booking platforms
- Daily revenue distribution
- Service provider coordination

## Screens & modules (non‑technical)

- **Homepage**: Hero with "Join Waitlist" CTA, network metrics, role benefits
- **Documentation**: /docs hub with litepaper, tokenomics, diagrams
- **Explore**: Search, filters, ranking, listing cards with price/discounts/ratings
- **Stay detail**: Gallery, amenities, split donut, instant book, earn TRIP
- **Booking modal**: Dates, guests, upsells, TRIP rewards preview
- **Invest**: Property cards with yield, location, tokenization status
- **Property detail**: Tokenomics, buy/sell widget, liquidity chart
- **Portfolio**: Holdings, distributions, TRIP balance, tier status
- **Host dashboard**: Tokenization wizard, revenue tracking, staking
- **Provider dashboard**: Jobs board, instant payments, reputation score
- **Admin**: Fee split controls, treasury stats, network growth metrics

## Data & behavior (business rules)

- **Pricing**: Host stake applies a small discount to base nightly rate (0–3%).
- **Booking total**: Nights × nightly + cleaning fee.
- **Fee Split**: $100 booking → $80 hosts, $15 service providers, $5 protocol
- **Property Yields**: Base 12% cap rate × platform efficiency (1.15x) × occupancy boost (1.1x)
- **TRIP Emissions**: 100K/month base, growing 10% annually, distributed 40/20/20/20
- **Staking Economics**: 8% base APY, up to 16% with 12-month lock
- **Trading**: Constant product AMM (x*y=k) with 0.3% LP fees
- **Service Matching**: Algorithm considers distance, reputation, stake weight, response time

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
3) Switch to **Investor** → buy shares in a city property fund → view portfolio and next distribution.
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
- **APY**: Annual Percentage Yield; 10-15% target from rental income
- **Split**: Revenue allocation: 80% token holders, 15% services, 5% protocol
- **TRIP**: Loyalty tokens earned through participation, convertible to ownership
- **STAY**: Governance token with fixed 1B supply, used for staking and voting
- **TVL**: Total Value Locked; sum of all property values + liquidity pools
- **GMV**: Gross Merchandise Value; total booking volume processed
- **Compressed NFTs**: Solana tech reducing storage costs by 1000x ($0.002 vs $2)

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
- StayFi differentiator: Transparent economics, role‑based staking signals, and modular revenue sharing.

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

- Solana program integration (compressed NFTs, SPL tokens)
- Wallet connection (Phantom, Solflare)
- Real oracle feeds (Chainlink/Pyth for valuations)
- Cross-chain bridges for multi-chain liquidity
- KYC/AML for investments >$10K
- Progressive decentralization to full DAO governance
- Mobile app with booking and portfolio management

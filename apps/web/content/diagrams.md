# StayFI Technical Architecture Diagrams

## 1. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACES                          │
├─────────────┬─────────────┬─────────────┬─────────────┬────────┤
│   Web App   │  Mobile App │  Admin Panel│ Service App │  APIs  │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴────┬───┘
       │             │              │              │           │
┌──────▼─────────────▼──────────────▼──────────────▼───────────▼───┐
│                      APPLICATION SERVICES                         │
├────────────────┬───────────────┬────────────────┬────────────────┤
│ Booking Engine │ Property Mgmt │ Service Coord  │ Analytics      │
├────────────────┼───────────────┼────────────────┼────────────────┤
│ User Auth      │ Tokenization  │ Task Assignment│ Reporting      │
├────────────────┼───────────────┼────────────────┼────────────────┤
│ Payment Gateway│ Yield Calc    │ Reputation     │ ML Pricing     │
└────────┬───────┴───────┬───────┴────────┬───────┴───────┬────────┘
         │               │                 │               │
┌────────▼───────────────▼─────────────────▼───────────────▼────────┐
│                    BLOCKCHAIN LAYER (SOLANA)                       │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│  │PropertyReg.rs│ │BookingEng.rs │ │ServiceNet.rs │ │Rewards.rs│ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘ │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│  │ Compressed   │ │   Escrow     │ │  Reputation  │ │   TRIP   │ │
│  │    NFTs      │ │   System     │ │    PDAs      │ │  Minting │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────────┐
│                         DATA & STORAGE                              │
├──────────────┬──────────────┬──────────────┬──────────────────────┤
│  Shadow Drive│   Arweave    │   PostgreSQL │    Redis Cache       │
│  (Media)     │  (Documents) │   (Metadata) │    (Sessions)        │
└──────────────┴──────────────┴──────────────┴──────────────────────┘
```

## 2. Token Flow Architecture

```
                    STAY Token Ecosystem
    ┌──────────────────────────────────────────────────┐
    │                 STAY TREASURY                    │
    │                  (170M STAY)                     │
    └────────┬───────────────────────┬─────────────────┘
             │                       │
         Buyback                  Rewards
             │                       │
    ┌────────▼────────┐     ┌───────▼────────┐
    │   DEX Pools     │     │ Mining Rewards  │
    │  STAY/USDC      │     │   (400M STAY)   │
    │  STAY/SOL       │     └───────┬─────────┘
    └────────┬────────┘             │
             │                      │
          Trading              Distribution
             │                      │
    ┌────────▼────────────────────▼─────────┐
    │            USER WALLETS                │
    │  ┌─────────┬──────────┬──────────┐   │
    │  │Investors│  Hosts   │ Service  │   │
    │  │         │          │ Providers│   │
    │  └─────────┴──────────┴──────────┘   │
    └────────────────────────────────────────┘

              Property Token Lifecycle
    ┌────────────────────────────────────────┐
    │         PROPERTY ($200K)               │
    └──────────────┬─────────────────────────┘
                   │
            Tokenization
                   │
    ┌──────────────▼─────────────────────────┐
    │     2000 PROPERTY TOKENS @ $100        │
    ├─────────────┬──────────────────────────┤
    │ 1800 Tokens │  200 Tokens              │
    │   (Sale)    │  (Liquidity)             │
    └──────┬──────┴────────┬─────────────────┘
           │               │
    ┌──────▼──────┐ ┌─────▼──────┐
    │  Investors  │ │  DEX Pool  │
    │             │ │ PROP/USDC  │
    └──────┬──────┘ └────────────┘
           │
    Daily Revenue
           │
    ┌──────▼──────────────────────┐
    │   Automatic Distribution     │
    │   80% → Token Holders        │
    │   15% → Service Providers    │
    │    5% → Protocol              │
    └──────────────────────────────┘

                TRIP Token Flow
    ┌─────────────────────────────────────────┐
    │            USER ACTIONS                 │
    ├──────┬──────┬──────┬──────┬───────────┤
    │ Book │Review│ Photo│Refer │  Service  │
    └──┬───┴───┬──┴───┬──┴───┬──┴──────┬────┘
       │       │      │      │         │
       ▼       ▼      ▼      ▼         ▼
    ┌─────────────────────────────────────────┐
    │          TRIP REWARDS POOL              │
    │            (Soulbound)                  │
    └────────────────┬─────────────────────────┘
                     │
              After 90 days
                     │
    ┌────────────────▼─────────────────────────┐
    │         CONVERSION OPTIONS               │
    ├──────────────────────────────────────────┤
    │  1000 TRIP → 1 STAY                     │
    │  5000 TRIP → $100 Property Token        │
    │   500 TRIP → Reduced Fees               │
    └──────────────────────────────────────────┘
```

## 3. State Compression Architecture

```
Traditional NFT Storage (Expensive)
┌─────────────────────────────────────┐
│         On-Chain Account            │
│  ┌─────────────────────────────┐   │
│  │ Property NFT #1 - 2KB       │   │──→ Cost: $2.00
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ Property NFT #2 - 2KB       │   │──→ Cost: $2.00
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ Property NFT #3 - 2KB       │   │──→ Cost: $2.00
│  └─────────────────────────────┘   │
│            ...1000 NFTs             │
│                                     │
│  Total Cost: $2,000                 │
└─────────────────────────────────────┘

Compressed NFT Storage (StayFI)
┌─────────────────────────────────────┐
│      On-Chain (Merkle Root)         │
│  ┌─────────────────────────────┐   │
│  │  Root Hash - 32 bytes       │   │──→ Cost: $0.10
│  └──────────────┬──────────────┘   │
└─────────────────┼───────────────────┘
                  │
    Merkle Tree Structure
                  │
        ┌─────────┴─────────┐
        │                   │
    Branch 1            Branch 2
        │                   │
    ┌───┴───┐          ┌───┴───┐
    │       │          │       │
  Leaf1   Leaf2      Leaf3   Leaf4
    │       │          │       │
  NFT#1   NFT#2      NFT#3   NFT#4

┌─────────────────────────────────────┐
│       Off-Chain (RPC Provider)      │
│  ┌─────────────────────────────┐   │
│  │ Full NFT Data & Proofs      │   │──→ Cost: $0.002/NFT
│  │ • Property Details          │   │
│  │ • Images                    │   │
│  │ • Merkle Proofs            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Total Cost: $2 (1000x cheaper)    │
└─────────────────────────────────────┘
```

## 4. Service Coordination Flow

```
Guest Books Property
         │
         ▼
┌─────────────────┐
│ Booking Created │
│   (Smart Contract)
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│        Event Emitted & Indexed          │
│  • Check-in date/time                   │
│  • Property location                    │
│  • Service requirements                 │
└────────┬────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│     Service Task Assignment Algorithm    │
├──────────────────────────────────────────┤
│  1. Query available providers (10km)     │
│  2. Calculate reputation scores         │
│  3. Apply stake weighting               │
│  4. Consider response time history      │
│  5. Select optimal provider             │
└────────┬─────────────────────────────────┘
         │
    ┌────┴────┬──────┬──────┐
    ▼         ▼      ▼      ▼
Cleaner   Manager  Maint.  Check-in
  │         │        │       │
  ▼         ▼        ▼       ▼
┌──────────────────────────────┐
│   Task Acceptance (1-click)   │
│   • View requirements         │
│   • See payout amount         │
│   • Accept/Decline           │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│     Task Completion          │
│   • Upload photos            │
│   • Guest verification       │
│   • Quality check            │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│    Instant Payment (USDC)    │
│   • Base payment             │
│   • TRIP rewards             │
│   • Tips (100% to provider) │
└──────────────────────────────┘
```

## 5. User Journey Flows

```
INVESTOR JOURNEY
Start → Browse Properties → Select Property → View Analytics
  │                              │                 │
  │                              ▼                 ▼
  │                     Check Tokenomics    Historical Yields
  │                              │                 │
  │                              ▼                 │
  └────→ Connect Wallet → Buy Tokens ←────────────┘
                │
                ▼
         Hold & Earn Daily
                │
         ┌──────┴──────┬────────┬────────┐
         ▼             ▼        ▼        ▼
    Trade on DEX  Stake STAY  Vote   Add Liquidity

GUEST JOURNEY
Search → Browse → Book → Stay → Review → Earn TRIP
   │        │       │      │       │          │
   │        │       │      │       │          ▼
   │        │       │      │       │    Convert to STAY
   │        │       │      │       │          │
   │        │       │      │       ▼          ▼
   │        │       │      │   Share Photos  Buy Property
   │        │       │      │   (+25 TRIP)    Tokens
   │        │       │      │
   │        │       │      ▼
   │        │       │   Check-in
   │        │       │   (Digital Key)
   │        │       │
   │        │       ▼
   │        │   Pay with USDC/Card
   │        │   (Earn 10 TRIP/$100)
   │        │
   │        ▼
   │   Compare Prices
   │   (10% < Airbnb)
   │
   ▼
Filter by:
• Location
• Price  
• Rating
• Tier Access

SERVICE PROVIDER JOURNEY
Apply → Stake 500 STAY → Training → Active
  │           │            │          │
  │           ▼            ▼          ▼
  │      Slashable    Certification  Receive Tasks
  │      Deposit      (+100 TRIP)         │
  │                                        ▼
  └──────────────────────→ Complete → Get Paid
                               │          │
                               ▼          ▼
                          Upload Proof  Instant USDC
                          (+10 TRIP)   + TRIP Rewards
```

## Visual Design Instructions for Designer

### Color Palette

- Primary: #6B46C1 (Purple - Solana)
- Secondary: #00D4FF (Cyan - Tech)
- Success: #00FF87 (Green - Money)
- Warning: #FFB800 (Orange - Alerts)
- Background: #0A0E27 (Dark Blue)

### Diagram Style

1. Use rounded corners for user-facing elements
2. Sharp corners for smart contracts
3. Dotted lines for optional flows
4. Solid lines for required flows
5. Gradient fills for token elements
6. Icons for each user type

### Key Visual Elements to Include

- Animated token flows showing movement
- Heat maps for property locations
- Dashboard mockups with real data
- Before/after cost comparisons
- Network growth visualization
- Mobile app screenshots

### Infographic Ideas

1. "Traditional vs StayFI" side-by-side
2. "$100 to Property Owner" journey map
3. "Day in the Life" of each user type
4. Token velocity circular diagram
5. Global expansion heat map

# StayFi – The Ownership Layer for Global Hospitality

**Book Stays, Earn Ownership** 🏠 ✈️ 💰

[![Version](https://img.shields.io/badge/Version-2.0-blue)](https://github.com/stayfi-protocol)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![Solana](https://img.shields.io/badge/Solana-Ready-purple)](https://solana.com)

## Overview

StayFi revolutionizes hospitality by enabling fractional ownership of vacation rentals through blockchain technology. This front-end prototype demonstrates our three-token ecosystem (STAY governance, Property ownership, TRIP rewards) that turns guests into investors.

### 🚀 Core Innovation

- **10x Better Economics**: 5% platform fee vs 15% industry standard
- **1000x Lower Costs**: State compression on Solana enables micro-transactions
- **100x More Accessible**: $100 minimum vs $100K+ traditional real estate
- **Instant Liquidity**: Trade property tokens 24/7 on DEXs
- **Viral Growth Engine**: TRIP loyalty tokens create participant → owner funnel

### 📚 Documentation

- **[Documentation Hub](/docs)** - Complete protocol documentation
  - [Executive Summary](/docs/summary) - One-page overview
  - [Technical Litepaper](/docs/litepaper) - Full protocol details
  - [Tokenomics Deep Dive](/docs/tokenomics) - Economic models
  - [Architecture Diagrams](/docs/diagrams) - Visual system design
  - [Who is this for?](/docs/who-is-this-for) - Audience-specific pitches

## 🛠️ Getting Started

### Quick Start

```bash
# Install dependencies
make install

# Run development server
make dev

# Run with Docker
make docker-up

# Build for production
make build
```

Open <http://localhost:3000>

### Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Recharts for data viz
- **State Management**: Zustand for global state, React Query for server state
- **Mocking**: MSW (Mock Service Worker) for API simulation
- **Deployment**: Optimized for Vercel, Docker support included

### Key Features

#### For Guests

- `/explore` – Browse properties with transparent pricing
- `/stay/[id]` – Book stays and see fee breakdowns
- Earn TRIP tokens on every action

#### For Investors

- `/invest` – Discover tokenized properties
- `/invest/[id]` – Buy property tokens from $100
- `/investor/portfolio` – Track yields and distributions

#### For Hosts

- `/host/listings/new` – Tokenize your property
- `/host/payouts` – View revenue distributions
- `/host/staking` – Stake STAY for benefits

#### For Service Providers

- `/services` – Find cleaning/maintenance jobs
- `/provider/jobs` – Manage tasks and earnings
- `/provider/reputation` – Build on-chain reputation

#### For Admins

- `/admin` – Adjust protocol parameters
- Real-time fee split visualization
- Network growth analytics

## 🔧 Configuration

### Environment Variables

Create `apps/web/.env.local`:

```bash
# Email Configuration (Resend)
RESEND_API_KEY=re_123456789
RESEND_FROM=StayFi <noreply@stayfi.xyz>
WAITLIST_FORWARD_TO=info@stayfi.xyz

# Future Integration (not used in mock)
# NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
# NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
```

### Join the Waitlist

- **Prominent CTA** on homepage and throughout the app
- **Modal signup** with email validation
- **Privacy-focused**: We only send launch updates, no spam
- **Instant notification** to our team via Resend

## 🐳 Docker Support

```bash
# Development with hot reload
make docker-dev

# Production build
make docker-build

# Run production image
make docker-up

# Rebuild after changes
make docker-rebuild
```

The Dockerfile is optimized for Next.js standalone output with multi-stage builds for minimal image size.

## 🎯 Quick Demo Script (2-3 minutes)

### Act 1: Guest Journey (30s)

1. Browse properties in any city
2. See 10% price advantage vs Airbnb
3. Book a stay and earn TRIP tokens
4. View transparent fee split visualization

### Act 2: Investment Flow (45s)

1. Discover tokenized properties
2. Buy property tokens for $100
3. See real-time yield projections (10-15% APY)
4. Check portfolio for daily distributions

### Act 3: Service Provider (30s)

1. Accept cleaning job from board
2. Complete with photo proof
3. Receive instant USDC payment
4. Build portable reputation

### Act 4: Viral Mechanics (30s)

1. Show TRIP earnings from booking
2. Demonstrate tier progression
3. Convert TRIP → Property ownership
4. Watch LTV multiply as guests become investors

### Act 5: Protocol Control (15s)

1. Admin adjusts fee split
2. All UI updates instantly
3. Demonstrate aligned incentives

## 🚀 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Import to Vercel
3. Add environment variables
4. Deploy (automatic on push)

### Alternative Options

- **Cloudflare Pages**: Using `@cloudflare/next-on-pages`
- **Docker**: Production-ready Dockerfile included
- **Traditional hosting**: `next build && next start`

## 🤝 Contributing

We welcome contributions that enhance the demo experience:

- **UI/UX improvements**: Better visualizations, animations
- **Documentation**: Clarify complex concepts
- **Testing**: Increase coverage, add E2E tests
- **Features**: New demo scenarios that showcase the protocol

For protocol design discussions, please open a GitHub Discussion first.

## 🔒 Security & Disclaimer

**⚠️ This is a demonstration prototype only**

- No real blockchain integration
- No actual payments processed
- No real assets or tokens
- All data is mocked and deterministic
- Not audited for production use

For the real protocol (coming 2026), we will:

- Complete multiple security audits
- Implement proper KYC/AML
- Obtain necessary licenses
- Use battle-tested smart contracts

## 📈 Roadmap

### Current (Demo Phase)

- ✅ Front-end prototype
- ✅ Three-token economics model
- ✅ Mock data and interactions
- ✅ Documentation suite

### Q1 2026 (Beta Launch)

- [ ] Solana program development
- [ ] First 10 properties tokenized
- [ ] Wallet integration
- [ ] Real booking engine

### Q2 2026 (Public Launch)

- [ ] STAY token TGE
- [ ] 50 properties across LATAM
- [ ] Mobile app
- [ ] DEX listings

### 2027 (Scale)

- [ ] 1,000+ properties
- [ ] Cross-chain expansion
- [ ] Traditional finance bridges
- [ ] Global operations

## 💬 Community

- **Website**: <https://stayfi.xyz>
- **Documentation**: <https://stayfi.xyz/docs>
- **Telegram**: [@stayfidao](https://t.me/stayfidao)
- **X (Twitter)**: [@stayfidao](https://x.com/stayfidao)
- **Email**: <info@stayfi.xyz>

---

*Built with ❤️ for the future of decentralized hospitality*

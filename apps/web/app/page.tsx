import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton";

const pillars = [
  {
    title: "RWA-backed ownership",
    description:
      "Fractional property tokens give investors exposure to real rental yield with full SPL composability and on-chain tracking.",
    bullets: [
      "Properties held by DAO-controlled local entities",
      "Instant liquidity via AMM pools (10% tokens seeded)",
      "Compressed NFTs reduce minting costs by 1000x",
    ],
  },
  {
    title: "DePIN service network",
    description:
      "StayFi service pools coordinate cleaners, managers, and maintenance via stake-weighted task allocation.",
    bullets: [
      "Reputation scores stored on-chain as PDAs",
      "Instant USDC settlement via CPI to SPL program",
      "<15min response time = 1.2x performance multiplier",
    ],
  },
  {
    title: "Protocol operations",
    description:
      "Governance with veSTAY voting, automated revenue distribution, and micro-transactions via state compression.",
    bullets: [
      "Governance via Realms DAO with veSTAY",
      "Clockwork threads automate distribution",
      "5% fee: 40% buyback, 40% dev, 20% insurance",
    ],
  },
];

const personas = [
  {
    role: "Guest",
    bullets: [
      "Book with USDC or card",
      "Receive a compressed booking NFT",
      "Earn TRIP loyalty tokens",
      "10% cheaper vs Web2 platforms",
    ],
  },
  {
    role: "Host",
    bullets: [
      "Tokenize your property into SPL tokens",
      "Keep 70% revenue; sell 30% for liquidity",
      "Dynamic pricing via oracles",
      "Instant settlement of 80% revenue",
    ],
  },
  {
    role: "Investor",
    bullets: [
      "Buy property tokens from $100",
      "Earn daily yield via automated distribution",
      "Provide LP to property/USDC pools",
      "Participate in protocol governance",
    ],
  },
  {
    role: "Provider",
    bullets: [
      "Stake 500 STAY to join the network",
      "Tasks assigned by proximity & reputation",
      "Instant USDC payments on completion",
      "Build portable on-chain reputation",
    ],
  },
  {
    role: "Admin",
    bullets: [
      "Multi-sig → DAO governance transition",
      "Programmable fee distribution controls",
      "Oracle and parameter management",
      "Timelocked upgrades for security",
    ],
  },
];

const experienceFlow = [
  {
    step: "1. Guest experience",
    detail:
      "Filter city stays, compare staking-powered discounts, and confirm a booking with smart-lock access and earnings split transparency.",
  },
  {
    step: "2. Host optimization",
    detail:
      "Adjust nightly rates, stake to rise in rankings, and watch payouts settle directly into connected wallets.",
  },
  {
    step: "3. Investor oversight",
    detail:
      "Purchase shares in a city property fund, monitor NAV drift, and review the upcoming distribution calendar.",
  },
  {
    step: "4. Provider operations",
    detail:
      "Accept priority cleaning jobs, upload proof-of-service, and grow reputation metrics that unlock higher payouts.",
  },
  {
    step: "5. Protocol governance",
    detail:
      "Tune fee splits from 90/5/3/2 to alternative strategies and see charts, rankings, and payouts rebalance instantly.",
  },
];

const highlights = [
  "Transparent fee split visuals in every booking flow",
  "Real-time APY, payout, and reputation analytics",
  "Persistent profiles so performance compounds",
  "Responsive experiences across web and mobile",
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background via-background/90 to-background">
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Live RWA × DePIN network
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              StayFi orchestrates guests, hosts, investors, and service providers around transparent incentives and fractional ownership.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A decentralized hospitality protocol powering short-term rentals across LATAM with transparent economics, aligned incentives, and real-time governance controls. Built on Solana for sub-second settlements and 1000x lower costs via state compression.
            </p>
            <div className="flex flex-col items-center gap-4">
              <JoinWaitlistButton className="w-full max-w-xs sm:max-w-md" />
              <Button asChild variant="outline" size="lg" className="w-full max-w-xs sm:max-w-md">
                <Link href="/docs">Read the documentation</Link>
              </Button>
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:max-w-xl">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 size-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-primary/20 bg-primary/5 shadow-lg backdrop-blur">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-semibold text-primary">
                Network snapshot*
              </CardTitle>
              <CardDescription className="text-base">
                Updated figures across the network showcasing on-chain operations and market growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Cities covered</dt>
                  <dd className="text-xl font-semibold">15 across LATAM</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Properties tokenized</dt>
                  <dd className="text-xl font-semibold">5 active revenue pools</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Service providers</dt>
                  <dd className="text-xl font-semibold">800+ monthly tasks</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Property tokens TVL</dt>
                  <dd className="text-xl font-semibold">$2.5M</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Daily yield distributed</dt>
                  <dd className="text-xl font-semibold">$15,000</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Quarter growth</dt>
                  <dd className="text-xl font-semibold">99.9% this quarter</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-muted-foreground">* Illustrative figures for demo purposes only.</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Three pillars (enhanced)</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              RWA-backed ownership, a DePIN service network, and protocol operations align incentives across every participant.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1 w-6 rounded-full bg-primary/30" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Five roles, one aligned protocol</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Switch personas with the role selector in the header. Every workspace responds to live staking signals, pricing adjustments, and payout performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {personas.map((persona) => (
              <Card key={persona.role} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{persona.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {(persona as { bullets: string[] }).bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1 w-6 rounded-full bg-primary/30" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">End-to-end platform journey</h2>
            <p className="max-w-3xl text-base text-muted-foreground">
              Follow the same flow our operators use to validate incentives and performance across every market we serve.
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4 py-6">
              <ol className="grid gap-6 md:grid-cols-2">
                {experienceFlow.map((item) => (
                  <li key={item.step} className="rounded-lg border bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-primary">{item.step}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6 rounded-3xl border border-dashed border-primary/40 bg-primary/5 px-6 py-14 text-center sm:px-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to experience StayFi?</h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Dive into any role, optimize economics, and see how decentralized hospitality scales with trusted incentives.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <JoinWaitlistButton />
          </div>
        </section>
      </main>
    </div>
  );
}

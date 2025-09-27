import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pillars = [
  {
    title: "RWA-backed ownership",
    description:
      "Fractional revenue rights give investors exposure to short-term rental income with live APY, occupancy, and distribution tracking.",
    bullets: [
      "City and property funds with performance bands",
      "Instant buy/sell execution with fee transparency",
      "Portfolio view with upcoming distribution schedule",
    ],
  },
  {
    title: "DePIN service network",
    description:
      "Stays, service jobs, and staking incentives keep supply, maintenance, and guest satisfaction aligned across every market.",
    bullets: [
      "Guest pricing reflects host staking discounts",
      "Providers accept, verify, and grow reputation",
      "Hosts monitor ranking impact from active stakes",
    ],
  },
  {
    title: "Protocol operations",
    description:
      "Governance tools let operators tune fee splits, incentives, and feature flags while the platform updates in real time.",
    bullets: [
      "Global fee split controls with instant recompute",
      "Targeted boosts for new hosts and providers",
      "Persistent settings for consistent market health",
    ],
  },
];

const personas = [
  {
    role: "Guest",
    copy:
      "Browse curated stays, apply transparent pricing filters, and confirm bookings with the economics laid out before checkout.",
    link: "/explore",
    linkLabel: "Discover stays",
  },
  {
    role: "Host",
    copy:
      "Manage listings, calendars, and payouts while staking to boost search ranking and earn higher occupancy.",
    link: "/host",
    linkLabel: "Open host hub",
  },
  {
    role: "Investor",
    copy:
      "Evaluate city funds, execute fractional trades, and monitor distributions inside a unified portfolio dashboard.",
    link: "/invest",
    linkLabel: "View funds",
  },
  {
    role: "Provider",
    copy:
      "See verified jobs nearby, complete tasks with proof, and stake to climb priority queues and payout multipliers.",
    link: "/provider",
    linkLabel: "Check jobs",
  },
  {
    role: "Admin",
    copy:
      "Tune fee splits, incentives, and product flags to keep every marketplace participant aligned.",
    link: "/admin",
    linkLabel: "Manage protocol",
  },
];

const experienceFlow = [
  {
    step: "1. Guest experience",
    detail:
      "Filter Asunción stays, compare staking-powered discounts, and confirm a booking with smart-lock access and earnings split transparency.",
  },
  {
    step: "2. Host optimization",
    detail:
      "Adjust nightly rates, stake to rise in rankings, and watch payouts settle directly into connected wallets.",
  },
  {
    step: "3. Investor oversight",
    detail:
      "Purchase shares in the Asunción Urban Fund, monitor NAV drift, and review the upcoming distribution calendar.",
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
              stayfi orchestrates guests, hosts, investors, and providers around transparent incentives.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A decentralized hospitality protocol powering short-term rentals across LATAM with transparent economics, aligned incentives, and real-time governance controls.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/explore">Explore stays</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn about stayfi</Link>
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
                Network snapshot
              </CardTitle>
              <CardDescription className="text-base">
                Stayfi is live across the region with unified economics and operational tooling for every participant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Cities served</dt>
                  <dd className="text-xl font-semibold">15 across LATAM</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Investor funds</dt>
                  <dd className="text-xl font-semibold">5 active revenue pools</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Provider jobs</dt>
                  <dd className="text-xl font-semibold">800+ monthly tasks</dd>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background px-4 py-3">
                  <dt className="text-muted-foreground">Protocol uptime</dt>
                  <dd className="text-xl font-semibold">99.9% this quarter</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Three pillars powering the network</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Stayfi blends real-world asset yields, service marketplace incentives, and protocol governance to keep performance aligned for guests, hosts, investors, and providers.
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
                  <CardDescription>{persona.copy}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild variant="ghost" className="px-0 text-primary">
                    <Link href={persona.link}>{persona.linkLabel}</Link>
                  </Button>
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

        <section className="space-y-6 rounded-3xl border border-dashed border-primary/40 bg-primary/5 px-6 py-10 text-center sm:px-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to experience stayfi?</h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Dive into any role, optimize economics, and see how decentralized hospitality scales with trusted incentives.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/explore">Explore the marketplace</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Connect with our team</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

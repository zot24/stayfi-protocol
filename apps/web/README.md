stayfi – decentralized airbnb network (front‑end mock)

## Getting Started

Run the development server:

```bash
make install
make dev
```

Open http://localhost:3000.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Tech: Next.js 15 (App Router) + TypeScript, Tailwind + shadcn/ui, React Query, Zustand, Recharts, MSW.

Key routes:

- /explore – browse stays with filters and ranking
- /stay/[id] – stay detail with fee split donut
- /invest – funds grid with sparkline and APY
- /invest/[id] – buy/sell mock for a fund
- /investor/portfolio – positions table
- /services – service marketplace (jobs board)
- /provider/staking – stake slider
- /host/payouts – computed splits table
- /admin – fee split sliders (global recompute)

Docker:

```bash
docker compose up --build
```

2–3 minute demo:

1) Guest → explore Asunción → open a stay → donut → book
2) Host → increase stake → see rank/discount → payouts update
3) Investor → buy 100 in city fund → portfolio updates
4) Provider → accept/complete job → reputation tick
5) Admin → change splits → donuts/tables update globally

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

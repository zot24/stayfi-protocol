import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const metadata = {
    title: "About – stayfi",
    description:
        "Front-end only mock of a decentralized Airbnb network (RWA + DePIN)",
};

const md = `
# stayfi — decentralized airbnb network (front‑end mock)

This is a front‑end only prototype that simulates RWA + DePIN mechanics with mocked data and deterministic pricing/yield math. No wallets or on‑chain logic are included.

## pillars

- rwa: fractional revenue rights, investor APY and distributions
- depin: stays marketplace, service jobs, staking boosts
- ops: fee splits and admin levers with instant recompute

## fee split example

| receiver | share |
| --- | --- |
| host | 90% |
| service providers | 5% |
| protocol | 3% |
| reserve | 2% |

> Toggle splits in admin and charts/tables update immediately.

### notes

- mocked endpoints via MSW
- local persistence via localStorage / IndexedDB
- charts with Recharts; UI via shadcn/ui
`;

export default function AboutPage() {
    return (
        <main className="container mx-auto max-w-3xl p-6 prose prose-zinc dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                {md}
            </ReactMarkdown>
        </main>
    );
}



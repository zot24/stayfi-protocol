import fs from "node:fs";
import path from "node:path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton";

export const metadata = {
    title: "About – StayFi",
    description: "Overview and vision",
};

function loadSummary() {
    try {
        const p = path.join(process.cwd(), "content", "summary.md");
        return fs.readFileSync(p, "utf8");
    } catch {
        return `# StayFi\n\nDecentralized hospitality protocol (RWA + DePIN).`;
    }
}

export default function AboutPage() {
    const md = loadSummary();
    return (
        <main className="container mx-auto max-w-3xl p-6">
            <article className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                    {md}
                </ReactMarkdown>
            </article>
            <div className="mt-8 flex justify-center">
                <JoinWaitlistButton />
            </div>
        </main>
    );
}



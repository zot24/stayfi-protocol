"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DocLink = { slug: string; label: string };

export function MarkdownDoc({
    content,
    rightNavDocs,
}: {
    content: string;
    rightNavDocs?: DocLink[];
}) {
    const pathname = usePathname();

    const { sections, rawHeadings } = useMemo(() => {
        const headingMatches = Array.from(content.matchAll(/^(#{1,3})\s+(.+)$/gm)).map((m) => ({
            level: m[1].length,
            text: m[2].trim(),
        }));
        const slugger = new GithubSlugger();
        const rh = headingMatches.map((h) => ({
            level: h.level,
            text: h.text,
            id: slugger.slug(h.text),
        }));
        type TocSection = { id: string; text: string; children: { id: string; text: string }[] };
        const secs: TocSection[] = [];
        let current: TocSection | null = null;
        for (const h of rh) {
            if (h.level === 1) {
                if (!secs.length) secs.push({ id: h.id, text: h.text, children: [] });
            } else if (h.level === 2) {
                current = { id: h.id, text: h.text, children: [] };
                secs.push(current);
            } else if (h.level === 3 && current) {
                current.children.push({ id: h.id, text: h.text });
            }
        }
        return { sections: secs, rawHeadings: rh };
    }, [content]);

    const [activeId, setActiveId] = useState<string | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: "-100px 0px -70% 0px", threshold: [0, 1] }
        );
        rawHeadings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [rawHeadings]);

    return (
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 pt-12 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)_220px]">
            <aside className="hidden lg:block">
                <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-auto pr-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contents</p>
                    <nav className="space-y-4 text-sm">
                        {sections.map((section, idx) => (
                            <div key={section.id} className="space-y-2">
                                <a
                                    href={`#${section.id}`}
                                    className={
                                        "block rounded-md px-2 py-1.5 font-medium hover:bg-muted/30 " +
                                        (activeId === section.id ? "bg-muted/30 text-foreground" : "text-foreground")
                                    }
                                >
                                    {section.text}
                                </a>
                                {section.children.length > 0 && (
                                    <div className="ml-2 space-y-1">
                                        {section.children.map((child) => (
                                            <a
                                                key={child.id}
                                                href={`#${child.id}`}
                                                className={
                                                    "block rounded-md px-2 py-1 hover:bg-muted/20 " +
                                                    (activeId === child.id ? "text-foreground" : "text-muted-foreground")
                                                }
                                                title={child.text}
                                            >
                                                {child.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {idx < sections.length - 1 && <div className="my-3 border-b border-border/50" />}
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>

            <article className="max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                    components={{
                        h1: ({ ...props }) => (
                            <h1 className="mt-12 scroll-mt-20 text-3xl font-semibold tracking-tight sm:text-4xl" {...props} />
                        ),
                        h2: ({ ...props }) => (
                            <h2 className="mt-10 scroll-mt-20 text-2xl font-semibold tracking-tight" {...props} />
                        ),
                        h3: ({ ...props }) => (
                            <h3 className="mt-8 scroll-mt-20 text-xl font-semibold tracking-tight" {...props} />
                        ),
                        p: ({ ...props }) => <p className="my-4 leading-7 text-muted-foreground" {...props} />,
                        ul: ({ ...props }) => <ul className="my-4 list-disc pl-6 marker:text-primary/70" {...props} />,
                        ol: ({ ...props }) => <ol className="my-4 list-decimal pl-6 marker:text-primary/70" {...props} />,
                        li: ({ ...props }) => <li className="my-1" {...props} />,
                        code: ({ className, children, ...props }) => {
                            const isBlock = className?.includes("language-");
                            if (isBlock) {
                                return (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                            return (
                                <code className={(className ?? "") + " rounded bg-muted/30 px-1.5 py-0.5 text-[0.9em] text-foreground"} {...props}>
                                    {children}
                                </code>
                            );
                        },
                        pre: ({ ...props }) => (
                            <pre className="my-4 overflow-x-auto rounded-lg border bg-muted/20 p-0" {...props} />
                        ),
                        table: ({ ...props }) => (
                            <div className="my-6 overflow-x-auto">
                                <table className="w-full text-left" {...props} />
                            </div>
                        ),
                        th: ({ ...props }) => (
                            <th className="border-b border-primary/30 px-3 py-2 font-semibold" {...props} />
                        ),
                        td: ({ ...props }) => <td className="px-3 py-2" {...props} />,
                        a: ({ ...props }) => (
                            <a className="underline decoration-primary/50 underline-offset-4 hover:decoration-primary" {...props} />
                        ),
                        hr: ({ ...props }) => <hr className="my-10 border-primary/20" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>

            <aside className="hidden lg:block">
                {rightNavDocs && (
                    <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-auto pl-2">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Documents</p>
                        <nav className="space-y-2 text-sm">
                            {rightNavDocs.map((d) => {
                                const active = pathname?.startsWith(`/docs/${d.slug}`);
                                return (
                                    <Link
                                        key={d.slug}
                                        href={`/docs/${d.slug}`}
                                        className={
                                            "block rounded-md px-2 py-1.5 hover:bg-muted/30 " +
                                            (active ? "bg-muted/30 text-foreground" : "text-muted-foreground")
                                        }
                                    >
                                        {d.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </aside>
        </main>
    );
}



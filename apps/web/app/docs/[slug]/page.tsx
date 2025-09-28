import fs from "node:fs";
import path from "node:path";
import { MarkdownDoc } from "@/components/MarkdownDoc";

const docFiles: Record<string, { label: string; file: string }[]> = {
    default: [
        { label: "Summary", file: "summary.md" },
        { label: "Litepaper", file: "litepaper.md" },
        { label: "Tokenomics", file: "tokenomics.md" },
        { label: "Diagrams", file: "diagrams.md" },
        { label: "Who is this for?", file: "who-is-this-for.md" },
    ],
};

function getDocList() {
    return docFiles.default;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const docs = getDocList();
    const current = docs.find((d) => path.parse(d.file).name === slug) ?? docs[0];
    const contentPath = path.join(process.cwd(), "content", current.file);
    let content = "";
    try {
        content = fs.readFileSync(contentPath, "utf8");
    } catch {
        content = `# Not found\n\nThe document ${current.label} (${current.file}) was not found.`;
    }

    const rightNavDocs = docs.map((d) => ({ slug: path.parse(d.file).name, label: d.label }));

    return (
        <div className="bg-gradient-to-b from-background via-background/90 to-background">
            <MarkdownDoc content={content} rightNavDocs={rightNavDocs} />
        </div>
    );
}



import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
                <p>© {new Date().getFullYear()} StayFi</p>
                <nav className="flex items-center gap-4">
                    <Link href="https://t.me/stayfidao" className="hover:text-foreground" target="_blank" rel="noreferrer">Telegram</Link>
                    <Link href="https://x.com/stayfidao" className="hover:text-foreground" target="_blank" rel="noreferrer">X</Link>
                </nav>
            </div>
        </footer>
    );
}



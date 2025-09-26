"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/organizers", label: "Organizers" },
    { href: "/details", label: "Details" },
    { href: "/materials", label: "Materials" },
    { href: "/contact", label: "Contact" },
];

export default function Nav() {
    const path = usePathname();
    return (
        <header className="bg-panel/80">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
                <Link
                    href="/"
                    className="font-extrabold tracking-wide text-accent2">
                    Fundamentals of Robotic Musicianship
                </Link>
                <nav className="flex flex-wrap gap-3">
                    {links.map((l) => {
                        const active = path === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`rounded-full px-3 py-1 text-sm ring-1 ring-white/10 hover:ring-white/20 ${
                                    active
                                        ? "bg-white/5 text-ink"
                                        : "text-muted"
                                }`}>
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

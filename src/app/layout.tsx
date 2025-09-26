import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "ICRA Workshop — Fundamentals of Robotic Musicianship",
    description:
        "A full-day ICRA workshop on robotic musicianship: design, control, and human-robot musical interaction.",
    icons: { icon: [
      {
        url: "/shimon_icon.png",
        sizes: 'any',
        type: 'image/png',
      }
    ] },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-dvh bg-bg text-ink">
                <Nav />
                <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

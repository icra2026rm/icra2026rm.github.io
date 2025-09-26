export default function Footer() {
    return (
        <footer className="mt-10 border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted">
                © {new Date().getFullYear()} RM Workshop · Built with Next.js
                (App Router) & Tailwind · GitHub Pages ready
            </div>
        </footer>
    );
}

export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
            {children}
        </span>
    );
}

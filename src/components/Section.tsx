import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
    return (
        <section className="rounded-2xl bg-panel p-6 ring-1 ring-white/10 shadow-soft">
            {children}
        </section>
    );
}

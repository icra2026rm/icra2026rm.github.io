import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
    return (
        <div className="rounded-2xl bg-panel p-6 ring-1 ring-white/10">
            {children}
        </div>
    );
}

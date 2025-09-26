import Section from "@/components/Section";

const rows: [string, string][] = [
    ["9:00–9:15", "Opening welcome & introductions"],
    ["9:15–9:45", "Intro to RM: philosophies & state of the art"],
    ["9:45–10:00", "Coffee Break"],
    ["10:00–11:00", "Keynote Speaker 1: Gil Weinberg"],
    [
        "11:00–12:00",
        "Designing & building robotic musicians (violin/guitar examples)",
    ],
    ["12:00–1:00", "Lunch"],
    [
        "1:00–2:00",
        "Designing interactions & programming; demo with mini Shimon",
    ],
    ["2:00–3:00", "Accessibility: drumming prosthetic & Deaf/HoH case studies"],
    ["3:00–4:00", "Multicultural applications (violin robot)"],
    ["4:00–5:00", "Discussion: goals & future of robotic musicianship"],
];

export default function SchedulePage() {
    return (
        <Section>
            <h1 className="text-3xl font-bold">Tentative Schedule</h1>
            <ul className="mt-4 space-y-2 text-muted">
                {rows.map(([t, d]) => (
                    <li key={t} className="flex gap-3">
                        <div className="w-28 shrink-0 font-semibold text-ink">
                            {t}
                        </div>
                        <div>{d}</div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

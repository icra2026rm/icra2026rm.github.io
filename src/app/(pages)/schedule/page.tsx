import Section from "@/components/Section";

const rows: [string, string][] = [
    ["9:00 am", "Opening welcome & introductions"],
    [
        "9:15 am",
        "Intro to Robotic Musicianship: key philosophies & current state of Robotic Musicianship",
    ],
    ["9:45 am", "Coffee Break"],
    ["10:00 am", "Keynote Speaker 1: Gil Weinberg"],
    [
        "11:00 am",
        "Designing & building robotic musicians (Marimba/Guitar examples)",
    ],
    ["12:00 pm", "Lunch"],
    [
        "1:00 pm",
        "Designing interactions & programming; demo and interaction with mini Shimon",
    ],
    [
        "2:00 pm",
        "Accessibility: drumming prosthetic & Deaf/Hard of Hearing case studies",
    ],
    ["3:00 pm", "Multicultural applications - Violin robot"],
    ["4:00 pm", "Discussion: goals & future of Robotic Musicianship"],
];

export default function SchedulePage() {
    return (
        <Section>
            <h1 className="text-xl font-bold">Tentative Schedule</h1>
            <ul className="mt-4 space-y-2 text-muted">
                {rows.map(([t, d]) => (
                    <li key={t} className="flex gap-8">
                        <div className="w-20 shrink-0 font-semibold text-ink font-mono text-right">
                            {t}
                        </div>
                        <div>{d}</div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

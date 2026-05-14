import Section from "@/components/Section";

const rows: [string, string][] = [
    ["8:45-9:00 am", "Introduction and welcome"],
    ["9:00-10:00 am", "Gil Weinberg Keynote"],
    [
        "10:00-10:30 am",
        "Introduction to Robotic Musicianship",
    ],
    [
        "10:30 am-12:00 pm",
        "Hands-on Workshop Subgroups",
    ],
    ["12:00-1:00 pm", "Lunch"],
    ["1:00-2:00 pm", "Robotic Musicianship Panel"],
    ["2:00-3:00 pm", "Interact with Robotic Musicians"],
    ["3:00-4:00 pm", "Discussion and Networking"],
];

export default function SchedulePage() {
    return (
        <Section>
            <h1 className="text-xl font-bold">Tentative Schedule</h1>
            <ul className="mt-4 space-y-2 text-muted">
                {rows.map(([t, d]) => (
                    <li key={t} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-8">
                        <div className="font-mono font-semibold text-ink sm:text-right">
                            {t}
                        </div>
                        <div>{d}</div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

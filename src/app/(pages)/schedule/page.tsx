import Section from "@/components/Section";

const rows: [string, string][] = [
    ["9:00 am", "Opening welcome & introductions + quick meet-and-greet with the robotic xylophone player (mini Shimon)"],
    [
        "9:15 am",
        "Intro to Robotic Musicianship: key philosophies & current state (with short live xylophone-robot demo)",
    ],
    ["9:45 am", "Coffee Break + informal networking around the robotic xylophone demo"],
    ["10:00 am", "Keynote Speaker 1: Gil Weinberg (context + examples connected to hands-on xylophone robot interaction)"],
    [
        "11:00 am",
        "Designing & building robotic musicians (Marimba/Guitar examples + pointers back to the portable xylophone robot)",
    ],
    ["12:00 pm", "Lunch + open-table networking (robot available for casual interaction)"],
    [
        "1:00 pm",
        "Designing interactions & programming; demo and interaction with mini Shimon (robotic xylophone player)",
    ],
    [
        "2:00 pm",
        "Applications of Robotic Musicianship: accessibility, installations, and multicultural approaches (case studies + demo tie-ins)",
    ],
    [
        "3:00 pm",
        "Hands-on interaction lab + attendee networking: structured play with the robotic xylophone player (mini Shimon)",
    ],
    [
        "4:00 pm",
        "Discussion + networking: goals & future of Robotic Musicianship (roundtable while the robot remains available)",
    ],
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
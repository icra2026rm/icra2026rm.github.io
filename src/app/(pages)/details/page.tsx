import Section from "@/components/Section";

export default function DetailsPage() {
    return (
        <Section>
            <article className="prose prose-invert prose-a:text-accent max-w-none">
                <h1>Workshop Overview</h1>
                <p>
                    A full-day workshop covering mechanics, real-time control,
                    AI, and human-robot musical interaction. Emphasis on
                    practical, evidence-based design and cross-cultural
                    applications, including accessibility.
                </p>
                <h2>Format & Participation</h2>
                <p>
                    Talks, live demonstrations, and interactive sessions with a
                    portable xylophone-playing robot. Remote streaming
                    available; primary focus is in-person interaction due to
                    physical demos.
                </p>
                <h2>Diversity & Inclusion</h2>
                <p>
                    We highlight traditions beyond the Western canon and include
                    accessibility-focused systems (e.g., prosthetic drumming,
                    Deaf/HoH support). Co-design and authentic representation
                    are emphasized.
                </p>
                <h2>Recruitment</h2>
                <p>
                    Outreach to RM, arts-robotics, and HRI communities across
                    venues (NIME, ICMC, HRI, ICRA, AAAI), plus relevant mailing
                    lists.
                </p>
            </article>
        </Section>
    );
}

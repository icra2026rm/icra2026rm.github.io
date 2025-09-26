import Image from "next/image";
import Section from "@/components/Section";
import Badge from "@/components/Badge";

export default function HomePage() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Section>
                <p className="uppercase text-xs tracking-[.2em] text-muted">
                    ICRA Workshop — Full Day
                </p>
                <h1 className="mt-1 text-3xl font-bold">
                    Fundamentals of Robotic Musicianship
                </h1>
                <p className="mt-3 leading-relaxed text-muted">
                    Design, control, and interaction principles behind robotic
                    musicians—guitar, marimba, violin, drumming, dancing, and
                    rapping robots. Explore accessibility applications,
                    real-time control, and multimodal HRI through live demos and
                    structured interactions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Workshop</Badge>
                    <Badge>Full-day</Badge>
                    <Badge>In-person (+ streaming)</Badge>
                </div>
                <hr className="my-5 border-white/10" />
                <p className="leading-relaxed text-muted">
                    The workshop bridges robotics, AI, and music via
                    evidence-based practices (actuators, real-time systems,
                    interaction design) and cross-cultural case studies (e.g.,
                    Indian, Middle Eastern, Korean traditions).
                </p>
            </Section>

            <Section>
                <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                    <Image
                        src="/shimon.jpeg"
                        alt="Robotic musicianship collage"
                        width={1600}
                        height={1000}
                        className="h-auto w-full"
                        priority
                    />
                </div>
                <p className="mt-3 text-sm text-muted">
                    Demo: portable two-octave xylophone robot for
                    call-and-response, imitation, and synchronized ensemble
                    exercises.
                </p>
            </Section>
        </div>
    );
}

import Section from "@/components/Section";
import Image from "next/image";

export default function DetailsPage() {
    return (
        <Section>
            <article className="prose prose-invert prose-a:text-accent max-w-none space-y-4">
                <h1 className="text-xl font-semibold">Workshop Overview</h1>

                <h2 className="text-lg font-semibold mt-2">Workshop Goal</h2>
                <p className="text-justify indent-8">
                    Robotic musicianship is an interdisciplinary field that combines robotics, computer science, performance, music, and mechatronics. This workshop
                    aims to provide an hands on introduction to the field and its design
                    practices. It will also feature discussion throughout the day with attendees about the future direction of the field. We also
                    bring a portable robotic xylophone player (a new mini Shimon) for hands-on
                    interaction, musical play, and live demonstrations.

                </p>

                <figure className="not-prose mt-4">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <Image
                            src="/ShimonSings.jpg"
                            alt="Shimon (robotic musician)"
                            width={1400}
                            height={900}
                            className="h-auto w-full"
                            priority
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted">
                        Shimon / (temporary image).
                    </figcaption>
                </figure>

                <p className="text-justify indent-8">
                    This workshop will provide a comprehensive overview of robotics
                    applications in computational music through a structured combination
                    of presentations, demonstrations, and interactive sessions. The day
                    is designed to facilitate meaningful participant interaction and
                    networking through live demos, open-ended discussion, and repeated
                    opportunities to engage with our robotic xylophone musician (mini
                    Shimon).
                </p>

                <p className="text-justify indent-8">
                    The first session establishes the theoretical framework and
                    technical foundations of robotic musicianship, grounded with short
                    demonstrations using the robotic xylophone player to connect
                    concepts to concrete design choices. The keynote talk will cover
                    the evolution of the field, key design principles for musical
                    robots, and critical hardware considerations. We will examine common
                    implementation pitfalls and design philosophies that distinguish
                    successful robotic musicians from purely mechanical music-playing
                    devices.
                </p>

                <p className="text-justify indent-8">
                    The second session centers on hands-on demonstrations using a
                    portable two-octave xylophone-playing robot (mini Shimon) developed
                    for this workshop. This system incorporates musical performance
                    capabilities and gestural communication features, enabling embodied
                    interaction between human and robotic musicians. Attendees will
                    participate in structured musical interactions exploring three
                    distinct paradigms: call-and-response, imitative behavior, and
                    synchronized ensemble performance—followed by time to mingle and
                    compare approaches with other attendees while interacting with the
                    robot.
                </p>

            </article>
        </Section>
    );
}
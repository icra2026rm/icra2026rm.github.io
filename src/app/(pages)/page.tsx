import Image from "next/image";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import hathaaniImg from "@/../public/hathaani_v2.jpg";
import shimonSingsImg from "@/../public/ShimonSings.jpg";

export default function HomePage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 justify-center">
            <Section>
                <article className="prose prose-invert prose-a:text-accent max-w-none space-y-4">
                    <p className="uppercase text-xs tracking-[.2em] text-muted">
                        ICRA 2026 Workshop - Full Day
                    </p>

                    <h1 className="text-xl font-semibold">
                        Notes and Bots: A workshop on Robotic Musicianship
                    </h1>

                    <h2 className="text-lg font-semibold mt-2">Workshop Goal</h2>

                    <p className="text-justify indent-8">
                        Robotic musicianship is an interdisciplinary field that combines
                        robotics, computer science, performance, music, and mechatronics.
                        This full-day workshop introduces participants to Robotic
                        Musicianship (RM), where autonomous systems not only perform
                        music but also enable rich human-robot interaction through
                        musical collaboration—anchored by hands-on time with a portable
                        robotic xylophone player (a new mini Shimon).
                    </p>

                    <p className="text-justify indent-8">
                        This workshop aims to provide a hands-on introduction to the
                        field and its design practices, while also creating space for
                        discussion and networking throughout the day about current work
                        and future directions. We will bring the portable robotic
                        xylophone player (mini Shimon) for live demonstrations, musical
                        play, and participant interaction.
                    </p>

                    <p className="text-justify indent-8">
                        The workshop provides a structured combination of presentations,
                        demonstrations, and interactive sessions. The day is designed to
                        facilitate meaningful participant interaction and networking
                        through live demos, open-ended discussion, and repeated
                        opportunities to engage with our robotic xylophone musician.
                    </p>

                    <p className="text-justify indent-8">
                        The first session establishes the theoretical framework and
                        technical foundations of robotic musicianship, grounded with
                        short xylophone-robot demonstrations to connect concepts to
                        concrete design choices. The keynote will cover the evolution of
                        the field, key design principles for musical robots, and
                        critical hardware considerations, including common pitfalls that
                        separate expressive robotic musicians from purely mechanical
                        music-playing devices.
                    </p>

                    <p className="text-justify indent-8">
                        Participants will also see diverse implementations to build practical intuition for
                        actuator selection, real-time control, and multimodal interaction
                        design—then relate those ideas back to the portable xylophone
                        robot they can directly interact with.
                    </p>

                    <p className="text-justify indent-8">
                        The second session centers on hands-on demonstrations using the
                        portable two-octave xylophone-playing robot (mini Shimon)
                        developed specifically for this workshop. The system incorporates
                        musical performance and gestural communication features, enabling
                        embodied interaction between human and robotic musicians.
                        Attendees will explore call-and-response, imitative behavior,
                        and synchronized ensemble performance—followed by time to mingle
                        and compare approaches with other attendees while interacting
                        with the robot.
                    </p>

                    <p className="text-justify indent-8">
                        We will also highlight applications of RM including accessibility,
                        installations, and multicultural approaches, examining how
                        robotic musicianship principles adapt to diverse musical
                        traditions—while continuously grounding discussion in what
                        attendees observe and try with the robotic xylophone player.
                    </p>
                </article>

                <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Workshop</Badge>
                    <Badge>Full-day</Badge>
                    <Badge>In-person</Badge>
                </div>
            </Section>

            <Section>
                <div className="space-y-8">
                    <div className="items-center justify-center">
                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                            <Image
                                src={shimonSingsImg}
                                alt="Shimon / mini Shimon (robotic musician)"
                                width={1600}
                                height={1000}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                        <p className="mt-3 text-sm text-muted">
                            Shimon / mini Shimon (temporary image) — portable robotic xylophone player for hands-on interaction.
                        </p>
                    </div>

                    <div className="items-center justify-center">
                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                            <Image
                                src={hathaaniImg}
                                alt="Hathaani - the Carnatic Violin playing robot"
                                width={1600}
                                height={1600}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                        <p className="mt-3 text-sm text-muted">
                            Hathaani - the Carnatic Violin playing robot
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
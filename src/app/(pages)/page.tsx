import Image from "next/image";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import shimonImg from "@/../public/shimon.jpeg"; // static import
import hathaaniImg from "@/../public/hathaani_v2.jpg"

export default function HomePage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 items-center justify-center">
            <Section>
                <article className="prose prose-invert prose-a:text-accent max-w-none space-y-4">
                    <p className="uppercase text-xs tracking-[.2em] text-muted">
                        ICRA Workshop — Full Day
                    </p>
                    <h1 className="text-xl font-semibold">
                        Notes and Bots: Workshop on Robotic Musicianship
                    </h1>
                    <p className="text-justify indent-8">
                        This full-day workshop introduces participants to the
                        field of Robotic Musicianship (RM), where autonomous
                        systems not only perform music but engage in human-robot
                        interaction through musical collaboration. As robotics
                        expands into creative domains, robotic musicianship
                        represents a unique convergence of mechanical
                        engineering, artificial intelligence, and human-computer
                        interaction that addresses both technical challenges and
                        artistic applications.
                    </p>
                    <p className="text-justify indent-8">
                        Participants will gain practical expertise in designing
                        and programming robotic musicians through detailed case
                        studies of diverse implementations, including
                        guitar-playing, marimba-playing, violin-playing,
                        drumming, dancing, and rapping robots. The workshop
                        emphasizes evidence-based design principles derived from
                        extensive development experience, covering critical
                        considerations in actuator selection, real-time control
                        systems, and multimodal interaction design. Special
                        attention will be given to accessibility applications,
                        demonstrating how robotic musicians can serve as
                        assistive technologies for individuals with
                        disabilities.
                    </p>
                    <p className="text-justify indent-8">
                        The format includes hands-on demonstrations with a
                        portable xylophone-playing robot, enabling participants
                        to observe and experiment with various human-robot
                        musical interaction paradigms, including
                        call-and-response, synchronous performance, and adaptive
                        accompaniment. The workshop also addresses
                        cross-cultural applications, examining how robotic
                        musicianship principles adapt to diverse musical
                        traditions including Indian classical, Middle Eastern,
                        and Korean performance styles. This workshop is designed
                        for robotics researchers, human-computer interaction
                        specialists, and engineers interested in exploring
                        creative applications of autonomous systems while
                        addressing fundamental challenges in real-time
                        interaction and embodied artificial intelligence.
                    </p>
                </article>

                {/* <p className="mt-3 leading-relaxed text-muted">
                    Design, control, and interaction principles behind robotic
                    musicians—guitar, marimba, violin, drumming, dancing, and
                    rapping robots. Explore accessibility applications,
                    real-time control, and multimodal HRI through live demos and
                    structured interactions.
                </p> */}
                <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Workshop</Badge>
                    <Badge>Full-day</Badge>
                    <Badge>In-person</Badge>
                </div>
                {/* <hr className="my-5 border-white/10" />
                <p className="leading-relaxed text-muted">
                    The workshop bridges robotics, AI, and music via
                    evidence-based practices (actuators, real-time systems,
                    interaction design) and cross-cultural case studies (e.g.,
                    Indian, Middle Eastern, Korean traditions).
                </p> */}
            </Section>

            <Section>
                <div className="space-y-8">
                    <div className="items-center justify-center">
                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                            <Image
                                src={shimonImg}
                                alt="Shimon the robot"
                                width={1600}
                                height={1000}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                        <p className="mt-3 text-sm text-muted">
                            Shimon - the Marimba playing Robot
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

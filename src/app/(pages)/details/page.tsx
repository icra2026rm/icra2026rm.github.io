import Section from "@/components/Section";

export default function DetailsPage() {
    return (
        <Section>
            <article className="prose prose-invert prose-a:text-accent max-w-none space-y-4">
                <h1 className="text-xl font-semibold">Workshop Overview</h1>
                <p className="text-justify indent-8">
                    This workshop will provide a comprehensive overview of
                    robotics applications in computational music through a
                    structured combination of presentations, demonstrations, and
                    interactive sessions. The workshop is designed to facilitate
                    meaningful interactions between participants through live
                    demos and open ended discussions while exploring both
                    theoretical foundations and practical implementation
                    challenges in robotic musicianship.
                </p>
                <p className="text-justify indent-8">
                    The first session will establish the theoretical framework
                    and technical foundations of robotic musicianship. The
                    keynote talk will cover the evolution of the field, key
                    design principles for musical robots, and critical hardware
                    considerations. We will examine common implementation
                    pitfalls and design philosophies that distinguish successful
                    robotic musicians from purely mechanical music-playing
                    devices.
                </p>
                <p className="text-justify indent-8">
                    The second session centers on hands-on demonstrations using
                    a portable two-octave xylophone playing robot developed for
                    this workshop. This system incorporates both musical
                    performance capabilities and gestural communication
                    features, enabling embodied interaction between human and
                    robotic musicians. Attendees will participate in structured
                    musical interactions exploring three distinct paradigms:
                    call-and-response, imitative behavior, and synchronized
                    ensemble performance. These demonstrations will illustrate
                    the design principles presented in the first session through
                    real-time robot operation.
                </p>

                <p className="text-justify font-thin italic">
                    More details will be added soon ...
                </p>
            </article>
        </Section>
    );
}

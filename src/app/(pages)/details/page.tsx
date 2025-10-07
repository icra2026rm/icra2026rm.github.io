import Section from "@/components/Section";

export default function DetailsPage() {
    return (
        <Section>
            <article className="prose prose-invert prose-a:text-accent max-w-none space-y-4">
                <h1 className="text-xl font-semibold">Workshop Overview</h1>
                <p className="text-justify indent-8">
                    This full-day workshop introduces participants to the field
                    of Robotic Musicianship (RM), where autonomous systems not
                    only perform music but engage in human-robot interaction
                    through musical collaboration. As robotics expands into
                    creative domains, robotic musicianship represents a unique
                    convergence of mechanical engineering, artificial
                    intelligence, and human-computer interaction that addresses
                    both technical challenges and artistic applications.
                </p>
                <p className="text-justify indent-8">
                    Participants will gain practical expertise in designing and
                    programming robotic musicians through detailed case studies
                    of diverse implementations, including guitar-playing,
                    marimba-playing, violin-playing, drumming, dancing, and
                    rapping robots. The workshop emphasizes evidence-based
                    design principles derived from extensive development
                    experience, covering critical considerations in actuator
                    selection, real-time control systems, and multimodal
                    interaction design. Special attention will be given to
                    accessibility applications, demonstrating how robotic
                    musicians can serve as assistive technologies for
                    individuals with disabilities.
                </p>
                <p className="text-justify indent-8">
                    The format includes hands-on demonstrations with a portable
                    xylophone-playing robot, enabling participants to observe
                    and experiment with various human-robot musical interaction
                    paradigms, including call-and-response, synchronous
                    performance, and adaptive accompaniment. The workshop also
                    addresses cross-cultural applications, examining how robotic
                    musicianship principles adapt to diverse musical traditions
                    including Indian classical, Middle Eastern, and Korean
                    performance styles. This workshop is designed for robotics
                    researchers, human-computer interaction specialists, and
                    engineers interested in exploring creative applications of
                    autonomous systems while addressing fundamental challenges
                    in real-time interaction and embodied artificial
                    intelligence.
                </p>
            </article>
        </Section>
    );
}

// app/materials/page.tsx 

import Section from "@/components/Section";

export default function MaterialsPage() {
    return (
        <Section>
            <h1 className="text-3xl font-bold">Workshop Materials</h1>
            <p className="mt-2 text-muted">
                Slides, recordings, photos, and build docs will appear here after the
                workshop. We aim to include full hardware & software instructions for
                reproducibility in research and teaching—along with media from the live
                demo and interaction sessions with our robotic xylophone player (mini
                Shimon).
            </p>

            <ul className="mt-4 list-disc pl-6 text-muted space-y-1">
                <li>Slides + speaker materials</li>
                <li>Video clips from the robotic xylophone interaction sessions</li>
                <li>Build docs (hardware + software) for the portable xylophone robot</li>
            </ul>
        </Section>
    );
}
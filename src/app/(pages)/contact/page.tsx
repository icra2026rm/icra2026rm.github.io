import Section from "@/components/Section";

export default function ContactPage() {
    return (
        <Section>
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <p className="mt-2 text-muted">
                Primary contact:{" "}
                <a className="underline" href="mailto:arogel3@gatech.edu">
                    arogel3@gatech.edu
                </a>
            </p>
            <p className="text-muted">
                General inquiries:{" "}
                <a className="underline" href="mailto:violinsimma@gmail.com">
                    violinsimma@gmail.com
                </a>
            </p>
        </Section>
    );
}

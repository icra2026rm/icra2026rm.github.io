import Card from "@/components/Card";

const ORGS = [
    {
        name: "Amit Rogel",
        affiliation:
            "Georgia Institute of Technology — Robotic Musicianship Lab",
        email: "arogel3@gatech.edu",
        url: "https://www.amro42.org",
    },
    {
        name: "Raghavasimhan Sankaranarayanan",
        affiliation: "University of Louisville",
        email: "violinsimma@gmail.com",
        url: "https://techitunes.com/",
    },
    {
        name: "Richard Savery",
        affiliation: "University of Canberra",
        email: "saveryrichard0@gmail.com",
        url: "https://richardsavery.com/",
    },
    {
        name: "Gil Weinberg",
        affiliation: "Georgia Tech Center for Music Technology",
        email: "gilw@gatech.edu",
        url: "https://www.gilweinberg.com/",
    },
];

export default function OrganizersPage() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {ORGS.map((o) => (
                <Card key={o.email}>
                    <h2 className="text-xl font-semibold">{o.name}</h2>
                    <p className="mt-1 text-muted">{o.affiliation}</p>
                    <p className="mt-2 text-sm">
                        <a className="underline" href={`mailto:${o.email}`}>
                            {o.email}
                        </a>
                    </p>
                    <p className="mt-1 text-sm">
                        <a
                            className="underline"
                            href={o.url}
                            target="_blank"
                            rel="noreferrer">
                            {o.url}
                        </a>
                    </p>
                </Card>
            ))}
        </div>
    );
}

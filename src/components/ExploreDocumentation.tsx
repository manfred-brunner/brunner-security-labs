import Link from "next/link";
import Container from "./Container";

const documentationAreas = [
  {
    title: "Overview",
    description:
      "Learn about the purpose, scope, design principles and development roadmap of Brunner Security Labs.",
    href: "/overview",
  },
  {
    title: "Architecture",
    description:
      "Explore the vendor-neutral enterprise security architecture, security layers and data flows.",
    href: "/architecture",
  },
  {
    title: "Security Controls",
    description:
      "Review the security domains covering identity, endpoints, monitoring, detection and governance.",
    href: "/security-controls",
  },
  {
    title: "Implementation",
    description:
      "See how the architecture is implemented through practical configurations, validation and lessons learned.",
    href: "/implementation",
  },
];

export default function ExploreDocumentation() {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Explore Documentation
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Continue into the technical documentation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore the architecture, security domains and implementation
            details behind Brunner Security Labs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {documentationAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group rounded-lg border border-slate-700 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {area.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-cyan-400 transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold text-cyan-400">
                Open documentation
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
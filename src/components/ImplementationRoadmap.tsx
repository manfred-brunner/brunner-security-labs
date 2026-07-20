import Container from "./Container";

const roadmapItems = [
  {
    title: "Enterprise Foundation",
    description:
      "Core tenant, identity, collaboration and cloud services established.",
    status: "Implemented",
  },
  {
    title: "Identity & Access",
    description:
      "Microsoft Entra ID, multifactor authentication and access controls.",
    status: "Implemented",
  },
  {
    title: "Endpoint Management",
    description:
      "Centralized device enrollment, compliance and configuration management.",
    status: "Implemented",
  },
  {
    title: "Endpoint Protection",
    description:
      "Endpoint detection and response, encryption and security baselines.",
    status: "Implemented",
  },
  {
    title: "Monitoring & Detection",
    description:
      "Centralized logging, SIEM integration, KQL analysis and detection rules.",
    status: "In Progress",
  },
  {
    title: "Incident Response",
    description:
      "Investigation, containment, evidence collection and response procedures.",
    status: "In Progress",
  },
  {
    title: "Threat Hunting & DFIR",
    description:
      "Advanced hunting, forensic analysis and memory investigation workflows.",
    status: "Planned",
  },
  {
    title: "Governance & Compliance",
    description:
      "Policies, risk management and alignment with recognized frameworks.",
    status: "Planned",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Implemented":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "In Progress":
      return "border-amber-200 bg-amber-50 text-amber-700";
    default:
      return "border-slate-200 bg-slate-100 text-slate-600";
  }
}

export default function ImplementationRoadmap() {
  return (
    <section className="bg-slate-50 py-20 text-slate-900 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Implementation Roadmap
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Building the lab in structured implementation phases.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The roadmap shows which parts of the enterprise security
            architecture have already been implemented and which areas are
            currently being expanded.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {roadmapItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "./Container";

const architectureLayers = [
  {
    title: "Identity & Access Management",
    description:
      "Authentication, authorization and controlled access to enterprise resources.",
  },
  {
    title: "Endpoint Management & Compliance",
    description:
      "Centralized device management, configuration and compliance assessment.",
  },
  {
    title: "Endpoint Protection",
    description:
      "Protection, detection and response capabilities for enterprise endpoints.",
  },
  {
    title: "Monitoring & Detection",
    description:
      "Centralized collection and analysis of security events and telemetry.",
  },
  {
    title: "Incident Response & Forensics",
    description:
      "Investigation, containment, recovery and evidence-based analysis.",
  },
  {
    title: "Governance, Risk & Improvement",
    description:
      "Policies, risk management, compliance and continuous security improvement.",
  },
];

export default function EnterpriseSecurityArchitecture() {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Enterprise Security Architecture
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A layered approach to enterprise security.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            The lab follows a vendor-neutral security architecture in which
            identity, endpoint protection, monitoring, incident response and
            governance work together as an integrated security system.
          </p>
        </div>

        <div className="mt-14">
          <div className="mx-auto max-w-3xl">
            {architectureLayers.map((layer, index) => (
              <div key={layer.title}>
                <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-500/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {layer.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < architectureLayers.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="flex h-10 items-center justify-center"
                  >
                    <div className="h-full w-px bg-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
import Link from "next/link";
import Container from "@/components/Container";

const domains = [
  {
    title: "Identity & Access",
    description:
      "Authentication, authorization, access control and identity governance.",
    href: "/security-controls/identity",
  },
  {
    title: "Endpoint Security",
    description:
      "Device management, compliance, encryption and endpoint protection.",
    href: "/security-controls/endpoints",
  },
  {
    title: "Monitoring & Detection",
    description:
      "Centralized logging, detection engineering, investigation and response.",
    href: "/security-controls/monitoring",
  },
  {
    title: "Governance & Compliance",
    description:
      "Policies, risk management, compliance and continuous improvement.",
    href: "/security-controls/governance",
  },
];

export default function SecurityControlsPage() {
  return (
    <main className="bg-white py-20 text-slate-900 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Documentation
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Core Security Domains
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The enterprise security architecture is organized into four core
            security domains. Each domain links to detailed documentation,
            implementation decisions and future improvements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {domains.map((domain) => (
            <Link
              key={domain.title}
              href={domain.href}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-cyan-600 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {domain.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {domain.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-cyan-700 transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold text-cyan-700">
                Open documentation
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
import Link from "next/link";
import Container from "./Container";

const securityDomains = [
  {
    title: "Identity & Access",
    description:
      "Secure authentication, authorization, privileged access and identity governance across the enterprise.",
    href: "/security-controls/identity",
  },
  {
    title: "Endpoint Security",
    description:
      "Managed endpoints, security baselines, encryption, compliance and endpoint detection and response.",
    href: "/security-controls/endpoints",
  },
  {
    title: "Monitoring & Detection",
    description:
      "Centralized logging, SIEM, threat detection, investigation, threat hunting and incident response.",
    href: "/security-controls/monitoring",
  },
  {
    title: "Governance",
    description:
      "Security policies, risk management, regulatory requirements and continuous security improvement.",
    href: "/security-controls/governance",
  },
];

export default function CoreSecurityDomains() {
  return (
    <section className="bg-white py-20 text-slate-900 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Core Security Domains
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Security controls across the enterprise.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The lab organizes its security architecture around four core
            domains that work together to protect identities, devices, data and
            business operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {securityDomains.map((domain) => (
            <Link
              key={domain.title}
              href={domain.href}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-cyan-600 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {domain.title}
                  </h3>

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
                Explore this domain
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
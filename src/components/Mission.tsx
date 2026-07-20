import Container from "./Container";

const missionPoints = [
  "Design secure enterprise architecture",
  "Implement identity and endpoint controls",
  "Monitor activity and detect threats",
  "Respond to incidents and improve security",
];

export default function Mission() {
  return (
    <section className="bg-white py-20 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Mission
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A practical model for securing a modern organization.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              The lab simulates the security environment of a small or
              medium-sized enterprise. It combines cloud identity, managed
              endpoints, security monitoring, governance and incident response
              into one integrated security program.
            </p>

            <ul className="mt-8 space-y-4">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600"
                  />

                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
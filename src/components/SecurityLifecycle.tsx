import Container from "./Container";

const lifecycleSteps = [
  "Design",
  "Build",
  "Protect",
  "Monitor",
  "Detect",
  "Respond",
  "Improve",
];

export default function SecurityLifecycle() {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Lifecycle
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Security is a continuous process.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Brunner Security Labs follows the complete security lifecycle from
            architecture and implementation through monitoring, response and
            continuous improvement.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {lifecycleSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-lg border border-slate-800 bg-slate-900 p-5"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-3 text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
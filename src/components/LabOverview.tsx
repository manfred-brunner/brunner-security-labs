import Container from "./Container";

const labAreas = [
  {
    title: "Users",
    description:
      "Employees, administrators and security personnel accessing enterprise resources.",
  },
  {
    title: "Identity",
    description:
      "Authentication, authorization, conditional access and identity governance.",
  },
  {
    title: "Endpoints",
    description:
      "Managed Windows devices protected through configuration, encryption and endpoint security.",
  },
  {
    title: "Security Operations",
    description:
      "Centralized monitoring, threat detection, investigation and incident response.",
  },
];

export default function LabOverview() {
  return (
    <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Lab Overview
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            An integrated enterprise security environment.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The lab connects users, cloud identity, managed endpoints and
            security operations into one coherent enterprise security
            architecture.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {labAreas.map((area, index) => (
            <div
              key={area.title}
              className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">{area.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
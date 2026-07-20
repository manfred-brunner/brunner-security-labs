import Container from "@/components/Container";

export default function ImplementationPage() {
  return (
    <main className="bg-white py-20 text-slate-900 md:py-24">
      <Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Documentation
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Implementation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          This section will document the practical implementation,
          configuration, validation and lessons learned from the lab.
        </p>
      </Container>
    </main>
  );
}
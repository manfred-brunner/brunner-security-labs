import Container from "@/components/Container";

export default function IdentityPage() {
  return (
    <main className="bg-white py-20 text-slate-900">
      <Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Security Controls
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Identity & Access
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          This section will document the identity and access controls
          implemented within Brunner Security Labs.
        </p>
      </Container>
    </main>
  );
}
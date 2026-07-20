import Container from "@/components/Container";

export default function HomePage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Enterprise Security Lab
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Building and securing modern enterprise IT.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Brunner Security Labs is a practical cybersecurity project focused
            on designing, securing, monitoring and operating a realistic
            enterprise IT environment.
          </p>
        </Container>
      </section>
    </main>
  );
}
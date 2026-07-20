import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <Container className="py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Enterprise Security Lab
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Building and securing modern enterprise IT.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Brunner Security Labs is a practical cybersecurity project
            demonstrating how a modern enterprise environment can be designed,
            protected, monitored and continuously improved.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/the-lab"
              className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore the Lab
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
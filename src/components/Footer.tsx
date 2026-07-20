import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="flex flex-col gap-3 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Brunner Security Labs</p>

        <p>
          Practical enterprise security architecture, controls and operations.
        </p>
      </Container>
    </footer>
  );
}
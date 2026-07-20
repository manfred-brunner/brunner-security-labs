import Link from "next/link";
import Container from "./Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "The Lab", href: "/the-lab" },
  { name: "Architecture", href: "/architecture" },
  { name: "Security Controls", href: "/security-controls" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <Container className="flex h-18 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
        >
          Brunner Security Labs
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
const documentationSections = [
  {
    title: "Overview",
    href: "#overview",
  },
  {
    title: "Business Need",
    href: "#business-need",
  },
  {
    title: "Architecture",
    href: "#architecture",
  },
  {
    title: "Implementation",
    href: "#implementation",
  },
  {
    title: "Validation",
    href: "#validation",
  },
  {
    title: "Future Work",
    href: "#future-work",
  },
];

export default function DocumentationSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav
        aria-label="On this page"
        className="rounded-lg border border-slate-200 bg-slate-50 p-5"
      >
        <p className="text-sm font-semibold text-slate-900">On this page</p>

        <ul className="mt-4 space-y-1">
          {documentationSections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className="block rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-cyan-700"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}


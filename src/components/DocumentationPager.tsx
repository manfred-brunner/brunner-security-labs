import Link from "next/link";

type PagerItem = {
  title: string;
  href: string;
};

type DocumentationPagerProps = {
  previous?: PagerItem;
  next?: PagerItem;
};

export default function DocumentationPager({
  previous,
  next,
}: DocumentationPagerProps) {
  return (
    <nav
      aria-label="Documentation navigation"
      className="mt-16 border-t border-slate-200 pt-10"
    >
      <div className="flex justify-between gap-6">
        <div className="flex-1">
          {previous && (
            <Link
              href={previous.href}
              className="group block rounded-lg border border-slate-200 p-5 transition hover:border-cyan-600 hover:bg-slate-50"
            >
              <p className="text-sm text-slate-500">← Previous</p>

              <p className="mt-2 font-semibold text-slate-900 group-hover:text-cyan-700">
                {previous.title}
              </p>
            </Link>
          )}
        </div>

        <div className="flex-1 text-right">
          {next && (
            <Link
              href={next.href}
              className="group block rounded-lg border border-slate-200 p-5 transition hover:border-cyan-600 hover:bg-slate-50"
            >
              <p className="text-sm text-slate-500">Next →</p>

              <p className="mt-2 font-semibold text-slate-900 group-hover:text-cyan-700">
                {next.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
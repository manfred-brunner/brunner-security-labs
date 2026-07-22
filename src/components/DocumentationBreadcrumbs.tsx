import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type DocumentationBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function DocumentationBreadcrumbs({
  items,
}: DocumentationBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLastItem ? (
                <Link
                  href={item.href}
                  className="transition hover:text-cyan-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLastItem ? "font-medium text-slate-700" : ""}
                  aria-current={isLastItem ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLastItem && (
                <span aria-hidden="true" className="text-slate-300">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
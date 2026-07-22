import Container from "./Container";
import DocumentationBreadcrumbs from "./DocumentationBreadcrumbs";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type DocumentationHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function DocumentationHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: DocumentationHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white pb-12 pt-16 md:pb-14 md:pt-20">
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            <DocumentationBreadcrumbs items={breadcrumbs} />
          </div>
        )}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </Container>
    </header>
  );
}
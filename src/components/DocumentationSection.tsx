import { ReactNode } from "react";

type DocumentationSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  alternate?: boolean;
};

export default function DocumentationSection({
  id,
  title,
  children,
  alternate = false,
}: DocumentationSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-lg px-6 py-10 ${
        alternate ? "bg-slate-50" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <div className="mt-6 space-y-6 leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}
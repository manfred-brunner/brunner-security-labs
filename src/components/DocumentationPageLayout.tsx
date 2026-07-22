import { ReactNode } from "react";
import Container from "./Container";
import DocumentationSidebar from "./DocumentationSidebar";

type DocumentationPageLayoutProps = {
  children: ReactNode;
};

export default function DocumentationPageLayout({
  children,
}: DocumentationPageLayoutProps) {
  return (
    <main className="bg-white text-slate-900">
      <Container>
        <div className="grid gap-12 py-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <DocumentationSidebar />

          <div className="min-w-0 space-y-4">{children}</div>
        </div>
      </Container>
    </main>
  );
}
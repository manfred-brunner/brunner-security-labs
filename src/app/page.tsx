import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import SecurityLifecycle from "@/components/SecurityLifecycle";
import LabOverview from "@/components/LabOverview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
       <LabOverview />
      <SecurityLifecycle />
    </main>
  );
}
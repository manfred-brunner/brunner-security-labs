import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import SecurityLifecycle from "@/components/SecurityLifecycle";
import LabOverview from "@/components/LabOverview";
import CoreSecurityDomains from "@/components/CoreSecurityDomains";
import EnterpriseSecurityArchitecture from "@/components/EnterpriseSecurityArchitecture";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import ExploreDocumentation from "@/components/ExploreDocumentation";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
      <EnterpriseSecurityArchitecture />
      <CoreSecurityDomains />
       <ImplementationRoadmap />
        <ExploreDocumentation />
    </main>
  );
}
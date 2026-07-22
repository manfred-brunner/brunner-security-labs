import DocumentationFigure from "@/components/DocumentationFigure";
import DocumentationHeader from "@/components/DocumentationHeader";
import DocumentationPageLayout from "@/components/DocumentationPageLayout";
import DocumentationPager from "@/components/DocumentationPager";
import DocumentationSection from "@/components/DocumentationSection";
import KeyObservations from "@/components/KeyObservations";

export default function IdentityPage() {
  return (
    <>
      <DocumentationHeader
        eyebrow="Security Controls"
        title="Identity & Access"
        description="Identity and access management provides the foundation of the enterprise security architecture. It ensures that users, administrators and devices can securely access enterprise resources according to their assigned responsibilities."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Security Controls",
            href: "/security-controls",
          },
          {
            label: "Identity & Access",
          },
        ]}
      />

      <DocumentationPageLayout>
        <DocumentationSection id="overview" title="Overview">
          <p>
            Identity is the primary security boundary within Brunner Security
            Labs. Every user, administrator and managed device must establish a
            trusted identity before accessing enterprise resources.
          </p>

          <p>
            Microsoft Entra ID provides the central identity platform for the
            lab. It supports authentication, authorization, administrative role
            management, device identities and integration with Microsoft 365,
            Microsoft Intune, Defender for Endpoint and Microsoft Sentinel.
          </p>
        </DocumentationSection>

        <DocumentationSection
          id="business-need"
          title="Business Need"
          alternate
        >
          <p>
            Cloud services and remote access have reduced the effectiveness of
            the traditional network perimeter. Access decisions can no longer
            rely only on whether a device is located inside a corporate
            network.
          </p>

          <p>
            Enterprise resources therefore require a central identity system
            capable of verifying who is requesting access, what privileges the
            identity possesses and whether additional authentication controls
            are required.
          </p>

          <div className="rounded-lg border-l-4 border-cyan-600 bg-cyan-50 px-6 py-5">
            <p className="font-semibold text-slate-900">
              Security objective
            </p>

            <p className="mt-2 text-slate-700">
              Ensure that access to enterprise resources is authenticated,
              authorized, traceable and limited according to business need.
            </p>
          </div>
        </DocumentationSection>

        <DocumentationSection id="architecture" title="Architecture">
          <p>
            Microsoft Entra ID acts as the central identity provider. Users
            authenticate through Entra ID before accessing Microsoft 365 and
            the security services connected to the lab.
          </p>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-4 text-center">
              <div className="rounded-md border border-slate-300 bg-white p-4 font-semibold text-slate-900">
                Users and Administrators
              </div>

              <div className="text-xl text-cyan-700">↓</div>

              <div className="rounded-md border border-cyan-300 bg-cyan-50 p-4 font-semibold text-slate-900">
                Microsoft Entra ID
              </div>

              <div className="text-xl text-cyan-700">↓</div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-md border border-slate-300 bg-white p-4">
                  Microsoft 365
                </div>

                <div className="rounded-md border border-slate-300 bg-white p-4">
                  Microsoft Intune
                </div>

                <div className="rounded-md border border-slate-300 bg-white p-4">
                  Security Services
                </div>
              </div>
            </div>
          </div>

          <p>
            Device identities are also registered in Entra ID. This establishes
            the connection between users, managed Windows devices and the
            security controls applied through Microsoft Intune and Defender for
            Endpoint.
          </p>
        </DocumentationSection>

        <DocumentationSection
          id="implementation"
          title="Implementation"
          alternate
        >
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Microsoft Entra tenant
            </h3>

            <p className="mt-3">
              A dedicated Microsoft tenant provides the identity and service
              foundation for Brunner Security Labs. The tenant is connected to
              Microsoft 365, Microsoft Intune, Defender for Endpoint and
              Microsoft Sentinel.
            </p>
          </div>

          <DocumentationFigure
            src="/images/identity/entra-tenant-overview.png"
            alt="Microsoft Entra tenant overview for Brunner Security Labs"
            caption="Figure 1. Microsoft Entra ID tenant overview. The tenant provides the central identity platform for Brunner Security Labs and supports the connected Microsoft security services."
            priority
          />

          <KeyObservations
            items={[
              "Microsoft Entra ID provides the central identity platform for the environment.",
              "The dedicated tenant separates the lab from unrelated personal environments.",
              "Microsoft Entra ID P1 capabilities are available within the tenant.",
              "The tenant provides the identity foundation for Microsoft 365 and Microsoft Intune.",
              "Tenant identifiers and temporary domain information are redacted from the published evidence.",
            ]}
          />

          <div className="pt-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Users, groups and administrative roles
            </h3>

            <p className="mt-3">
              Security and Microsoft 365 groups organize identities and devices
              according to their operational purpose. Dedicated groups support
              role-based administration, policy assignment and device
              targeting.
            </p>
          </div>

          <DocumentationFigure
            src="/images/identity/users-and-groups.png"
            alt="Security and Microsoft 365 groups configured in Microsoft Entra ID"
            caption="Figure 2. Microsoft Entra ID groups. Dedicated groups organize administrators, security personnel, users and managed Windows devices."
          />

          <KeyObservations
            items={[
              "Dedicated security groups separate administrative, security and standard-user responsibilities.",
              "The DG-Windows-Clients group is used to organize managed Windows endpoints.",
              "The SG-IT-Administrators group represents privileged administrative identities.",
              "The SG-Security-Team group supports separation of security responsibilities.",
              "Dynamic and assigned membership models are used according to the purpose of each group.",
            ]}
          />

          <div className="pt-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Authentication methods
            </h3>

            <p className="mt-3">
              Tenant-wide authentication method policies define which
              mechanisms users may register and use. Strong authentication
              methods reduce the risk that a compromised password alone can
              provide access to enterprise resources.
            </p>
          </div>

          <DocumentationFigure
            src="/images/identity/mfa-configuration.png"
            alt="Microsoft Entra ID authentication methods policy"
            caption="Figure 3. Authentication Methods Policy. Microsoft Entra ID defines which strong authentication mechanisms are available to users across the tenant."
          />

          <KeyObservations
            items={[
              "Microsoft Authenticator is enabled for tenant users.",
              "FIDO2 security keys are supported as a phishing-resistant authentication method.",
              "Temporary Access Pass is enabled to support controlled onboarding and recovery scenarios.",
              "Software OATH tokens are available as an additional authentication option.",
              "SMS and voice-call authentication remain disabled because they provide weaker protection.",
            ]}
          />

          <div className="pt-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Device identity
            </h3>

            <p className="mt-3">
              The Windows lab endpoint is joined to Microsoft Entra ID and
              enrolled in Microsoft Intune. This creates a trusted device
              identity that can be evaluated by management, compliance and
              endpoint security services.
            </p>
          </div>

          <DocumentationFigure
            src="/images/identity/entra-joined-device.png"
            alt="Windows endpoint joined to Microsoft Entra ID and managed by Microsoft Intune"
            caption="Figure 4. Microsoft Entra joined Windows endpoint. The device is managed through Microsoft Intune and evaluated against organizational compliance requirements."
          />

          <KeyObservations
            items={[
              "The Windows endpoint is Microsoft Entra joined.",
              "Microsoft Intune provides mobile device management for the endpoint.",
              "Security settings are also managed through Microsoft Intune.",
              "The device is reported as compliant with the configured requirements.",
              "The endpoint belongs to the DG-Windows-Clients device group.",
            ]}
          />
        </DocumentationSection>

        <DocumentationSection id="validation" title="Validation">
          <p>
            Identity controls are validated through administrative records,
            device state and authentication telemetry.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>User authentication succeeds with the expected identity.</li>
            <li>
              Strong authentication methods are enabled through tenant-wide
              policies.
            </li>
            <li>
              The Windows endpoint appears as a Microsoft Entra joined device.
            </li>
            <li>
              Microsoft Intune reports the endpoint as managed and compliant.
            </li>
            <li>
              Authentication events are recorded in Microsoft Entra sign-in
              logs.
            </li>
          </ul>

          <DocumentationFigure
            src="/images/identity/sign-in-logs.png"
            alt="Microsoft Entra sign-in logs showing successful authentication events"
            caption="Figure 5. Microsoft Entra sign-in logs. Interactive authentication events are recorded centrally and provide evidence for auditing, troubleshooting and security monitoring."
          />

          <KeyObservations
            items={[
              "Interactive user sign-ins are centrally logged by Microsoft Entra ID.",
              "Each event can be associated with the application and resource that were accessed.",
              "The event status provides evidence of successful or failed authentication attempts.",
              "Sign-in telemetry supports auditing, troubleshooting and incident investigation.",
              "Microsoft Entra sign-in data can be integrated with Microsoft Sentinel for centralized monitoring and detection.",
            ]}
          />
        </DocumentationSection>

        <DocumentationSection
          id="future-work"
          title="Future Work"
          alternate
        >
          <p>
            The next stage will strengthen identity protection by introducing
            more contextual, risk-based and privileged-access controls.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Conditional Access policies</li>
            <li>Separate emergency access accounts</li>
            <li>Passwordless authentication</li>
            <li>Privileged Identity Management</li>
            <li>Periodic access reviews</li>
            <li>Identity risk monitoring</li>
          </ul>

          <div className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5">
            <p className="font-semibold text-amber-900">
              Planned implementation
            </p>

            <p className="mt-2 text-amber-800">
              Conditional Access is documented as future work until appropriate
              policies have been configured, tested and validated in the lab.
            </p>
          </div>
        </DocumentationSection>

        <DocumentationPager
          previous={{
            title: "Security Controls",
            href: "/security-controls",
          }}
          next={{
            title: "Endpoint Security",
            href: "/security-controls/endpoints",
          }}
        />
      </DocumentationPageLayout>
    </>
  );
}

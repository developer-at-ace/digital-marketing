import Image from "next/image";

const platforms = [
  { name: "AWS", image: "/brand-logos/marquee/aws.png" },
  { name: "Oracle", image: "/brand-logos/marquee/oracle.png" },
  { name: "Salesforce", image: "/brand-logos/marquee/salesforce.png" },
  { name: "Microsoft Azure", image: "/brand-logos/marquee/azure.png" },
  { name: "Google Cloud", image: "/brand-logos/marquee/google.png" },
  { name: "SAP", image: "/brand-logos/marquee/sap.png" },
  { name: "ServiceNow", image: "/brand-logos/marquee/servicenow.png" },
  { name: "HubSpot", image: "/brand-logos/marquee/hubspot.png" },
];

function PlatformSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="platform-marquee-set" aria-hidden={hidden || undefined}>
      {platforms.map(({ name, image }) => (
        <li className="platform-marquee-item" key={name}>
          <Image
            className="platform-marquee-logo"
            src={image}
            alt={hidden ? "" : name}
            width={150}
            height={54}
            sizes="150px"
          />
        </li>
      ))}
    </ul>
  );
}

export function PlatformMarquee() {
  return (
    <section className="platform-marquee-section" aria-label="Technology platforms">
      <div className="platform-marquee-window">
        <div className="platform-marquee-track">
          <PlatformSet />
          <PlatformSet hidden />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionHeading from "../../../components/SectionHeading";
import InfoCard from "../../../components/InfoCard";
import ValueCard from "../../../components/ValueCard";
import CTASection from "../../../components/CTASection";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

export const metadata = {
  title: "About Us | Corporate Profile & Legal Governance",
  description:
    "Learn about FP CONSTRUCTION: a French SASU headquartered in Le Havre, Normandy, registered under RCS 106 568 231, specialized in civil infrastructure, materials trade, and logistics.",
};

export default function AboutPage() {
  const legalData = [
    {
      label: "Official Corporate Name",
      value: "FP CONSTRUCTION",
      subtext: "Commercial brand and registered legal entity name",
      icon: "solar:buildings-bold",
      highlight: true,
    },
    {
      label: "Legal Structure",
      value: "SASU",
      subtext: "Société par actions simplifiée à associé unique (Single-shareholder company)",
      icon: "solar:document-text-bold",
    },
    {
      label: "Commercial Registry (RCS)",
      value: "106 568 231 R.C.S. Le Havre",
      subtext: "Greffe du Tribunal de Commerce du Havre",
      icon: "solar:diploma-verified-bold",
    },
    {
      label: "European ID / Intra-Community VAT",
      value: "FR7606.106568231",
      subtext: "Official European Single Market identification number",
      icon: "solar:global-bold",
    },
    {
      label: "Registered Capital",
      value: "€1,000.00",
      subtext: "Fully subscribed initial corporate share capital",
      icon: "solar:card-bold",
    },
    {
      label: "Registration Date",
      value: "19/06/2026",
      subtext: "Official date of registration and inception",
      icon: "solar:calendar-date-bold",
    },
    {
      label: "Company Duration",
      value: "Until 19/06/2125",
      subtext: "Statutory duration of 99 years under French corporate law",
      icon: "solar:clock-circle-bold",
    },
    {
      label: "Financial Year Closing",
      value: "December 31",
      subtext: "First financial year closing on 31/12/2026",
      icon: "solar:chart-square-bold",
    },
    {
      label: "Corporate President",
      value: "Dionysios Georgopoulos",
      subtext: "Executive President · Greek Nationality",
      icon: "solar:user-circle-bold",
    },
    {
      label: "Corporate Headquarters",
      value: "5 Rue Armand Carrel",
      subtext: "76620 Le Havre, Normandy, France",
      icon: "solar:map-point-wave-bold",
      highlight: true,
    },
  ];

  const values = [
    {
      title: "Commercial Reliability",
      subtitle: "Integrity in Execution",
      description:
        "Transparent contracts, verified supply timelines, and strictly validated materials conforming to specified grades and standards.",
      icon: "solar:shield-check-bold",
    },
    {
      title: "Technical Quality",
      subtitle: "Engineering Standards",
      description:
        "Rigorous adherence to French and European civil engineering codes (NF DTU, Eurocodes) across road works, utilities, and building trades.",
      icon: "solar:stars-bold",
    },
    {
      title: "Operational Professionalism",
      subtitle: "Field Safety & Governance",
      description:
        "Disciplined site coordination, mandatory PPE compliance, trench safety protections, and respectful collaboration with local stakeholders.",
      icon: "solar:user-hand-up-bold",
    },
    {
      title: "Logistical Efficiency",
      subtitle: "Port & Freight Agility",
      description:
        "Leveraging the Port of Le Havre for intermodal distribution, rapid customs handling, and timely replenishment of critical construction goods.",
      icon: "solar:box-minimalistic-bold",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Page Header (Cinematic Dark) */}
      <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Corporate Identity"
            title="Rooted in Normandy. Built for infrastructure & trade."
            description="FP CONSTRUCTION is a legally incorporated French simplified joint-stock company (SASU) combining regional civil construction capabilities with international materials distribution through the maritime hub of Le Havre."
            theme="dark"
            eyebrowVariant="mint"
            className="mb-8"
          />

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#c1fbd4] font-mono">
              R.C.S. Le Havre 106 568 231
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/90">
              European ID: FR7606.106568231
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#c1fbd4]/15 border border-[#c1fbd4]/30 text-xs text-[#c1fbd4]">
              Corporate Seat: Le Havre, France
            </span>
          </div>
        </div>
      </section>

      {/* 2. Company Narrative & Operational Context */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Mission & Origin"
                title="Strategic position at France's premier maritime container port."
                description="Founded and established in Le Havre, FP CONSTRUCTION addresses the intersection of heavy infrastructure demand and wholesale material logistics. The city of Le Havre represents a strategic maritime bridgehead, offering unmatched logistical reach into Normandy, the Greater Paris Basin, and international trade routes."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed">
                <p>
                  As an officially registered single-shareholder simplified joint-stock company (SASU), our activities span from the physical execution of road infrastructure and urban utility networks (VRD) to the bulk supply of certified construction materials, hardware, and permitted international commodities.
                </p>
                <p>
                  Led by executive president Dionysios Georgopoulos, our governance philosophy prioritizes clear contractual boundaries, compliant documentation, and authentic field performance without unsubstantiated marketing claims.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary-pill"
                  icon={<Icon icon="solar:letter-bold" width={18} height={18} />}
                >
                  Contact Management & HQ
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#e4e4e7] shadow-level-3 bg-zinc-100">
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src="/images/about/company-operations.jpg"
                    alt="FP CONSTRUCTION engineers and site coordinators reviewing construction blueprints and plans"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase font-semibold text-[#c1fbd4] tracking-wider mb-1">
                      Technical Governance
                    </p>
                    <h4 className="text-lg font-medium">
                      Site Coordination & Project Blueprint Review
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Legal & Commercial Registry Data */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal Registration"
            title="Official corporate registry & statutory parameters."
            description="Verified corporate identification data filed with the Greffe du Tribunal de Commerce du Havre. All information presented below reflects our official French commercial registry entry."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalData.map((item, idx) => (
              <InfoCard key={idx} {...item} />
            ))}
          </div>

          {/* Registered Office Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#e4e4e7] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-semibold text-[#71717a] tracking-wider">
                Official Registered Domicile
              </span>
              <h3 className="text-xl font-semibold text-black">
                5 Rue Armand Carrel, 76620 Le Havre, France
              </h3>
              <p className="text-sm text-[#52525b]">
                All official notices, commercial contracts, and supply chain correspondences are routed through our registered corporate seat.
              </p>
            </div>
            <Button
              href="/contact"
              variant="outline-on-light"
              className="shrink-0"
              icon={<Icon icon="solar:map-point-bold" width={18} height={18} />}
            >
              Locate Headquarters
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Port of Le Havre Strategic Advantage */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#e4e4e7] shadow-level-3">
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src="/images/about/le-havre-port.jpg"
                    alt="Port of Le Havre container terminals and intermodal freight hub"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase font-semibold text-[#c1fbd4] tracking-wider mb-1">
                      Normandy Maritime Gateway
                    </p>
                    <h4 className="text-lg font-medium">
                      Port of Le Havre · Intermodal Trade Infrastructure
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHeading
                eyebrow="Logistical Infrastructure"
                title="Direct linkage to European and international supply routes."
                description="Le Havre is one of France's vital economic engines and the leading deep-water container port on the Seine corridor. This position empowers FP CONSTRUCTION with distinct supply chain advantages."
              />

              <div className="space-y-3 text-sm text-[#52525b]">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <h4 className="font-semibold text-black mb-1">Maritime Ingestion & Customs</h4>
                  <p>Streamlined customs processing and containerized cargo handling for incoming construction materials, steel, and hardware.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <h4 className="font-semibold text-black mb-1">Regional Highway Connectivity</h4>
                  <p>Immediate access to major motorways (A13, A29) serving Rouen, Caen, Paris, and the broader Northern France economic area.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <h4 className="font-semibold text-black mb-1">Storage & Bulk Distribution</h4>
                  <p>Coordination of bulk construction aggregate, timber, and building supplies directly to job sites across Normandy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Operating Principles & Values */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Commitments"
            title="Principles driving our daily site operations & client relations."
            description="We build our reputation on execution consistency, technical honesty, and disciplined adherence to agreed specifications."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <ValueCard key={idx} {...v} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection
        title="Partner with FP CONSTRUCTION on your next project or order."
        description="Whether you require verified material supply, road work contracting, or utility installations, our Le Havre team is at your disposal."
        theme="dark"
      />
    </div>
  );
}

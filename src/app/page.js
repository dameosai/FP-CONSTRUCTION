import Link from "next/link";
import Image from "next/image";
import Hero from "../../components/Hero";
import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import ValueCard from "../../components/ValueCard";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export const metadata = {
  title: "FP CONSTRUCTION | Civil Infrastructure, Materials & Trading",
  description:
    "FP CONSTRUCTION: Civil engineering, road infrastructure, utility VRD networks, building trades, and wholesale supply of construction materials and hardware based in Le Havre.",
};

export default function HomePage() {
  const coreServices = [
    {
      title: "Construction Materials",
      subtitle: "Trading & Supply",
      description:
        "Wholesale supply, sourcing, and logistics for aggregates, structural steel, ready-mix concrete, masonry blocks, and timber.",
      image: "/images/services/materials.jpg",
      icon: "solar:box-minimalistic-bold",
      badge: "Wholesale & Logistics",
      capabilities: [
        "Certified structural steel & rebar",
        "Masonry blocks, aggregates & cement",
        "Direct-to-site bulk delivery in Normandy",
      ],
      href: "/services#materials",
    },
    {
      title: "Industrial Hardware",
      subtitle: "Quincaillerie & Tools",
      description:
        "Comprehensive distribution of commercial hardware, fasteners, specialized job-site tools, safety systems, and technical fittings.",
      image: "/images/services/hardware.jpg",
      icon: "solar:wrench-bold",
      badge: "Industrial Distribution",
      capabilities: [
        "High-tensile fasteners & bolts",
        "Commercial power tools & equipment",
        "Site safety gear & PPE compliant with EU norms",
      ],
      href: "/services#hardware",
    },
    {
      title: "Road Works",
      subtitle: "Travaux Routiers",
      description:
        "Execution of civil roadway construction, asphalt surfacing, pavement rehabilitation, site access roads, and municipal transport corridors.",
      image: "/images/services/road-works.jpg",
      icon: "solar:traffic-light-bold",
      badge: "Civil Infrastructure",
      capabilities: [
        "Asphalt paving and compaction",
        "Roadway rehabilitation & subgrade stabilization",
        "Industrial access road construction",
      ],
      href: "/services#road-works",
    },
    {
      title: "Utility & VRD Networks",
      subtitle: "Voirie et Réseaux Divers",
      description:
        "Earthmoving, stormwater drainage pipelines, potable water mains, sanitary sewer installation, and dry utility conduit trenches.",
      image: "/images/services/vrd-utility.jpg",
      icon: "solar:water-sun-bold",
      badge: "Municipal & Civil",
      capabilities: [
        "Deep trench excavation & safety shoring",
        "Stormwater and wastewater gravity networks",
        "Underground electrical & telecommunications conduits",
      ],
      href: "/services#vrd",
    },
    {
      title: "General Building Trades",
      subtitle: "Bâtiment Général",
      description:
        "Structural masonry, reinforced concrete frameworks, structural alterations, interior and exterior building execution for commercial sites.",
      image: "/images/services/building-trades.jpg",
      icon: "solar:city-bold",
      badge: "Structural Works",
      capabilities: [
        "Reinforced concrete casting & formwork",
        "Commercial masonry & partition walls",
        "Complete building envelope execution",
      ],
      href: "/services#building",
    },
    {
      title: "Import & Export",
      subtitle: "Port of Le Havre Logistics",
      description:
        "International shipping, procurement, customs clearance, and intermodal freight of construction materials and unregulated commercial goods.",
      image: "/images/services/import-export.jpg",
      icon: "solar:delivery-bold",
      badge: "Maritime & Freight",
      capabilities: [
        "Containerized cargo handling at Port of Le Havre",
        "EU customs compliance & documentation",
        "Global supplier sourcing & trade facilitation",
      ],
      href: "/services#import-export",
    },
  ];

  const whyPoints = [
    {
      title: "Institutional Reliability",
      subtitle: "Legal & Regulatory Rigor",
      description:
        "Operating as a legally registered French SASU (106 568 231 R.C.S. Le Havre) with complete transparency, valid corporate standing, and strict European commercial compliance.",
      icon: "solar:shield-check-bold",
    },
    {
      title: "Strategic Port Proximity",
      subtitle: "Port of Le Havre Gateway",
      description:
        "Based in Le Havre—France’s premier container port—providing immediate maritime transit lanes, seamless customs transit, and efficient transport across Normandy and Europe.",
      icon: "solar:map-point-wave-bold",
    },
    {
      title: "Dual-Sector Capability",
      subtitle: "Works & Material Procurement",
      description:
        "Uniquely positioned to both supply high-grade raw building materials and execute specialized civil engineering, road works, and VRD infrastructure operations.",
      icon: "solar:diagram-up-bold",
    },
    {
      title: "Strict Standards Adherence",
      subtitle: "Norms & Safety First",
      description:
        "All materials, hardware items, and civil interventions comply strictly with French NF standards, Eurocodes, and workplace safety regulations.",
      icon: "solar:check-circle-bold",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Company Introduction Band (Warm Cream Canvas) */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Company Overview"
                title="A disciplined partner for infrastructure & construction supply."
                description="FP CONSTRUCTION combines civil engineering discipline with agile international supply chain capabilities. Based at 5 Rue Armand Carrel in Le Havre, we support contractors, municipalities, and commercial developers with reliable materials and robust field execution."
              />
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href="/about"
                  variant="primary-pill"
                  icon={<Icon icon="solar:arrow-right-linear" width={16} height={16} />}
                >
                  Discover Company Profile
                </Button>
                <Button
                  href="/contact"
                  variant="outline-on-light"
                >
                  Contact HQ
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white border border-[#e4e4e7] shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#c1fbd4] flex items-center justify-center text-black">
                    <Icon icon="solar:buildings-bold" width={20} height={20} />
                  </div>
                  <h3 className="font-semibold text-base text-black">
                    Civil Infrastructure & VRD
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                    Executing roadway resurfacing, trench excavation, stormwater piping, and underground utility connectivity according to municipal norms.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#e4e4e7] shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4f9e0] flex items-center justify-center text-black">
                    <Icon icon="solar:box-minimalistic-bold" width={20} height={20} />
                  </div>
                  <h3 className="font-semibold text-base text-black">
                    Materials & Hardware Trading
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                    Wholesale sourcing and distribution of structural timber, aggregates, steel rebar, industrial fasteners, and certified site equipment.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#e4e4e7] shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                    <Icon icon="solar:global-bold" width={20} height={20} />
                  </div>
                  <h3 className="font-semibold text-base text-black">
                    Import & Export Gateway
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                    Direct access to maritime container shipping at the Port of Le Havre for wholesale materials and unregulated commodities.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#e4e4e7] shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                    <Icon icon="solar:diploma-verified-bold" width={20} height={20} />
                  </div>
                  <h3 className="font-semibold text-base text-black">
                    French Legal SASU Standing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                    Single-shareholder simplified joint-stock company registered with the Le Havre Registry (RCS 106 568 231) with 99-year corporate duration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Operational Scope"
              title="Full-spectrum solutions for construction & material procurement."
              description="Explore the core licensed activities of FP CONSTRUCTION across building trades, civil engineering, and wholesale product distribution."
            />
            <Button
              href="/services"
              variant="outline-on-light"
              className="shrink-0"
              icon={<Icon icon="solar:arrow-right-linear" width={16} height={16} />}
            >
              View Full Services Directory
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why FP CONSTRUCTION (Values & Guarantees) */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Corporate Values"
            title="Engineered on trust, transparency, and operational rigor."
            description="Our approach to civil works and material trade is grounded in verifiable legal governance, punctual logistics, and strict compliance with European construction norms."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((item, idx) => (
              <ValueCard key={idx} {...item} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas of Expertise Preview (Dark Cinematic Band) */}
      <section className="py-20 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Technical Capabilities"
                title="Comprehensive competence across infrastructure & supply chains."
                description="Rather than projecting speculative achievements, FP CONSTRUCTION articulates clear, verifiable operational domains. From utility network trenching to intermodal freight logistics at the Port of Le Havre, our competencies address real industrial challenges."
                theme="dark"
                eyebrowVariant="mint"
              />

              <div className="space-y-3 pt-2">
                {[
                  "Road network construction and asphalt surfacing",
                  "Underground utility trenches & Voirie et Réseaux Divers (VRD)",
                  "Wholesale trading of high-grade construction materials",
                  "Direct freight reception & dispatch at Port of Le Havre",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-[#c1fbd4]/20 text-[#c1fbd4] flex items-center justify-center shrink-0">
                      <Icon icon="solar:check-circle-bold" width={14} height={14} />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  href="/expertise"
                  variant="aloe-pill"
                  icon={<Icon icon="solar:arrow-right-linear" width={18} height={18} />}
                >
                  Explore Detailed Capabilities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/services/vrd-utility.jpg"
                    alt="FP CONSTRUCTION VRD utilities and municipal trenching operations"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-wider text-[#c1fbd4] font-semibold mb-1">
                      Normandy Infrastructure Focus
                    </p>
                    <h4 className="text-white text-lg font-medium">
                      Site Development & Civil VRD Networks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Corporate Call To Action */}
      <CTASection
        title="Looking for a reliable materials supplier or civil works partner?"
        description="Contact our headquarters at 5 Rue Armand Carrel in Le Havre. Our team handles direct volume orders, logistics scheduling, and construction project specifications."
        theme="light"
      />
    </div>
  );
}

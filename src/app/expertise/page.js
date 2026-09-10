import Image from "next/image";
import SectionHeading from "../../../components/SectionHeading";
import CTASection from "../../../components/CTASection";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

export const metadata = {
  title: "Areas of Expertise & Technical Capabilities | FP CONSTRUCTION",
  description:
    "Discover the specialized technical domains of FP CONSTRUCTION: civil road infrastructure, VRD network systems, structural building works, and global material distribution.",
};

export default function ExpertisePage() {
  const expertiseDomains = [
    {
      id: "road-infrastructure",
      title: "Road Infrastructure & Pavement Engineering",
      category: "Civil Works Domain",
      description:
        "Comprehensive capability in constructing durable transportation infrastructure, from foundation stabilization to high-performance asphalt wear courses.",
      image: "/images/expertise/road-infrastructure.jpg",
      scopeItems: [
        {
          title: "Subgrade Geotechnical Preparation",
          detail: "Compaction testing, lime/cement stabilization of clay soils, and granular sub-base profiling to prevent subsidence.",
        },
        {
          title: "Asphalt Surfacing & Wearing Layers",
          detail: "Precision hot-mix bituminous paving engineered for heavy industrial axle loadings and long-term climate durability.",
        },
        {
          title: "Urban Traffic Corridors & Roundabouts",
          detail: "Curbs, pedestrian islands, stormwater gutters, and roadway junction engineering conforming to French highway safety regulations.",
        },
        {
          title: "Access Roads & Heavy Logistics Yards",
          detail: "High-capacity paved circulation surfaces designed specifically for freight trucks, container yards, and industrial parks.",
        },
      ],
    },
    {
      id: "utility-vrd",
      title: "Utility Works & Municipal VRD Networks",
      category: "Voirie et Réseaux Divers",
      description:
        "Specialized underground infrastructure engineering connecting residential, commercial, and industrial facilities to public distribution grids.",
      image: "/images/expertise/urban-networks.jpg",
      scopeItems: [
        {
          title: "Stormwater Infiltration & Management",
          detail: "Installation of high-capacity retention basins, attenuation crates, permeable drainage lines, and oil/sediment separators.",
        },
        {
          title: "Wastewater & Sanitation Collectors",
          detail: "Gravity sewer pipelines (PVC, ductile iron, concrete) with watertight inspection manholes and laser-calibrated slopes.",
        },
        {
          title: "Potable Water Network Extensions",
          detail: "Pressure testing, hydrant supply networks, backflow prevention, and municipal main tie-ins.",
        },
        {
          title: "Dry Utility Conduits (Telecom & Power)",
          detail: "Underground duct banks, draw-boxes, and warning grids for fiber optic communication and medium/low voltage electricity.",
        },
      ],
    },
    {
      id: "building-engineering",
      title: "Building Construction & Structural Works",
      category: "Gros Œuvre & Structure",
      description:
        "Core structural engineering and execution capabilities for commercial properties, warehouses, and multi-trade building alterations.",
      image: "/images/expertise/building-engineering.jpg",
      scopeItems: [
        {
          title: "Reinforced Concrete Structures",
          detail: "Engineered formwork, steel reinforcement placement, and controlled concrete pours for foundations, columns, and structural slabs.",
        },
        {
          title: "Load-Bearing Masonry Systems",
          detail: "Precision blockwork and brick masonry engineered to Eurocode 6 standards for thermal, acoustic, and structural performance.",
        },
        {
          title: "Industrial Enclosures & Facade Substructures",
          detail: "Durable exterior building envelopes designed to withstand maritime coastal conditions in the Normandy region.",
        },
        {
          title: "Structural Rehabilitation & Openings",
          detail: "Safe shoring, load redistribution, steel lintel installations, and structural adaptations for existing commercial edifices.",
        },
      ],
    },
    {
      id: "materials-supply",
      title: "Construction Materials Procurement & Supply Chain",
      category: "Wholesale Materials Logistics",
      description:
        "End-to-end supply chain integration connecting certified international manufacturers and regional quarries to active construction sites.",
      image: "/images/expertise/material-supply-chain.jpg",
      scopeItems: [
        {
          title: "Bulk Aggregate & Cement Logistics",
          detail: "Scheduled deliveries of sand, gravel, ballast, and bulk cement directly to batch plants and project sites.",
        },
        {
          title: "Structural Steel & Metallurgy Distribution",
          detail: "Certified rebar, welded mesh, structural steel beams (IPE, HEA), and custom cut-to-length profiles.",
        },
        {
          title: "Commercial Hardware & Fastener Systems",
          detail: "Broad inventory of mechanical anchors, structural bolts, safety gear, and industrial equipment from leading brands.",
        },
        {
          title: "Maritime Freight Ingestion at Port of Le Havre",
          detail: "Direct container offloading, intermodal transfer, and customs documentation for international materials import/export.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header (Cinematic Dark) */}
      <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities & Scope"
            title="Areas of Technical Expertise."
            description="A transparent presentation of FP CONSTRUCTION's engineering capabilities, operational competencies, and supply chain infrastructure. We present our real technical scope without fabricated project claims."
            theme="dark"
            eyebrowVariant="mint"
            className="mb-8"
          />

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-2xl text-xs text-[#a1a1aa] leading-relaxed">
            <p className="font-semibold text-white mb-1">Authenticity & Disclosure Policy:</p>
            <p>
              In accordance with ethical commercial practices and our SASU governance standards, the capabilities below represent our verified technical scope of work and trade proficiencies rather than speculative portfolio entries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Technical Domains (Cream / Light Canvas) */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {expertiseDomains.map((domain, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={domain.id}
                id={domain.id}
                className="scroll-mt-28 p-6 sm:p-10 rounded-2xl bg-white border border-[#e4e4e7] shadow-level-3"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-[#e4e4e7] shadow-sm">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={domain.image}
                          alt={domain.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#c1fbd4] text-[11px] font-medium border border-white/20">
                            {domain.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content & Deliverables */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <span className="text-xs uppercase font-semibold text-[#71717a] tracking-wider block mb-1">
                        {domain.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight leading-snug">
                        {domain.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#52525b] mt-3 leading-relaxed">
                        {domain.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-zinc-100">
                      {domain.scopeItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#c1fbd4] text-black flex items-center justify-center shrink-0 mt-0.5">
                            <Icon icon="solar:check-circle-bold" width={14} height={14} />
                          </div>
                          <div className="text-xs sm:text-sm">
                            <strong className="text-black block font-semibold">
                              {item.title}
                            </strong>
                            <span className="text-[#52525b] leading-relaxed">
                              {item.detail}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Button
                        href="/contact"
                        variant="primary-pill"
                        className="text-sm"
                        icon={<Icon icon="solar:arrow-right-linear" width={16} height={16} />}
                      >
                        Inquire About This Capability
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Standards, Compliance & Quality Controls */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Framework"
            title="Strict adherence to French & European technical norms."
            description="Our civil engineering interventions and material distribution conform to national building codes, environmental directives, and certified material specifications."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#fbfbf5] border border-[#e4e4e7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#c1fbd4] text-black flex items-center justify-center">
                <Icon icon="solar:shield-check-bold" width={22} height={22} />
              </div>
              <h4 className="font-semibold text-lg text-black">French NF DTU Standards</h4>
              <p className="text-sm text-[#52525b] leading-relaxed">
                Execution of masonry, concrete structural works, and utility connections following Documents Techniques Unifiés (DTU) criteria.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbfbf5] border border-[#e4e4e7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#d4f9e0] text-black flex items-center justify-center">
                <Icon icon="solar:ruler-angular-bold" width={22} height={22} />
              </div>
              <h4 className="font-semibold text-lg text-black">Eurocodes Structural Design</h4>
              <p className="text-sm text-[#52525b] leading-relaxed">
                Validation of material resistances, rebar tensile characteristics, and geotechnical soil compatibility under European unified codes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbfbf5] border border-[#e4e4e7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200 text-black flex items-center justify-center">
                <Icon icon="solar:traffic-light-bold" width={22} height={22} />
              </div>
              <h4 className="font-semibold text-lg text-black">Workplace Safety & Security</h4>
              <p className="text-sm text-[#52525b] leading-relaxed">
                Mandatory trench protection boxes, personal protective equipment (PPE), and clear jobsite marking adhering to French labor codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection
        title="Require technical consultation or materials allocation?"
        description="Reach out to FP CONSTRUCTION's engineering and trading team in Le Havre to discuss your operational requirements."
        theme="dark"
      />
    </div>
  );
}

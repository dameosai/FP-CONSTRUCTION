import SectionHeading from "../../../components/SectionHeading";
import ServiceCard from "../../../components/ServiceCard";
import CTASection from "../../../components/CTASection";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

export const metadata = {
  title: "Commercial Services & Activities | FP CONSTRUCTION",
  description:
    "Explore the 7 core registered activities of FP CONSTRUCTION: construction materials, hardware, road works, VRD utility networks, general building trades, import/export, and unregulated goods.",
};

export default function ServicesPage() {
  const allServices = [
    {
      id: "materials",
      title: "Construction Materials Trading",
      subtitle: "Achat & Vente de Matériaux de Construction",
      description:
        "Comprehensive wholesale buying, selling, and sourcing of structural construction materials for commercial contractors, civil engineering sites, and industrial builders.",
      image: "/images/services/materials.jpg",
      icon: "solar:box-minimalistic-bold",
      badge: "Core Activity",
      capabilities: [
        "Certified structural steel beams, rebar & mesh",
        "Portland cement, pre-mixed mortars & concrete additives",
        "Granular aggregates, crushed stone & specialized sand",
        "Structural timber, formwork panels & plywood sheets",
        "Pre-cast concrete blocks, kerbs & paving slabs",
      ],
      href: "/contact?service=materials",
    },
    {
      id: "hardware",
      title: "Hardware Items & Tooling",
      subtitle: "Commerce de Quincaillerie",
      description:
        "Specialized trading and supply of professional-grade hardware, mechanical fasteners, electrical and plumbing fixings, site safety apparatus, and industrial hand and power tools.",
      image: "/images/services/hardware.jpg",
      icon: "solar:wrench-bold",
      badge: "Commercial Distribution",
      capabilities: [
        "High-grade bolts, anchors, rivets & structural fixings",
        "Industrial power tools, cutting discs & consumables",
        "Job-site PPE: certified safety helmets, boots & harnesses",
        "Site security locks, fencing hardware & chain supplies",
        "Plumbing & HVAC mechanical connectors and seals",
      ],
      href: "/contact?service=hardware",
    },
    {
      id: "road-works",
      title: "Road Works & Paving",
      subtitle: "Travaux Routiers",
      description:
        "Execution of civil roadway works including earthmoving, base course preparation, asphalt paving, road resurfacing, curb installations, and industrial parking lots.",
      image: "/images/services/road-works.jpg",
      icon: "solar:traffic-light-bold",
      badge: "Civil Infrastructure",
      capabilities: [
        "Subgrade excavation, grading & mechanical compaction",
        "Bituminous asphalt laying & hot-mix surface courses",
        "Pavement milling, repair & crack sealing",
        "Industrial roadway access & logistics yard paving",
        "Road markings, signage foundation & curb installations",
      ],
      href: "/contact?service=road-works",
    },
    {
      id: "vrd",
      title: "Utility Works / VRD",
      subtitle: "Voirie et Réseaux Divers",
      description:
        "Underground infrastructure and network development essential for building integration: stormwater management, wastewater sewer networks, potable water conduits, and dry utilities.",
      image: "/images/services/vrd-utility.jpg",
      icon: "solar:water-sun-bold",
      badge: "Networks & Sanitation",
      capabilities: [
        "Deep trenching with certified trench box safety shoring",
        "Stormwater attenuation cells & rainwater drainage culverts",
        "Sanitary sewer piping with inspection manholes",
        "Underground electrical ducting & telecommunication conduits",
        "Water distribution mains & connection to municipal mains",
      ],
      href: "/contact?service=vrd",
    },
    {
      id: "building",
      title: "General Building Trades",
      subtitle: "Bâtiment Général",
      description:
        "Execution of general structural and finishing building trades. Our field capabilities cover core structural masonry, reinforced concrete structures, and commercial building repairs.",
      image: "/images/services/building-trades.jpg",
      icon: "solar:city-bold",
      badge: "Structural Works",
      capabilities: [
        "Cast-in-place reinforced concrete columns, beams & slabs",
        "Structural masonry, brickwork & load-bearing blockwork",
        "Commercial interior partition walls & drywall systems",
        "Exterior facade works & perimeter boundary enclosures",
        "Structural renovation, opening alterations & lintel placements",
      ],
      href: "/contact?service=building",
    },
    {
      id: "import-export",
      title: "Import & Export Operations",
      subtitle: "Commerce International & Fret",
      description:
        "Cross-border trading and freight handling for construction materials, industrial equipment, and permitted commercial merchandise through Port of Le Havre container terminals.",
      image: "/images/services/import-export.jpg",
      icon: "solar:delivery-bold",
      badge: "Maritime Trade",
      capabilities: [
        "Full Container Load (FCL) and Less than Container Load (LCL) reception",
        "Cross-docking and container stripping at Le Havre port area",
        "European customs declarations, tariff codes & compliance",
        "International vendor procurement & supplier verification",
        "Multimodal road freight dispatch throughout France and the EU",
      ],
      href: "/contact?service=import-export",
    },
    {
      id: "unregulated-goods",
      title: "Unregulated Goods & Products",
      subtitle: "Achat, Vente, Import-Export de Produits Non Réglementés",
      description:
        "Commercial buying, selling, and international trade of unregulated commodities, general merchandise, industrial consumables, and packaged commercial goods.",
      image: "/images/about/le-havre-port.jpg",
      icon: "solar:shop-bold",
      badge: "Commercial Trading",
      capabilities: [
        "Spot-market commodity purchasing and wholesale redistribution",
        "Commercial consumer goods trade within legal EU frameworks",
        "Warehousing and consolidation of diverse inventory lines",
        "Cross-border transaction documentation & bill of lading handling",
        "Flexible procurement solutions tailored to business needs",
      ],
      href: "/contact?service=unregulated-goods",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero (Cinematic Dark) */}
      <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Catalog"
            title="Comprehensive services & trading solutions."
            description="FP CONSTRUCTION holds formal statutory authority across 7 key activity sectors under French corporate registry 106 568 231 R.C.S. Le Havre. Discover our exact capabilities below."
            theme="dark"
            eyebrowVariant="mint"
            className="mb-8"
          />

          {/* Quick jump anchor tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { label: "Materials", href: "#materials" },
              { label: "Hardware", href: "#hardware" },
              { label: "Road Works", href: "#road-works" },
              { label: "VRD / Utility", href: "#vrd" },
              { label: "Building Trades", href: "#building" },
              { label: "Import / Export", href: "#import-export" },
              { label: "Unregulated Products", href: "#unregulated-goods" },
            ].map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-colors"
              >
                {tag.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Services Detailed Showcase (Cream / Light Canvas) */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-28">
                <ServiceCard {...service} theme="light" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Procurement & Commercial Process Band */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Procurement Workflow"
            title="How we engage with contractors & corporate buyers."
            description="Our procurement and field execution processes are structured for accountability, speed, and exact specification adherence."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Specification Review",
                desc: "We analyze technical bills of quantities (BTO), volume requirements, or civil engineering site plans.",
                icon: "solar:clipboard-list-bold",
              },
              {
                step: "02",
                title: "Quotation & Terms",
                desc: "Direct corporate quotation detailing unit pricing, delivery schedules to Le Havre or on-site, and payment terms.",
                icon: "solar:document-bold",
              },
              {
                step: "03",
                title: "Sourcing & Logistics",
                desc: "Direct dispatch from regional depots or maritime customs clearance and container processing at Port of Le Havre.",
                icon: "solar:box-minimalistic-bold",
              },
              {
                step: "04",
                title: "Delivery & Execution",
                desc: "Punctual site delivery or civil work execution by certified crews complying strictly with French safety standards.",
                icon: "solar:shield-check-bold",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#fbfbf5] border border-[#e4e4e7] relative"
              >
                <span className="text-3xl font-display-thin text-zinc-300 font-bold mb-3 block">
                  {step.step}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#c1fbd4] text-black flex items-center justify-center mb-3">
                  <Icon icon={step.icon} width={18} height={18} />
                </div>
                <h4 className="font-semibold text-base text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href="/contact"
              variant="primary-pill"
              icon={<Icon icon="solar:arrow-right-linear" width={18} height={18} />}
            >
              Request a Project Quote or Price List
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection
        title="Need custom quantities or specialized VRD installation?"
        description="Submit your request to our Le Havre office. We provide prompt commercial feedback with verifiable compliance documentation."
        theme="dark"
      />
    </div>
  );
}

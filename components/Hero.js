import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#c1fbd4]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#c1fbd4] text-xs uppercase font-medium tracking-[0.08em]">
            <span className="w-2 h-2 rounded-full bg-[#c1fbd4] animate-pulse" />
            French Registered SASU · Le Havre, Normandy
          </span>
        </div>

        {/* Hero Title & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-display-hero text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white tracking-tight leading-[1.02]">
              Building Foundations.
              <span className="block text-white/70 font-light mt-1 sm:mt-2">
                Delivering Results.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pb-2">
            <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal">
              Specialized in road infrastructure, utility network engineering (VRD), structural building trades, and the strategic procurement of construction materials and commercial hardware.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/services"
                variant="aloe-pill"
                icon={<Icon icon="solar:arrow-right-linear" width={18} height={18} />}
              >
                Explore Services
              </Button>
              <Button
                href="/contact"
                variant="outline-on-dark"
                icon={<Icon icon="solar:phone-calling-linear" width={18} height={18} />}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Cinematic Photography Layer with Card Frame */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0a0a]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="FP CONSTRUCTION active civil engineering, road works, and structural foundation site in France"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* In-frame Status Badges */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-2">
                  <Icon icon="solar:shield-check-bold" className="text-[#c1fbd4]" width={16} height={16} />
                  Compliant French Standards
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-2">
                  <Icon icon="solar:box-minimalistic-bold" className="text-[#c1fbd4]" width={16} height={16} />
                  Wholesale Materials Logistics
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-white/90">
                <Icon icon="solar:map-point-linear" className="text-[#c1fbd4]" width={16} height={16} />
                <span>Base: 5 Rue Armand Carrel, Le Havre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics & Operational Attributes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/10">
          {[
            {
              title: "Civil & VRD Works",
              desc: "Road networks, drainage & underground infrastructure",
              icon: "solar:ruler-angular-bold",
            },
            {
              title: "Materials Supply",
              desc: "Wholesale trade of aggregates, steel, cement & timber",
              icon: "solar:box-bold",
            },
            {
              title: "Port Logistics",
              desc: "Strategically located at Port of Le Havre for import/export",
              icon: "solar:delivery-bold",
            },
            {
              title: "Corporate Legal SASU",
              desc: "Registered at Le Havre Commercial Registry (106 568 231)",
              icon: "solar:document-text-bold",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#c1fbd4] mb-3">
                <Icon icon={item.icon} width={18} height={18} />
              </div>
              <h3 className="text-white font-medium text-sm sm:text-base leading-snug">
                {item.title}
              </h3>
              <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

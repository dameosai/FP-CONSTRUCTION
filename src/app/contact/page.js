import SectionHeading from "../../../components/SectionHeading";
import ContactForm from "../../../components/ContactForm";
import Icon from "../../../components/Icon";

export const metadata = {
  title: "Contact HQ & Direct Inquiries | FP CONSTRUCTION",
  description:
    "Get in touch with FP CONSTRUCTION at 5 Rue Armand Carrel, 76620 Le Havre, France. Inquire about construction materials, hardware distribution, road works, and VRD utility projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Header (Cinematic Dark) */}
      <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Corporate Communications"
            title="Connect with our Le Havre Headquarters."
            description="Whether you are requesting a wholesale price list for construction materials, coordinating civil engineering works, or seeking an international trade partnership, we welcome your communication."
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
              HQ: 5 Rue Armand Carrel, 76620 Le Havre
            </span>
          </div>
        </div>
      </section>

      {/* 2. Contact Main Section (Cream / Light Canvas) */}
      <section className="py-16 sm:py-24 bg-[#fbfbf5] border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Registered Coordinates & Operational Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e4e4e7] shadow-level-3 space-y-6">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#71717a] tracking-wider block mb-1">
                    Official Headquarters
                  </span>
                  <h3 className="text-2xl font-bold text-black tracking-tight font-display-thin">
                    FP CONSTRUCTION
                  </h3>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Société par actions simplifiée à associé unique (SASU)
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-zinc-100 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#c1fbd4] flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Icon icon="solar:map-point-wave-bold" width={18} height={18} />
                    </div>
                    <div>
                      <strong className="block text-black font-semibold">Registered Office Address</strong>
                      <span className="text-[#52525b] leading-relaxed">
                        5 Rue Armand Carrel<br />
                        76620 Le Havre, Normandy<br />
                        France
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Icon icon="solar:diploma-verified-bold" width={18} height={18} />
                    </div>
                    <div>
                      <strong className="block text-black font-semibold">Legal Registration</strong>
                      <span className="text-[#52525b] leading-relaxed">
                        106 568 231 R.C.S. Le Havre<br />
                        Greffe du Tribunal de Commerce du Havre<br />
                        Capital: €1,000.00
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Icon icon="solar:clock-circle-bold" width={18} height={18} />
                    </div>
                    <div>
                      <strong className="block text-black font-semibold">Business Desk Hours</strong>
                      <span className="text-[#52525b] leading-relaxed">
                        Monday – Friday: 08:00 – 18:00 CET<br />
                        Saturday & Sunday: Closed<br />
                        Timezone: Europe/Paris (CET)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Icon icon="solar:user-circle-bold" width={18} height={18} />
                    </div>
                    <div>
                      <strong className="block text-black font-semibold">Executive Governance</strong>
                      <span className="text-[#52525b] leading-relaxed">
                        Dionysios Georgopoulos, President
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logistical Location Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#71717a]">
                  <Icon icon="solar:delivery-bold" width={16} height={16} className="text-[#10b981]" />
                  <span>Port & Freight Dispatch Hub</span>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                  Direct commercial access to the container docks at Port 2000 and the Grand Port Maritime du Havre for international freight collection and regional Normandy distribution.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Validated Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

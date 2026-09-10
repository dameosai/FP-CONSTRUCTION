import Link from "next/link";
import Icon from "./Icon";
import Button from "./Button";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Call to Action Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-base tracking-wider">
                FP
              </div>
              <span className="font-display-thin text-2xl tracking-wider text-white uppercase">
                FP CONSTRUCTION
              </span>
            </div>
            <p className="text-[#a1a1aa] text-[15px] leading-relaxed max-w-lg">
              French simplified joint-stock single-shareholder company (SASU) specialized in civil engineering, road works, utility networks (VRD), structural building trades, and the wholesale trade & import-export of construction materials and hardware.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono">
                RCS 106 568 231 Le Havre
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono">
                EU ID: FR7606.106568231
              </span>
              <span className="px-3 py-1 rounded-full bg-[#c1fbd4]/15 text-[#c1fbd4] border border-[#c1fbd4]/30 text-xs">
                Capital: €1,000.00
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-4 pt-2">
            <div className="space-y-1">
              <p className="text-white font-medium text-sm">Need construction materials or project collaboration?</p>
              <p className="text-[#a1a1aa] text-xs">Contact our registered office in Le Havre, Normandy.</p>
            </div>
            <Button
              href="/contact"
              variant="aloe-pill"
              className="text-sm px-6 py-2.5 shrink-0"
              icon={<Icon icon="solar:letter-linear" width={18} height={18} />}
            >
              Contact Office
            </Button>
          </div>
        </div>

        {/* Middle Section: Navigation & Activities Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-sm">
          {/* Col 1: Navigation */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.1em] text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Company", href: "/about" },
                { name: "Services & Sourcing", href: "/services" },
                { name: "Areas of Expertise", href: "/expertise" },
                { name: "Contact & HQ", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9dabad] hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <Icon icon="solar:alt-arrow-right-linear" width={14} height={14} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Core Stated Activities */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.1em] text-white/40 mb-4">
              Registered Activities
            </h3>
            <ul className="space-y-2.5 text-[#9dabad]">
              <li>Road Works (Travaux routiers)</li>
              <li>Utility & VRD Networks</li>
              <li>General Building Trades</li>
              <li>Construction Materials Trading</li>
              <li>Hardware & Tools Wholesale</li>
              <li>Import / Export Operations</li>
              <li>Unregulated Goods Trading</li>
            </ul>
          </div>

          {/* Col 3: Legal & Corporate Identity */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.1em] text-white/40 mb-4">
              Corporate Governance
            </h3>
            <div className="space-y-2 text-xs text-[#9dabad] leading-relaxed">
              <p>
                <span className="text-white block font-medium">Legal Status:</span>
                Société par actions simplifiée à associé unique (SASU)
              </p>
              <p>
                <span className="text-white block font-medium">Corporate President:</span>
                Dionysios Georgopoulos (Greek Nationality)
              </p>
              <p>
                <span className="text-white block font-medium">Registration Date:</span>
                19/06/2026 (Duration: 99 years, until 2125)
              </p>
              <p>
                <span className="text-white block font-medium">Financial Year-End:</span>
                December 31 (First closing: 31/12/2026)
              </p>
            </div>
          </div>

          {/* Col 4: Registered Office Coordinates */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.1em] text-white/40 mb-4">
              Registered Office
            </h3>
            <div className="space-y-3 text-xs text-[#9dabad]">
              <div className="flex items-start gap-2.5">
                <Icon icon="solar:map-point-wave-linear" width={18} height={18} className="text-[#c1fbd4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block">FP CONSTRUCTION</strong>
                  5 Rue Armand Carrel<br />
                  76620 Le Havre, France
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Icon icon="solar:shield-check-linear" width={18} height={18} className="text-[#c1fbd4] shrink-0" />
                <span>Greffe du Tribunal de Commerce du Havre</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#c1fbd4] hover:underline font-medium"
                >
                  <span>Open Contact Coordinates</span>
                  <Icon icon="solar:arrow-right-linear" width={14} height={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>
            © {currentYear} FP CONSTRUCTION SASU. Registered with RCS Le Havre (106 568 231). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#52525b]">Normandy, France</span>
            <span>Commercial Registry Compliant</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Legal Mentions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Button from "./Button";
import Icon from "./Icon";

export default function CTASection({
  title = "Ready to discuss your construction or procurement needs?",
  description = "Connect with FP CONSTRUCTION for materials supply, road infrastructure, VRD installations, or international trading inquiries.",
  theme = "dark",
}) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 sm:py-20 border-y ${
        isDark
          ? "bg-black text-white border-white/10"
          : "bg-[#fbfbf5] text-black border-[#e4e4e7]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16 border ${
            isDark
              ? "bg-[#0a0a0a] border-white/15"
              : "bg-white border-[#e4e4e7] shadow-level-3"
          }`}
        >
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-[#c1fbd4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
                isDark
                  ? "bg-white/10 text-[#c1fbd4] border border-white/15"
                  : "bg-[#c1fbd4] text-black"
              }`}
            >
              Direct Corporate Engagement
            </span>

            <h2
              className={`font-display-thin text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] mb-5 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${
                isDark ? "text-[#a1a1aa]" : "text-[#52525b]"
              }`}
            >
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant={isDark ? "aloe-pill" : "primary-pill"}
                icon={<Icon icon="solar:arrow-right-up-linear" width={18} height={18} />}
              >
                Contact Registered Office
              </Button>
              <Button
                href="/services"
                variant={isDark ? "outline-on-dark" : "outline-on-light"}
                icon={<Icon icon="solar:box-minimalistic-linear" width={18} height={18} />}
              >
                Review Materials & Trades
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

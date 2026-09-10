import Icon from "./Icon";

export default function ValueCard({
  title,
  subtitle,
  description,
  icon = "solar:shield-check-bold",
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`p-6 sm:p-8 rounded-xl border transition-all duration-200 ${
        isDark
          ? "bg-[#0a0a0a] border-white/10 hover:border-white/20"
          : "bg-white border-[#e4e4e7] hover:border-black/30 shadow-level-3"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
            isDark ? "bg-white/10 text-[#c1fbd4]" : "bg-[#c1fbd4] text-black"
          }`}
        >
          <Icon icon={icon} width={20} height={20} />
        </div>
        {subtitle && (
          <span
            className={`text-xs uppercase tracking-wider font-semibold ${
              isDark ? "text-[#a1a1aa]" : "text-[#71717a]"
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>

      <h3
        className={`text-lg sm:text-xl font-semibold mb-2.5 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm sm:text-[15px] leading-relaxed ${
          isDark ? "text-[#a1a1aa]" : "text-[#52525b]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

import Icon from "./Icon";

export default function InfoCard({
  label,
  value,
  subtext,
  icon = "solar:document-bold",
  highlight = false,
}) {
  return (
    <div
      className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 ${
        highlight
          ? "bg-[#c1fbd4]/20 border-[#c1fbd4] text-black"
          : "bg-white border-[#e4e4e7] hover:border-black/30 shadow-sm text-black"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#71717a]">
          {label}
        </span>
        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
          <Icon icon={icon} width={18} height={18} />
        </div>
      </div>

      <div className="font-semibold text-lg sm:text-xl text-black tracking-tight leading-snug break-words">
        {value}
      </div>

      {subtext && (
        <p className="mt-2 text-xs sm:text-sm text-[#71717a] leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}

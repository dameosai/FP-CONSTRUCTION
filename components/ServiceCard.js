import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function ServiceCard({
  title,
  subtitle,
  description,
  icon = "solar:box-linear",
  image,
  capabilities = [],
  href = "/services",
  badge,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`group rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
        isDark
          ? "bg-[#0a0a0a] border-white/10 hover:border-white/25 text-white"
          : "bg-white border-[#e4e4e7] hover:border-black/30 shadow-level-3 text-black"
      }`}
    >
      {/* Optional Card Image */}
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#c1fbd4] border border-white/20 text-xs font-medium">
                {badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Icon + Subtitle */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                isDark
                  ? "bg-white/10 text-[#c1fbd4]"
                  : "bg-[#c1fbd4]/40 text-black"
              }`}
            >
              <Icon icon={icon} width={22} height={22} />
            </div>
            {subtitle && (
              <span
                className={`text-[11px] uppercase tracking-wider font-semibold ${
                  isDark ? "text-[#a1a1aa]" : "text-[#71717a]"
                }`}
              >
                {subtitle}
              </span>
            )}
          </div>

          <h3
            className={`text-xl sm:text-2xl font-semibold tracking-tight leading-snug mb-3 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm sm:text-[15px] leading-relaxed mb-5 ${
              isDark ? "text-[#a1a1aa]" : "text-[#52525b]"
            }`}
          >
            {description}
          </p>

          {/* Capabilities List */}
          {capabilities.length > 0 && (
            <div className="pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-800 mb-6">
              <p
                className={`text-xs uppercase tracking-wider font-medium mb-2.5 ${
                  isDark ? "text-[#71717a]" : "text-[#a1a1aa]"
                }`}
              >
                Scope & Deliverables:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    <Icon
                      icon="solar:check-circle-bold"
                      width={16}
                      height={16}
                      className="text-[#10b981] shrink-0 mt-0.5"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 mt-auto">
          <Link
            href={href}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark
                ? "text-[#c1fbd4] hover:text-white"
                : "text-black hover:text-[#059669]"
            }`}
          >
            <span>Learn more & specs</span>
            <Icon
              icon="solar:arrow-right-linear"
              width={16}
              height={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

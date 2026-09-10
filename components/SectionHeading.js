export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  eyebrowVariant = "mint",
  className = "",
}) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  const eyebrowStyles = {
    mint: "bg-[#c1fbd4] text-black border border-[#a8f8c2]/50",
    pistachio: "bg-[#d4f9e0] text-black border border-[#bcf5d0]/50",
    shade: isDark
      ? "bg-[#1e2c31] text-white/90 border border-white/10"
      : "bg-[#e4e4e7] text-[#171717] border border-[#d4d4d8]",
    outline: isDark
      ? "bg-transparent text-white border border-white/20"
      : "bg-transparent text-black border border-black/20",
  };

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-4 flex ${isCenter ? "justify-center" : "justify-start"}`}>
          <span
            className={`inline-block px-3.5 py-1 text-[11px] sm:text-[12px] uppercase font-medium tracking-[0.08em] rounded-full select-none ${
              eyebrowStyles[eyebrowVariant] || eyebrowStyles.mint
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={`font-display-thin tracking-tight leading-[1.12] text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed font-normal ${
            isDark ? "text-[#a1a1aa]" : "text-[#52525b]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

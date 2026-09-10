import Link from "next/link";

export default function Button({
  children,
  variant = "primary-pill",
  href,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  icon,
  iconPosition = "right",
  ariaLabel,
  ...props
}) {
  const baseStyles =
    "btn-pill inline-flex items-center justify-center font-medium text-[15px] sm:text-[16px] leading-snug px-6 py-3 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    "primary-pill":
      "bg-black text-white hover:bg-[#3f3f46] active:bg-[#27272a] focus-visible:ring-black",
    "outline-on-dark":
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black focus-visible:ring-white",
    "outline-on-light":
      "bg-white border border-black text-black hover:bg-black hover:text-white focus-visible:ring-black",
    "aloe-pill":
      "bg-[#c1fbd4] text-black hover:bg-[#a8f8c2] active:bg-[#90f2b0] focus-visible:ring-[#c1fbd4]",
    "pistachio-pill":
      "bg-[#d4f9e0] text-black hover:bg-[#bcf5d0] focus-visible:ring-[#d4f9e0]",
    "ghost-on-dark":
      "bg-transparent text-white/80 hover:text-white hover:bg-white/10 focus-visible:ring-white",
    "ghost-on-light":
      "bg-transparent text-black/80 hover:text-black hover:bg-black/5 focus-visible:ring-black",
  };

  const selectedVariant = variants[variant] || variants["primary-pill"];
  const combinedClasses = `${baseStyles} ${selectedVariant} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 inline-flex items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 inline-flex items-center">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}

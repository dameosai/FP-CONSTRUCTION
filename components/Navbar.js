"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Button from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu if pathname changed
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Expertise", href: "/expertise" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
          : "bg-black border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1"
          aria-label="FP CONSTRUCTION Homepage"
        >
          <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold text-lg tracking-wider transition-transform duration-200 group-hover:scale-105 shadow-sm">
            FP
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base sm:text-lg tracking-wide uppercase leading-tight font-display-thin">
              FP CONSTRUCTION
            </span>
            <span className="text-[#a1a1aa] text-[11px] tracking-wider uppercase font-medium">
              SASU · Le Havre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/contact"
            variant="outline-on-dark"
            className="text-[13px] px-5 py-2 border-white/80 hover:border-white"
            icon={<Icon icon="solar:arrow-right-up-linear" width={16} height={16} />}
          >
            Contact HQ
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon
              icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 bg-black/98 backdrop-blur-xl border-t border-white/10 flex flex-col justify-between p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl text-lg font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.name}</span>
                  <Icon
                    icon={isActive ? "solar:check-circle-linear" : "solar:arrow-right-linear"}
                    width={20}
                    height={20}
                  />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs text-[#a1a1aa] leading-relaxed">
              <p className="font-medium text-white">FP CONSTRUCTION SASU</p>
              <p>5 Rue Armand Carrel, 76620 Le Havre, France</p>
              <p className="mt-1">RCS Le Havre 106 568 231</p>
            </div>
            <Button
              href="/contact"
              variant="aloe-pill"
              className="w-full py-3.5 text-base font-semibold"
              icon={<Icon icon="solar:arrow-right-up-linear" width={18} height={18} />}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

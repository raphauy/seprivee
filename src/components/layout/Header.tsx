"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { useLanguage, useTranslation } from "@/lib/i18n";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant = "transparent" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const t = useTranslation();

  const navItems = [
    { label: t.nav.experiences, href: "/experiences" },
    { label: t.nav.menus, href: "/menus" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isTransparent = variant === "transparent" && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTransparent
            ? "bg-transparent"
            : "bg-[var(--color-carbon)]/95 backdrop-blur-sm border-b border-[var(--color-gold)]/10"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl tracking-wide text-[var(--color-pearl)]">
                SePrivée
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[family-name:var(--font-montserrat)] text-sm tracking-widest uppercase text-[var(--color-pearl)] hover:text-[var(--color-gold)] transition-colors duration-300 link-underline"
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Selector */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--color-gold)]/20">
                <button
                  onClick={() => setLocale("es")}
                  className={cn(
                    "font-[family-name:var(--font-montserrat)] text-xs tracking-wider transition-colors cursor-pointer",
                    locale === "es"
                      ? "text-[var(--color-gold)]"
                      : "text-[var(--color-stone)] hover:text-[var(--color-pearl)]"
                  )}
                >
                  ES
                </button>
                <span className="text-[var(--color-stone)]">/</span>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "font-[family-name:var(--font-montserrat)] text-xs tracking-wider transition-colors cursor-pointer",
                    locale === "en"
                      ? "text-[var(--color-gold)]"
                      : "text-[var(--color-stone)] hover:text-[var(--color-pearl)]"
                  )}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={cn(
                  "w-6 h-px bg-[var(--color-pearl)] transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-[var(--color-pearl)] transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-[var(--color-pearl)] transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[var(--color-carbon)] lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "font-[family-name:var(--font-playfair)] text-3xl text-[var(--color-pearl)] hover:text-[var(--color-gold)] transition-all duration-300",
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Language Selector */}
          <div
            className={cn(
              "flex items-center gap-4 mt-8 pt-8 border-t border-[var(--color-gold)]/20 transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? "600ms" : "0ms",
            }}
          >
            <button
              onClick={() => setLocale("es")}
              className={cn(
                "font-[family-name:var(--font-montserrat)] text-sm tracking-wider transition-colors cursor-pointer",
                locale === "es"
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-stone)] hover:text-[var(--color-pearl)]"
              )}
            >
              ES
            </button>
            <span className="text-[var(--color-stone)]">|</span>
            <button
              onClick={() => setLocale("en")}
              className={cn(
                "font-[family-name:var(--font-montserrat)] text-sm tracking-wider transition-colors cursor-pointer",
                locale === "en"
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-stone)] hover:text-[var(--color-pearl)]"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

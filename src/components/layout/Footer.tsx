"use client";

import Link from "next/link";
import { Container, Divider } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/seprivee.uy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/59895038477",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();

  const navItems = [
    { label: t.nav.experiences, href: "/experiences" },
    { label: t.nav.menus, href: "/menus" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-[var(--color-carbon)] border-t border-[var(--color-gold)]/10">
      <Container className="py-16 lg:py-20">
        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/">
            <span className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl tracking-wide text-[var(--color-pearl)]">
              SePrivée
            </span>
          </Link>
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-tagline uppercase text-[var(--color-stone)] mt-3">
            {t.footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-montserrat)] text-sm tracking-wider text-[var(--color-stone)] hover:text-[var(--color-pearl)] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Divider withIcon className="max-w-md mx-auto mb-12" />

        {/* Locations */}
        <p className="text-center font-[family-name:var(--font-montserrat)] text-sm tracking-wider text-[var(--color-pearl)] mb-8">
          {t.footer.locations}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-[var(--color-stone)] hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center font-[family-name:var(--font-inter)] text-xs text-[var(--color-stone)]">
          {t.footer.copyright.replace("{year}", String(currentYear))}
        </p>
      </Container>
    </footer>
  );
}

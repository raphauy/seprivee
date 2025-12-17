"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({
  backgroundImage = "/images/hero/1.png",
}: HeroProps) {
  const t = useTranslation();
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="SePrivee dining experience"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo / Brand Name */}
        <div className="animate-fade-in">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-[var(--color-pearl)] mb-4">
            SePrivée
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-xs md:text-sm tracking-tagline uppercase text-[var(--color-gold)] mb-8">
            Studio Dining & Events
          </p>
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-200 font-[family-name:var(--font-montserrat)] text-sm md:text-base tracking-wider text-[var(--color-pearl)] mb-6 max-w-md">
          {t.home.hero.title}
        </p>

        {/* Decorative line */}
        <div className="animate-fade-in delay-300 w-16 h-px bg-[var(--color-gold)] opacity-60 mb-6" />

        {/* Locations */}
        <p className="animate-fade-in-up delay-400 font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-[var(--color-stone)] mb-12">
          Montevideo | Maldonado
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">{t.home.cta.button}</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/experiences">{t.home.hero.cta}</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-pearl)] opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-fade-in delay-600"
        aria-label="Scroll down"
      >
        <span className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}

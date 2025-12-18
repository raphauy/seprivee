"use client";

import Image from "next/image";
import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ContactHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const t = useTranslation();

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/contact-hero.jpg"
          alt="Chef serving guests"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-carbon)]/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <Typography
            variant="tagline"
            className="text-[var(--color-gold)] mb-6"
          >
            {t.contact.hero.tagline}
          </Typography>

          <Typography variant="h1" className="text-[var(--color-pearl)] mb-8">
            {t.contact.hero.title}
          </Typography>

          <Divider className="w-20 mb-8" />

          <Typography
            variant="body-lg"
            className="text-[var(--color-pearl)]/90 max-w-2xl"
          >
            {t.contact.hero.description}
          </Typography>
        </div>
      </Container>
    </section>
  );
}

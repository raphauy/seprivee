"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Typography, Button, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CallToAction() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const t = useTranslation();

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/chef-action.jpg"
          alt="Chef preparing a dish"
          fill
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
            "max-w-2xl mx-auto text-center transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <Typography
            variant="tagline"
            className="text-[var(--color-gold)] mb-6"
          >
            {t.home.cta.tagline}
          </Typography>

          <Typography variant="h2" className="text-[var(--color-pearl)] mb-6">
            {t.home.cta.title}
          </Typography>

          <Divider withIcon className="max-w-xs mx-auto mb-8" />

          <p className="font-[family-name:var(--font-inter)] text-[var(--color-pearl)]/80 mb-4">
            {t.home.cta.description}
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[var(--color-stone)] mb-10">
            {t.home.cta.locations}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">{t.home.cta.button}</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link
                href="https://wa.me/59895038477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

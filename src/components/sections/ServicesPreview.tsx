"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Typography, Button } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.1 });

  return (
    <Link
      href={service.href}
      ref={ref}
      className={cn(
        "group relative aspect-[3/4] overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <Typography
          variant="h4"
          className="text-[var(--color-pearl)] group-hover:text-[var(--color-gold)] transition-colors duration-300"
        >
          {service.title}
        </Typography>
        <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-pearl)]/70 mt-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
          {service.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
        <div className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-[var(--color-gold)]">
          <svg
            className="w-4 h-4 text-[var(--color-gold)] transform -rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function ServicesPreview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const t = useTranslation();

  const services: Service[] = [
    {
      id: "private-dining",
      title: t.home.services.privateDining.title,
      description: t.home.services.privateDining.description,
      image: "/images/services/private-dining-landing.png",
      href: "/experiences#private-dining",
    },
    {
      id: "curated-events",
      title: t.home.services.curatedEvents.title,
      description: t.home.services.curatedEvents.description,
      image: "/images/services/curated-events-landing.png",
      href: "/experiences#curated-events",
    },
    {
      id: "sushi-experience",
      title: t.home.services.sushi.title,
      description: t.home.services.sushi.description,
      image: "/images/services/sushi-landing.png",
      href: "/experiences#sushi",
    },
    {
      id: "cooking-classes",
      title: t.home.services.cookingClasses.title,
      description: t.home.services.cookingClasses.description,
      image: "/images/services/cooking-classes-landing.png",
      href: "/experiences#cooking-classes",
    },
  ];

  return (
    <section className="bg-[var(--color-carbon)] py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <Typography
            variant="tagline"
            className="text-[var(--color-gold)] mb-4"
          >
            {t.home.services.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-pearl)] mb-6">
            {t.home.services.title}
          </Typography>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/experiences">{t.home.hero.cta}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

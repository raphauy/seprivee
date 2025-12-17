"use client";

import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface Value {
  title: string;
  description: string;
}

function ValueCard({
  value,
  index,
}: {
  value: Value;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "text-center transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Typography variant="h4" className="text-[var(--color-pearl)] mb-3">
        {value.title}
      </Typography>
      <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-stone)]">
        {value.description}
      </p>
    </div>
  );
}

export function AboutValues() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const values = t.about.values.items;

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
            {t.about.values.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-pearl)] mb-6">
            {t.about.values.title}
          </Typography>
          <Divider withIcon className="max-w-xs mx-auto" />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

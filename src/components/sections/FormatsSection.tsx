"use client";

import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FormatKey = "basic" | "tasting" | "cocktail" | "sushiBar";

const formatKeys: FormatKey[] = ["basic", "tasting", "cocktail", "sushiBar"];

interface Format {
  title: string;
  description: string;
  courses: string[];
}

function FormatCard({
  format,
  index,
}: {
  format: Format;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-[var(--color-pearl)] p-8 lg:p-10 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Typography variant="h4" className="text-[var(--color-carbon)] mb-2">
        {format.title}
      </Typography>

      <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/60 mb-6">
        {format.description}
      </p>

      <Divider className="w-12 mb-6" />

      <ul className="space-y-2">
        {format.courses.map((course, i) => (
          <li
            key={i}
            className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/80 flex items-center gap-2"
          >
            <span className="text-[var(--color-gold)]">—</span>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FormatsSection() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const formats: Format[] = formatKeys.map((key) => ({
    title: t.experiences.formats[key].title,
    description: t.experiences.formats[key].description,
    courses: t.experiences.formats[key].courses,
  }));

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
            {t.experiences.formats.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-pearl)] mb-6">
            {t.experiences.formats.title}
          </Typography>
          <p className="font-[family-name:var(--font-inter)] text-[var(--color-stone)] max-w-2xl mx-auto">
            {t.experiences.formats.description}
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {formats.map((format, index) => (
            <FormatCard key={index} format={format} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

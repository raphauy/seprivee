"use client";

import Link from "next/link";
import { Container, Typography, Button, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type StepKey = "listen" | "design" | "refine" | "execute";

const stepKeys: StepKey[] = ["listen", "design", "refine", "execute"];

interface Step {
  number: string;
  title: string;
  description: string;
}

function StepCard({
  step,
  index,
}: {
  step: Step;
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
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl text-[var(--color-gold)]/30">
        {step.number}
      </span>

      <Typography variant="h4" className="text-[var(--color-carbon)] mt-4 mb-3">
        {step.title}
      </Typography>

      <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/70">
        {step.description}
      </p>
    </div>
  );
}

export function ProcessSection() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const steps: Step[] = stepKeys.map((key) => ({
    number: t.experiences.process.steps[key].number,
    title: t.experiences.process.steps[key].title,
    description: t.experiences.process.steps[key].description,
  }));

  return (
    <section className="bg-[var(--color-pearl)] py-24 lg:py-32">
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
            {t.experiences.process.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-carbon)] mb-6">
            {t.experiences.process.title}
          </Typography>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Divider withIcon className="max-w-xs mx-auto mb-10" />
          <Button size="lg" asChild>
            <Link href="/contact">{t.experiences.process.cta}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Container, Typography, Button, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

function FAQItem({
  faq,
  index,
}: {
  faq: FAQ;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "border-b border-[var(--color-carbon)]/10 pb-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Typography variant="h4" className="text-[var(--color-carbon)] mb-3">
        {faq.question}
      </Typography>
      <p className="font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/70">
        {faq.answer}
      </p>
    </div>
  );
}

export function AboutFAQ() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const faqs = t.about.faq.questions;

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
            {t.about.faq.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-carbon)] mb-6">
            {t.about.faq.title}
          </Typography>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Divider withIcon className="max-w-xs mx-auto mb-10" />
          <p className="font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/70 mb-8">
            {t.about.faq.cta.description}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">{t.about.faq.cta.button}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

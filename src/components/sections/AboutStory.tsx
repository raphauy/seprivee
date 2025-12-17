"use client";

import Image from "next/image";
import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function AboutStory() {
  const t = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-[var(--color-pearl)] py-24 lg:py-32">
      <Container>
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <Image
              src="/images/services/curated-events.jpg"
              alt="SePrivée event setup"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              "flex flex-col transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <Typography
              variant="tagline"
              className="text-[var(--color-gold)] mb-4"
            >
              {t.about.story.tagline}
            </Typography>

            <Typography
              variant="h2"
              className="text-[var(--color-carbon)] mb-8"
            >
              {t.about.story.title}
            </Typography>

            <Divider className="w-20 mb-8" />

            <Typography
              variant="body-lg"
              className="text-[var(--color-carbon)]/80 mb-6"
            >
              {t.about.story.description1}
            </Typography>

            <Typography
              variant="body"
              className="text-[var(--color-carbon)]/70 mb-6"
            >
              {t.about.story.description2}
            </Typography>

            <Typography
              variant="body"
              className="text-[var(--color-carbon)]/70 mb-8"
            >
              {t.about.story.description3}
            </Typography>

            <Typography
              variant="caption"
              className="font-[family-name:var(--font-playfair)] italic text-lg text-[var(--color-carbon)]/60"
            >
              &ldquo;{t.about.story.quote}&rdquo;
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}

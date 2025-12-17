"use client";

import Image from "next/image";
import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ExperienceKey = "privateDining" | "curatedEvents" | "sushi" | "cookingClasses";

const experienceKeys: { id: string; key: ExperienceKey; image: string }[] = [
  {
    id: "private-dining",
    key: "privateDining",
    image: "/images/services/private-dining-new.jpg",
  },
  {
    id: "curated-events",
    key: "curatedEvents",
    image: "/images/services/curated-events.jpg",
  },
  {
    id: "sushi",
    key: "sushi",
    image: "/images/services/sushi.jpg",
  },
  {
    id: "cooking-classes",
    key: "cookingClasses",
    image: "/images/services/cooking-classes.jpg",
  },
];

interface Experience {
  id: string;
  image: string;
  title: string;
  description: string;
  details: string[];
}

function ExperienceCard({
  experience,
  index,
  tagline,
}: {
  experience: Experience;
  index: number;
  tagline: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      id={experience.id}
      ref={ref}
      className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 scroll-mt-32",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden",
          !isEven && "lg:order-2"
        )}
      >
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className={cn(!isEven && "lg:order-1")}>
        <Typography
          variant="tagline"
          className="text-[var(--color-gold)] mb-4"
        >
          {tagline}
        </Typography>

        <Typography variant="h2" className="text-[var(--color-carbon)] mb-6">
          {experience.title}
        </Typography>

        <Divider className="w-16 mb-6" />

        <Typography
          variant="body-lg"
          className="text-[var(--color-carbon)]/80 mb-8"
        >
          {experience.description}
        </Typography>

        <ul className="space-y-3">
          {experience.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperiencesList() {
  const t = useTranslation();

  const experiences: Experience[] = experienceKeys.map((exp) => ({
    id: exp.id,
    image: exp.image,
    title: t.experiences.list[exp.key].title,
    description: t.experiences.list[exp.key].description,
    details: t.experiences.list[exp.key].details,
  }));

  return (
    <section className="bg-[var(--color-pearl)] py-24 lg:py-32">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              tagline={t.experiences.list.tagline}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

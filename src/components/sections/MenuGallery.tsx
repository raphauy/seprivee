"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Typography, Button, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type DishKey = "hummus" | "lamb" | "salad" | "tiramisu";

const dishKeys: { key: DishKey; image: string }[] = [
  { key: "hummus", image: "/images/menus/hummus.png" },
  { key: "lamb", image: "/images/menus/lamb.png" },
  { key: "salad", image: "/images/menus/salad.png" },
  { key: "tiramisu", image: "/images/menus/tiramisu.png" },
];

function DishCard({
  dish,
  index,
}: {
  dish: { image: string; title: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative aspect-square overflow-hidden bg-[var(--color-pearl)] transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={dish.image}
        alt={dish.title}
        fill
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-carbon)]/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-[family-name:var(--font-playfair)] text-[var(--color-pearl)] text-center">
          {dish.title}
        </p>
      </div>
    </div>
  );
}

export function MenuGallery() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const dishes = dishKeys.map((d) => ({
    image: d.image,
    title: t.menus.gallery.dishes[d.key],
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
            {t.menus.gallery.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-pearl)] mb-6">
            {t.menus.gallery.title}
          </Typography>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Divider withIcon className="max-w-xs mx-auto mb-10" />
          <p className="font-[family-name:var(--font-inter)] text-[var(--color-stone)] mb-8 max-w-xl mx-auto">
            {t.menus.gallery.cta.description}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">{t.menus.gallery.cta.button}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

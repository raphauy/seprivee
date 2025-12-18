"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Typography, Button, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const galleryImages = [
  "/images/menus/dish-12.jpg",
  "/images/menus/dish-13.jpg",
  "/images/menus/dish-14.jpg",
  "/images/menus/dish-15.jpg",
  "/images/menus/dish-16.jpg",
  "/images/menus/dish-17.jpg",
  "/images/menus/dish-18.jpg",
  "/images/menus/dish-19.jpg",
  "/images/menus/dish-20.jpg",
  "/images/menus/dish-21.jpg",
];

export function MenuGallery() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Carousel */}
        <div className="relative mb-16 overflow-hidden">
          {/* Main carousel track */}
          <div className="flex gap-4 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {/* Triple the images for seamless loop effect */}
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)] aspect-square relative overflow-hidden group"
              >
                <Image
                  src={image}
                  alt="Plato SePrivée"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                  currentIndex === index
                    ? "bg-[var(--color-gold)] w-6"
                    : "bg-[var(--color-stone)]/50 hover:bg-[var(--color-stone)]"
                )}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
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

"use client";

import { Container, Typography, Divider } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type MenuKey = "mediterranean" | "modern" | "garden";

const menuKeys: MenuKey[] = ["mediterranean", "modern", "garden"];

interface Course {
  type: string;
  dish: string;
}

interface Menu {
  title: string;
  format: string;
  courses: Course[];
}

function MenuCard({
  menu,
  index,
}: {
  menu: Menu;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-[var(--color-carbon)] p-8 lg:p-12 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Typography
        variant="tagline"
        className="text-[var(--color-gold)] mb-3"
      >
        {menu.format}
      </Typography>

      <Typography variant="h3" className="text-[var(--color-pearl)] mb-6">
        {menu.title}
      </Typography>

      <Divider className="w-16 mb-8" />

      <div className="space-y-6">
        {menu.courses.map((course, i) => (
          <div key={i}>
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-gold)]">
              {course.type}
            </span>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-[var(--color-pearl)] mt-1">
              {course.dish}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SampleMenus() {
  const t = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const menus: Menu[] = menuKeys.map((key) => ({
    title: t.menus.sample[key].title,
    format: t.menus.sample[key].format,
    courses: t.menus.sample[key].courses,
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
            {t.menus.sample.tagline}
          </Typography>
          <Typography variant="h2" className="text-[var(--color-carbon)] mb-6">
            {t.menus.sample.title}
          </Typography>
          <p className="font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/70 max-w-2xl mx-auto">
            {t.menus.sample.description}
          </p>
        </div>

        {/* Menus Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {menus.map((menu, index) => (
            <MenuCard key={index} menu={menu} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

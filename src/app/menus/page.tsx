import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenusHero } from "@/components/sections/MenusHero";
import { SampleMenus } from "@/components/sections/SampleMenus";
import { MenuGallery } from "@/components/sections/MenuGallery";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Explore our seasonal sample menus. Each menu is uniquely crafted for your event, featuring Uruguay's finest local ingredients.",
  openGraph: {
    title: "Menus | SePrivee",
    description:
      "Explore our seasonal sample menus. Each menu is uniquely crafted featuring Uruguay's finest local ingredients.",
    url: "https://seprivee.com/menus",
  },
};

export default function MenusPage() {
  return (
    <>
      <Header />
      <main>
        <MenusHero />
        <SampleMenus />
        <MenuGallery />
      </main>
      <Footer />
    </>
  );
}

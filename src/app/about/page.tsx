import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutFAQ } from "@/components/sections/AboutFAQ";

export const metadata: Metadata = {
  title: "About",
  description:
    "SePrivée is a studio for gastronomic experiences in Uruguay. We transform meals into intentional moments: intimate, curated, and memorable.",
  openGraph: {
    title: "About | SePrivee",
    description:
      "SePrivée is a studio for gastronomic experiences. We transform meals into intentional moments.",
    url: "https://seprivee.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutFAQ />
      </main>
      <Footer />
    </>
  );
}

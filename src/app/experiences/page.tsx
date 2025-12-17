import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExperiencesHero } from "@/components/sections/ExperiencesHero";
import { ExperiencesList } from "@/components/sections/ExperiencesList";
import { FormatsSection } from "@/components/sections/FormatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover our bespoke dining experiences: Private dining, curated events, sushi omakase, and cooking classes in Montevideo and Maldonado.",
  openGraph: {
    title: "Experiences | SePrivee",
    description:
      "Discover our bespoke dining experiences: Private dining, curated events, sushi omakase, and cooking classes.",
    url: "https://seprivee.com/experiences",
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main>
        <ExperiencesHero />
        <ExperiencesList />
        <FormatsSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}

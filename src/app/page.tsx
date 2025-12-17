import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CallToAction } from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <Hero backgroundImage="/images/hero/chef-beach.jpg" />
        <Intro />
        <ServicesPreview />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

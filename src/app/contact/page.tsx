import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SePrivée for private dining and curated events in Montevideo and Maldonado. Tell us what you want to celebrate.",
  openGraph: {
    title: "Contact | SePrivee",
    description:
      "Contact SePrivée for private dining and curated events. Tell us what you want to celebrate.",
    url: "https://seprivee.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

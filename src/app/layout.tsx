import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
} from "@/components/SEO/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seprivee.com"),
  title: {
    default: "SePrivee | Private Dining & Curated Events",
    template: "%s | SePrivee",
  },
  description:
    "Experiencias gastronómicas íntimas, diseñadas a medida, para grupos de 6 a 30 invitados en Montevideo y Maldonado. Sofisticación sin ostentación.",
  keywords: [
    "private dining",
    "private chef",
    "eventos privados",
    "chef privado",
    "Montevideo",
    "Maldonado",
    "Uruguay",
    "experiencias gastronómicas",
    "cenas privadas",
    "eventos boutique",
    "catering privado",
    "sushi omakase",
    "cooking classes",
  ],
  authors: [{ name: "SePrivee Studio" }],
  creator: "SePrivee",
  publisher: "SePrivee",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_UY",
    alternateLocale: "en_US",
    url: "https://seprivee.com",
    siteName: "SePrivee",
    title: "SePrivee | Private Dining & Curated Events",
    description:
      "Experiencias gastronómicas íntimas, diseñadas a medida para grupos de 6 a 30 invitados. Montevideo y Maldonado.",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SePrivee - Private Dining & Curated Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SePrivee | Private Dining & Curated Events",
    description:
      "Experiencias gastronómicas íntimas, diseñadas a medida. Montevideo y Maldonado.",
    images: ["/images/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

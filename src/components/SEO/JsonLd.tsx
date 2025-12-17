export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://seprivee.com",
    name: "SePrivee",
    alternateName: "SePrivée Studio Dining & Events",
    description:
      "Experiencias gastronómicas íntimas, diseñadas a medida, para grupos de 6 a 30 invitados en Montevideo y Maldonado.",
    url: "https://seprivee.com",
    telephone: "+59895038477",
    email: "hello@seprivee.com",
    image: "https://seprivee.com/images/og/og-image.jpg",
    priceRange: "$$$",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Montevideo",
        addressCountry: "UY",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Maldonado",
        addressCountry: "UY",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.9011,
      longitude: -56.1645,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Montevideo",
      },
      {
        "@type": "City",
        name: "Maldonado",
      },
    ],
    serviceType: [
      "Private Dining",
      "Catering",
      "Private Chef",
      "Cooking Classes",
      "Event Catering",
    ],
    sameAs: ["https://instagram.com/seprivee.uy"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SePrivee",
    url: "https://seprivee.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://seprivee.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SePrivee",
    url: "https://seprivee.com",
    logo: "https://seprivee.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+59895038477",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: ["https://instagram.com/seprivee.uy"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

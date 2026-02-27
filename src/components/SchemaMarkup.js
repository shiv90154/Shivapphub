// components/SchemaMarkup.js
export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShivAppHub",
    description:
      "Web & App Development company in Himachal Pradesh providing modern, scalable and SEO-friendly solutions.",
    url: "https://shivapphub.in",
    telephone: "+91-12345-67890",
    email: "info@shivapphub.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Mall",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      postalCode: "171001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.1048",
      longitude: "77.1734",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    sameAs: [
      "https://facebook.com/shivapphub",
      "https://twitter.com/shivapphub",
      "https://linkedin.com/company/shivapphub",
      "https://instagram.com/shivapphub",
    ],
    areaServed: [
      { "@type": "City", name: "Shimla" },
      { "@type": "City", name: "Dharamshala" },
      { "@type": "City", name: "Kangra" },
      { "@type": "City", name: "Mandi" },
      { "@type": "City", name: "Kullu" },
      { "@type": "City", name: "Manali" },
      { "@type": "State", name: "Himachal Pradesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web & App Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Custom, responsive websites with SEO optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Android and iOS apps for your business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description: "Improve your search engine rankings.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
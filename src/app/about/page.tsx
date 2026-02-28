import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ShivAppHub | Web & App Development in Himachal Pradesh",
  description:
    "ShivAppHub is a Himachal Pradesh based Web and App Development company serving all 12 districts – Shimla, Kangra, Mandi, Kullu, Manali, Dharamshala, Bilaspur, Chamba, Hamirpur, Kinnaur, Lahaul & Spiti, Sirmaur, Solan, Una. We provide modern, SEO-friendly and scalable digital solutions for local businesses.",
  keywords: [
    "About ShivAppHub",
    "Web Development Himachal Pradesh",
    "App Developer in Shimla",
    "Website Company Kangra",
    "Digital Agency Dharamshala",
    "SEO Services Mandi",
    "Himachal Web Design",
  ],
  openGraph: {
    title: "About ShivAppHub – Himachal's Premier Web & App Agency",
    description:
      "Professional Website and Mobile App Development services across all districts of Himachal Pradesh.",
    url: "https://shivapphub.in/about",
    type: "website",
    images: [
      {
        url: "https://shivapphub.in/og-about.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "ShivAppHub About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ShivAppHub",
    description: "Web & App Development company serving all 12 districts of Himachal Pradesh.",
  },
  alternates: {
    canonical: "https://shivapphub.in/about",
  },
};

// Structured data for Local Business (all districts)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ShivAppHub",
  description:
    "Web & App Development company in Himachal Pradesh providing modern, scalable and SEO-friendly solutions.",
  url: "https://shivapphub.in",
  telephone: "+91-12345-67890",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shimla",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.1048",
    longitude: "77.1734",
  },
  areaServed: [
    { "@type": "City", name: "Shimla" },
    { "@type": "City", name: "Kangra" },
    { "@type": "City", name: "Mandi" },
    { "@type": "City", name: "Kullu" },
    { "@type": "City", name: "Manali" },
    { "@type": "City", name: "Dharamshala" },
    { "@type": "City", name: "Bilaspur" },
    { "@type": "City", name: "Chamba" },
    { "@type": "City", name: "Hamirpur" },
    { "@type": "City", name: "Kinnaur" },
    { "@type": "City", name: "Lahaul and Spiti" },
    { "@type": "City", name: "Sirmaur" },
    { "@type": "City", name: "Solan" },
    { "@type": "City", name: "Una" },
    { "@type": "State", name: "Himachal Pradesh" },
  ],
  priceRange: "$$",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* JSON‑LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
  <section className="relative py-24 text-center bg-gradient-to-b from-green-50 to-white overflow-hidden">

  <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
      About <span className="text-green-600">ShivAppHub</span>
    </h1>

    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
      A technology-driven Web & App Development agency helping businesses
      across Himachal Pradesh build fast, scalable and SEO-first digital platforms.
    </p>

    <p className="mt-4 text-sm text-green-700 font-medium">
      Serving Shimla • Kangra • Mandi • Dharamshala • Solan • Una & beyond
    </p>
  </div>
</section>

      {/* Company Info */}
   <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

    {[
      { number: "50+", label: "Projects Delivered" },
      { number: "100%", label: "Client Satisfaction" },
      { number: "24/7", label: "Support Available" },
      { number: "12", label: "Districts Served" },
    ].map((stat, i) => (
      <div key={i}>
        <h3 className="text-3xl font-bold text-green-600">
          {stat.number}
        </h3>
        <p className="text-gray-600 mt-2">
          {stat.label}
        </p>
      </div>
    ))}

  </div>
</section>
      {/* Why Choose Us */}
 

      {/* Districts Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            We Serve All 12 Districts of Himachal Pradesh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No matter where you're located – from the mountains of Lahaul & Spiti to the valleys of Sirmaur – we're here to help you build a powerful online presence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-green-700">
            {[
              "Shimla", "Kangra", "Mandi", "Kullu", "Manali", "Dharamshala",
              "Bilaspur", "Chamba", "Hamirpur", "Kinnaur", "Lahaul & Spiti",
              "Sirmaur", "Solan", "Una"
            ].map((district) => (
              <span key={district} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
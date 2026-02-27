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
      <section className="py-20 text-center bg-green-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className="text-green-500">ShivAppHub</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          We are a Himachal Pradesh based Web & App Development agency helping
          businesses grow online with modern and SEO-optimized digital solutions.
          Proudly serving all <strong>12 districts</strong> of Himachal Pradesh.
        </p>
      </section>

      {/* Company Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
            <svg className="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ShivAppHub is a technology-focused digital agency specializing in
            Website Development, Mobile App Development, and SEO Services in
            Himachal Pradesh – from <strong>Shimla to Kangra, Mandi to Dharamshala, and every town in between</strong>.
            Our mission is to provide affordable, high-performance and scalable
            digital solutions for startups, small businesses and enterprises.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
            <svg className="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            What We Do
          </h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "SEO-Optimized Website Development",
              "Android & iOS App Development",
              "E-commerce Website Solutions",
              "Technical SEO & Performance Optimization",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose ShivAppHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Market Understanding",
                desc: "We understand the business needs of every district in Himachal Pradesh and provide customized solutions accordingly.",
                icon: (
                  <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "SEO-First Approach",
                desc: "Every website we build is optimized for Google ranking and fast performance from day one.",
                icon: (
                  <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: "Affordable & Scalable",
                desc: "Cost-effective digital solutions that grow with your business, from startups to enterprises.",
                icon: (
                  <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="py-20 text-center bg-green-800 text-white">
        <h2 className="text-3xl font-bold">
          Ready to Build Your Digital Presence?
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Let’s create something powerful together.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
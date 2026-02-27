import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web & App Development Services in Himachal Pradesh | ShivAppHub",
  description:
    "Professional Website Development, App Development, SEO and E-commerce solutions across all 12 districts of Himachal Pradesh – Shimla, Kangra, Mandi, Kullu, Manali, Dharamshala, Bilaspur, Chamba, Hamirpur, Kinnaur, Lahaul & Spiti, Sirmaur, Solan, Una.",
  keywords: [
    "Web Development Himachal Pradesh",
    "App Development Shimla",
    "Website Design Kangra",
    "SEO Services Himachal",
    "Ecommerce Development Dharamshala",
    "Digital Agency Mandi",
    "Web Developer Kullu",
    "App Developer Manali",
  ],
  openGraph: {
    title: "Our Services | ShivAppHub – Himachal's Premier Web & App Agency",
    description:
      "Modern, scalable and SEO-friendly web and mobile app development services in all 12 districts of Himachal Pradesh.",
    url: "https://shivapphub.in/services",
    type: "website",
    images: [
      {
        url: "https://shivapphub.in/og-services.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "ShivAppHub Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Services in Himachal Pradesh",
    description: "Professional digital services across all 12 districts of Himachal Pradesh.",
  },
  alternates: {
    canonical: "https://shivapphub.in/services",
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

export default function ServicesPage() {
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
          Our <span className="text-green-500">Services</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          We provide professional Web Development, Mobile App Development and
          SEO services across <strong>all 12 districts of Himachal Pradesh</strong> – from Shimla to Lahaul & Spiti.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {/* Web Development */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-green-100">
          <div className="mb-4">
            <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Website Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We build fast, responsive and SEO-optimized websites for businesses
            in Shimla, Kangra and across Himachal Pradesh. From business
            websites to custom web applications, we deliver scalable solutions.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Business Websites
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Custom Web Applications
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Landing Pages
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Performance Optimization
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/services/web-development"
              className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
            >
              Learn More
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* App Development */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-green-100">
          <div className="mb-4">
            <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            App Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We develop high-performance Android and iOS applications for startups
            and local businesses in Himachal Pradesh with modern UI/UX and
            scalable architecture.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Android App Development
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              iOS App Development
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Hybrid Apps (React Native)
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Backend API Integration
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/services/app-development"
              className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
            >
              Learn More
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* SEO Services */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-green-100">
          <div className="mb-4">
            <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            SEO & Digital Growth
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide technical SEO and on-page optimization services to help
            your business rank higher on Google and attract local customers in Himachal Pradesh.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              On-Page SEO
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Technical SEO
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Local SEO (Google My Business)
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Keyword Research & Strategy
            </li>
          </ul>
        </div>

        {/* E-commerce */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition border border-green-100">
          <div className="mb-4">
            <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            E-commerce Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Launch your online store with secure payment integration, modern
            design and SEO optimization tailored for Himachal-based businesses.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Online Store Setup (Shopify, WooCommerce)
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Payment Gateway Integration
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Product Management System
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Conversion Rate Optimization
            </li>
          </ul>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Technologies We Excel At
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use modern, industry-leading technologies to deliver fast, secure and scalable solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Next.js", "React", "Node.js", "Python", "Laravel",
              "WordPress", "Shopify", "Flutter", "React Native",
              "Tailwind CSS", "MongoDB", "MySQL", "AWS", "Vercel"
            ].map((tech) => (
              <span key={tech} className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-100">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Served */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Serving All 12 Districts of Himachal Pradesh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No matter where you're located – from the mountains of Lahaul & Spiti to the valleys of Sirmaur – we're here to help you build a powerful online presence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Shimla", "Kangra", "Mandi", "Kullu", "Manali", "Dharamshala",
              "Bilaspur", "Chamba", "Hamirpur", "Kinnaur", "Lahaul & Spiti",
              "Sirmaur", "Solan", "Una"
            ].map((district) => (
              <span key={district} className="bg-white text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-green-800 text-white">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Powerful Together
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Start your project today with ShivAppHub.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script"; // for JSON-LD

export const metadata: Metadata = {
  title:
    "Web & App Development in Himachal Pradesh | ShivAppHub – Shimla, Kangra, Mandi",
  description:
    "Professional Website Development, Mobile App Development and SEO Services in Himachal Pradesh including Shimla, Kangra, Mandi, Kullu, Solan and all 12 districts. Get a free consultation today.",
  keywords: [
    "web development Himachal Pradesh",
    "app development Shimla",
    "website designer Kangra",
    "SEO services Mandi",
    "digital marketing Kullu",
    "ecommerce development Solan",
    "ShivAppHub",
  ].join(", "),
  alternates: {
    canonical: "https://shivapphub.in/web-development-himachal-pradesh",
  },
  openGraph: {
    title: "Web & App Development in Himachal Pradesh – ShivAppHub",
    description:
      "Affordable and SEO‑optimized web and app development services across all 12 districts of Himachal Pradesh.",
    url: "https://shivapphub.in/web-development-himachal-pradesh",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "ShivAppHub – Web & App Development Himachal Pradesh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development in Himachal Pradesh | ShivAppHub",
    description:
      "Modern, SEO‑friendly websites and apps for businesses across all 12 districts of Himachal Pradesh.",
    images: ["https://shivapphub.in/twitter-image.jpg"], // replace
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HimachalMasterPage() {
  // JSON-LD structured data (LocalBusiness with areaServed)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShivAppHub",
    image: "https://shivapphub.in/logo.png", // replace
    url: "https://shivapphub.in/",
    telephone: "+91-12345-67890", // replace with actual
    priceRange: "₹₹",
    areaServed: [
      "Shimla",
      "Kangra",
      "Mandi",
      "Kullu",
      "Solan",
      "Una",
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Sirmaur",
      "Kinnaur",
      "Lahaul and Spiti",
    ].map((district) => ({
      "@type": "City",
      name: district,
      containedIn: "Himachal Pradesh",
    })),
    description:
      "Website and mobile app development company serving all 12 districts of Himachal Pradesh.",
    knowsAbout: ["Web Development", "Mobile App Development", "SEO"],
    sameAs: [
      "https://www.facebook.com/shivapphub", // replace
      "https://www.instagram.com/shivapphub",
    ],
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="py-24 text-center bg-green-50">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Web & App Development in{" "}
            <span className="text-green-800">Himachal Pradesh</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            ShivAppHub provides modern, SEO-friendly and scalable website
            and mobile app development services for businesses across all 12
            districts of Himachal Pradesh — from Shimla to Lahaul & Spiti.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Digital Services in Himachal Pradesh
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We help local businesses, startups, and enterprises establish a
            powerful online presence with tailor‑made digital solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm">
              {/* Placeholder for image – add real <Image> from next/image */}
              <div className="bg-green-100 h-40 w-full mb-4 rounded flex items-center justify-center text-green-800">
                🖥️ Website Development
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Website Development
              </h3>
              <p className="text-gray-600">
                Custom business websites, e‑commerce stores, and web
                applications. We serve clients in Shimla, Kangra, Mandi, Kullu,
                Solan, and beyond with responsive, SEO‑optimised designs.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 h-40 w-full mb-4 rounded flex items-center justify-center text-green-800">
                📱 Mobile App Development
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Mobile App Development
              </h3>
              <p className="text-gray-600">
                Android & iOS apps with modern UI/UX and scalable backend.
                Perfect for startups and enterprises across Himachal Pradesh.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 h-40 w-full mb-4 rounded flex items-center justify-center text-green-800">
                📈 SEO & Digital Growth
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                SEO & Digital Growth
              </h3>
              <p className="text-gray-600">
                Technical SEO, local SEO, and performance optimization to help
                your business rank higher on Google and attract more customers.
              </p>
            </div>
          </div>
        </section>

        {/* District Coverage */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Serving All 12 Districts of Himachal Pradesh
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We proudly serve businesses in every district — from the capital
              Shimla to the remote valleys of Kinnaur and Lahaul & Spiti.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Shimla",
                "Kangra",
                "Mandi",
                "Kullu",
                "Solan",
                "Una",
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Sirmaur",
                "Kinnaur",
                "Lahaul & Spiti",
              ].map((district) => (
                <span
                  key={district}
                  className="bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Excel In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "React / Next.js",
              "Node.js",
              "Python",
              "PHP / Laravel",
              "Flutter",
              "React Native",
              "WordPress",
              "Shopify",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <span className="font-medium text-green-800">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose ShivAppHub */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Himachal Businesses Choose ShivAppHub
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Local Market Expertise
                </h3>
                <p className="text-gray-600">
                  We understand the unique digital needs of businesses in
                  Himachal Pradesh — from tourism in Kullu to education in
                  Solan — and provide tailored solutions that work.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  SEO‑First Development
                </h3>
                <p className="text-gray-600">
                  Every website and app we build is optimized for search
                  engines from day one, helping you attract organic traffic
                  and rank for local keywords.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Affordable & Scalable
                </h3>
                <p className="text-gray-600">
                  We offer cost‑effective packages for startups and small
                  businesses, with solutions that scale as you grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (hidden but schema added) */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Do you serve clients in remote districts like Kinnaur or Lahaul?
              </h3>
              <p className="text-gray-600 mt-2">
                Absolutely! We work with clients across all 12 districts of
                Himachal Pradesh. Our process is entirely online, so location
                is never a barrier.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                How much does a website cost in Himachal Pradesh?
              </h3>
              <p className="text-gray-600 mt-2">
                Our packages start from ₹15,000 for a basic business website.
                For custom web apps or e‑commerce, we provide tailored quotes
                based on your requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Will my website rank on Google in Shimla or Kangra?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we build every site with local SEO best practices,
                including optimization for city‑specific keywords and Google
                Business Profile integration.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-green-800 text-white">
          <h2 className="text-3xl font-bold">
            Ready to Build Your Digital Presence?
          </h2>

          <p className="mt-4 text-green-100">
            Let’s create a powerful website or mobile app for your business in
            Himachal Pradesh.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact ShivAppHub
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
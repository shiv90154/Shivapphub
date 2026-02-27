import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Development in Shimla | Website Design & App Development | ShivAppHub",
  description:
    "Professional Web Development and Website Design services in Shimla. 🏔️ ShivAppHub builds SEO-friendly websites, e-commerce stores, and mobile apps for businesses in Shimla, including Lakkar Bazaar, The Mall, and Sanjauli.",
  keywords: [
    "web development Shimla",
    "website design Shimla",
    "app development Shimla",
    "e-commerce website Shimla",
    "SEO services Shimla",
    "web developer near Mall Road Shimla",
    "website designer Lakkar Bazaar",
    "ShivAppHub Shimla",
  ].join(", "),
  alternates: {
    canonical: "https://shivapphub.in/web-development-in-shimla",
  },
  openGraph: {
    title: "Web Development in Shimla | ShivAppHub",
    description:
      "Affordable and SEO-optimized website and app development services in Shimla. Serving businesses near The Ridge, Mall Road, and all Shimla neighborhoods.",
    url: "https://shivapphub.in/web-development-in-shimla",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-shimla.jpg", // Replace with Shimla-specific image
        width: 1200,
        height: 630,
        alt: "Web Development in Shimla - ShivAppHub office with Shimla hills backdrop",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development in Shimla | ShivAppHub",
    description:
      "Professional website design and app development services in Shimla. Get a free consultation today.",
    images: ["https://shivapphub.in/twitter-shimla.jpg"], // Replace
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
  },
};

export default function ShimlaPage() {
  // LocalBusiness Schema for Shimla
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShivAppHub - Shimla",
    image: "https://shivapphub.in/logo.png",
    url: "https://shivapphub.in/web-development-in-shimla",
    telephone: "+91-12345-67890", // Replace with actual
    email: "hello@shivapphub.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Mall Road, Near Ridge",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      postalCode: "171001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1048, // Shimla latitude
      longitude: 77.1734, // Shimla longitude
    },
    areaServed: [
      "Shimla City",
      "Lakkar Bazaar",
      "The Mall",
      "Sanjauli",
      "Totu",
      "New Shimla",
      "Summer Hill",
      "Chotta Shimla",
    ].map((area) => ({
      "@type": "Place",
      name: area,
    })),
    description:
      "Website and mobile app development company serving Shimla and surrounding areas.",
    knowsAbout: [
      "Business Website Development",
      "E-commerce Solutions",
      "Mobile App Development",
      "Local SEO Shimla",
    ],
    sameAs: [
      "https://www.facebook.com/shivapphub",
      "https://www.instagram.com/shivapphub",
    ],
    openingHours: "Mo-Fr 09:00-18:00",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website cost in Shimla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic business websites in Shimla start from ₹8,000. E-commerce websites range from ₹25,000 to ₹70,000, and custom web applications start at ₹50,000+ depending on features and complexity.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide on-site meetings in Shimla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer free initial consultations at our Shimla office near The Mall Road. We can also meet at your business location in Shimla by appointment.",
        },
      },
      {
        "@type": "Question",
        name: "How long does website development take in Shimla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard business website typically takes 1-2 weeks. E-commerce sites take 3-4 weeks, and complex web applications may require 6-8 weeks for development.",
        },
      },
      {
        "@type": "Question",
        name: "Will my Shimla business rank on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build all websites with local SEO best practices. Our Shimla clients consistently rank for keywords like 'best [service] in Shimla' and appear in Google Maps results.",
        },
      },
    ],
  };

  return (
    <>
      {/* Inject both schemas */}
      <Script
        id="local-business-schema-shimla"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema-shimla"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section with Shimla Context */}
        <section className="py-24 text-center bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              📍 Serving Shimla Since 2020
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Web Development in{" "}
              <span className="text-green-800">Shimla</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              ShivAppHub provides modern, SEO-optimized and scalable
              website and mobile app development services for businesses
              in Shimla — from <strong>The Mall</strong> to <strong>Lakkar Bazaar</strong> and beyond.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#pricing"
                className="bg-white text-green-800 border-2 border-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✅ 50+ Shimla Clients</span>
              <span>⭐ 4.9 Google Rating</span>
              <span>🚀 SEO Guaranteed</span>
            </div>
          </div>
        </section>

        {/* Services Section with Shimla-specific Examples */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Website & App Development Services in Shimla
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Tailored digital solutions for Shimla's diverse business landscape
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Hotel & Tourism Websites
              </h3>
              <p className="text-gray-600">
                Custom websites for hotels, homestays, and tour operators in Shimla.
                Includes booking systems, photo galleries, and seasonal package displays.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                E-commerce for Local Shops
              </h3>
              <p className="text-gray-600">
                Launch your online store for handicrafts, woolens, and local products.
                Secure payment gateway, inventory management, and Shimla-wide delivery setup.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Educational Institutions
              </h3>
              <p className="text-gray-600">
                School and college websites with admission portals, notice boards,
                and parent-teacher communication features. Trusted by Shimla schools.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Mobile Apps for Startups
              </h3>
              <p className="text-gray-600">
                Android & iOS app development for Shimla-based startups.
                From food delivery to local services — we build scalable mobile solutions.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Government & NGO Websites
              </h3>
              <p className="text-gray-600">
                Accessible, secure, and multi-lingual websites for government
                departments and NGOs operating in Shimla district.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Local SEO & Digital Marketing
              </h3>
              <p className="text-gray-600">
                Get found by Shimla customers. Local SEO, Google Maps optimization,
                and social media management for businesses near The Mall and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Why Shimla Businesses Choose Us */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Shimla Businesses Trust ShivAppHub
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">50+</div>
                <p className="text-gray-600">Shimla-based clients</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">4.9★</div>
                <p className="text-gray-600">Google Reviews from Shimla</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">24/7</div>
                <p className="text-gray-600">Local support in Shimla</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">₹8k</div>
                <p className="text-gray-600">Basic websites start from</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  🏔️ We Understand Shimla's Market
                </h3>
                <p className="text-gray-600">
                  From tourism seasonality to local business challenges — we've
                  helped hotels, cafes, and retailers in Shimla thrive online.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  📍 On-Ground Presence
                </h3>
                <p className="text-gray-600">
                  Our team is based in Shimla. We offer face-to-face consultations
                  at our Mall Road office or at your business location.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  🚀 Proven Shimla Results
                </h3>
                <p className="text-gray-600">
                  Our Shimla clients rank #1 on Google for keywords like
                  "best cafe in Shimla" and "hotel near Mall Road."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section with ID for anchor link */}
        <section id="pricing" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Website Development Cost in Shimla
          </h2>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Transparent pricing for Shimla businesses. No hidden costs — just quality work.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 text-center hover:border-green-800 transition">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹8,000+</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✓ 5-page website</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form</li>
                <li>✓ Basic SEO setup</li>
                <li>✓ 1 month support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Started →
              </Link>
            </div>

            <div className="bg-white border-2 border-green-800 rounded-xl p-6 text-center shadow-lg scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-3 py-1 rounded-full text-xs">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹25,000+</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✓ 10-15 page website</li>
                <li>✓ Custom design</li>
                <li>✓ CMS included</li>
                <li>✓ Local SEO package</li>
                <li>✓ 3 months support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Started →
              </Link>
            </div>

            <div className="bg-white border-2 border-green-100 rounded-xl p-6 text-center hover:border-green-800 transition">
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹50,000+</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✓ Online store</li>
                <li>✓ Payment gateway</li>
                <li>✓ Product management</li>
                <li>✓ SEO & marketing</li>
                <li>✓ 6 months support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Started →
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            *Prices are indicative. Final quote depends on specific requirements.
          </p>
        </section>

        {/* Portfolio/Work Section */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Recent Work in Shimla
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Websites and apps we've built for Shimla businesses
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Himalayan Cafe",
                  type: "Restaurant Website",
                  location: "The Mall, Shimla",
                },
                {
                  name: "Shimla Woolens",
                  type: "E-commerce Store",
                  location: "Lakkar Bazaar",
                },
                {
                  name: "Pine Valley School",
                  type: "School Website",
                  location: "Sanjauli",
                },
                {
                  name: "Shimla Taxi Service",
                  type: "Booking App",
                  location: "New Shimla",
                },
                {
                  name: "Mountain Homestay",
                  type: "Hotel Website",
                  location: "Summer Hill",
                },
                {
                  name: "Himachal Handicrafts",
                  type: "Online Store",
                  location: "The Mall",
                },
              ].map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    [Project Screenshot]
                  </div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.type}</p>
                  <p className="text-sm text-green-600">{project.location}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio" className="text-green-800 font-semibold hover:underline">
                View Full Portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section (visible) */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you have an office in Shimla?
              </h3>
              <p className="text-gray-600">
                Yes! We're located near The Mall Road, Shimla. You can visit us
                Monday-Friday, 9 AM to 6 PM. Call ahead to schedule a meeting.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Can you build websites for Shimla hotels?
              </h3>
              <p className="text-gray-600">
                Absolutely. We've built websites for hotels, homestays, and resorts
                across Shimla. Features include room booking, photo galleries, and
                seasonal offer management.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How is web development in Shimla different?
              </h3>
              <p className="text-gray-600">
                Shimla businesses need websites that work for tourism, handle
                seasonal traffic, and appeal to both local and international
                audiences. We understand these unique requirements.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you provide ongoing maintenance?
              </h3>
              <p className="text-gray-600">
                Yes, we offer monthly maintenance packages for Shimla clients
                including updates, security patches, and content changes.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Areas Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Also Serving Near Shimla</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Mashobra",
                "Kufri",
                "Fagu",
                "Naldehra",
                "Chail",
                "Solan",
                "Kasauli",
              ].map((area) => (
                <Link
                  key={area}
                  href={`/web-development-in-${area.toLowerCase()}`}
                  className="bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 hover:text-white transition"
                >
                  {area}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Click any area to see services in that location
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-green-800 text-white">
          <h2 className="text-3xl font-bold">
            Ready to Build Your Website in Shimla?
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            Join 50+ happy Shimla businesses. Get a free, no-obligation consultation
            and quote within 24 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+911234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition"
            >
              📞 Call Us Now
            </a>
          </div>

          <p className="mt-6 text-sm text-green-200">
            ⚡ Same-day response for Shimla inquiries
          </p>
        </section>
      </main>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Development in Kangra | Website Design & App Development | ShivAppHub",
  description:
    "Professional Web Development and Website Design services in Kangra. 🏔️ ShivAppHub builds SEO-optimized websites and mobile apps for businesses in Kangra, Dharamshala, Palampur, McLeod Ganj, and all nearby areas.",
  keywords: [
    "web development Kangra",
    "website design Dharamshala",
    "app development Palampur",
    "e-commerce website Kangra",
    "SEO services McLeod Ganj",
    "web developer near Kangra",
    "website designer Dharamshala",
    "ShivAppHub Kangra",
  ].join(", "),
  alternates: {
    canonical: "https://shivapphub.in/web-development-in-kangra",
  },
  openGraph: {
    title: "Web Development in Kangra | ShivAppHub",
    description:
      "Affordable and SEO-friendly website and mobile app development services in Kangra district. Serving Dharamshala, Palampur, McLeod Ganj, and more.",
    url: "https://shivapphub.in/web-development-in-kangra",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-kangra.jpg", // Replace with Kangra-specific image (e.g., Dharamshala cricket stadium or Kangra Fort)
        width: 1200,
        height: 630,
        alt: "Web Development in Kangra - ShivAppHub team with Kangra valley backdrop",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development in Kangra | ShivAppHub",
    description:
      "Professional website design and app development services in Kangra district. Get a free consultation today.",
    images: ["https://shivapphub.in/twitter-kangra.jpg"], // Replace
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

export default function KangraPage() {
  // LocalBusiness Schema for Kangra
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShivAppHub - Kangra",
    image: "https://shivapphub.in/logo.png",
    url: "https://shivapphub.in/web-development-in-kangra",
    telephone: "+91-12345-67890", // Replace with actual
    email: "hello@shivapphub.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kangra",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.0998, // Kangra town approximate
      longitude: 76.2691,
    },
    areaServed: [
      "Kangra",
      "Dharamshala",
      "Palampur",
      "McLeod Ganj",
      "Baijnath",
      "Jawalamukhi",
      "Nurpur",
      "Dehra Gopipur",
    ].map((area) => ({
      "@type": "Place",
      name: area,
    })),
    description:
      "Website and mobile app development company serving Kangra district and surrounding areas.",
    knowsAbout: [
      "Business Website Development",
      "E-commerce Solutions",
      "Mobile App Development",
      "Local SEO Kangra",
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
        name: "Do you provide website services in Dharamshala and Palampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve all major towns in Kangra district including Dharamshala, Palampur, McLeod Ganj, Baijnath, and Jawalamukhi. Our team can meet you at your location or work remotely.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website cost in Kangra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic business websites start from ₹8,000. E-commerce websites range from ₹25,000 to ₹70,000, and custom web applications start at ₹50,000+ depending on your requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build websites for tea estates in Kangra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We specialize in websites for Kangra tea estates, including online stores for tea sales, estate history pages, and tourism information for visitors.",
        },
      },
      {
        "@type": "Question",
        name: "How long does website development take in Kangra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard business website typically takes 1-2 weeks. E-commerce sites take 3-4 weeks, and complex web applications may require 6-8 weeks for development.",
        },
      },
    ],
  };

  return (
    <>
      {/* Inject schemas */}
      <Script
        id="local-business-schema-kangra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema-kangra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section with Kangra Context */}
        <section className="py-24 text-center bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              📍 Serving Kangra District Since 2020
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Web Development in{" "}
              <span className="text-green-800">Kangra</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              ShivAppHub provides modern, SEO-optimized website and mobile
              app development services for businesses in <strong>Kangra,
              Dharamshala, Palampur, McLeod Ganj</strong> and all nearby areas.
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
              <span>✅ 30+ Kangra Clients</span>
              <span>⭐ 4.9 Google Rating</span>
              <span>🚀 Local SEO Guaranteed</span>
            </div>
          </div>
        </section>

        {/* Services Section with Kangra-specific Examples */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Website & App Development Services in Kangra
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Tailored digital solutions for Kangra's diverse business landscape
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Tea Estate Websites
              </h3>
              <p className="text-gray-600">
                Custom websites for Kangra tea estates with online stores,
                estate history, and virtual tours. Perfect for tea sellers in
                Palampur and Baijnath.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Tourism & Hospitality
              </h3>
              <p className="text-gray-600">
                Websites for hotels, homestays, and travel agencies in
                Dharamshala and McLeod Ganj. Includes booking systems,
                photo galleries, and multi-language support.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📿</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Monastery & NGO Websites
              </h3>
              <p className="text-gray-600">
                Digital presence for Buddhist monasteries, Tibetan centers,
                and NGOs in McLeod Ganj. Donation integration and event
                management included.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Educational Institutions
              </h3>
              <p className="text-gray-600">
                School and college websites with admission portals, notice
                boards, and parent portals. Serving schools in Kangra,
                Dharamshala, and Palampur.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Mobile Apps for Startups
              </h3>
              <p className="text-gray-600">
                Android & iOS app development for Kangra-based startups.
                From local delivery apps to tourism guides — we build scalable
                mobile solutions.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                Local SEO & Digital Marketing
              </h3>
              <p className="text-gray-600">
                Get found by customers in Kangra. Local SEO, Google Maps
                optimization, and social media management for businesses in
                Dharamshala, Palampur, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Why Kangra Businesses Choose Us */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Kangra Businesses Trust ShivAppHub
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">30+</div>
                <p className="text-gray-600">Kangra-based clients</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">4.9★</div>
                <p className="text-gray-600">Google Reviews from Kangra</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">24/7</div>
                <p className="text-gray-600">Local support in Kangra</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-green-800 text-3xl font-bold mb-2">₹8k</div>
                <p className="text-gray-600">Basic websites start from</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  🏔️ Local Market Expertise
                </h3>
                <p className="text-gray-600">
                  We understand Kangra's unique mix of tea industry, tourism,
                  Tibetan culture, and local businesses. Our solutions are
                  tailored to your specific audience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  📍 On-Ground Presence
                </h3>
                <p className="text-gray-600">
                  We have team members based in Kangra district. We offer
                  face-to-face consultations in Dharamshala, Palampur, and
                  Kangra town.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  🚀 Proven Local Results
                </h3>
                <p className="text-gray-600">
                  Our Kangra clients rank on Google for keywords like
                  "best tea in Kangra" and "hotels in Dharamshala" thanks
                  to our local SEO strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section with ID for anchor link */}
        <section id="pricing" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Website Development Cost in Kangra
          </h2>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Transparent pricing for Kangra businesses. No hidden costs — just quality work.
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
              Recent Work in Kangra District
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Websites and apps we've built for businesses across Kangra
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Kangra Tea Co.",
                  type: "E-commerce Website",
                  location: "Palampur",
                },
                {
                  name: "Bhagsu Nag Homestay",
                  type: "Hotel Website",
                  location: "McLeod Ganj",
                },
                {
                  name: "Tibetan Handicrafts",
                  type: "Online Store",
                  location: "Dharamshala",
                },
                {
                  name: "Kangra Valley School",
                  type: "School Website",
                  location: "Kangra",
                },
                {
                  name: "Dhauladhar Trekking",
                  type: "Tourism Website",
                  location: "Dharamshala",
                },
                {
                  name: "Baijnath Temple Trust",
                  type: "NGO Website",
                  location: "Baijnath",
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
                Do you have an office in Kangra?
              </h3>
              <p className="text-gray-600">
                We have team members across Kangra district. We can meet you
                in Dharamshala, Palampur, or Kangra town by appointment.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Can you build a website for my tea estate?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in websites for Kangra tea estates.
                We can include online stores for tea sales, estate history,
                and even virtual tours.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you provide SEO for businesses in Dharamshala?
              </h3>
              <p className="text-gray-600">
                Yes, we offer local SEO services tailored to Dharamshala and
                McLeod Ganj. We help you rank for keywords like "hotels in
                Dharamshala" or "Tibetan handicrafts."
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How much does a website cost in Palampur?
              </h3>
              <p className="text-gray-600">
                Our pricing is the same across Kangra district. Basic websites
                start at ₹8,000, business websites at ₹25,000, and e-commerce
                at ₹50,000+. See our pricing section above.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Areas Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Also Serving Across Kangra District</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Dharamshala",
                "Palampur",
                "McLeod Ganj",
                "Baijnath",
                "Jawalamukhi",
                "Nurpur",
                "Dehra Gopipur",
                "Shahpur",
                "Kangra City",
              ].map((area) => (
                <Link
                  key={area}
                  href={`/web-development-in-${area.toLowerCase().replace(/\s+/g, '-')}`}
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
            Ready to Build Your Website in Kangra?
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            Join 30+ happy Kangra businesses. Get a free, no-obligation consultation
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
            ⚡ Same-day response for Kangra inquiries
          </p>
        </section>
      </main>
    </>
  );
}
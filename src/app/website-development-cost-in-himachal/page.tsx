import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Development Cost in Himachal Pradesh (2026 Guide) | Transparent Pricing",
  description:
    "Complete pricing guide for website development in Himachal Pradesh. ✅ Learn website design cost, e‑commerce pricing, and app development charges in Shimla, Kangra, Mandi, Dharamshala, and all districts. Get a free quote.",
  keywords: [
    "website development cost Himachal Pradesh",
    "website price Shimla",
    "web design cost Kangra",
    "ecommerce website price Mandi",
    "app development charges Dharamshala",
    "website package Himachal",
    "ShivAppHub pricing",
  ].join(", "),
  alternates: {
    canonical: "https://shivapphub.in/website-development-cost-in-himachal",
  },
  openGraph: {
    title: "Website Development Cost in Himachal Pradesh (2026) | ShivAppHub",
    description:
      "Transparent pricing guide for website and app development services in Himachal Pradesh. Compare packages, features, and get a free quote.",
    url: "https://shivapphub.in/website-development-cost-in-himachal",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-pricing.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Website Development Cost in Himachal Pradesh - Pricing Guide",
      },
    ],
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost in Himachal Pradesh (2026)",
    description: "Complete pricing guide for websites and apps in Shimla, Kangra, Mandi, and all HP districts.",
    images: ["https://shivapphub.in/twitter-pricing.jpg"], // Replace
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebsiteCostPage() {
  // Product/Service schema for pricing
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Website Development Services in Himachal Pradesh",
    description:
      "Affordable website and app development packages for businesses across Himachal Pradesh.",
    brand: {
      "@type": "Brand",
      name: "ShivAppHub",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Basic Business Website",
        price: "8000",
        priceCurrency: "INR",
        priceValidUntil: "2026-12-31",
        description: "5-page responsive website with contact form and basic SEO.",
      },
      {
        "@type": "Offer",
        name: "E-commerce Website",
        price: "25000",
        priceCurrency: "INR",
        priceValidUntil: "2026-12-31",
        description: "Online store with payment gateway, product management, and SEO.",
      },
      {
        "@type": "Offer",
        name: "Custom Web Application",
        price: "50000",
        priceCurrency: "INR",
        priceValidUntil: "2026-12-31",
        description: "Tailored web apps with custom features and scalable architecture.",
      },
      {
        "@type": "Offer",
        name: "Mobile App Development",
        price: "40000",
        priceCurrency: "INR",
        priceValidUntil: "2026-12-31",
        description: "Android/iOS app development with modern UI/UX.",
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Himachal Pradesh",
    },
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a basic website cost in Himachal Pradesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A basic business website in Himachal Pradesh typically costs between ₹8,000 and ₹20,000, depending on design complexity and number of pages.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of an e-commerce website in Shimla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "E-commerce website development in Shimla ranges from ₹25,000 to ₹70,000, including payment gateway integration and product management features.",
        },
      },
      {
        "@type": "Question",
        name: "Why do website costs vary across different districts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website costs vary based on features, design complexity, and specific business needs – not location. ShivAppHub offers consistent pricing across all Himachal districts.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge extra for SEO in Kangra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic SEO is included in all our packages. For advanced local SEO in Kangra or other cities, we have separate packages starting at ₹5,000/month.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="py-20 text-center bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              📊 Updated for 2026
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Website Development Cost in{" "}
              <span className="text-green-800">Himachal Pradesh</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent pricing guide for website and app development
              services across <strong>Shimla, Kangra, Mandi, Dharamshala, Kullu,</strong> and all 12 districts of Himachal Pradesh.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
              >
                View Pricing Table
              </Link>
              <Link
                href="/contact"
                className="bg-white text-green-800 border-2 border-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✅ 100+ Projects Delivered</span>
              <span>⭐ 4.9 Client Rating</span>
              <span>💰 Transparent Pricing</span>
              <span>📅 Since 2020</span>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Website Development Pricing (2026)
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            All prices include GST. Final cost depends on your specific requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Basic Website</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹8k - ₹20k</div>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>✓ Up to 5 pages</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form</li>
                <li>✓ Basic SEO</li>
                <li>✓ 1 month support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Quote →
              </Link>
            </div>

            {/* Business */}
            <div className="bg-white border-2 border-green-800 rounded-xl p-6 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-3 py-1 rounded-full text-xs">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Business Website</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹25k - ₹45k</div>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>✓ 10-15 pages</li>
                <li>✓ Custom design</li>
                <li>✓ CMS included</li>
                <li>✓ Advanced SEO</li>
                <li>✓ 3 months support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Quote →
              </Link>
            </div>

            {/* E-commerce */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹25k - ₹70k</div>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>✓ Online store</li>
                <li>✓ Payment gateway</li>
                <li>✓ Product management</li>
                <li>✓ SEO ready</li>
                <li>✓ 6 months support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Quote →
              </Link>
            </div>

            {/* Mobile App */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Mobile App</h3>
              <div className="text-3xl font-bold text-green-800 mb-4">₹40k+</div>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>✓ Android / iOS</li>
                <li>✓ Modern UI/UX</li>
                <li>✓ Backend API</li>
                <li>✓ App store submission</li>
                <li>✓ 3 months support</li>
              </ul>
              <Link href="/contact" className="text-green-800 font-semibold hover:underline">
                Get Quote →
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            *For custom web applications, pricing starts at ₹50,000+. Contact us for a detailed estimate.
          </p>
        </section>

        {/* Cost Breakdown Table */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Price Breakdown by Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3 border">Feature</th>
                  <th className="p-3 border">Basic</th>
                  <th className="p-3 border">Business</th>
                  <th className="p-3 border">E-commerce</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border">Pages Included</td><td className="p-3 border">Up to 5</td><td className="p-3 border">10-15</td><td className="p-3 border">20+</td></tr>
                <tr><td className="p-3 border">Design Customization</td><td className="p-3 border">Template</td><td className="p-3 border">Custom</td><td className="p-3 border">Custom</td></tr>
                <tr><td className="p-3 border">CMS</td><td className="p-3 border">-</td><td className="p-3 border">✓</td><td className="p-3 border">✓</td></tr>
                <tr><td className="p-3 border">Payment Gateway</td><td className="p-3 border">-</td><td className="p-3 border">-</td><td className="p-3 border">✓</td></tr>
                <tr><td className="p-3 border">Basic SEO</td><td className="p-3 border">✓</td><td className="p-3 border">✓</td><td className="p-3 border">✓</td></tr>
                <tr><td className="p-3 border">Local SEO</td><td className="p-3 border">-</td><td className="p-3 border">Extra</td><td className="p-3 border">Extra</td></tr>
                <tr><td className="p-3 border">Support (months)</td><td className="p-3 border">1</td><td className="p-3 border">3</td><td className="p-3 border">6</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section className="bg-green-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">
              What Affects Website Development Cost?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Design Complexity</h3>
                <p className="text-gray-600">Custom UI/UX, animations, and unique layouts require more design time.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Number of Pages</h3>
                <p className="text-gray-600">More pages mean more content creation and development effort.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Functionality</h3>
                <p className="text-gray-600">Features like booking systems, member areas, or third-party integrations add cost.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">SEO & Marketing</h3>
                <p className="text-gray-600">Advanced SEO setup, content writing, and ongoing optimization are additional.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">E-commerce Features</h3>
                <p className="text-gray-600">Payment gateways, inventory management, shipping calculators increase scope.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Maintenance & Hosting</h3>
                <p className="text-gray-600">Ongoing updates, security, and premium hosting plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* City-wise Pricing (Local Targeting) */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Website Development Cost in Major Himachal Cities
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our pricing is consistent across the state, but here are estimated ranges for popular cities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Shimla", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
              { city: "Kangra", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
              { city: "Mandi", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
              { city: "Kullu", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
              { city: "Dharamshala", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
              { city: "Solan", basic: "₹8k-20k", business: "₹25k-45k", ecom: "₹25k-70k" },
            ].map((item) => (
              <div key={item.city} className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-green-800">{item.city}</h3>
                <p className="text-sm mb-1"><span className="font-medium">Basic:</span> {item.basic}</p>
                <p className="text-sm mb-1"><span className="font-medium">Business:</span> {item.business}</p>
                <p className="text-sm"><span className="font-medium">E-commerce:</span> {item.ecom}</p>
                <div className="mt-4">
                  <Link href={`/web-development-in-${item.city.toLowerCase()}`} className="text-green-800 text-sm font-semibold hover:underline">
                    Details for {item.city} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison with National Average */}
        <section className="bg-green-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Affordable Himachal Pricing</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our website development costs in Himachal are <span className="font-bold text-green-800">20-30% lower</span> than metro cities like Delhi or Mumbai, without compromising quality.
            </p>
            <div className="flex justify-center gap-8 text-left">
              <div>
                <p className="text-gray-500 line-through">Delhi: ₹15k-35k</p>
                <p className="text-green-800 font-bold">Shimla: ₹8k-20k</p>
              </div>
              <div>
                <p className="text-gray-500 line-through">Mumbai: ₹20k-40k</p>
                <p className="text-green-800 font-bold">Kangra: ₹8k-20k</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How much does a basic website cost in Shimla?
              </h3>
              <p className="text-gray-600">
                A basic business website in Shimla starts at ₹8,000. This includes up to 5 pages, responsive design, contact form, and basic SEO.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Does the price include domain and hosting?
              </h3>
              <p className="text-gray-600">
                Domain and hosting are not included in the development cost. We can help you purchase them at ₹1,000/year (domain) and ₹3,000/year (hosting) onwards.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Why is your pricing lower than national agencies?
              </h3>
              <p className="text-gray-600">
                We are based in Himachal Pradesh with lower overheads, and we pass the savings to local businesses. Quality is never compromised.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you charge extra for revisions?
              </h3>
              <p className="text-gray-600">
                We include 2 rounds of revisions in our packages. Additional changes are billed at ₹500/hour.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Himachal Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 italic">"ShivAppHub built our hotel website for just ₹18,000 – exactly what we needed. Great value!"</p>
                <p className="mt-4 font-semibold">— Rohan, Shimla</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 italic">"The pricing was transparent and affordable. Our e-commerce store in Kangra is running smoothly."</p>
                <p className="mt-4 font-semibold">— Priya, Kangra</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 italic">"Compared to quotes from Delhi, ShivAppHub saved us 30%. Highly recommend."</p>
                <p className="mt-4 font-semibold">— Vikram, Mandi</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-green-800 text-white">
          <h2 className="text-3xl font-bold">
            Get an Exact Quote for Your Project
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            Tell us about your requirements – we'll respond within 24 hours with a customized pricing estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:+911234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition"
            >
              📞 Call for Quick Estimate
            </a>
          </div>

          <p className="mt-6 text-sm text-green-200">
            ⚡ Free consultation • No obligation
          </p>
        </section>
      </main>
    </>
  );
}
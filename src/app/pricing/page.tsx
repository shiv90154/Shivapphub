// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing – Affordable Web & App Development in Himachal Pradesh",
  description:
    "Transparent pricing for web development, mobile apps, SEO, and digital services. Choose from flexible packages or get a custom quote tailored to your needs in Shimla, Kangra, Dharamshala, and across Himachal.",
  keywords:
    "web development cost Himachal Pradesh, app development price Shimla, website package Kangra, SEO services pricing Dharamshala, e-commerce development cost Mandi, affordable digital agency Himachal",
  alternates: {
    canonical: "https://shivapphub.in/pricing",
  },
  openGraph: {
    title: "Pricing – ShivAppHub",
    description:
      "Affordable, transparent pricing for web & app development in Himachal Pradesh.",
    url: "https://shivapphub.in/pricing",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub Pricing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// Pricing plans data
const plans = [
  {
    name: "Starter Website",
    price: "₹18,000",
    description: "Perfect for small businesses & startups",
    features: [
      "5 pages responsive website",
      "Mobile-friendly design",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "Free SSL certificate",
      "1 year domain (conditions apply)",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business Pro",
    price: "₹42,000",
    description: "Ideal for growing businesses",
    features: [
      "10 pages custom design",
      "Advanced SEO optimization",
      "Blog/News section",
      "WhatsApp integration",
      "Google Maps integration",
      "Performance optimization",
      "Basic analytics setup",
      "Priority support",
    ],
    cta: "Start Project",
    popular: true,
  },
  {
    name: "E-commerce",
    price: "₹75,000",
    description: "Sell products online with ease",
    features: [
      "Up to 200 products",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order management",
      "Customer accounts",
      "Inventory management",
      "Advanced SEO",
      "WhatsApp & email notifications",
    ],
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Mobile App",
    price: "₹90,000+",
    description: "Android & iOS apps (starting price)",
    features: [
      "Cross-platform (Flutter/React Native)",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store submission support",
      "Admin panel",
      "3 months warranty",
    ],
    cta: "Discuss App Idea",
    popular: false,
  },
];

// Structured data for SEO
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: plans.map((plan, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: plan.name,
      description: plan.description,
      offers: {
        "@type": "Offer",
        price: plan.price.replace(/[^0-9]/g, ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
          {/* Animated blobs (defined in global CSS or Tailwind config) */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Simple,{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Choose the package that fits your needs. All projects start with a free consultation.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              *Prices are indicative and may vary based on specific requirements.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                  plan.popular
                    ? "border-green-500 ring-2 ring-green-500"
                    : "border-gray-200 hover:border-green-200"
                } p-6 flex flex-col`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.name !== "Mobile App" && (
                    <span className="text-gray-500 text-sm ml-1">/project</span>
                  )}
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`block text-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md hover:shadow-xl hover:scale-105"
                        : "bg-gray-100 text-gray-900 hover:bg-green-600 hover:text-white hover:shadow-md"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                {/* Decorative corner accent (on hover) */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-100 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Custom Project Section */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every business is unique. Tell us about your project, and we'll create a tailored
                package just for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="pb-20 text-center">
          <p className="text-gray-600">
            Have questions about pricing? Check our{" "}
            <Link href="/faq" className="text-green-600 hover:underline font-medium">
              FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-green-600 hover:underline font-medium">
              contact us
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
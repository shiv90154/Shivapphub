import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react"; // optional icon

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

export default function PricingPage() {
  // Optional: JSON-LD for structured data (OfferCatalog or PriceSpecification)
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
          price: plan.price.replace(/[^0-9]/g, ""), // extract numeric part
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      {/* Optional JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Choose the package that fits your needs. All projects start with a free consultation.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              *Prices are indicative and may vary based on specific requirements.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border ${
                  plan.popular ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200"
                } p-6 flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.name !== "Mobile App" && <span className="text-gray-500">/project</span>}
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`block text-center px-4 py-3 rounded-lg font-medium transition ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Project Section */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Every business is unique. Tell us about your project, and we'll create a tailored package just for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* FAQs teaser */}
          <div className="mt-12 text-center text-gray-600">
            <p>
              Have questions about pricing? Check our{" "}
              <Link href="/faq" className="text-blue-600 hover:underline">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve – Web & App Development for Himachal Businesses",
  description:
    "We provide tailored web and app development solutions for various industries across Himachal Pradesh including hospitality, tourism, education, healthcare, real estate, retail, and more.",
  keywords:
    "web development for hotels Shimla, app for travel agencies Dharamshala, e-commerce for retailers Kangra, healthcare website Mandi, educational portal Kullu, real estate website Manali, industry-specific development Himachal",
  alternates: {
    canonical: "https://shivapphub.in/industries",
  },
  openGraph: {
    title: "Industries We Serve – ShivAppHub",
    description:
      "Tailored digital solutions for businesses across Himachal Pradesh – from tourism to retail.",
    url: "https://shivapphub.in/industries",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub Industries",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// Industries data
const industries = [
  {
    name: "Hospitality & Tourism",
    description:
      "From hotels in Shimla to homestays in Manali, we build booking engines, property management systems, and immersive websites to attract more guests.",
    icon: "🏨",
    areas: ["Hotels", "Resorts", "Homestays", "Travel Agencies", "Tour Operators"],
  },
  {
    name: "Retail & E‑commerce",
    description:
      "Launch your online store with our custom e‑commerce solutions. We help local retailers in Kangra, Mandi, and beyond sell products online seamlessly.",
    icon: "🛍️",
    areas: ["Local Shops", "Handicrafts", "Apparel", "Groceries", "Electronics"],
  },
  {
    name: "Education & E‑learning",
    description:
      "Empower students and educators with learning management systems, institute websites, and online course platforms for schools and coaching centers.",
    icon: "📚",
    areas: ["Schools", "Coaching Centers", "Vocational Training", "Online Courses"],
  },
  {
    name: "Healthcare",
    description:
      "Secure and user-friendly solutions for clinics, hospitals, and wellness centers – including appointment scheduling, patient portals, and informative websites.",
    icon: "🏥",
    areas: ["Clinics", "Hospitals", "Diagnostic Centers", "Yoga & Wellness"],
  },
  {
    name: "Real Estate",
    description:
      "Showcase properties with virtual tours, advanced search filters, and agent portals. We help real estate agencies in Dharamshala, Shimla, and Manali go digital.",
    icon: "🏢",
    areas: ["Property Listings", "Brokers", "Developers", "Rental Agencies"],
  },
  {
    name: "Food & Beverage",
    description:
      "From restaurant websites with online ordering to cafe loyalty apps, we help food businesses in Himachal enhance their digital presence.",
    icon: "🍽️",
    areas: ["Restaurants", "Cafes", "Bakeries", "Food Trucks", "Caterers"],
  },
  {
    name: "Agriculture & Agri‑tech",
    description:
      "Supporting local farmers and cooperatives with supply chain solutions, marketplaces, and informational platforms tailored to agriculture in Himachal.",
    icon: "🌾",
    areas: ["Farmers", "Cooperatives", "Organic Produce", "Agri Suppliers"],
  },
  {
    name: "Professional Services",
    description:
      "Websites and client portals for lawyers, chartered accountants, consultants, and other professionals to build credibility and streamline client interaction.",
    icon: "💼",
    areas: ["Legal", "Financial Advisors", "Consultants", "Architects"],
  },
  {
    name: "Transportation & Logistics",
    description:
      "Custom solutions for transport companies, including booking systems, fleet management dashboards, and customer tracking portals.",
    icon: "🚚",
    areas: ["Transport Services", "Courier", "Fleet Owners", "Logistics"],
  },
];

export default function IndustriesPage() {
  // Optional JSON-LD for list of industries (ItemList)
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: industries.map((ind, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: ind.name,
        description: ind.description,
        provider: {
          "@type": "LocalBusiness",
          name: "ShivAppHub",
          areaServed: "Himachal Pradesh",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Tailored digital solutions for businesses across Himachal Pradesh – from the mountains to the markets.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h2>
                <p className="text-gray-700 mb-4">{industry.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-600">We work with:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {industry.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Get a quote for {industry.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't see your industry?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We love challenges! Contact us to discuss your unique business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
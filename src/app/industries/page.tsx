// app/industries/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Hotel,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Building,
  Utensils,
  Sprout,
  Briefcase,
  Truck,
  ArrowRight,
} from "lucide-react";

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

// Map industry names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  "Hospitality & Tourism": Hotel,
  "Retail & E‑commerce": ShoppingBag,
  "Education & E‑learning": GraduationCap,
  Healthcare: HeartPulse,
  "Real Estate": Building,
  "Food & Beverage": Utensils,
  "Agriculture & Agri‑tech": Sprout,
  "Professional Services": Briefcase,
  "Transportation & Logistics": Truck,
};

// Industries data with consistent naming
const industries = [
  {
    name: "Hospitality & Tourism",
    description:
      "From hotels in Shimla to homestays in Manali, we build booking engines, property management systems, and immersive websites to attract more guests.",
    areas: ["Hotels", "Resorts", "Homestays", "Travel Agencies", "Tour Operators"],
  },
  {
    name: "Retail & E‑commerce",
    description:
      "Launch your online store with our custom e‑commerce solutions. We help local retailers in Kangra, Mandi, and beyond sell products online seamlessly.",
    areas: ["Local Shops", "Handicrafts", "Apparel", "Groceries", "Electronics"],
  },
  {
    name: "Education & E‑learning",
    description:
      "Empower students and educators with learning management systems, institute websites, and online course platforms for schools and coaching centers.",
    areas: ["Schools", "Coaching Centers", "Vocational Training", "Online Courses"],
  },
  {
    name: "Healthcare",
    description:
      "Secure and user-friendly solutions for clinics, hospitals, and wellness centers – including appointment scheduling, patient portals, and informative websites.",
    areas: ["Clinics", "Hospitals", "Diagnostic Centers", "Yoga & Wellness"],
  },
  {
    name: "Real Estate",
    description:
      "Showcase properties with virtual tours, advanced search filters, and agent portals. We help real estate agencies in Dharamshala, Shimla, and Manali go digital.",
    areas: ["Property Listings", "Brokers", "Developers", "Rental Agencies"],
  },
  {
    name: "Food & Beverage",
    description:
      "From restaurant websites with online ordering to cafe loyalty apps, we help food businesses in Himachal enhance their digital presence.",
    areas: ["Restaurants", "Cafes", "Bakeries", "Food Trucks", "Caterers"],
  },
  {
    name: "Agriculture & Agri‑tech",
    description:
      "Supporting local farmers and cooperatives with supply chain solutions, marketplaces, and informational platforms tailored to agriculture in Himachal.",
    areas: ["Farmers", "Cooperatives", "Organic Produce", "Agri Suppliers"],
  },
  {
    name: "Professional Services",
    description:
      "Websites and client portals for lawyers, chartered accountants, consultants, and other professionals to build credibility and streamline client interaction.",
    areas: ["Legal", "Financial Advisors", "Consultants", "Architects"],
  },
  {
    name: "Transportation & Logistics",
    description:
      "Custom solutions for transport companies, including booking systems, fleet management dashboards, and customer tracking portals.",
    areas: ["Transport Services", "Courier", "Fleet Owners", "Logistics"],
  },
];

// JSON-LD for industries (ItemList of Service)
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

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
          {/* Animated blobs (ensure animate-blob is defined in global CSS) */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Industries{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                We Serve
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Tailored digital solutions for businesses across Himachal Pradesh – from the mountains to the markets.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.name] || Building; // fallback icon
              return (
                <article
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-green-200 p-6 flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {industry.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">{industry.description}</p>

                  {/* Areas/Tags */}
                  <div className="mb-6">
                    <span className="text-sm font-medium text-gray-700">We work with:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {industry.areas.map((area, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                    className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors mt-auto"
                  >
                    Get a quote for {industry.name}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Corner accent on hover */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-100 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Don't see your industry?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We love challenges! Contact us to discuss your unique business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
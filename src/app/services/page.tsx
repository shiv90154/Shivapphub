import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web & App Development Services in Himachal Pradesh | ShivAppHub",
  description:
    "Professional Website Development, App Development, SEO and E-commerce solutions across all districts of Himachal Pradesh.",
  alternates: {
    canonical: "https://shivapphub.in/services",
  },
};

const services = [
  {
    title: "Website Development",
    desc: "Fast, responsive and SEO-optimized websites built for long-term growth.",
    image: "/images/web-development.jpg",
    href: "/services/web-development",
    features: [
      "Business Websites",
      "Custom Web Applications",
      "Landing Pages",
      "Performance Optimization",
    ],
  },
  {
    title: "App Development",
    desc: "High-performance Android & iOS applications with modern UI/UX.",
    image: "/images/app-development.jpg",
    href: "/services/app-development",
    features: [
      "Android Apps",
      "iOS Apps",
      "React Native Apps",
      "Backend Integration",
    ],
  },
  {
    title: "SEO & Digital Growth",
    desc: "Technical SEO and local ranking strategies for Himachal businesses.",
    image: "/images/seo-services.jpg",
    href: "/services/seo",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword Strategy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-green-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Complete Web, App and SEO solutions for businesses across
            Himachal Pradesh — built for speed, performance and growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
              >
                {/* IMAGE */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mt-6 text-green-100">
            Let’s build something powerful, scalable and SEO-ready for your business.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
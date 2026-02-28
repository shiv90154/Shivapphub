import Link from "next/link";
import { Globe, Smartphone, Search, Palette, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Business websites, e-commerce stores and scalable web apps built with modern frameworks.",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "App Development",
    desc: "High-performance Android & iOS applications tailored for growth.",
    href: "/services/app-development",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO and local ranking strategies for Himachal businesses.",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "UI/UX Design",
    desc: "Modern, conversion-focused design systems that enhance user experience.",
    href: "/services/ui-ux",
    icon: Palette,
  },
  {
    title: "Website Maintenance",
    desc: "Regular updates, performance optimization & security monitoring.",
    href: "/services/maintenance",
    icon: Settings,
  },
  {
    title: "Digital Marketing",
    desc: "Google Ads, social media & performance marketing for business growth.",
    href: "/services/marketing",
    icon: BarChart3,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Core Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Complete digital solutions for businesses across Himachal Pradesh.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 h-full border border-gray-100">

                <div className="flex justify-center mb-5">
                  <service.icon className="w-10 h-10 text-green-600 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-5 text-green-600 font-medium text-sm">
                  Learn More →
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Link
            href="/contact"
            className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
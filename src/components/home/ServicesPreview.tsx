"use client"
import Link from "next/link";
import { Globe, Smartphone, Search, Palette, Settings, BarChart3, ArrowRight } from "lucide-react";

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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-100 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm font-medium text-green-800">
            What We Offer
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Core Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Complete digital solutions for businesses across Himachal Pradesh.
        </p>

        {/* Services grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100 flex flex-col">
                <div className="flex justify-center mb-5">
                  <service.icon className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="mt-5 text-green-600 font-medium text-sm inline-flex items-center justify-center group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all services link */}
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>✅ 50+ Projects Delivered</span>
          <span>✅ 12 Districts Served</span>
          <span>✅ 100% Client Satisfaction</span>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Animation keyframes (can be moved to global CSS) */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
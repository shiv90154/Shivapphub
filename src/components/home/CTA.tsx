import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Grow Your Business Online?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
          Let’s build a fast, SEO-optimized and high-converting website 
          that brings real leads and measurable results.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/services"
            className="px-8 py-4 border border-white/40 rounded-xl font-semibold hover:bg-white/10 transition duration-300"
          >
            View Our Services
          </Link>

        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-green-200">
          Trusted by growing businesses across Shimla & Himachal Pradesh
        </p>

      </div>
    </section>
  );
}
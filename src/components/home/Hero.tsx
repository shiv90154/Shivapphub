import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Web & App Development
          <span className="block text-green-600 mt-2">
            for Himachal Businesses
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Helping businesses in Shimla, Kangra, Dharamshala, Mandi and across
          Himachal Pradesh grow online with high-performance, SEO-optimized
          digital solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary"
          >
            Start Your Project
          </Link>

          <Link
            href="/services"
            className="btn-outline"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
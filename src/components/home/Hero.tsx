import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-32 overflow-hidden">
      
      {/* Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Modern Web & App Development
          <span className="block text-green-600 mt-3">
            for Himachal Businesses
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We help businesses in Shimla, Kangra, Dharamshala & across Himachal 
          Pradesh build fast, secure and SEO-optimized websites that generate 
          real leads and sales.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition duration-300"
          >
            🚀 Start Your Project
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 border border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by local startups, shops & service businesses in Himachal
        </p>

        {/* Optional Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-green-600">50+</h3>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">100%</h3>
            <p className="text-sm text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">24/7</h3>
            <p className="text-sm text-gray-600">Support</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">SEO</h3>
            <p className="text-sm text-gray-600">Optimized</p>
          </div>
        </div>

      </div>
    </section>
  );
}
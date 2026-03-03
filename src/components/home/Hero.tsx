"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626621341517-bf5d31462f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white/90 to-green-100/90" />
      </div>

      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Small Badge */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-100 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm font-medium text-green-800">
            #1 Web Agency in Himachal Pradesh
          </span>
        </div>

        {/* Heading with Animation */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Modern Web & App Development
          <span className="block text-green-600 mt-3 animate-pulse-slow">
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
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            🚀 Start Your Project
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 border border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition duration-300 transform hover:scale-105"
          >
            View Services
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by local startups, shops & service businesses in Himachal
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">50+</h3>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">100%</h3>
            <p className="text-sm text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">24/7</h3>
            <p className="text-sm text-gray-600">Support</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">SEO</h3>
            <p className="text-sm text-gray-600">Optimized</p>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
}
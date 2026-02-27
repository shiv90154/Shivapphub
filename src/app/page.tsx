import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Professional Web & App Development <br />
            <span className="text-green-500">in Himachal Pradesh</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We help local businesses in <strong>Shimla, Kangra, Dharamshala, Mandi, Kullu, Manali</strong> and across Himachal grow online with modern, SEO‑optimized websites and mobile apps.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              View Our Services
            </Link>
          </div>
        </div>
        {/* Optional background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Tailored digital solutions for businesses in Himachal Pradesh
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/web-development" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-500 transition">
                  Website Development
                </h3>
                <p className="text-gray-600">
                  SEO‑ready business websites, e‑commerce stores, and custom web applications built with modern technologies.
                </p>
              </div>
            </Link>
            <Link href="/services/app-development" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-500 transition">
                  App Development
                </h3>
                <p className="text-gray-600">
                  High‑performance Android & iOS applications tailored to your business needs, from startups to enterprises.
                </p>
              </div>
            </Link>
            <Link href="/services/seo" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-500 transition">
                  SEO Optimization
                </h3>
                <p className="text-gray-600">
                  Rank higher on Google with structured data, technical SEO, and local keyword strategies for Himachal businesses.
                </p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-green-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            >
              Explore all services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Why Himachal Businesses Choose ShivAppHub
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  We understand the local market and tailor our solutions to help businesses in Shimla, Dharamshala, and beyond succeed online.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast & Scalable</h3>
                <p className="text-gray-600">
                  We use modern frameworks like Next.js and React to build lightning‑fast websites that grow with your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SEO‑First Approach</h3>
                <p className="text-gray-600">
                  Every site we build is optimized for search engines from day one, helping you attract more local customers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  We provide ongoing maintenance and support to ensure your digital presence stays up‑to‑date and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Placeholder) */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-600 italic">
                  "ShivAppHub transformed our online presence. Our bookings from local customers in Shimla increased by 200%!"
                </p>
                <p className="mt-4 font-semibold">– Local Business {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Do you serve businesses outside Shimla?</h3>
              <p className="text-gray-600">
                Yes! We work with clients across Himachal Pradesh, including Kangra, Dharamshala, Mandi, Kullu, Manali, and more. We can meet online or travel to your location.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How long does it take to build a website?</h3>
              <p className="text-gray-600">
                A typical business website takes 4–6 weeks from concept to launch. Complex e‑commerce or custom apps may take longer.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer maintenance after launch?</h3>
              <p className="text-gray-600">
                Absolutely. We provide monthly maintenance packages to keep your site secure, updated, and performing well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to grow your business online?
          </h2>
          <p className="mt-4 text-xl text-green-100">
            Get a free consultation and quote for your project.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
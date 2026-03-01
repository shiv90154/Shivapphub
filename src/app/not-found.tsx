import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50 px-6">

      <div className="text-center max-w-2xl">

        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-green-600">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition duration-300"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            View Services
          </Link>

        </div>

        {/* Extra Help */}
        <p className="mt-8 text-sm text-gray-500">
          Need help? <Link href="/contact" className="text-green-600 font-medium hover:underline">Contact us</Link>
        </p>

      </div>

    </main>
  );
}
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-green-800 py-20 text-center">
      <h2 className="text-3xl font-bold text-white">
        Ready to Grow Your Business?
      </h2>

      <p className="mt-4 text-green-100">
        Let’s build something powerful together.
      </p>

      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
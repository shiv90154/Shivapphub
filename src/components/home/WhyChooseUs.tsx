import { MapPin, TrendingUp, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Local Market Expertise",
    desc: "Deep understanding of Himachal’s business landscape and regional customer behavior.",
    icon: MapPin,
  },
  {
    title: "SEO-First Development",
    desc: "Every project is optimized for performance, visibility and long-term search rankings.",
    icon: TrendingUp,
  },
  {
    title: "Scalable Architecture",
    desc: "Built using modern frameworks like Next.js for future-ready growth.",
    icon: Layers,
  },
  {
    title: "Dedicated Support",
    desc: "Reliable post-launch maintenance, updates and technical support.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose ShivAppHub?
          </h2>
          <p className="mt-4 text-gray-600">
            We combine local insight with modern technology to help Himachal
            businesses grow online confidently.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-5">
                <feature.icon className="w-8 h-8 text-green-600 mr-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            Let’s Build Something Great →
          </Link>
        </div>

      </div>
    </section>
  );
}
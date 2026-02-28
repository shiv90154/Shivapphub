import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Perfect Institute Shimla",
    role: "Education Institute",
    review:
      "ShivAppHub built a professional website for our institute that significantly improved our online inquiries and student registrations. Highly recommended for educational organizations.",
  },
  {
    name: "CareerPathway Shimla",
    role: "Career & Counseling Services",
    review:
      "Their SEO-first approach helped us rank locally and attract serious clients. The team understands the Himachal market very well.",
  },
  {
    name: "BharatTrip.net",
    role: "Travel & Tourism Platform",
    review:
      "From design to deployment, the entire process was smooth. Our travel portal now loads faster and converts visitors into bookings efficiently.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by growing businesses across Shimla and Himachal Pradesh.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100 text-left"
            >
              {/* Stars */}
              <div className="flex mb-4 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-500" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 italic leading-relaxed">
                “{item.review}”
              </p>

              {/* Client Info */}
              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
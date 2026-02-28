const features = [
  {
    title: "Local Market Expertise",
    desc: "We understand Himachal’s business landscape and customer behavior.",
  },
  {
    title: "SEO-First Development",
    desc: "Built from day one for performance, visibility and speed.",
  },
  {
    title: "Scalable Architecture",
    desc: "Modern frameworks like Next.js ensure long-term growth.",
  },
  {
    title: "Dedicated Support",
    desc: "Ongoing maintenance and support for peace of mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center">
          Why Choose ShivAppHub?
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
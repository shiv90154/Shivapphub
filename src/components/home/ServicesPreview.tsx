import Link from "next/link";

const services = [
  {
    title: "Website Development",
    desc: "Business websites, e-commerce stores and scalable web apps built with modern frameworks.",
    href: "/services/web-development",
  },
  {
    title: "App Development",
    desc: "High-performance Android & iOS applications tailored for growth.",
    href: "/services/app-development",
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO and local ranking strategies for Himachal businesses.",
    href: "/services/seo",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section bg-green-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold">
          Our Core Services
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <div className="card h-full hover:scale-[1.02] duration-300">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
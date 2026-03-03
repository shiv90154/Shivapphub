import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Web & App Development Services in Himachal Pradesh | ShivAppHub",
  description:
    "Professional Website Development, App Development, SEO, UI/UX Design, E‑commerce, Digital Marketing and more across all districts of Himachal Pradesh.",
  alternates: {
    canonical: "https://shivapphub.in/services",
  },
};

const services = [
  {
    title: "Website Development",
    desc: "Fast, responsive and SEO‑optimized websites built for long‑term growth.",
    image: "/images/web-development.jpg",
    href: "/services/web-development",
    features: [
      "Business Websites",
      "Custom Web Applications",
      "Landing Pages",
      "Performance Optimization",
    ],
  },
  {
    title: "App Development",
    desc: "High‑performance Android & iOS applications with modern UI/UX.",
    image: "/images/app-development.jpg",
    href: "/services/app-development",
    features: [
      "Android Apps",
      "iOS Apps",
      "React Native Apps",
      "Backend Integration",
    ],
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO and local ranking strategies for Himachal businesses.",
    image: "/images/seo-services.jpg",
    href: "/services/seo",
    features: [
      "On‑Page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword Strategy",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Modern, conversion‑focused design systems that enhance user experience.",
    image: "/images/ui-ux-design.jpg",
    href: "/services/ui-ux",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
  },
  {
    title: "E‑commerce Development",
    desc: "Scalable online stores with secure payments, inventory management, and seamless UX.",
    image: "/images/ecommerce-development.jpg",
    href: "/services/ecommerce",
    features: [
      "WooCommerce / Shopify",
      "Payment Gateway Integration",
      "Product Management",
      "Shopping Cart & Checkout",
    ],
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience on Instagram, Facebook, and WhatsApp with targeted campaigns.",
    image: "/images/social-media-marketing.jpg",
    href: "/services/social-media",
    features: [
      "Content Creation",
      "Paid Ads Management",
      "Community Management",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Website Maintenance",
    desc: "Regular updates, performance optimization & security monitoring.",
    image: "/images/maintenance.jpg",
    href: "/services/maintenance",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Tuning",
      "Backup Management",
    ],
  },
  {
    title: "Digital Marketing",
    desc: "Google Ads, social media & performance marketing for business growth.",
    image: "/images/marketing.jpg",
    href: "/services/marketing",
    features: [
      "Google Ads",
      "Social Media Marketing",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
];

const technologies = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "WooCommerce", icon: "/icons/woocommerce.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
];

const whyChooseUs = [
  { number: "50+", label: "Projects Delivered" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support" },
];

const testimonials = [
  {
    quote: "ShivAppHub built our hotel website and handled SEO. Bookings increased by 40% in 3 months!",
    name: "Rajesh Sharma",
    position: "Owner, Snow Valley Resort, Manali",
  },
  {
    quote: "Professional, on‑time, and affordable. Our café now ranks #1 for 'café in Shimla'.",
    name: "Priya Verma",
    position: "Co‑founder, The Himalayan Brew, Shimla",
  },
  {
    quote: "They developed a custom booking app for our adventure company. Game changer!",
    name: "Amit Thakur",
    position: "Director, Himalayan Adventures, Kullu",
  },
];

const faqs = [
  {
    q: "Do you serve clients outside Himachal Pradesh?",
    a: "Absolutely! While we're based in Himachal, we work with clients all over India and internationally. All meetings are conducted online.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A basic business website takes 2‑3 weeks, while e‑commerce or custom apps may take 4‑8 weeks depending on complexity.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes, we offer monthly maintenance packages to keep your site secure, updated, and fast.",
  },
  {
    q: "What is your pricing model?",
    a: "We provide transparent fixed‑price quotes based on your requirements. No hidden costs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative py-10 bg-gradient-to-b from-green-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Complete Web, App and SEO solutions for businesses across
            Himachal Pradesh — built for speed, performance and growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
              >
                {/* IMAGE */}
                <div className="h-48 overflow-hidden bg-green-100 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-1 text-sm text-gray-600 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700 text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies We <span className="text-green-600">Excel In</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We use modern, robust tech stacks to deliver scalable and secure solutions.
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center">
            {technologies.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-10 w-10 mb-2 relative">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                </div>
                <span className="text-xs text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Himachal Businesses Trust Us
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-12">
            We combine local market understanding with global technical expertise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{item.number}</div>
                <div className="text-green-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-green-600">Process</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From idea to launch and beyond – we follow a proven, transparent process.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {["Discovery", "Design", "Development", "QA", "Launch & Support"].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {step === "Discovery" && "Understand goals & requirements"}
                  {step === "Design" && "Wireframes & visual design"}
                  {step === "Development" && "Code & integrate features"}
                  {step === "QA" && "Testing & refinement"}
                  {step === "Launch & Support" && "Go live & ongoing care"}
                </p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-green-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Client <span className="text-green-600">Stories</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Don&apos;t take our word for it – hear from our happy clients across Himachal.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-4xl text-green-600 mb-4">“</div>
                <p className="text-gray-700 italic mb-6">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Got questions? We&apos;ve got answers.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg p-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold">{faq.q}</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mt-6 text-green-100">
            Let’s build something powerful, scalable and SEO‑ready for your business.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
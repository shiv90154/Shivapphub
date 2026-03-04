import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About ShivAppHub | Web & App Development in Himachal Pradesh",
  description:
    "ShivAppHub is a Himachal Pradesh based Web and App Development company serving all 12 districts – Shimla, Kangra, Mandi, Kullu, Manali, Dharamshala, Bilaspur, Chamba, Hamirpur, Kinnaur, Lahaul & Spiti, Sirmaur, Solan, Una. We provide modern, SEO-friendly and scalable digital solutions for local businesses.",
  keywords: [
    "About ShivAppHub",
    "Web Development Himachal Pradesh",
    "App Developer in Shimla",
    "Website Company Kangra",
    "Digital Agency Dharamshala",
    "SEO Services Mandi",
    "Himachal Web Design",
    "Best Web Agency in Himachal",
    "Top App Developers in Manali",
  ],
  openGraph: {
    title: "About ShivAppHub – Himachal's Premier Web & App Agency",
    description:
      "Professional Website and Mobile App Development services across all districts of Himachal Pradesh.",
    url: "https://shivapphub.in/about",
    type: "website",
    images: [
      {
        url: "https://shivapphub.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ShivAppHub",
    description: "Web & App Development company serving all 12 districts of Himachal Pradesh.",
  },
  alternates: {
    canonical: "https://shivapphub.in/about",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://shivapphub.in/#organization",
      name: "ShivAppHub",
      description:
        "Web & App Development company in Himachal Pradesh providing modern, scalable and SEO-friendly solutions.",
      url: "https://shivapphub.in",
      telephone: "+919015484696",
      email: "info@shivapphub.in",
      logo: "https://shivapphub.in/logo.png",
      image: "https://shivapphub.in/about-hero.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shimla",
        addressRegion: "Himachal Pradesh",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "31.1048",
        longitude: "77.1734",
      },
      areaServed: [
        { "@type": "City", name: "Shimla" },
        { "@type": "City", name: "Kangra" },
        { "@type": "City", name: "Mandi" },
        { "@type": "City", name: "Kullu" },
        { "@type": "City", name: "Manali" },
        { "@type": "City", name: "Dharamshala" },
        { "@type": "City", name: "Bilaspur" },
        { "@type": "City", name: "Chamba" },
        { "@type": "City", name: "Hamirpur" },
        { "@type": "City", name: "Kinnaur" },
        { "@type": "City", name: "Lahaul and Spiti" },
        { "@type": "City", name: "Sirmaur" },
        { "@type": "City", name: "Solan" },
        { "@type": "City", name: "Una" },
        { "@type": "State", name: "Himachal Pradesh" },
      ],
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/shivapphub",
        "https://www.instagram.com/shivapphub",
        "https://www.linkedin.com/company/shivapphub",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://shivapphub.in/#founder",
      name: "Shiv Kumar",
      jobTitle: "Founder & Lead Developer",
      worksFor: { "@id": "https://shivapphub.in/#organization" },
    },
  ],
};

const team = [
  { name: "Shiv Kumar", role: "Founder & Lead Developer", image: "/team/shiv.jpg" },
  { name: "Priya Sharma", role: "UI/UX Designer", image: "/team/priya.jpg" },
  { name: "Amit Thakur", role: "SEO Specialist", image: "/team/amit.jpg" },
  { name: "Neha Verma", role: "Project Manager", image: "/team/neha.jpg" },
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
    q: "What makes ShivAppHub different from other web agencies?",
    a: "We're deeply rooted in Himachal. We understand the local market, tourism trends, and the unique challenges businesses face here. Our solutions are tailored, not templated.",
  },
  {
    q: "Do you work with businesses outside Himachal?",
    a: "Absolutely! While our focus is Himachal, we have clients across India and internationally. All meetings are conducted online.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We're experts in React, Next.js, Node.js, Laravel, WordPress, WooCommerce, Flutter, and more. We choose the best stack for your project.",
  },
  {
    q: "How do you ensure SEO success?",
    a: "We build websites with SEO from the ground up – fast loading, mobile‑friendly, clean code, and local keyword strategy. We also offer ongoing SEO packages.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative py-24 text-center bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            About <span className="text-green-600">ShivAppHub</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A technology-driven Web & App Development agency helping businesses
            across Himachal Pradesh build fast, scalable and SEO-first digital platforms.
          </p>
          <p className="mt-4 text-sm text-green-700 font-medium">
            Serving Shimla • Kangra • Mandi • Dharamshala • Solan • Una & beyond
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "12", label: "Districts Served" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-green-600">{stat.number}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-green-600">Story</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            ShivAppHub was founded in 2020 with a simple mission: to empower Himachal businesses with modern digital tools. 
            As a team of passionate developers and designers from the region, we understand the local market, the tourism 
            dynamics, and the aspirations of small business owners. We started by building websites for friends and family, 
            and today we've delivered over 50 successful projects across all 12 districts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our approach combines global best practices with local insights. Whether you're a hotel in Manali, a café in Shimla, 
            or a handicraft seller in Kangra, we craft digital experiences that resonate with your audience and drive real results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make high‑quality web and app development accessible to every business in Himachal, helping them compete nationally and globally.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted digital partner in the Himalayan region, known for innovation, integrity, and impact.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💚</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Transparency, quality, and long‑term relationships. We succeed when our clients succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet the <span className="text-green-600">Team</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-green-200 flex items-center justify-center text-2xl">
                    {member.name[0]}
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Himachal Businesses <span className="text-green-600">Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">🏔️ Local Expertise</h3>
              <p className="text-gray-600">
                We're based here, we understand your customers, and we know what works in the Himachal market.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">⚡ SEO‑First Approach</h3>
              <p className="text-gray-600">
                Every site we build is optimized for speed, mobile, and local search from day one.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">📞 Ongoing Support</h3>
              <p className="text-gray-600">
                We don't just build and disappear. We offer maintenance, updates, and 24/7 support.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">💰 Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden costs. We provide clear quotes and deliver on budget.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">📱 Full‑Stack Capability</h3>
              <p className="text-gray-600">
                From simple websites to complex mobile apps, we handle it all under one roof.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">🏆 Proven Track Record</h3>
              <p className="text-gray-600">
                50+ happy clients, 12 districts served, and a 100% satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            We Serve All 12 Districts of Himachal Pradesh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No matter where you're located – from the mountains of Lahaul & Spiti to the valleys of Sirmaur – we're here to help you build a powerful online presence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-green-700">
            {[
              "Shimla", "Kangra", "Mandi", "Kullu", "Manali", "Dharamshala",
              "Bilaspur", "Chamba", "Hamirpur", "Kinnaur", "Lahaul & Spiti",
              "Sirmaur", "Solan", "Una"
            ].map((district) => (
              <span key={district} className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {district}
              </span>
            ))}
          </div>
          <div className="mt-12 bg-gray-200 h-64 rounded-2xl flex items-center justify-center text-gray-500">
            [Interactive Map of Himachal with service areas – coming soon]
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Client <span className="text-green-600">Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-100">
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

      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-lg p-6 cursor-pointer">
                <summary className="flex justify-between items-center list-none">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className="text-green-600 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mt-6 text-green-100">
            Let's build something powerful, scalable and SEO‑ready for your business.
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
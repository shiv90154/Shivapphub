// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ShivAppHub",
  description:
    "Find answers to common questions about our web development, app development, SEO, and digital services in Himachal Pradesh. Get clarity on pricing, timeline, and process.",
  keywords: [
    "FAQ web development Himachal",
    "app development questions",
    "website design Shimla",
    "SEO services Kangra",
    "e-commerce development Mandi",
    "digital agency Dharamshala",
  ],
  alternates: {
    canonical: "https://shivapphub.in/faq",
  },
  openGraph: {
    title: "FAQ – ShivAppHub",
    description:
      "Answers to your questions about web & app development in Himachal Pradesh.",
    url: "https://shivapphub.in/faq",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub FAQ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// Enhanced FAQ data with categories
const faqs = [
  {
    question: "What services does ShivAppHub offer?",
    answer:
      "We offer professional web development, mobile app development (Android & iOS), UI/UX design, SEO services, e-commerce solutions, and digital marketing tailored for businesses in Himachal Pradesh.",
    category: "General",
  },
  {
    question: "Which areas in Himachal Pradesh do you serve?",
    answer:
      "We proudly serve clients across Himachal Pradesh including Shimla, Kangra, Dharamshala, Mandi, Kullu, Manali, Solan, Bilaspur, Hamirpur, and surrounding regions. We also work with clients remotely throughout India.",
    category: "General",
  },
  {
    question: "How much does a website or app cost?",
    answer:
      "Pricing depends on project complexity, features, and design requirements. A basic business website starts from ₹25,000, while custom web apps or mobile apps may range from ₹50,000 to several lakhs. We provide free consultations and transparent quotes.",
    category: "Pricing",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard informational website typically takes 2–4 weeks. E-commerce sites or custom web applications may take 6–12 weeks depending on functionality. We’ll provide a clear timeline during our initial discussion.",
    category: "Timeline",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we offer comprehensive SEO packages to help your website rank higher on Google. Our SEO services include keyword research, on-page optimization, content strategy, and local SEO for Himachal businesses.",
    category: "Services",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. We build all websites with a mobile-first approach, ensuring they look great and perform flawlessly on smartphones, tablets, and desktops.",
    category: "Technical",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we provide monthly maintenance plans including security updates, backups, content updates, and performance monitoring to keep your site running smoothly.",
    category: "Support",
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "Certainly. We can assist with domain registration and recommend reliable hosting providers. We also offer hosting setup and management as part of our maintenance packages.",
    category: "Technical",
  },
  {
    question: "What platforms/technologies do you use?",
    answer:
      "We use modern technologies like Next.js, React, Node.js, Laravel, WordPress for web; and Flutter, React Native for mobile apps. We choose the best stack based on your project needs.",
    category: "Technical",
  },
  {
    question: "How do I get started with ShivAppHub?",
    answer:
      "Simply contact us via our website, email, or phone. We’ll schedule a free consultation to understand your requirements and provide a customized proposal.",
    category: "General",
  },
];

// Build FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
          {/* Decorative blobs - now using Tailwind animation classes */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Everything you need to know about our services in Himachal Pradesh
            </p>
          </div>
        </section>

        {/* Client Component for interactive FAQ */}
        <FAQClient faqs={faqs} />

        {/* Still have questions? - Enhanced CTA */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <a
                  href="tel:+917017345533"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-green-600 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +91 7017345533
                </a>
              </div>
              <p className="mt-6 text-gray-500">
                Or email us at{" "}
                <a href="mailto:hello@shivapphub.in" className="text-green-600 hover:underline">
                  hello@shivapphub.in
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
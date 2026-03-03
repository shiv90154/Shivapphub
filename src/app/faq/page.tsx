import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ShivAppHub",
  description:
    "Find answers to common questions about our web development, app development, SEO, and digital services in Himachal Pradesh. Get clarity on pricing, timeline, and process.",
  keywords:
    "FAQ web development Himachal, app development questions, website design Shimla, SEO services Kangra, e-commerce development Mandi, digital agency Dharamshala",
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

const faqs = [
  {
    question: "What services does ShivAppHub offer?",
    answer:
      "We offer professional web development, mobile app development (Android & iOS), UI/UX design, SEO services, e-commerce solutions, and digital marketing tailored for businesses in Himachal Pradesh.",
  },
  {
    question: "Which areas in Himachal Pradesh do you serve?",
    answer:
      "We proudly serve clients across Himachal Pradesh including Shimla, Kangra, Dharamshala, Mandi, Kullu, Manali, Solan, Bilaspur, Hamirpur, and surrounding regions. We also work with clients remotely throughout India.",
  },
  {
    question: "How much does a website or app cost?",
    answer:
      "Pricing depends on project complexity, features, and design requirements. A basic business website starts from ₹25,000, while custom web apps or mobile apps may range from ₹50,000 to several lakhs. We provide free consultations and transparent quotes.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard informational website typically takes 2–4 weeks. E-commerce sites or custom web applications may take 6–12 weeks depending on functionality. We’ll provide a clear timeline during our initial discussion.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we offer comprehensive SEO packages to help your website rank higher on Google. Our SEO services include keyword research, on-page optimization, content strategy, and local SEO for Himachal businesses.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. We build all websites with a mobile-first approach, ensuring they look great and perform flawlessly on smartphones, tablets, and desktops.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we provide monthly maintenance plans including security updates, backups, content updates, and performance monitoring to keep your site running smoothly.",
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "Certainly. We can assist with domain registration and recommend reliable hosting providers. We also offer hosting setup and management as part of our maintenance packages.",
  },
  {
    question: "What platforms/technologies do you use?",
    answer:
      "We use modern technologies like Next.js, React, Node.js, Laravel, WordPress for web; and Flutter, React Native for mobile apps. We choose the best stack based on your project needs.",
  },
  {
    question: "How do I get started with ShivAppHub?",
    answer:
      "Simply contact us via our website, email, or phone. We’ll schedule a free consultation to understand your requirements and provide a customized proposal.",
  },
];

export default function FAQPage() {
  // JSON-LD structured data for FAQ schema
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

  return (
    <>
      {/* Add JSON-LD script to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about our services in Himachal Pradesh
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
                  <span>{faq.question}</span>
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
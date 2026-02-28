"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites take 3–6 weeks depending on features, content availability, and revisions. Larger web apps may take longer.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer monthly maintenance plans including updates, backups, security monitoring and performance optimization.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Yes. We build SEO-first websites with proper technical structure, fast loading speed and local optimization for Himachal businesses.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can improve design, performance and SEO without losing your existing content or rankings.",
  },
  {
    question: "Do you develop mobile apps as well?",
    answer:
      "Yes. We build high-performance Android & iOS apps tailored to your business needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before starting your project.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="p-5 text-gray-600 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
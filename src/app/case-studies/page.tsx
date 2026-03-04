// app/case-studies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies – Web & App Development Success Stories in Himachal Pradesh",
  description:
    "Explore real-world examples of how we've helped businesses in Shimla, Kangra, Dharamshala, and across Himachal achieve digital success through custom websites, apps, and SEO.",
  keywords:
    "web development case studies Himachal, app development portfolio Shimla, successful projects Kangra, client success stories Dharamshala, e-commerce examples Mandi",
  alternates: {
    canonical: "https://shivapphub.in/case-studies",
  },
  openGraph: {
    title: "Case Studies – ShivAppHub",
    description:
      "Real success stories from businesses across Himachal Pradesh.",
    url: "https://shivapphub.in/case-studies",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub Case Studies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// Sample case studies data (same as before)
const caseStudies = [
  {
    title: "Hotel Shimla Heights – 40% Increase in Direct Bookings",
    industry: "Hospitality",
    location: "Shimla",
    challenge:
      "The hotel relied on OTAs (Online Travel Agencies) and paid high commissions. They needed a direct booking website with a seamless user experience.",
    solution:
      "We built a responsive website with a custom booking engine, integrated payment gateway, and SEO optimization targeting 'hotels in Shimla'.",
    results:
      "Direct bookings increased by 40% within 3 months, reducing OTA commissions significantly.",
    image: "/case-studies/hotel-shimla.jpg", // placeholder
    tags: ["Web Development", "Booking System", "SEO"],
  },
  {
    title: "Kangra Handicrafts – From Local Shop to Global E‑commerce",
    industry: "Retail",
    location: "Kangra",
    challenge:
      "A local handicraft store wanted to sell products online but had no digital presence.",
    solution:
      "We developed a custom e‑commerce website with product catalog, secure checkout, and integrated shipping options.",
    results:
      "Within 6 months, online sales accounted for 30% of total revenue, with customers from across India.",
    image: "/case-studies/kangra-handicrafts.jpg",
    tags: ["E-commerce", "UI/UX Design", "Payment Gateway"],
  },
  {
    title: "Dharamshala Yoga Retreat – Mobile App for Wellness Booking",
    industry: "Health & Wellness",
    location: "Dharamshala",
    challenge:
      "The retreat center needed a mobile app for class schedules, bookings, and push notifications to engage visitors.",
    solution:
      "We created a cross-platform app (iOS & Android) with class booking, payment, and reminders.",
    results:
      "App downloads exceeded 1,000 in first month; repeat bookings increased by 25%.",
    image: "/case-studies/yoga-app.jpg",
    tags: ["Mobile App", "Flutter", "Push Notifications"],
  },
  {
    title: "Mandi Farmers Cooperative – Digital Marketplace",
    industry: "Agriculture",
    location: "Mandi",
    challenge:
      "Local farmers struggled to reach buyers directly; middlemen took most profits.",
    solution:
      "We developed a web platform where farmers can list produce and buyers can place orders directly.",
    results:
      "Farmers' profits increased by 20% on average; the platform now serves 200+ farmers.",
    image: "/case-studies/farmers-market.jpg",
    tags: ["Web App", "Marketplace", "Logistics"],
  },
  {
    title: "Manali Adventure Sports – Online Booking Portal",
    industry: "Tourism",
    location: "Manali",
    challenge:
      "The adventure company managed bookings manually via phone/WhatsApp, leading to errors and missed opportunities.",
    solution:
      "We built a booking portal with activity listings, availability calendar, and automated confirmations.",
    results:
      "Booking efficiency improved by 60%; customer satisfaction scores rose.",
    image: "/case-studies/adventure-sports.jpg",
    tags: ["Booking System", "Automation", "Web Development"],
  },
  {
    title: "Bilaspur Diagnostic Centre – Patient Portal & Website",
    industry: "Healthcare",
    location: "Bilaspur",
    challenge:
      "Patients wanted online appointment booking and access to reports.",
    solution:
      "We created a website with appointment scheduling and a secure patient portal for downloading reports.",
    results:
      "Online appointments now account for 40% of all bookings; patient engagement improved.",
    image: "/case-studies/diagnostic-centre.jpg",
    tags: ["Healthcare", "Portal", "Web App"],
  },
];

// JSON-LD for case studies (ItemList with CreativeWork)
const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: caseStudies.map((cs, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: cs.title,
      description: cs.challenge,
      about: cs.industry,
      location: cs.location,
    },
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
          {/* Animated blobs (ensure animate-blob is defined in global CSS) */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Success{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Real results for real businesses across Himachal Pradesh.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-green-200 overflow-hidden flex flex-col"
              >
                {/* Image area with gradient placeholder */}
                <div className="relative h-48 w-full bg-gradient-to-br from-green-400 to-emerald-500">
                  {cs.image ? (
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-30 text-7xl font-bold">
                      {/* Placeholder icon or text */}
                    </div>
                  )}
                  {/* Optional overlay with icon */}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Industry & Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                      {cs.industry}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {cs.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {cs.title}
                  </h2>

                  {/* Challenge preview */}
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {cs.challenge}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <Link
                    href={`/case-studies/${index}`} // We'll create dynamic pages later
                    className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors mt-auto"
                  >
                    Read full story
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Subtle corner accent on hover */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-100 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to write your success story?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your business grow with custom digital solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
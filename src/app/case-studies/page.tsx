import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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

// Sample case studies data
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

export default function CaseStudiesPage() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      <div className="bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Success Stories
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Real results for real businesses across Himachal Pradesh.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition group"
              >
                {/* Image placeholder – in production, use Next/Image with real images */}
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-opacity-50 text-6xl font-bold">
                    {/* Icon or placeholder */}
                  </div>
                  {/* Uncomment when you have real images */}
                  {/* <Image src={cs.image} alt={cs.title} fill className="object-cover" /> */}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{cs.location}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {cs.title}
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">{cs.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${index}`} // we could create dynamic pages later
                    className="inline-block text-blue-600 font-medium hover:underline"
                  >
                    Read full story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to write your success story?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Let's discuss how we can help your business grow with custom digital solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
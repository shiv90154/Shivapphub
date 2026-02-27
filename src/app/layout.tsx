import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup"; // new component

export const metadata: Metadata = {
  metadataBase: new URL("https://shivapphub.in"),
  title: {
    default: "ShivAppHub – Web & App Development in Himachal Pradesh",
    template: "%s | ShivAppHub",
  },
  description:
    "Professional Web and App Development services in Himachal Pradesh. Serving Shimla, Kangra, Dharamshala, Mandi, Kullu, Manali and nearby areas. Get a modern, SEO‑friendly website or mobile app.",
  keywords: [
    "Web Development Himachal Pradesh",
    "App Development Shimla",
    "Website Design Kangra",
    "SEO Services Dharamshala",
    "E-commerce Development Mandi",
    "Mobile App Developers Kullu",
    "Software Company Manali",
    "Digital Marketing Himachal",
  ],
  authors: [{ name: "ShivAppHub Team" }],
  creator: "ShivAppHub",
  publisher: "ShivAppHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ShivAppHub – Web & App Development in Himachal Pradesh",
    description:
      "Affordable Website and Mobile App Development for businesses in Shimla, Kangra, Dharamshala and across Himachal Pradesh.",
    url: "https://shivapphub.in",
    siteName: "ShivAppHub",
    images: [
      {
        url: "/og-image.jpg", // create an actual image
        width: 1200,
        height: 630,
        alt: "ShivAppHub – Web & App Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivAppHub – Web & App Development in Himachal Pradesh",
    description:
      "Modern, SEO-friendly websites and apps for local businesses.",
    images: ["/og-image.jpg"],
    creator: "@shivapphub",
  },
  alternates: {
    canonical: "https://shivapphub.in",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SchemaMarkup />
      </body>
    </html>
  );
}
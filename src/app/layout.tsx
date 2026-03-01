import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivapphub.in"),

  title: {
    default: "ShivAppHub – Web & App Development in Himachal Pradesh",
    template: "%s | ShivAppHub",
  },

  description:
    "Professional Web and App Development services in Himachal Pradesh. Serving Shimla, Kangra, Dharamshala, Mandi, Kullu, Manali and nearby areas.",

  keywords: [
    "Web Development Himachal Pradesh",
    "App Development Shimla",
    "Website Design Kangra",
    "SEO Services Dharamshala",
    "E-commerce Development Mandi",
    "Mobile App Developers Himachal",
  ],

  authors: [{ name: "ShivAppHub Team" }],
  creator: "ShivAppHub",
  publisher: "ShivAppHub",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ShivAppHub – Web & App Development in Himachal Pradesh",
    description:
      "Modern, SEO-friendly websites and mobile apps for Himachal businesses.",
    url: "https://shivapphub.in",
    siteName: "ShivAppHub",
    images: [
      {
        url: "https://shivapphub.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShivAppHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ShivAppHub – Web & App Development",
    description:
      "Modern websites and apps for local businesses in Himachal Pradesh.",
    images: ["https://shivapphub.in/og-image.jpg"],
  },

  alternates: {
    canonical: "https://shivapphub.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        <SchemaMarkup />

        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
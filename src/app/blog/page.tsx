import type { Metadata } from "next";
import { blogPosts } from "./data";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog | Web & App Development Insights in Himachal Pradesh",
  description:
    "Expert insights on Web Development, App Development and SEO strategies for businesses in Himachal Pradesh. Read our latest articles to grow your online presence.",
  keywords: [
    "Himachal Pradesh blog",
    "web development tips",
    "SEO strategies",
    "app development insights",
    "digital marketing Himachal",
    "business blog Shimla",
    "tech blog Kangra",
  ],
  alternates: {
    canonical: "https://shivapphub.in/blog",
  },
  openGraph: {
    title: "ShivAppHub Blog – Insights for Himachal Businesses",
    description:
      "Guides and strategies for businesses in Himachal Pradesh to succeed online.",
    url: "https://shivapphub.in/blog",
    type: "website",
    images: [
      {
        url: "https://shivapphub.in/og-blog.jpg", // Replace with actual
        width: 1200,
        height: 630,
        alt: "ShivAppHub Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivAppHub Blog",
    description: "Practical insights for Himachal businesses.",
  },
  robots: "index, follow",
};

export default function BlogPage() {
  return <BlogClient posts={blogPosts} />;
}
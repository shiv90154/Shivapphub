import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog | Web & App Development Insights in Himachal Pradesh",
  description:
    "Expert insights on Web Development, App Development and SEO strategies for businesses in Himachal Pradesh.",
  alternates: {
    canonical: "https://shivapphub.in/blog",
  },
  openGraph: {
    title: "ShivAppHub Blog",
    description:
      "Guides and strategies for businesses in Himachal Pradesh.",
    url: "https://shivapphub.in/blog",
    type: "website",
  },
};

function readingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ShivAppHub Blog",
    url: "https://shivapphub.in/blog",
  };

  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="py-24 text-center bg-green-50">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-green-800">Blog</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Practical insights on web, apps and SEO for Himachal businesses.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
          >
            {post.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-green-700 transition"
                >
                  {post.title}
                </Link>
              </h2>

              <div className="text-sm text-gray-500 mb-3">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" • "}
                {readingTime(post.content)} min read
              </div>

              <p className="text-gray-600 mb-6 flex-grow">
                {post.description}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-green-700 font-medium hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Internal SEO Boost Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">
            Explore Our Development Services
          </h2>
          <p className="text-gray-600 mb-6">
            We provide website and app development services across Himachal Pradesh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/web-development-in-shimla"
              className="text-green-800 font-medium hover:underline"
            >
              Web Development in Shimla
            </Link>
            <Link
              href="/web-development-in-kangra"
              className="text-green-800 font-medium hover:underline"
            >
              Web Development in Kangra
            </Link>
            <Link
              href="/website-development-cost-in-himachal"
              className="text-green-800 font-medium hover:underline"
            >
              Website Development Cost Guide
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-800 text-white">
        <h2 className="text-3xl font-bold">
          Want to Grow Your Business Online?
        </h2>
        <p className="mt-4 text-green-100">
          Let’s build something powerful together.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
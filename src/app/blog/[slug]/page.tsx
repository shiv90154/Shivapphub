import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

// ✅ 1. Proper static params – pre‑render all blog posts at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog Not Found | ShivAppHub" };
  }

  return {
    title: `${post.title} | ShivAppHub Blog`,
    description: post.description,
    alternates: {
      canonical: `https://shivapphub.in/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://shivapphub.in/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [post.image] : ["https://shivapphub.in/og-default.jpg"],
    },
  };
}

// Helper: estimate reading time (average 200 words per minute)
function readingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// ✅ 2. Better related logic – find posts sharing common words in title/description
function getRelatedPosts(currentSlug: string, limit = 3) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentWords = (current.title + " " + current.description)
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 3);

  const scored = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const text = (p.title + " " + p.description).toLowerCase();
      const matches = currentWords.filter((word) => text.includes(word)).length;
      return { post: p, score: matches };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  return scored.length ? scored : blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const readTime = readingTime(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);

  // ✅ 3. Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shivapphub.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://shivapphub.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://shivapphub.in/blog/${slug}`,
      },
    ],
  };

  // ✅ 4. BlogPosting schema (already there, keep)
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || "https://shivapphub.in/og-default.jpg",
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "ShivAppHub Team",
      url: "https://shivapphub.in",
    },
    publisher: {
      "@type": "Organization",
      name: "ShivAppHub",
      logo: {
        "@type": "ImageObject",
        url: "https://shivapphub.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shivapphub.in/blog/${slug}`,
    },
  };

  // ✅ 5. FAQ schema (only if content seems to contain FAQ)
  const hasFaq =
    post.content.toLowerCase().includes("faq") ||
    post.content.toLowerCase().includes("frequently asked");
  const faqSchema = hasFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          // You could dynamically extract Q&A from content, but for simplicity we define a generic one
          {
            "@type": "Question",
            name: "What is the cost of website development in Himachal Pradesh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basic websites start from ₹8,000, business websites from ₹25,000, and e‑commerce from ₹25,000. Prices vary based on features.",
            },
          },
          {
            "@type": "Question",
            name: "Why is local SEO important for Himachal businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local SEO helps your business appear in Google Maps and local searches, attracting nearby customers.",
            },
          },
        ],
      }
    : null;

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Back button – using simple arrow (no Heroicons) */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-700 hover:text-green-800 transition font-medium"
          >
            <span className="mr-2 text-lg">←</span>
            Back to all articles
          </Link>
        </div>

        {/* Hero */}
        <header className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
            <span className="flex items-center gap-1">
              <span className="text-lg">📅</span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lg">⏱️</span>
              {readTime} min read
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lg">👤</span>
              ShivAppHub Team
            </span>
          </div>

          {post.image && (
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <p className="text-xl text-gray-600 border-l-4 border-green-600 pl-6 italic bg-white/50 p-4 rounded-r-lg">
            {post.description}
          </p>
        </header>

        {/* Article content */}
        <article className="max-w-3xl mx-auto px-4 py-8">
          <div className="prose prose-lg prose-green prose-headings:font-bold prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline max-w-none">
        {post.content.split("\n").map((line: string, i: number) => {
  if (line.startsWith("## ")) {
    return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.slice(3)}</h2>;
  } else if (line.startsWith("### ")) {
    return <h3 key={i} className="text-xl font-semibold mt-6 mb-2">{line.slice(4)}</h3>;
  } else if (line.startsWith("- ")) {
    return <li key={i} className="ml-6">{line.slice(2)}</li>;
  } else if (line.trim() === "") {
    return <br key={i} />;
  } else {
    return <p key={i} className="mb-4">{line}</p>;
  }
})}
          </div>

          {/* ✅ 6. Author box */}
          <div className="mt-12 p-6 bg-green-50 rounded-xl flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold text-green-800">
              SA
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Written by ShivAppHub Team</h3>
              <p className="text-gray-600 text-sm">
                We're a team of web developers and SEO experts based in Himachal Pradesh,
                helping local businesses grow online. With 5+ years of experience, we've
                built 100+ websites and apps for clients across the state.
              </p>
            </div>
          </div>

          {/* ✅ 7. Internal links section */}
          <div className="mt-8 p-6 bg-white border border-green-100 rounded-xl">
            <h3 className="font-bold text-lg mb-3">📌 Useful resources</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/web-development-in-shimla" className="text-green-700 hover:underline text-sm">
                Web Development Shimla
              </Link>
              <Link href="/web-development-in-kangra" className="text-green-700 hover:underline text-sm">
                Web Development Kangra
              </Link>
              <Link href="/website-development-cost-in-himachal" className="text-green-700 hover:underline text-sm">
                Website Cost Guide
              </Link>
              <Link href="/contact" className="text-green-700 hover:underline text-sm">
                Contact Us
              </Link>
              <Link href="/portfolio" className="text-green-700 hover:underline text-sm">
                Our Portfolio
              </Link>
            </div>
          </div>

          {/* Share buttons (unchanged, no Heroicons used) */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-sm font-medium text-gray-700 mb-3">Share this article:</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://shivapphub.in/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition"
                aria-label="Share on Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://shivapphub.in/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition"
                aria-label="Share on LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/></svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://shivapphub.in/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition"
                aria-label="Share on Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>
        </article>

        {/* Related posts (using improved logic) */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              You might also like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden"
                >
                  {related.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-green-700 transition">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {related.description}
                    </p>
                    <div className="mt-4 text-green-700 font-medium text-sm flex items-center">
                      Read more
                      <span className="ml-1 group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer spacing */}
        <div className="h-12"></div>
      </main>
    </>
  );
}
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "../data";
import Script from "next/script";
import BlogPostClient from "@/components/BlogPostClient";
import CopyLinkButton from "@/components/CopyLinkButton";

type Props = {
  params: Promise<{ slug: string }>;
};

// Helper: extract headings from markdown content for TOC
function extractHeadings(content: string): { level: number; text: string; id: string }[] {
  const lines = content.split("\n");
  const headings: { level: number; text: string; id: string }[] = [];
  const headingRegex = /^(#{2,4})\s+(.+)$/; // h2-h4
  lines.forEach((line) => {
    const match = line.match(headingRegex);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ level, text, id });
    }
  });
  return headings;
}

function readingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

function getCategoryFromSlug(slug: string): string {
  if (slug.includes("website") || slug.includes("web")) return "Web Development";
  if (slug.includes("app")) return "App Development";
  if (slug.includes("seo") || slug.includes("local")) return "SEO";
  if (slug.includes("design") || slug.includes("ui")) return "UI/UX Design";
  if (slug.includes("marketing") || slug.includes("social")) return "Digital Marketing";
  if (slug.includes("ecommerce") || slug.includes("shop")) return "E‑commerce";
  return "General";
}

function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentCat = getCategoryFromSlug(currentSlug);
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== currentSlug && getCategoryFromSlug(p.slug) === currentCat
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = blogPosts.filter(
    (p) => p.slug !== currentSlug && getCategoryFromSlug(p.slug) !== currentCat
  );
  const currentWords = (current.title + " " + current.description).toLowerCase().split(/\W+/);
  const scored = others
    .map((p) => {
      const text = (p.title + " " + p.description).toLowerCase();
      const matches = currentWords.filter((w) => w.length > 3 && text.includes(w)).length;
      return { post: p, score: matches };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit - sameCategory.length)
    .map((item) => item.post);

  return [...sameCategory, ...scored];
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found | ShivAppHub" };

  const category = getCategoryFromSlug(slug);
  return {
    title: `${post.title} | ShivAppHub Blog`,
    description: post.description,
    keywords: [category, "Himachal Pradesh", "web development", ...post.title.split(" ")],
    alternates: { canonical: `https://shivapphub.in/blog/${slug}` },
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const readTime = readingTime(post.content);
  const category = getCategoryFromSlug(slug);
  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);
  const hasToc = headings.length > 0;

  // Structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || "https://shivapphub.in/og-default.jpg",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "ShivAppHub Team",
      url: "https://shivapphub.in",
    },
    publisher: {
      "@type": "Organization",
      name: "ShivAppHub",
      logo: { "@type": "ImageObject", url: "https://shivapphub.in/logo.png" },
    },
    mainEntityOfPage: `https://shivapphub.in/blog/${slug}`,
    keywords: category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shivapphub.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://shivapphub.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://shivapphub.in/blog/${slug}` },
    ],
  };

  const hasFaq = post.content.toLowerCase().includes("faq");
  const faqSchema = hasFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
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
      <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <main className="bg-gradient-to-b from-green-50 to-white relative">
        <BlogPostClient />

        <div className="max-w-4xl mx-auto px-4 pt-8">
          <Link href="/blog" className="inline-flex items-center text-green-700 hover:text-green-800 transition font-medium">
            <span className="mr-2 text-lg">←</span> Back to all articles
          </Link>
        </div>

        <header className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
            <span className="flex items-center gap-1">
              <span className="text-lg">📅</span>
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
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
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          <p className="text-xl text-gray-600 border-l-4 border-green-600 pl-6 italic bg-white/50 p-4 rounded-r-lg">
            {post.description}
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {hasToc && (
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>📋</span> Table of Contents
                </h3>
                <nav className="space-y-2 text-sm">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className={`block text-gray-600 hover:text-green-700 transition ${
                        h.level === 2 ? "font-medium" : "ml-4 text-gray-500"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          <article className="flex-1 max-w-3xl">
            <div className="prose prose-lg prose-green prose-headings:font-bold prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline max-w-none">
              {post.content.split("\n").map((line: string, i: number) => {
                const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
                if (headingMatch) {
                  const level = headingMatch[1].length;
                  const text = headingMatch[2].trim();
                  const id = text
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-");
                  const HeadingTag = `h${level}` as React.ElementType;
                  return (
                    <HeadingTag key={i} id={id} className="scroll-mt-24">
                      {text}
                    </HeadingTag>
                  );
                }
                if (line.startsWith("- ")) {
                  return <li key={i} className="ml-6">{line.slice(2)}</li>;
                }
                if (line.trim() === "") {
                  return <br key={i} />;
                }
                return <p key={i} className="mb-4">{line}</p>;
              })}
            </div>


            <div className="mt-12 p-6 bg-green-50 rounded-xl flex flex-col sm:flex-row items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold text-green-800">
                SA
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Written by ShivAppHub Team</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We're a team of web developers and SEO experts based in Himachal Pradesh,
                  helping local businesses grow online. With 5+ years of experience, we've
                  built 100+ websites and apps for clients across the state.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-500 hover:text-green-700">Twitter</a>
                  <a href="#" className="text-gray-500 hover:text-green-700">LinkedIn</a>
                  <a href="#" className="text-gray-500 hover:text-green-700">GitHub</a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-medium text-gray-700">Share this article:</p>
              <div className="flex gap-2">
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
                <CopyLinkButton slug={post.slug} />
              </div>
            </div>
          </article>
        </div>

        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden"
                >
                  {related.image && (
                    <div className="relative h-48 w-full">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-green-700 transition">{related.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{related.description}</p>
                    <div className="mt-4 text-green-700 font-medium text-sm flex items-center">
                      Read more <span className="ml-1 group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="h-12"></div>
      </main>
    </>
  );
}
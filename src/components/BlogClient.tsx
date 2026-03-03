"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/app/blog/data"; // adjust path as needed

// Helper: reading time
function readingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Infer category from slug
function getCategoryFromSlug(slug: string): string {
  if (slug.includes("website") || slug.includes("web")) return "Web Development";
  if (slug.includes("app")) return "App Development";
  if (slug.includes("seo") || slug.includes("local")) return "SEO";
  if (slug.includes("design") || slug.includes("ui")) return "UI/UX Design";
  if (slug.includes("marketing") || slug.includes("social")) return "Digital Marketing";
  if (slug.includes("ecommerce") || slug.includes("shop")) return "E‑commerce";
  return "General";
}

// Extract unique categories from posts
function getAllCategories(posts: BlogPost[]): string[] {
  const cats = posts.map((p) => getCategoryFromSlug(p.slug));
  return ["All", ...Array.from(new Set(cats))];
}

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Compute filtered posts based on category and search
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter
      const postCat = getCategoryFromSlug(post.slug);
      if (selectedCategory !== "All" && postCat !== selectedCategory) return false;

      // Search filter (title + description)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const titleMatch = post.title.toLowerCase().includes(query);
        const descMatch = post.description.toLowerCase().includes(query);
        if (!titleMatch && !descMatch) return false;
      }
      return true;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  // Reset page when filters change
  const handleFilterChange = (category?: string, search?: string) => {
    if (category !== undefined) setSelectedCategory(category);
    if (search !== undefined) setSearchQuery(search);
    setCurrentPage(1);
  };

  // All categories for the filter buttons
  const allCategories = getAllCategories(posts);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section (same as before, but search now functional) */}
      <section className="relative py-5 bg-gradient-to-b from-green-50 to-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-green-600">Blog</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Practical insights on web, apps and SEO for Himachal businesses.
          </p>
          {/* Search Input */}
          <div className="mt-4 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(undefined, e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Search blog posts"
              />
              <svg
                className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-2 lg:py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-8">
            {/* Category Filter Buttons */}
            <div className="mb-8 flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat, undefined)}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white border-green-600"
                      : "border-green-200 hover:bg-green-50 hover:border-green-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {paginatedPosts.map((post) => {
                  const category = getCategoryFromSlug(post.slug);
                  return (
                    <article
                      key={post.slug}
                      className="bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                    >
                      {post.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-grow">
                        {/* Category Tag */}
                        <span className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full w-fit mb-3">
                          {category}
                        </span>

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
                          className="text-green-700 font-medium hover:underline mt-auto inline-flex items-center"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts found. Try a different search or category.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-lg hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ←
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? "bg-green-600 text-white"
                          : "border hover:bg-green-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-lg hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    →
                  </button>
                </nav>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0">
            {/* About the Blog */}
            <div className="bg-green-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold mb-4">About the Blog</h3>
              <p className="text-gray-700 mb-4">
                Insights and strategies tailored for Himachal businesses. We share tips on web
                development, SEO, app design, and digital marketing to help you grow online.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center px-4 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Categories */}
            <div className="bg-white border border-green-100 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {allCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleFilterChange(cat, undefined)}
                      className="text-gray-700 hover:text-green-600 flex items-center justify-between w-full text-left"
                    >
                      <span>{cat}</span>
                      <span className="text-sm text-gray-400">
                        (
                        {
                          posts.filter((p) =>
                            cat === "All" ? true : getCategoryFromSlug(p.slug) === cat
                          ).length
                        }
                        )
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts (first 3) */}
            <div className="bg-white border border-green-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.slug} className="flex gap-3">
                    {post.image && (
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-medium hover:text-green-600 line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's discuss your project and create a tailored digital strategy.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
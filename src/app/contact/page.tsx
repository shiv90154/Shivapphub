"use client";

import { useState } from "react";
import { Metadata } from "next";

// For SEO – this runs on server, but we'll keep it separate.
// Since this is a client component, metadata must be exported from a server component.
// We'll create a separate layout or server component for metadata.
// For simplicity, we'll assume there's a parent layout that handles metadata.
// Alternatively, you can keep metadata in a separate file.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="py-20 text-center bg-green-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact <span className="text-green-500">Us</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Let’s discuss your project and build something powerful together. We serve all 12 districts of Himachal Pradesh.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h2>

          {status === "success" && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                Full Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email Address <span className="text-green-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Project Details <span className="text-green-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition w-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-600 text-lg">
            <p className="flex items-center">
              <svg className="h-5 w-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              The Mall, Shimla – 171001, Himachal Pradesh
            </p>
            <p className="flex items-center">
              <svg className="h-5 w-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+911234567890" className="hover:text-green-500">+91 12345 67890</a>
            </p>
            <p className="flex items-center">
              <svg className="h-5 w-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@shivapphub.in" className="hover:text-green-500">contact@shivapphub.in</a>
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Why Choose ShivAppHub?
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "✅ SEO-first development approach",
                "✅ Affordable pricing for local businesses",
                "✅ Modern and scalable solutions",
                "✅ Dedicated support",
                "✅ Serving all 12 districts of Himachal Pradesh",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {item.replace("✅ ", "")}
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Google Map */}
          <div className="mt-10">
            <iframe
              title="ShivAppHub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27333.70815807319!2d77.157314!3d31.104814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff7ff9f0b7a!2sThe%20Mall%20Rd%2C%20Shimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-800 text-white">
        <h2 className="text-3xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Let’s turn your idea into a powerful digital product.
        </p>
        <div className="mt-6">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); document.querySelector("form")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
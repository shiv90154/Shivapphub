"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Let’s Build Something
          <span className="block text-green-600 mt-2">Powerful Together</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          We work with businesses across Himachal Pradesh — from Shimla to
          Kangra and beyond.
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* Contact Form */}
        <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-8">
            Send Us a Message
          </h2>

          {status === "success" && (
            <div className="mb-6 flex items-center gap-3 bg-green-100 text-green-800 p-4 rounded-lg">
              <CheckCircle size={18} />
              Your message has been sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 flex items-center gap-3 bg-red-100 text-red-800 p-4 rounded-lg">
              <AlertCircle size={18} />
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-600">

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" size={20} />
                The Mall, Shimla – 171001
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={20} />
                <a href="tel:+911234567890" className="hover:text-green-600">
                  +91 12345 67890
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-green-600" size={20} />
                <a href="mailto:contact@shivapphub.in" className="hover:text-green-600">
                  contact@shivapphub.in
                </a>
              </div>

            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-green-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">
              Why Choose ShivAppHub?
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>✓ SEO-first development approach</li>
              <li>✓ Affordable pricing for local businesses</li>
              <li>✓ Modern & scalable solutions</li>
              <li>✓ Dedicated support</li>
              <li>✓ Serving all 12 districts of Himachal Pradesh</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold">
          Have a project in mind?
        </h2>

        <p className="mt-4 text-gray-400">
          Let’s turn your idea into a powerful digital product.
        </p>

        <div className="mt-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Start Conversation
          </a>
        </div>
      </section>

    </main>
  );
}
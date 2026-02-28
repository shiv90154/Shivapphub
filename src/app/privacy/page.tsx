import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ShivAppHub",
  description:
    "Privacy Policy of ShivAppHub – Web & App Development Company in Himachal Pradesh.",
  alternates: {
    canonical: "https://shivapphub.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="py-20 bg-green-50 text-center">
        <h1 className="text-4xl font-bold">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600">
          Effective Date: January 1, 2026
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email address,
            phone number and business details when you contact us or fill out a form
            on our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            The information collected is used to respond to inquiries, provide
            services, improve our website and communicate important updates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may use cookies to enhance user experience and analyze
            website traffic. You can disable cookies in your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement reasonable security measures to protect your personal
            information from unauthorized access or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            We may use third-party services such as analytics tools or payment
            gateways. These services have their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, you can contact
            us at info@shivapphub.in.
          </p>
        </div>

      </section>

    </main>
  );
}
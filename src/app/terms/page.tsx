import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ShivAppHub",
  description:
    "Terms & Conditions of ShivAppHub – Web & App Development Company in Himachal Pradesh.",
  alternates: {
    canonical: "https://shivapphub.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="py-20 bg-green-50 text-center">
        <h1 className="text-4xl font-bold">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-600">
          Effective Date: January 1, 2026
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Use of Website</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing this website, you agree to comply with these terms
            and use the website lawfully.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content, branding and materials on this website are the property
            of ShivAppHub and may not be copied or reused without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Service Agreements</h2>
          <p className="text-gray-600 leading-relaxed">
            Any project or service agreement will be governed by a separate
            written contract outlining scope, pricing and deliverables.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            ShivAppHub shall not be held liable for any direct or indirect damages
            resulting from the use of this website or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions regarding these terms, please contact info@shivapphub.in.
          </p>
        </div>

      </section>

    </main>
  );
}
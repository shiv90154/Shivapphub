import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ShivAppHub",
  description:
    "Privacy Policy of ShivAppHub – Web & App Development Company in Himachal Pradesh. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://shivapphub.in/privacy",
  },
};

export default function PrivacyPage() {
  const sections = [
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "cookies", title: "Cookies & Tracking Technologies" },
    { id: "data-sharing", title: "How We Share Your Information" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "your-rights", title: "Your Privacy Rights" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "policy-changes", title: "Changes to This Policy" },
    { id: "contact-us", title: "Contact Us" },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Effective Date: January 1, 2026
          </p>
          <p className="text-gray-500">
            Last Updated: March 1, 2026
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:flex lg:gap-12">
        {/* Table of Contents Sidebar */}
        <aside className="lg:w-64 shrink-0 mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-24 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Contents
            </h2>
            <nav className="space-y-2 text-sm">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-gray-600 hover:text-green-600 transition-colors py-1 border-l-2 border-transparent hover:border-green-500 pl-3"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-green-600">
          <div className="space-y-12">
            <section id="information-we-collect">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">1</span>
                Information We Collect
              </h2>
              <p className="mb-3">We collect information to provide better services to all our users. The types of information we collect include:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Personal Information:</strong> When you contact us, fill out a form, or request a quote, we may collect your name, email address, phone number, company name, and any other details you provide.</li>
                <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, such as IP address, browser type, pages visited, time spent, and referral sources.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns. You can manage cookie preferences through your browser settings.</li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">2</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-600">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To deliver the services you request, such as quotes, proposals, or project updates.</li>
                <li>To improve and personalize your experience on our website.</li>
                <li>To send you important updates, newsletters, or marketing communications (you may opt out at any time).</li>
                <li>To analyze website traffic and usage trends to enhance our content and offerings.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">3</span>
                Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-600">Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Remember your preferences and settings.</li>
                <li>Understand how you use our site so we can improve functionality.</li>
                <li>Provide relevant content and advertisements (if applicable).</li>
              </ul>
              <p className="mt-4 text-gray-600">You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website. For more details, please refer to our <a href="/cookie-policy" className="text-green-600 underline">Cookie Policy</a>.</p>
            </section>

            <section id="data-sharing">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">4</span>
                How We Share Your Information
              </h2>
              <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting business, or serving you (e.g., analytics tools, email marketing platforms, payment processors). These parties are contractually obligated to keep your information confidential.</li>
                <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process, we may disclose your information to comply with a subpoena, court order, or other governmental request.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section id="data-security">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">5</span>
                Data Security
              </h2>
              <p className="text-gray-600">We implement a variety of security measures to maintain the safety of your personal information. These include encryption, secure servers, and restricted access to data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section id="data-retention">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">6</span>
                Data Retention
              </h2>
              <p className="text-gray-600">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.</p>
            </section>

            <section id="your-rights">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">7</span>
                Your Privacy Rights
              </h2>
              <p className="text-gray-600">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> You can ask us to correct inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to certain exceptions.</li>
                <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time.</li>
                <li><strong>Data Portability:</strong> You can request a transfer of your data to another service provider.</li>
              </ul>
              <p className="mt-4 text-gray-600">To exercise these rights, please contact us at <a href="mailto:privacy@shivapphub.in" className="text-green-600 underline">privacy@shivapphub.in</a>. We will respond to your request in accordance with applicable laws.</p>
            </section>

            <section id="children-privacy">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">8</span>
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-600">Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.</p>
            </section>

            <section id="international-transfers">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">9</span>
                International Data Transfers
              </h2>
              <p className="text-gray-600">Your information may be transferred to and processed in countries other than your own. These countries may have data protection laws that are different from those in your jurisdiction. We take appropriate safeguards to ensure that your information remains protected in accordance with this policy.</p>
            </section>

            <section id="policy-changes">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">10</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-600">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">11</span>
                Contact Us
              </h2>
              <p className="text-gray-600">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@shivapphub.in" className="text-green-600 hover:underline">info@shivapphub.in</a>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+919015484696</span>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>

              
    </main>
  );
}
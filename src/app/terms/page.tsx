import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ShivAppHub",
  description:
    "Terms & Conditions of ShivAppHub – Web & App Development Company in Himachal Pradesh. Read our terms of service, use of website, intellectual property, and more.",
  alternates: {
    canonical: "https://shivapphub.in/terms",
  },
};

export default function TermsPage() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "use-of-website", title: "Use of Website" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-accounts", title: "User Accounts" },
    { id: "prohibited-activities", title: "Prohibited Activities" },
    { id: "service-agreements", title: "Service Agreements" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "limitation-liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "dispute-resolution", title: "Dispute Resolution" },
    { id: "changes-to-terms", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
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
            Terms & Conditions
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
            <section id="acceptance">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing or using the ShivAppHub website (&quot;Site&quot;) and services, you agree to be bound by these Terms & Conditions (&quot;Terms&quot;). If you do not agree to all of these Terms, please do not use the Site. These Terms apply to all visitors, users, and others who access or use the Site.
              </p>
            </section>

            <section id="use-of-website">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">2</span>
                Use of Website
              </h2>
              <p className="text-gray-600">You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.</p>
              <p className="mt-2 text-gray-600">You must not:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Use the Site in any way that violates applicable laws or regulations.</li>
                <li>Attempt to gain unauthorized access to any part of the Site, other user accounts, or computer systems.</li>
                <li>Interfere with or disrupt the integrity or performance of the Site.</li>
                <li>Use any automated means (e.g., robots, scrapers) to access the Site for any purpose without our express written permission.</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">3</span>
                Intellectual Property
              </h2>
              <p className="text-gray-600">All content, features, and functionality on the Site—including but not limited to text, graphics, logos, icons, images, audio clips, downloads, digital downloads, data compilations, and software—are the exclusive property of ShivAppHub, its licensors, or other content providers and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <p className="mt-2 text-gray-600">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes.</li>
                <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.</li>
              </ul>
            </section>

            <section id="user-accounts">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">4</span>
                User Accounts
              </h2>
              <p className="text-gray-600">If you create an account on the Site, you are responsible for maintaining the security of your account and for all activities that occur under the account. You must immediately notify us of any unauthorized use of your account or any other breach of security. ShivAppHub will not be liable for any loss or damage arising from your failure to comply with this section.</p>
            </section>

            <section id="prohibited-activities">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">5</span>
                Prohibited Activities
              </h2>
              <p className="text-gray-600">In addition to the other restrictions outlined in these Terms, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Site in any manner that could disable, overburden, damage, or impair the Site or interfere with any other party&apos;s use of the Site.</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Site for any purpose, including monitoring or copying any of the material on the Site.</li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.</li>
                <li>Attack the Site via a denial-of-service attack or a distributed denial-of-service attack.</li>
              </ul>
            </section>

            <section id="service-agreements">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">6</span>
                Service Agreements
              </h2>
              <p className="text-gray-600">Any project or service engagement with ShivAppHub will be governed by a separate written contract (e.g., Statement of Work, Master Services Agreement) that outlines the specific scope, pricing, deliverables, timelines, and other terms. In the event of a conflict between these Terms and a service agreement, the service agreement shall prevail with respect to that particular engagement.</p>
            </section>

            <section id="disclaimers">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">7</span>
                Disclaimers
              </h2>
              <p className="text-gray-600">The Site and all information, content, materials, and services included on or otherwise made available to you through the Site are provided on an &quot; as is&quot; and "as available&quot; basis, unless otherwise specified in writing. ShivAppHub makes no representations or warranties of any kind, express or implied, as to the operation of the Site, or the information, content, materials, or services included on or otherwise made available to you through the Site, unless otherwise specified in writing.</p>
              <p className="mt-2 text-gray-600">You expressly agree that your use of the Site is at your sole risk. To the full extent permissible by applicable law, ShivAppHub disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. ShivAppHub does not warrant that the Site, information, content, materials, or services included on or otherwise made available to you through the Site, their servers, or electronic communications sent from ShivAppHub are free of viruses or other harmful components.</p>
            </section>

            <section id="limitation-liability">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">8</span>
                Limitation of Liability
              </h2>
              <p className="text-gray-600">To the fullest extent permitted by applicable law, in no event shall ShivAppHub, its affiliates, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
            </section>

            <section id="indemnification">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">9</span>
                Indemnification
              </h2>
              <p className="text-gray-600">You agree to defend, indemnify, and hold harmless ShivAppHub, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Site, including, but not limited to, any use of the Site&apos;s content, services, and products other than as expressly authorized in these Terms.</p>
            </section>

            <section id="termination">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">10</span>
                Termination
              </h2>
              <p className="text-gray-600">We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Site will cease immediately. If you wish to terminate your account, you may simply discontinue using the Site or contact us to request account deletion.</p>
            </section>

            <section id="governing-law">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">11</span>
                Governing Law
              </h2>
              <p className="text-gray-600">These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            </section>

            <section id="dispute-resolution">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">12</span>
                Dispute Resolution
              </h2>
              <p className="text-gray-600">Any dispute arising out of or relating to these Terms or your use of the Site shall first be sought to be resolved through good-faith negotiations. If the dispute cannot be resolved through negotiations, it shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Himachal Pradesh, India, and the language of arbitration shall be English. The decision of the arbitrator shall be final and binding on both parties.</p>
            </section>

            <section id="changes-to-terms">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">13</span>
                Changes to Terms
              </h2>
              <p className="text-gray-600">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.</p>
            </section>

            <section id="contact">
              <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 text-xl">14</span>
                Contact Information
              </h2>
              <p className="text-gray-600">If you have any questions about these Terms, please contact us:</p>
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
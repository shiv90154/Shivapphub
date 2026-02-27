import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // All 12 districts of Himachal Pradesh
  const himachalDistricts = [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ];

  // Structured data for local business (JSON‑LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShivAppHub",
    description:
      "Web & App Development company in Himachal Pradesh providing modern, scalable and SEO-friendly solutions.",
    url: "https://shivapphub.com", // Replace with actual domain
    telephone: "+91-12345-67890", // Replace with actual phone
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.1048", // Approx for Shimla
      longitude: "77.1734",
    },
    sameAs: [
      "https://facebook.com/shivapphub",
      "https://twitter.com/shivapphub",
      "https://linkedin.com/company/shivapphub",
    ],
    areaServed: [
      ...himachalDistricts.map((district) => ({
        "@type": "City",
        name: district,
      })),
      { "@type": "State", name: "Himachal Pradesh" },
    ],
    priceRange: "$$",
  };

  // Icon components for quick links (outline style)
  const icons = {
    about: (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    blog: (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
      </svg>
    ),
    contact: (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    privacy: (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  return (
    <footer className="bg-green-50 mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* JSON‑LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-800">ShivAppHub</h3>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Web & App Development company serving <strong>all districts of Himachal Pradesh</strong> – from Bilaspur to Lahaul & Spiti, and every town in between. We deliver modern, scalable and SEO‑friendly digital solutions tailored to local businesses.
            </p>
            <address className="mt-4 not-italic text-base text-gray-500 space-y-1">
              <p>📍 The Mall, Shimla – 171001</p>
              <p>📞 <a href="tel:+911234567890" className="hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">+91 12345 67890</a></p>
              <p>✉️ <a href="mailto:info@shivapphub.com" className="hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">info@shivapphub.com</a></p>
            </address>
          </div>

          {/* Quick Links with Icons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li>
                <Link href="/about" className="flex items-center hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  {icons.about}
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  {icons.services}
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  {icons.blog}
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  {icons.contact}
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex items-center hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  {icons.privacy}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Website Development
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile App Development
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEO Optimization
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                E‑commerce Solutions
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Custom Software
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-base font-semibold text-gray-700 mb-3">Follow us</h5>
              <div className="flex space-x-5">
                <a
                  href="https://facebook.com/shivapphub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/shivapphub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/shivapphub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-base text-gray-500">
          <p>© {currentYear} ShivAppHub. All rights reserved.</p>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <Link href="/sitemap" className="hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">Sitemap</Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">Privacy</Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms" className="hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
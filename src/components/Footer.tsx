import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400">

      {/* Top CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to build something powerful?
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Let’s create a high-performance digital presence for your business
            in Himachal Pradesh.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 px-8 py-4 rounded-xl font-semibold text-white hover:bg-green-700 transition"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Shiv<span className="text-green-500">App</span>Hub
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Web & App Development agency serving businesses across Himachal
            Pradesh. We build scalable, SEO-ready and high-performance digital
            products.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={16} />
              The Mall, Shimla – 171001
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <a href="tel:+911234567890" className="hover:text-white">
                +91 12345 67890
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <a href="mailto:info@shivapphub.com" className="hover:text-white">
                info@shivapphub.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h4>

          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services + Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Our Services
          </h4>

          <ul className="space-y-4 text-sm">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>SEO Optimization</li>
            <li>E-commerce Solutions</li>
            <li>Custom Software</li>
          </ul>

          <div className="mt-8">
            <h5 className="text-white font-semibold mb-4">
              Follow Us
            </h5>

            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-white transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                <Twitter size={20} />
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} ShivAppHub. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
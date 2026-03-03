"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Home, Briefcase, FileText, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const resourceLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/pricing", label: "Pricing" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-green-800 tracking-tight"
          >
            ShivAppHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative flex items-center gap-2 px-2 py-1 text-base font-medium group"
                >
                  <Icon
                    size={18}
                    className={`transition-transform duration-200 ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-600 group-hover:text-green-600 group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-700 group-hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[3px] bg-green-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className="flex items-center gap-2 px-2 py-1 text-base font-medium group text-gray-700 hover:text-green-600"
              >
                <FileText size={18} className="text-gray-600 group-hover:text-green-600" />
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {resourceLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                            isActive ? "text-green-600 font-medium" : "text-gray-700"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-green-800 text-white px-6 py-2.5 rounded-xl text-base font-medium hover:bg-green-900 hover:scale-105 transition-all shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner border-t"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 text-lg font-medium px-3 py-2 rounded-lg transition ${
                        isActive
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={20} />
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Resource links for mobile (no dropdown) */}
              <div className="border-t pt-4 mt-2">
                <p className="text-sm text-gray-500 mb-2 px-3">Resources</p>
                {resourceLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 text-lg font-medium px-3 py-2 rounded-lg transition ${
                          isActive
                            ? "text-green-600 bg-green-50"
                            : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        }`}
                      >
                        <FileText size={20} />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="bg-green-800 text-white px-5 py-3 rounded-xl text-lg text-center font-medium hover:bg-green-900 transition shadow-md"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "WORKS" },
    { href: "/blog", label: "BLOGS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-white text-xl font-bold tracking-wide"
          >
            SHIV<span className="text-green-500">APP</span>HUB
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-widest font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] bg-green-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="flex items-center gap-3 text-white text-sm tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition duration-300 group"
            >
              BOOK A CALL
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition"
              />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
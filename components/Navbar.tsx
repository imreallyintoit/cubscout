"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Photos" },
  { href: "/#join", label: "Join Pack 5" },
  { href: "/#onboarding", label: "Get Started" },
  { href: "/#costs", label: "Costs" },
  { href: "/#calendar", label: "Calendar" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-scout-blue-900 shadow-lg" : "bg-scout-blue-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="text-2xl">⚜️</span>
            <span>
              <span className="text-scout-gold">Pack 5</span> Wilmette
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-scout-gold px-3 py-2 text-sm font-medium rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Popcorn Sale button */}
            <a
              href="/popcorn"
              className="ml-2 flex flex-col items-center bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-lg px-4 py-1.5 transition-colors leading-tight"
            >
              <span className="text-sm">🍿 Popcorn Sale</span>
              <span className="text-[10px] font-medium opacity-80">Sep 12 – Nov 27</span>
            </a>

            <a
              href="/#join"
              className="ml-2 btn-primary text-sm px-4 py-2"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            {/* Popcorn Sale – top of mobile menu */}
            <a
              href="/popcorn"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-lg px-4 py-3 mb-3 transition-colors"
            >
              <span>🍿 Popcorn Sale</span>
              <span className="text-xs font-medium opacity-80">Sep 12 – Nov 27</span>
            </a>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-blue-100 hover:text-scout-gold px-3 py-2 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#join"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 btn-primary text-sm"
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

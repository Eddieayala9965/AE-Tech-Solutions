"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Add a spacer div to push content down */}
      <div className="h-16"></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-black/90 backdrop-blur-md"
            : "bg-black/50"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm sm:text-lg font-light tracking-[0.2em] hidden sm:block">
                AE TECH SOLUTIONS
              </span>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-wide relative group overflow-hidden"
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                    opacity: isLoaded ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 max-h-64"
                : "opacity-0 max-h-0 pointer-events-none"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

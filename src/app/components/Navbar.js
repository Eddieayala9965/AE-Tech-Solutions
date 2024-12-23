"use client";

import React from "react";
import Link from "next/link";

export default function Navbar({ isLoaded }) {
  return (
    <nav className="relative w-full z-10 px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-lg font-light tracking-[0.2em]">
            AE TECH SOLUTIONS
          </span>
        </div>

        <div className="hidden md:flex space-x-12">
          {[
            { name: "Work", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
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
      </div>
    </nav>
  );
}

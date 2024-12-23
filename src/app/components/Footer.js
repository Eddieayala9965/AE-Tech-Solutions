"use client";

import React from "react";

export default function Footer({ isLoaded }) {
  return (
    <footer className="relative z-10 py-8 px-8 border-t border-white/10">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(1rem)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "1.2s",
        }}
      >
        <div className="space-y-2">
          <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            h.ayala@ae-tech-solutions.com
          </p>
          <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            (845) 701-5185
          </p>
        </div>

        <div className="flex space-x-8">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

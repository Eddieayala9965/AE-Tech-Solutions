"use client";

import React from "react";
import Link from "next/link";

const Footer = ({ isLoaded }) => {
  return (
    <footer className="relative z-10 py-8 px-4 sm:px-8 border-t border-white/10">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(1rem)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.6s",
        }}
      >
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            h.ayala@ae-tech-solutions.com
          </p>
          <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            (804) 210-5607
          </p>
        </div>

        <div className="flex space-x-8">
          <Link
            href="https://www.linkedin.com/in/h-ayala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
          </Link>
          <Link
            href="https://github.com/Eddieayala9965"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-github text-xl sm:text-2xl"></i>
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram text-xl sm:text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="text-center mt-8 text-xs sm:text-sm text-gray-500">
        © 2025 AE Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

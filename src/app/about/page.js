"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeDisplay from "../components/CodeDisplay";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar isLoaded={isLoaded} />

      <main className="flex-grow px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-light mb-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            About AE Tech Solutions
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <CodeDisplay isLoaded={isLoaded} />

            <div
              className="space-y-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateX(0)" : "translateX(2rem)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.4s",
              }}
            >
              <p className="text-xl text-gray-400 leading-relaxed">
                At AE Tech Solutions, we're dedicated to transforming businesses
                through innovative software solutions. Our expertise in custom
                development, web applications, and system integration enables
                companies to thrive in the digital age.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                With a focus on cutting-edge technology and user-centered
                design, we deliver solutions that not only meet current needs
                but anticipate future challenges. Our commitment to excellence
                and continuous innovation drives everything we do.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer isLoaded={isLoaded} />
    </div>
  );
};

export default About;
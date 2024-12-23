"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar isLoaded={isLoaded} />

      <main className="flex-grow px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-5xl font-light mb-16 text-center text-white"
            style={{
              transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Our Services
          </h1>

          <ServicesGrid isLoaded={isLoaded} />
        </div>
      </main>

      <Footer isLoaded={isLoaded} />
    </div>
  );
};

export default Services;

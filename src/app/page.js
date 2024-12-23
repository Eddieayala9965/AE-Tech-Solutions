"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <div
        className="fixed inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`,
        }}
      />

      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Navbar isLoaded={isLoaded} />

      <main className="flex-grow flex items-center justify-center px-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] border border-white/20 rounded-full animate-[spin-slow_20s_linear_infinite]" />
          <div className="absolute w-[600px] h-[600px] border border-white/20 rounded-full animate-[spin-slower_30s_linear_infinite]" />
          <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full animate-[spin-reverse_25s_linear_infinite]" />
        </div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="absolute -top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute top-40 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-[float-delay_8s_ease-in-out_infinite] pointer-events-none" />

          <div className="space-y-12">
            <div className="space-y-8 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-light leading-relaxed tracking-normal pb-2">
                <span className="block overflow-hidden">
                  <span
                    className="block py-1"
                    style={{
                      transform: isLoaded
                        ? "translateY(0)"
                        : "translateY(100%)",
                      opacity: isLoaded ? 1 : 0,
                      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: "0.2s",
                    }}
                  >
                    Digital Solutions
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{
                      transform: isLoaded
                        ? "translateY(0)"
                        : "translateY(100%)",
                      opacity: isLoaded ? 1 : 0,
                      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: "0.4s",
                    }}
                  >
                    for Tomorrow
                  </span>
                </span>
              </h1>

              <p
                className="text-xl text-gray-400 max-w-2xl"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
                  opacity: isLoaded ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.6s",
                }}
              >
                Crafting innovative software solutions that transform businesses
                for the digital age, with cutting-edge technology and design.
              </p>
            </div>

            <div
              className="flex"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
                opacity: isLoaded ? 1 : 0,
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.8s",
              }}
            >
              <Link
                href="/services"
                className="px-8 py-4 border border-white/20 rounded-full text-sm tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer isLoaded={isLoaded} />
    </div>
  );
};

export default HomePage;

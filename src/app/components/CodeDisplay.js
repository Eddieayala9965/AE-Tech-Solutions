"use client";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";

const CodeDisplay = ({ isLoaded }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [matrixChars, setMatrixChars] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const chars = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      text: Array.from({ length: 20 })
        .map(() => String.fromCharCode(33 + Math.floor(Math.random() * 93)))
        .join(""),
    }));
    setMatrixChars(chars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < 5 ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statusMessages = [
    "> Initializing development environment...",
    "> Loading Next.js framework and dependencies...",
    "> Configuring React components and state management...",
    "> Optimizing performance and security protocols...",
    "> Deploying enterprise solutions...",
  ];

  const systemMetrics = [
    { label: "CPU Usage", value: "48%" },
    { label: "Memory", value: "6.2 GB" },
    { label: "Network", value: "1.2 Gb/s" },
  ];

  return (
    <div
      className="relative aspect-square bg-[#1E1E1E] rounded-lg overflow-hidden p-6"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateX(0)" : "translateX(-2rem)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: "0.2s",
      }}
    >
      {isClient && (
        <div className="absolute inset-0 opacity-10">
          {matrixChars.map((char) => (
            <div
              key={char.id}
              className="absolute text-blue-500 text-xs"
              style={{
                left: char.left,
                animation: "matrix 10s linear infinite",
                animationDelay: char.delay,
              }}
            >
              {char.text}
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-6 font-mono w-full max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {["bg-blue-500", "bg-green-500", "bg-yellow-500"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 ${color} rounded-full animate-pulse`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                )
              )}
            </div>
            <span className="text-blue-400">
              <TypewriterText text="System Initialization..." delay={500} />
            </span>
          </div>

          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>

          <div className="space-y-2 text-sm">
            {statusMessages.map((text, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  currentStep >= index ? "opacity-100" : "opacity-0"
                }`}
              >
                <TypewriterText text={text} delay={index * 2000} />
                {currentStep > index && (
                  <span className="text-green-400 ml-2">✓</span>
                )}
              </div>
            ))}
          </div>

          <div
            className={`space-y-2 transition-opacity duration-500 ${
              currentStep >= 5 ? "opacity-100" : "opacity-0"
            }`}
          >
            {systemMetrics.map(({ label, value }, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-gray-400">{label}</span>
                <span className="text-blue-400">{value}</span>
              </div>
            ))}
          </div>

          {currentStep >= 5 && (
            <div className="text-green-400 font-bold text-center animate-pulse">
              <TypewriterText
                text="System Ready - Transforming Business Through Technology"
                delay={10000}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;

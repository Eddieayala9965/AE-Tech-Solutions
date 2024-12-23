"use client";

import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and requirements.",
    icon: "💻",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    icon: "🌐",
  },
  {
    title: "API Development & Integration",
    description:
      "Seamless integration of third-party APIs and development of custom APIs for your specific needs.",
    icon: "🔌",
  },
  {
    title: "Automation & Scripting",
    description:
      "Custom automation solutions to streamline your workflows and increase operational efficiency.",
    icon: "⚡",
  },
  {
    title: "Tech Consulting",
    description:
      "Expert guidance on technology strategy, architecture, and implementation approaches.",
    icon: "💡",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end development of scalable, cloud-based software-as-a-service solutions.",
    icon: "☁️",
  },
  {
    title: "Database Design & Management",
    description:
      "Robust database solutions optimized for performance, security, and scalability.",
    icon: "🗄️",
  },
];

export default function ServicesGrid({ isLoaded }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="p-8 rounded-lg border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group"
          style={{
            transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-light mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

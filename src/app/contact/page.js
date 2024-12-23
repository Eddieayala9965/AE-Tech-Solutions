"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({
        from_name: "",
        user_email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: false }));
      }, 5000);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="w-full z-10 px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-lg font-light tracking-[0.2em]">
              AE TECH SOLUTIONS
            </span>
          </Link>

          <div className="hidden md:flex space-x-12">
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
        </div>
      </nav>

      <main className="flex-grow px-8 py-20">
        <div className="max-w-3xl mx-auto w-full">
          <h1
            className="text-4xl md:text-6xl font-light mb-16 text-center"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(2rem)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.2s",
            }}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="relative w-full px-8 py-4 bg-blue-500 text-white rounded-lg text-sm tracking-wider hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 overflow-hidden"
            >
              <span
                className={`transition-opacity duration-300 ${
                  status.loading ? "opacity-0" : "opacity-100"
                }`}
              >
                Send Message
              </span>
              {status.loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>

            {status.success && (
              <div className="text-green-500 text-center animate-fadeIn">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {status.error && (
              <div className="text-red-500 text-center animate-fadeIn">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </main>

      <footer className="py-8 px-8 border-t border-white/10">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(1rem)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.6s",
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
            <Link
              href="https://www.linkedin.com/in/h-ayala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </Link>
            <Link
              href="https://github.com/Eddieayala9965"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 AE Tech Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

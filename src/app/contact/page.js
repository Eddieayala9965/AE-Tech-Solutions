"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN,
        {
          from_name: formData.from_name,
          user_email: formData.user_email,
          message: formData.message,
          reply_to: formData.user_email,
        }
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CUSTOMER,
        {
          to_name: formData.from_name,
          user_email: formData.user_email,
          message: formData.message,
          reply_to: "h.ayala@ae-tech-solutions.com",
        }
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({ from_name: "", user_email: "", message: "" });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Updated Responsive Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-black/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm sm:text-lg font-light tracking-[0.2em] hidden sm:block">
                AE TECH SOLUTIONS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-wide relative group overflow-hidden text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
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

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-8 py-32 mt-16">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-8 sm:mb-16 text-center">
            Contact Us
          </h1>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Form fields remain the same */}
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
              className="relative w-full px-8 py-4 bg-blue-500 text-white rounded-lg text-sm tracking-wider hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {status.loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : (
                "Send Message"
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="space-y-2 text-center md:text-left">
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
    </div>
  );
};

export default ContactPage;

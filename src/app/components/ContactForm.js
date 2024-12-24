// src/components/ContactForm.jsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      // Send notification to admin
      await emailjs.send(
        "service_3jr7xhu",
        "template_khbw8k8", // Admin notification template
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your actual public key
      );

      // Send auto-reply to customer
      await emailjs.send(
        "service_3jr7xhu",
        "template_84vm228", // Customer auto-reply template
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your actual public key
      );

      setSuccess(true);
      setFormData({
        from_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={sendEmail} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label
          htmlFor="from_name"
          className="block text-sm font-medium text-gray-200"
        >
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="user_email"
          className="block text-sm font-medium text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-200"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {success && (
        <div className="text-green-500 text-center">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
};

export default ContactForm;

'use client';

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">
            Contact
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Let's Create <span className="text-amber-700">Something</span> Amazing
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-20">

          {/* Left Side Info */}
          <div className="space-y-12">

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Address
              </p>
              <p className="text-lg text-gray-200 font-light">
                Waghmare Square, Wakad, Pune – 411057
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Email
              </p>
              <a
                href="mailto:adilshaikh0446@gmail.com"
                className="text-lg text-gray-200 hover:text-amber-700 transition-colors font-light"
              >
                adilshaikh0446@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Phone
              </p>
              <a
                href="tel:7841989702"
                className="text-lg text-gray-200 hover:text-amber-700 transition-colors font-light"
              >
                7841989702
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-amber-700 mb-3 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-amber-700 mb-3 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-amber-700 mb-3 font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white"
                  placeholder="10 digit mobile number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-amber-700 mb-3 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-colors font-semibold disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}

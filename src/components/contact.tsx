'use client';

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">Contact</p>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Let's Create <span className="text-amber-700">Something</span> Amazing
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Address
              </p>
              <p className="text-lg text-gray-200 font-light">
                248 Mercer Street, Suite 4B<br />
                New York, NY 10012
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Email
              </p>
              <a
                href="mailto:info@design-co.com"
                className="text-lg text-gray-200 hover:text-amber-700 transition-colors font-light"
              >
                info@design-co.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Phone
              </p>
              <a
                href="tel:+12125551234"
                className="text-lg text-gray-200 hover:text-amber-700 transition-colors font-light"
              >
                +1 (212) 555-1234
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-semibold">
                Hours
              </p>
              <p className="text-lg text-gray-200 font-light">
                Mon - Fri: 9am - 6pm<br />
                Sat - Sun: Closed
              </p>
            </div>

            <div className="h-64 overflow-hidden mt-12">
              <img
                src="/contact1.jpg"
                alt="Contact"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white font-light placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white font-light placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-amber-700 focus:outline-none text-white font-light placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-colors font-semibold text-sm tracking-wide mt-8 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <p className="text-white text-3xl font-light mb-6">DESIGN & CO</p>
          <p className="text-gray-500 text-xs">
            © 2024 Design & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

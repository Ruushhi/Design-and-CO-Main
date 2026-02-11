'use client';

import React from "react"

import { useState } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      const data = await res.json();
      if (data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact submit error', err);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">(contact)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">GET IN TOUCH</h2>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                Address
              </p>
              <p className="text-lg">248 Mercer Street, Suite 4B, New York, NY 10012</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                Email
              </p>
              <a
                href="mailto:info@designco.com"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                info@design&co.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                Phone
              </p>
              <a
                href="tel:+442178214459"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                +44 7821 445 903
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                Hours
              </p>
              <p className="text-lg">Monday to Friday, 8:30am - 5:00pm</p>
            </div>

            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center mt-8">
              <p className="text-gray-600">Contact Image</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'sending' && (
                <p className="text-sm text-gray-400">Sending message…</p>
              )}
              {status === 'success' && (
                <p className="text-sm text-green-400">Message sent — thank you!</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">Failed to send message. Please try again.</p>
              )}
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="text-sm">
            © 2024 Design & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

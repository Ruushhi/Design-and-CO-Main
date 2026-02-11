'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide comprehensive interior design services including space planning, design consultation, styling, and full project management from concept to completion.',
    },
    {
      question: 'Do you work on residential and commercial projects?',
      answer:
        'Yes, we work on both residential homes and commercial spaces. We have experience with private residences, offices, retail spaces, and hospitality projects.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on scope and complexity, but most projects are completed within 8-14 weeks from initial consultation to final installation.',
    },
    {
      question: 'Can you work with existing furniture and decor?',
      answer:
        'Absolutely. We love incorporating meaningful pieces you already own and blending them with new design elements to create a cohesive, personalized space.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply fill out our contact form or call us to schedule an initial consultation. We\'ll discuss your vision, needs, and budget to create the perfect plan for your space.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">FAQ</p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            Frequently Asked <span className="text-amber-700">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white hover:border-amber-700 transition-colors overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left"
              >
                <h3 className="text-lg font-light text-gray-900">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform text-amber-700 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-300 px-6 py-4 bg-slate-50">
                  <p className="text-gray-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

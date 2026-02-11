'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide full interior design services including space planning, styling, and project management.',
    },
    {
      question: 'Do you handle both residential and commercial projects?',
      answer:
        'Yes, we work on a variety of spaces —from private homes to modern offices.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Timelines vary by scope, but most projects are completed within 8–12 weeks.',
    },
    {
      question: 'Can you work with my existing furniture?',
      answer:
        'Absolutely. We love blending new design elements with your existing pieces.',
    },
    {
      question: 'How can I start a project with you?',
      answer:
        'Simply reach out through our contact form, and we\'ll schedule an initial consultation.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(faq)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="text-lg font-light">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">
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

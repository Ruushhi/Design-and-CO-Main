'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: 'From the first meeting, they understood our vision completely. The final design feels effortless —every room flows beautifully and captures exactly what we hoped for.',
      author: 'Emma Collins',
      role: 'House Owner',
    },
    {
      id: 2,
      text: 'The team transformed our office space into a modern, productive environment that truly represents our brand values.',
      author: 'Michael Chen',
      role: 'CEO',
    },
    {
      id: 3,
      text: 'Exceptional attention to detail and professionalism throughout the entire renovation process. Highly recommend Design & Co.',
      author: 'Sarah Mitchell',
      role: 'Business Owner',
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(testimonials)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          What Our Clients Say
        </h2>

        <div className="relative bg-white rounded-lg p-12 md:p-16">
          <div className="h-64 bg-gray-300 rounded-lg mb-8 flex items-center justify-center">
            <p className="text-gray-600">Testimonial Background Image</p>
          </div>

          <p className="text-2xl font-light leading-relaxed mb-8 italic">
            "{testimonials[current].text}"
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">
                {testimonials[current].author}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[current].role}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

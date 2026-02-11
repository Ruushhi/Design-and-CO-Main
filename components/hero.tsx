'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Based in New York, USA
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Timeless Interiors.
            <br />
            Crafted for You.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We create refined spaces that blend comfort, beauty, and lasting design —tailored to the way you live.
          </p>
          <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">
            See Projects
          </button>
        </div>

        <div className="relative h-96 md:h-full min-h-96 bg-gray-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <p className="text-gray-500">Interior Design Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

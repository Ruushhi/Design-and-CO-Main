'use client';

import { ArrowRight } from 'lucide-react';

export default function FeaturedWorks() {
  const works = [
    { id: 1, title: 'Lumé Studio', category: 'Commercial' },
    { id: 2, title: 'The Horizon Residence', category: 'Residential' },
    { id: 3, title: 'The Verena Residence', category: 'Residential' },
    { id: 4, title: 'Arden Boutique Hotel', category: 'Hospitality' },
    { id: 5, title: 'Modern Office Space', category: 'Commercial' },
    { id: 6, title: 'Coastal Home Design', category: 'Residential' },
  ];

  return (
    <section id="works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(works)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Featured works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {works.map((work) => (
            <div
              key={work.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center group-hover:from-gray-400 group-hover:to-gray-500 transition-colors">
                  <p className="text-gray-600">Project Image</p>
                </div>
              </div>
              <h3 className="text-xl font-light mb-2 group-hover:text-gray-600 transition-colors">
                {work.title}
              </h3>
              <p className="text-sm text-gray-500">{work.category}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors rounded-lg">
            View all
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

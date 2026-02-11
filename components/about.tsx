'use client';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '12', label: 'Years of Experience' },
    { number: '30+', label: 'Awards & Recognition' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(about)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Designing Interiors with
          <br />
          Purpose and Precision
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">About Image 1</p>
          </div>
          <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">About Image 2</p>
          </div>
          <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">About Image 3</p>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We approach every space as a balance of function, form, and feeling. Through thoughtful materials, light, and texture, we create interiors that reflect individuality while standing the test of time.
          </p>
          <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">
            Get in Touch
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-light mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

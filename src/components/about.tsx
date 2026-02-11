export default function About() {
  const stats = [
    { number: '90+', label: 'Projects' },
    { number: '18+', label: 'Years' },
    { number: '30+', label: 'Awards' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Designing Interiors with
              <br />
              Purpose and Precision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We approach every space as a balance of function, form, and feeling. Through thoughtful materials, light, and texture, we create interiors that reflect individuality while standing the test of time.
            </p>
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-sm font-medium text-sm">
              Get in Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="h-72 overflow-hidden">
              <img
                src="/about.jpg"
                alt="Interior Design Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-light mb-1">{stat.number}</p>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Philosophy() {
  const philosophies = [
    {
      title: 'Simplicity',
      description:
        'We value clean lines and thoughtful restraint, allowing each element to breathe and serve a purpose.',
    },
    {
      title: 'Harmony',
      description:
        'Every space should feel cohesive —a seamless blend of materials, colors, and light designed to inspire calm and comfort.',
    },
    {
      title: 'Longevity',
      description:
        'We design with intention, ensuring each decision stands the test of time in both style and quality.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(philosophy)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Our Design Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {philosophies.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Philosophy Image</p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

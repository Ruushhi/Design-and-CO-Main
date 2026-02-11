'use client';

export default function Services() {
  const services = [
    {
      title: 'Residential Interior Design',
      description:
        'We create spaces that reflect your lifestyle, blending comfort, elegance, and timeless design principles.',
    },
    {
      title: 'Commercial Interior Design',
      description:
        'We design purposeful environments that enhance brand identity and improve the way people work and connect.',
    },
    {
      title: 'Renovation & Project Management',
      description:
        'We oversee every stage with precision, ensuring each detail aligns seamlessly with your vision and goals.',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(services)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-4">Design Services</h2>
        <p className="text-xl text-gray-600 mb-16">Tailored to You</p>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Service Image</p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors rounded-lg text-sm">
                  Book this Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

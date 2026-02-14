export default function Services() {
  const services = [
    {
      title: 'Residential Interior Design',
      description: 'We create spaces that reflect your lifestyle, blending comfort, elegance, and timeless design principles. From bedroom sanctuaries to living spaces, we craft homes that tell your story.',
      image: '/public/service-01.jpg',
    },
    {
      title: 'Commercial Space Planning',
      description: 'We design purposeful environments that enhance brand identity and improve the way people work, connect, and collaborate. Creating inspiring workspaces that elevate productivity.',
      image: '/public/service-02.jpg',
    },
    {
      title: 'Full Renovation Services',
      description: 'We oversee every stage with precision, ensuring each detail aligns seamlessly with your vision. From concept to completion, we handle the transformation of your space.',
      image: '/public/service-03.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">Services</p>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Design Services <span className="text-amber-700">Tailored</span> to You
          </h2>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-4xl font-light mb-6 text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
                <button className="px-8 py-3 bg-gray-900 text-white hover:bg-amber-700 transition-colors text-sm font-medium tracking-wide">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

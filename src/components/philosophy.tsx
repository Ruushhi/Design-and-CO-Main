export default function Philosophy() {
  const philosophies = [
    {
      title: 'Minimalism',
      description:
        'Clean lines and thoughtful restraint. Every element serves a purpose and enhances the overall harmony of the space.',
      image: '/philosophy-01.jpg',
    },
    {
      title: 'Authenticity',
      description:
        'Designs that reflect individuality. We create spaces that tell your story through carefully chosen materials and textures.',
      image: '/philosophy-02.jpg',
    },
    {
      title: 'Timelessness',
      description:
        'Quality over trends. We design with intention, ensuring each decision stands the test of time in both style and quality.',
      image: '/philosophy-03.jpg',
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">Philosophy</p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            Our Design <span className="text-amber-700">Philosophy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden mb-8 h-80">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-900 group-hover:text-amber-700 transition-colors">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

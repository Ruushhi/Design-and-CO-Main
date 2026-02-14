export default function FeaturedWorks() {
  const works = [
    { id: 1, title: 'Minimal Living', category: 'Residential', image: '/public/living room.avif' },
    { id: 2, title: 'Modern Kitchen', category: 'Residential', image: '/public/dining_room.webp' },
    { id: 3, title: 'Luxury Bedroom', category: 'Residential', image: '/public/bedroom.webp' },
    { id: 4, title: 'Creative Studio', category: 'Commercial', image: '/public/commercial.webp' },
  ];

  return (
    <section id="works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">      
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-4 font-semibold">Featured Works</p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            Our <span className="text-amber-700">Latest</span> Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {works.map((work) => (
            <div
              key={work.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative h-96 bg-gray-300 overflow-hidden mb-6">
                <img 
                  src={work.image || "/placeholder.svg"} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-light mb-2 text-gray-900 group-hover:text-amber-700 transition-colors">
                {work.title}
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">{work.category}</p>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center">
          <button className="px-8 py-3 bg-gray-900 text-white hover:bg-amber-700 transition-colors text-sm font-medium tracking-wide">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
}

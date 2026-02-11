export default function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="grid md:grid-cols-2 gap-0 items-center min-h-screen">
        <div className="px-8 md:px-16 py-20 flex flex-col justify-center">
          <p className="text-sm text-gray-300 uppercase tracking-wider mb-6">
            Timeless Interiors
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Timeless Interiors.
            <br />
            Crafted for You.
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
            We create refined spaces that blend comfort, beauty, and lasting design — tailored to the way you live.
          </p>
          <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors w-fit rounded-sm font-medium">
            See Projects
          </button>
        </div>

        <div className="relative h-screen md:h-full min-h-96 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Timeless Interiors Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

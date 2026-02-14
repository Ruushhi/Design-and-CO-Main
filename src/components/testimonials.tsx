'use client';

export default function Testimonials() {
  const testimonial = {
    text: 'This team completely understood our vision and transformed our home into something we only dreamed of. Every detail is perfect and reflects our lifestyle beautifully.',
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 overflow-hidden">
            <img 
              src="/testimonial.jpg" 
              alt="Client Testimonial"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic text-gray-800">
              "{testimonial.text}"
            </p>

          
          </div>
        </div>
      </div>
    </section>
  );
}

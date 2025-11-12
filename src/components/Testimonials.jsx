import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "BuildLink made it so easy to find a reliable plumber. The process was quick and hassle-free!",
      author: "M. Thompson"
    },
    {
      id: 2,
      text: "The quality of work from the electrician we hired was outstanding. Highly recommend this platform.",
      author: "A. Davis"
    },
    {
      id: 3,
      text: "A fantastic resource for anyone in need of skilled tradespeople. Five stars!",
      author: "S. Rodriguez"
    },
    {
      id: 4,
      text: "I found the perfect contractor for my renovation project. The results exceeded my expectations.",
      author: "J. Chen"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Testimonials</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">What Our Customers Say</h3>
        </div>

        {/* Central Image - Desktop Only */}
        <div className="hidden lg:flex justify-center items-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            alt="Support Agent"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg z-10 object-cover"
          />
        </div>

        {/* Testimonial Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-right font-bold text-blue-500 text-sm sm:text-base">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

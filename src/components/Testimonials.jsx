import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl font-bold">What Our Customers Say</h3>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Support Agent" className="w-48 h-48 rounded-full shadow-lg z-10 object-cover" />
          </div>
          {/* Testimonial Cards */}
          <div className="absolute top-0 left-0 w-64 p-4 bg-white rounded-lg shadow-lg transform -translate-x-1/4 -translate-y-1/4">
            <p className="text-gray-600 italic">"BuildLink made it so easy to find a reliable plumber. The process was quick and hassle-free!"</p>
            <p className="text-right font-bold text-blue-500 mt-2">- M. Thompson</p>
          </div>
          <div className="absolute top-0 right-0 w-64 p-4 bg-white rounded-lg shadow-lg transform translate-x-1/4 -translate-y-1/4">
            <p className="text-gray-600 italic">"The quality of work from the electrician we hired was outstanding. Highly recommend this platform."</p>
            <p className="text-right font-bold text-blue-500 mt-2">- A. Davis</p>
          </div>
          <div className="absolute bottom-0 left-0 w-64 p-4 bg-white rounded-lg shadow-lg transform -translate-x-1/4 translate-y-1/4">
            <p className="text-gray-600 italic">"A fantastic resource for anyone in need of skilled tradespeople. Five stars!"</p>
            <p className="text-right font-bold text-blue-500 mt-2">- S. Rodriguez</p>
          </div>
          <div className="absolute bottom-0 right-0 w-64 p-4 bg-white rounded-lg shadow-lg transform translate-x-1/4 translate-y-1/4">
            <p className="text-gray-600 italic">"I found the perfect contractor for my renovation project. The results exceeded my expectations."</p>
            <p className="text-right font-bold text-blue-500 mt-2">- J. Chen</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-24">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

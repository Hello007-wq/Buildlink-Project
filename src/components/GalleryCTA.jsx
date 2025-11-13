import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487483411353-ab1505c10a3b?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">See Our Gallery With Our Projects</h2>
        <Link
          to="/gallery"
          className="inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300"
          aria-label="Go to Gallery"
        >
          Gallery
        </Link>
      </div>
    </section>
  );
};

export default GalleryCTA;

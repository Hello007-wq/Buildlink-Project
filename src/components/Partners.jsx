import React from 'react';
import Partner1 from '../assets/Partner 1.jpg';
import Partner2 from '../assets/Partner 2.jpg';
import Partner3 from '../assets/Partner 3.jpg';
import Partner4 from '../assets/Partner 4.jpg';

const Partners = () => {
  const logos = [
    { id: 1, src: Partner1, alt: 'Partner 1' },
    { id: 2, src: Partner2, alt: 'Partner 2' },
    { id: 3, src: Partner3, alt: 'Partner 3' },
    { id: 4, src: Partner4, alt: 'Partner 4' },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2">
          Where <span className="text-blue-500">Our Partners</span> Build Success
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>

        {/* Logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-lg flex justify-center items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full p-4 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

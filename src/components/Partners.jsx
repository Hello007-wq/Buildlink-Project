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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Where <span className="text-blue-500">Our Links</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>

        {/* Logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-48 h-48 bg-white rounded-xl shadow-lg flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

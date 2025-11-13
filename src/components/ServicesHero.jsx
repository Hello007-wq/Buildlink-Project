import React from 'react';
import ServicesHeroImage from '../assets/service-hero.jpg';

const ServicesHero = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen lg:h-screen relative"
      style={{ backgroundImage: `url(${ServicesHeroImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
        <h2 className="text-sm font-bold uppercase mb-2 text-gray-200">
          Welcome to BuildLink
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Experts Near You</h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg sm:max-w-xl">
          Where you find the best certified featured service providers like Builders, Plumbers, and Electricians
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300">
          Explore More
        </button>
      </div>

      {/* Search Bar at the bottom of hero */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
            <select className="p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
              <option>Builders</option>
              <option>Plumbers</option>
              <option>Electricians</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              className="p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
            <button className="bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-sky-600 transition text-base sm:text-lg font-medium whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Category buttons */}
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-4 justify-center">
            {['All', 'Builders', 'Plumbers', 'Electricians', 'Company', 'Freelancer'].map((item, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-lg rounded-full font-semibold border-2 transition-colors duration-300 ${idx === 0
                    ? 'bg-sky-500 text-white border-sky-500'
                    : 'bg-white/80 text-sky-500 border border-sky-400 hover:bg-sky-100'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

import React from 'react';
import HeroBg from '../assets/hero-image.jpg'; // local background image

const ProvidersHero = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen lg:h-screen relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-between relative z-10 text-white">
        {/* Top text + buttons */}
        <div className="pt-20 sm:pt-24 md:pt-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left">Featured Provider</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center md:text-left">
            Find what you are looking for at BuildLink
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 sm:items-start">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300 w-full sm:w-auto">
              Explore More
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center">
                {/* Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
              <span className="text-sm sm:text-base">Watch Video</span>
            </button>
          </div>
        </div>

        {/* ✅ Search Bar + Category Links pushed down */}
        <div className="mb-24"> {/* ⬅️ increased margin bottom */}
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <select className="p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500">
                <option>All</option>
                <option>Builders</option>
                <option>Plumbers</option>
                <option>Electricians</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Category Links */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {["All", "Builders", "Plumber", "Electrician", "Company", "Freelancer"].map(
              (item, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 text-lg rounded-full font-medium border-2 border-sky-500 ${idx === 0
                      ? "bg-sky-500 text-white"
                      : "bg-white/80 text-gray-700 hover:bg-sky-100"
                    }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersHero;

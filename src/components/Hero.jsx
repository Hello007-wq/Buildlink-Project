// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import Header from "./Header";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen lg:h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-4 sm:px-6 z-10 text-white max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg text-center md:text-left">
          Experts Near You
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow text-center md:text-left">
          Connecting you to trusted builders, plumbers, and electricians.
        </p>
      </div>
    </section>
  );
};

export const HeroWithSearch = () => {
  return (
    <>
      <Hero />

      {/* Search bar */}
      <div className="container mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 md:-mt-12 relative z-20">
        <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400"
            />
            <select className="p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400">
              <option>All</option>
              <option>Builders</option>
              <option>Plumbers</option>
              <option>Electricians</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              className="p-3 sm:p-4 text-base sm:text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400"
            />
            <button className="bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-sky-600 transition text-base sm:text-lg font-medium whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Category buttons/links */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center">
          {["All", "Builders", "Plumbers", "Electricians", "Company", "Freelancer"].map(
            (item, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg rounded-full font-semibold border ${idx === 0
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-white/80 text-sky-500 border border-sky-400 hover:bg-sky-100"
                  }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HeroWithSearch;

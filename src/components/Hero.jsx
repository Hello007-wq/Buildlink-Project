// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import Header from "./Header";

export const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-6 z-10 text-white max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Experts Near You
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 drop-shadow">
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
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow p-4 text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400"
            />
            <select className="p-4 text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400">
              <option>All</option>
              <option>Builders</option>
              <option>Plumbers</option>
              <option>Electricians</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              className="p-4 text-lg rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400"
            />
            <button className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 transition text-lg font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Category buttons/links */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {["All", "Builders", "Plumber", "Electrician", "Company", "Freelancer"].map(
            (item, idx) => (
              <button
                key={idx}
                className={`px-6 py-3 text-lg rounded-full font-semibold border ${
                  idx === 0
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

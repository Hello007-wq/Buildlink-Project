import React from "react";
import ContactHero from "../assets/contact-hero.jpg"; // hero bg
import MapPlaceholder from "../assets/map-placeholder.jpg"; // map img

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-lg font-light">Welcome to Buildlinks</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Contact Us</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold">Certified </span> builders, plumbers, and electricians across span   <span className="text-blue-400 font-semibold">Zimbabwe</span> — compare, connect, and hire with confidence. —{" "}
            , and hire with confidence.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#0c3c60] text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
            Contact & Join Together
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Our contacts are always available 24/7 ready to help you with your
            services. Get in touch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white text-black rounded-xl p-6 shadow-md">
              <p className="font-bold">Location</p>
              <p className="text-sm mt-2">
                1943 Street Buildlink 5 Harare, 33 Street Mutare
              </p>
            </div>
            <div className="bg-white text-black rounded-xl p-6 shadow-md">
              <p className="font-bold">24/7 Service</p>
              <p className="mt-2 text-sm">Tel: 89 543456896</p>
              <p className="text-sm">Mob: 07123454845</p>
            </div>
            <div className="bg-white text-black rounded-xl p-6 shadow-md">
              <p className="font-bold">Drop a Line</p>
              <p className="mt-2 text-sm">Buildlinks@gmail.com</p>
            </div>
            <div className="bg-white text-black rounded-xl p-6 shadow-md">
              <p className="font-bold">Office Hours</p>
              <p className="mt-2 text-sm">
                Mon - Fri: 8am - 6pm <br /> Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat & Form */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Chat Box */}
          <div className="bg-blue-100 rounded-xl p-8 shadow-md text-center">
            <h3 className="text-lg font-bold">Chat with Us!</h3>
            <p className="mt-2 text-gray-700">
              Chat with us for any service, job you want and the job is done.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Let’s Chat
            </button>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Reach & Get{" "}
              <span className="text-blue-600">Touch With Us!</span>
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Your Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px]">
        <img
          src={MapPlaceholder}
          alt="map"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-12 h-12 bg-red-600 rounded-full shadow-lg"></div>
        </div>
      </section>
    </div>
  );
}

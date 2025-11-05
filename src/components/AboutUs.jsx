import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Worker 1" className="rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1519781542286-35e5a187145d?q=80&w=1974&auto=format&fit=crop" alt="Worker 2" className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 rounded-full border-8 border-white shadow-2xl w-64 h-64 object-cover" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Who we are</h2>
            <h3 className="text-3xl font-bold mb-4">Your Trusted Partner in Construction and Services</h3>
            <p className="text-gray-600 mb-6">
              BuildLink is a premier platform connecting you with top-rated builders, plumbers, and electricians across Zimbabwe. Our mission is to simplify the process of finding reliable professionals for all your construction and maintenance needs.
            </p>
            <p className="text-gray-600 mb-6">
              With over 25 years of combined experience in the industry, our network of professionals is vetted for quality, reliability, and expertise.
            </p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold">
                Read More
              </button>
              <div className="ml-6 flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-500 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

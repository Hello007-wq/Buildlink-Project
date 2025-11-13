import React from 'react';

const TopProfessionals = () => {
  const professionals = [
    { id: 1, name: 'Samuel Moyo', image: 'https://randomuser.me/api/portraits/men/75.jpg', description: 'Top-rated builder with a focus on residential and commercial renovations.' },
    { id: 2, name: 'Grace Ncube', image: 'https://randomuser.me/api/portraits/women/75.jpg', description: 'Experienced plumber specializing in kitchen and bathroom remodels.' },
    { id: 3, name: 'John Chibwe', image: 'https://randomuser.me/api/portraits/men/76.jpg', description: 'Certified electrician with expertise in smart home installations.' },
    { id: 4, name: 'Buildlink Contractors', image: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg', description: 'A team of professionals dedicated to delivering high-quality construction services.' },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Featured Service Providers</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Meet Top-Rated Professionals Ready to Work With You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {professionals.map(pro => (
            <div key={pro.id} className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={pro.image} alt={pro.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-blue-500 object-cover" />
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold">{pro.name}</h4>
                <p className="text-gray-600 text-sm sm:text-base mt-1">{pro.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProfessionals;

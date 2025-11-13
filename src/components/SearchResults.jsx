import React from 'react';

const SearchResults = () => {
  const results = [
    { id: 1, name: 'Grace Ndlovu', image: 'https://randomuser.me/api/portraits/women/60.jpg', description: 'Experienced in residential and commercial installations and maintenance.' },
    { id: 2, name: 'Alan Bikov', image: 'https://randomuser.me/api/portraits/men/60.jpg', description: 'Specializing in modern plumbing solutions for new builds and renovations.' },
    { id: 3, name: 'Tamara Mukasa', image: 'https://randomuser.me/api/portraits/women/61.jpg', description: 'Expert in custom woodworking, fine carpentry, and structural repairs.' },
    { id: 4, name: 'Tinashe Shumba', image: 'https://randomuser.me/api/portraits/men/61.jpg', description: 'Innovative architectural designs for sustainable and functional spaces.' },
    { id: 5, name: 'Chiedza Moyo', image: 'https://randomuser.me/api/portraits/women/62.jpg', description: 'Certified plumber with a focus on emergency repairs and maintenance.' },
    { id: 6, name: 'David Banda', image: 'https://randomuser.me/api/portraits/men/62.jpg', description: 'Lead contractor with over 15 years of experience in project management.' },
    { id: 7, name: 'John Chibwe', image: 'https://randomuser.me/api/portraits/men/63.jpg', description: 'Master electrician specializing in large-scale commercial projects.' },
    { id: 8, name: 'Adam Dube', image: 'https://randomuser.me/api/portraits/men/64.jpg', description: 'Skilled carpenter known for attention to detail and quality craftsmanship.' },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Search Results</h2>
          <a href="#" className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300">More &gt;</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {results.map(result => (
            <div key={result.id} className="bg-blue-800 text-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={result.image} alt={result.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 border-4 border-white" />
              <h3 className="text-lg sm:text-xl font-bold text-center">{result.name}</h3>
              <p className="text-center text-blue-200 mb-4 text-sm sm:text-base line-clamp-3">{result.description}</p>
              <button className="w-full bg-white text-blue-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

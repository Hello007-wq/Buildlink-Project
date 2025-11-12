import React from 'react';

const JobRequest = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Get Started</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Post a Job Request</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <input type="text" placeholder="Phone Number" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <input type="text" placeholder="City" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <textarea placeholder="Describe Your Project" rows="4" className="sm:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              <div className="sm:col-span-2 text-center">
                <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors duration-300">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
            <h4 className="font-bold text-lg mb-4">Job Details</h4>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Project Type:</strong> General Construction</li>
              <li><strong>Budget:</strong> $5,000 - $10,000</li>
              <li><strong>Timeline:</strong> 2-4 Weeks</li>
              <li><strong>Location:</strong> Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobRequest;

import React from 'react';

const JobRequest = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Get Started</h2>
            <h3 className="text-3xl font-bold mb-6">Post a Job Request</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="p-3 border rounded-md" />
              <input type="email" placeholder="Email" className="p-3 border rounded-md" />
              <input type="text" placeholder="Phone Number" className="p-3 border rounded-md" />
              <input type="text" placeholder="City" className="p-3 border rounded-md" />
              <textarea placeholder="Describe Your Project" rows="4" className="md:col-span-2 p-3 border rounded-md"></textarea>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
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

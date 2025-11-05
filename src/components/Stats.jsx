import React from 'react';

const Stats = () => {
  const stats = [
    { id: 1, value: '260 k', label: 'Happy Customers' },
    { id: 2, value: '1,550', label: 'Projects Completed' },
    { id: 3, value: '98%', label: 'Positive Reviews' },
    { id: 4, value: '25', label: 'Years of Experience' },
  ];

  return (
    <section className="py-12 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(stat => (
            <div key={stat.id}>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

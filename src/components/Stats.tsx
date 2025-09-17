import React from 'react';
import { TrendingDown, Wind, Leaf } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingDown,
      stat: "80-90%",
      description: "Biomass pellets cut CO₂ emissions compared to coal"
    },
    {
      icon: Wind,
      stat: "40-80%",
      description: "Particulate matter and sulfur emissions reduced"
    },
    {
      icon: Leaf,
      stat: "Major",
      description: "Air quality improvements while providing reliable energy"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Environmental Impact</h2>
          <p className="text-xl text-gray-300">Making a real difference for our planet</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-200">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-4">{item.stat}</div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
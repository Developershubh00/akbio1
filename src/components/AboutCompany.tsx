import React from 'react';
import { Building, Target, Users } from 'lucide-react';

const AboutCompany = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">About AK Bio Energy</h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AK Bio Energy is an initiative of <span className="font-semibold text-green-600">Vikram Jaglan Group</span>, 
              created with a vision for a cleaner and better future.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As part of a diversified group with deep roots in manufacturing and trade, AK Bio Energy 
              represents our commitment to sustainability and responsibility. This initiative was born 
              out of a drive to reduce dependency on coal and fossil fuels, and to create renewable 
              energy solutions that make industrial operations greener and more cost-efficient.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through AK Bio Energy, the Group is channeling its expertise and network into building 
              a supply chain of reliable, high-quality biomass pellets — an energy source that not 
              only powers industries but also protects the planet.
            </p>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
              <p className="text-xl font-semibold text-green-700 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                This is more than business — it's our contribution to a sustainable tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
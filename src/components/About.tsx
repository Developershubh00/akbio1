import React from 'react';
import { Flame, Globe, DollarSign } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Flame,
      title: "High Energy Efficiency",
      description: "Reliable heat for industrial applications"
    },
    {
      icon: Globe,
      title: "Green & Eco-Friendly Fuel",
      description: "A cleaner alternative to coal"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Energy",
      description: "Consistent supply and stable pricing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Biomass Pellets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Biomass pellets are a renewable, carbon-neutral energy source made from 
            agricultural and woody residues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
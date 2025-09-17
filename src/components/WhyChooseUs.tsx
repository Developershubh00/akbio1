import React from 'react';
import { CheckCircle, Users, Award, Handshake, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Reliable trading partner with strong sourcing network"
    },
    {
      icon: Award,
      title: "Consistent quality – moisture-controlled, dense pellets"
    },
    {
      icon: Handshake,
      title: "Flexible supply – small consignments to bulk orders"
    },
    {
      icon: Leaf,
      title: "Commitment to sustainability and long-term partnerships"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AK Bio Energy?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-200"
            >
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <p className="text-white text-lg font-medium">{reason.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            At AK Bio Energy, we see every client as a partner in building a cleaner energy future.
            We value trust, transparency, and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
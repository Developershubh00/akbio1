import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 pb-12">
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-green-400 font-semibold text-lg">AK Bio Energy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Fueling Industries,<br />
              <span className="text-green-400">Sustaining Tomorrow</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
              High-quality biomass pellets for burners & boilers.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/src/assets/Bio Energy.png" 
                  alt="AK Bio Energy Pellets Package" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
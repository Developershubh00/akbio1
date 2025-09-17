import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">AK Bio Energy</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-green-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mt-4"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Products = () => {
  const products = [
    {
      name: "Mustard Husk Pellets",
      emoji: "🌾",
      image: "https://images.pexels.com/photos/4321889/pexels-photo-4321889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Groundnut Husk Pellets",
      emoji: "🌰",
      image: "https://images.pexels.com/photos/4321889/pexels-photo-4321889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Sugarcane Bagasse Pellets",
      emoji: "🍬",
      image: "https://images.pexels.com/photos/4321889/pexels-photo-4321889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Coconut Husk Pellets",
      emoji: "🥥",
      image: "https://images.pexels.com/photos/4321889/pexels-photo-4321889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Wood Pellets",
      emoji: "🌲",
      image: "https://images.pexels.com/photos/4321889/pexels-photo-4321889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 mb-8">
            At AK Bio Energy, we trade and supply:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{product.emoji}</span>
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              </div>
              <div className="w-full h-32 bg-amber-100 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-green-50 rounded-xl p-8">
          <p className="text-lg text-gray-700 font-medium">
            <span className="text-green-600 font-semibold">Sizes Available:</span> 6mm, 8mm, and custom bulk options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
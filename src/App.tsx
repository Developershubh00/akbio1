import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import AboutCompany from './components/AboutCompany';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Stats />
      <AboutCompany />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
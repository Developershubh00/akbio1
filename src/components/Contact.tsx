import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', number: '', requirements: '' });
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }

    setIsSubmitting(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 mr-4"
              >
                Submit Another Inquiry
              </button>
              <button
                onClick={scrollToTop}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build a Greener Tomorrow, Together</h2>
          <p className="text-xl text-gray-600">Get in touch to discuss your biomass pellet requirements</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your biomass pellet requirements, quantities, and any specific needs"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Call us for immediate assistance</p>
                    <p className="text-green-600 font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">Send us your requirements</p>
                    <p className="text-green-600 font-medium">info@akbioenergy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Visit our office</p>
                    <p className="text-green-600 font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Switch to Green Energy?</h3>
              <p className="text-green-100 leading-relaxed">
                Join hundreds of industries already making the switch to sustainable biomass pellets. 
                Let's discuss how we can help power your operations with clean, renewable energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
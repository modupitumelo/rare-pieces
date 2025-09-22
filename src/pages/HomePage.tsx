import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Award, MessageCircle, Mail } from 'lucide-react';

const HomePage = () => {
  const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: "Debt Review Removal",
      description: "Remove debt review flags from your credit profile professionally and legally.",
      icon: <Shield className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Credit Score Fix",
      description: "Improve your credit score and remove adverse account listings.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: "Judgement Removal",
      description: "Clear court judgements from your credit record efficiently.",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Quick Bank Loans",
      description: "Get approved for bank loans with our professional assistance.",
      icon: <Clock className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-dark-blue to-brand-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
            alt="Financial planning background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-dark-blue/70 to-brand-navy/80 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fix Your Credit,
                <span className="text-brand-light-blue block">Secure Your Future</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional credit repair services in South Africa. We help you remove debt reviews, 
                adverse accounts, judgements, and improve your credit score for a better financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  to="/enquiry"
                  className="flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-light-blue text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <CheckCircle size={20} />
                  <span>Start Your Enquiry</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/credit-clear.jpg"
                alt="Rare Pieces Credit Solutions"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Professional Credit Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialise in comprehensive credit solutions to help South Africans achieve financial freedom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="text-brand-blue hover:text-brand-dark-blue font-medium inline-flex items-center transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Rare Pieces?
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by hundreds of South African clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-brand-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-brand-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Legal & Professional</h3>
              <p className="text-gray-300">
                Registered company (2016/310023/07) with proven legal methods for credit repair
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Successfully helped hundreds of clients improve their credit scores and financial standing
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Turnaround</h3>
              <p className="text-gray-300">
                Fast processing times with regular updates on your credit repair progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-soft-blue to-brand-light-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-brown mb-6">
            Ready to Fix Your Credit?
          </h2>
          <p className="text-xl text-brand-navy mb-8">
            Take the first step towards financial freedom. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Your Enquiry
            </Link>
            <Link
              to="/pricing"
              className="bg-white hover:bg-brand-cream text-brand-navy px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
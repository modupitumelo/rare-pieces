import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Crown } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Credit Score Fix",
      subtitle: "Adverse Accounts & Prescribed Debt",
      price: "R6,000",
      description: "Perfect for improving your credit score and removing negative listings",
      features: [
        "Remove adverse account listings",
        "Prescribed debt removal",
        "Credit score improvement",
        "Detailed credit report analysis",
        "Professional consultation",
        "Progress updates"
      ],
      popular: false,
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: "Debt Review Removal",
      subtitle: "Single Person",
      price: "R8,000",
      description: "Remove debt review status from your credit profile",
      features: [
        "Complete debt review removal",
        "Credit bureau updates",
        "Legal documentation",
        "Professional handling",
        "Restore credit applications",
        "Follow-up support"
      ],
      popular: true,
      icon: <Star className="w-8 h-8 text-brand-blue" />
    },
    {
      title: "Debt Review Removal",
      subtitle: "Married / COP",
      price: "R16,000",
      description: "Comprehensive debt review removal for married couples or partnerships",
      features: [
        "Both parties debt review removal",
        "Joint account handling",
        "Legal documentation for both",
        "Professional consultation",
        "Restore joint credit applications",
        "Ongoing support"
      ],
      popular: false,
      icon: <Crown className="w-8 h-8 text-purple-500" />
    }
  ];

  const additionalServices = [
    { service: "Judgement Removal", price: "R8,000" },
    { service: "Unlawful Fraud Listings", price: "R8,000" },
    { service: "Detailed Credit Reports", price: "R500" },
    { service: "Bank Loans Assistance", price: "Contact for Quote" }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clear, upfront pricing for all our credit repair services. No hidden fees, no surprises.
          </p>
        </div>
      </div>

      {/* Main Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-brand-blue transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-blue to-brand-light-blue text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="flex items-center mb-4">
                  {plan.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
                    <p className="text-gray-600 text-sm">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/enquiry"
                  className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                     ? 'bg-brand-blue hover:bg-brand-light-blue text-white'
                     : 'bg-brand-navy hover:bg-brand-dark-blue text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-slate-900 mb-2">{item.service}</h3>
                <p className="text-2xl font-bold text-brand-blue">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-brand-light-blue">How to Pay</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Submit your enquiry form</li>
                <li>• Receive bank account details</li>
                <li>• Make payment via EFT/Bank Transfer</li>
                <li>• Send proof of payment via WhatsApp</li>
                <li>• We begin processing your case</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-brand-light-blue">What's Included</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Professional consultation</li>
                <li>• All legal documentation</li>
                <li>• Credit bureau communications</li>
                <li>• Regular progress updates</li>
                <li>• Follow-up support</li>
                <li>• Success guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-soft-blue to-brand-light-blue py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Ready to Start Your Credit Repair Journey?
          </h2>
          <p className="text-xl text-brand-navy mb-8">
            Choose the service that's right for you and take the first step towards financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Submit Enquiry
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-brand-cream text-brand-navy px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us First
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
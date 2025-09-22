import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CreditCard, Gavel, AlertTriangle, FileText, Banknote, TrendingUp, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Debt Review Removal",
      description: "Professional removal of debt review flags from your credit profile. We handle the entire process legally and efficiently.",
      details: "Remove debt counselling status and restore your ability to apply for credit. Our process involves working with credit bureaus and debt counsellors to clear your record.",
      requiredDocs: ["ID Copy", "Proof of Residence", "Power of Attorney (if applicable)"],
      fee: "Single: R8,000 | Married (COP): R16,000",
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Prescribed Debt Removal",
      description: "Remove prescribed debts that should no longer appear on your credit record according to South African law.",
      details: "Debts older than 3 years (or 1 year for certain accounts) should be removed from your credit record. We ensure compliance with prescription laws.",
      requiredDocs: ["ID Copy", "Proof of Residence", "Account Statements"],
      fee: "R6,000",
      icon: <FileText className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Judgement Removal",
      description: "Clear court judgements from your credit record through proper legal channels and documentation.",
      details: "Remove satisfied judgements and rescind default judgements. We work with courts and attorneys to clear your record properly.",
      requiredDocs: ["ID Copy", "Proof of Residence", "Court Documents", "Payment Proof (if applicable)"],
      fee: "R8,000",
      icon: <Gavel className="w-12 h-12 text-red-500" />
    },
    {
      title: "Adverse Accounts / Credit Score Fix",
      description: "Improve your credit score by removing negative listings and adverse account information.",
      details: "Clean up your credit report by removing incorrect adverse listings, disputed accounts, and improving your overall credit score.",
      requiredDocs: ["ID Copy", "Proof of Residence", "Credit Report", "Dispute Documentation"],
      fee: "R6,000",
      icon: <TrendingUp className="w-12 h-12 text-green-500" />
    },
    {
      title: "Unlawful Fraud Listing Removal",
      description: "Remove fraudulent listings that were placed on your credit record without your knowledge or consent.",
      details: "Combat identity theft and fraudulent credit applications. We help remove unauthorized accounts and restore your credit integrity.",
      requiredDocs: ["ID Copy", "Proof of Residence", "Affidavit", "Supporting Evidence", "Police Case Number"],
      fee: "R8,000",
      icon: <AlertTriangle className="w-12 h-12 text-orange-500" />
    },
    {
      title: "Detailed Credit Reports",
      description: "Comprehensive credit report analysis with recommendations for improvement and action plans.",
      details: "Get detailed insights into your credit status with professional analysis and step-by-step improvement recommendations.",
      requiredDocs: ["ID Copy", "Consent Form"],
      fee: "R500",
      icon: <CreditCard className="w-12 h-12 text-indigo-500" />
    },
    {
      title: "Bank Loans (Quick Approval)",
      description: "Professional assistance with loan applications and improving your chances of approval.",
      details: "We help prepare your application and work with partner banks to increase your approval chances for personal and business loans.",
      requiredDocs: ["ID Copy", "Proof of Income", "Bank Statements", "Proof of Residence"],
      fee: "Contact for Quote",
      icon: <Banknote className="w-12 h-12 text-teal-500" />
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Credit Repair Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive credit solutions to help you achieve financial freedom. 
            All services are performed legally and professionally by registered experts.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-slate-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.details}</p>

                {/* Required Documents */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Required Documents:</h4>
                  <ul className="space-y-2">
                    {service.requiredDocs.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fee */}
                <div className="bg-brand-soft-blue border border-brand-blue rounded-lg p-4 mb-6">
                  <p className="text-brand-navy font-semibold">
                    <span className="text-brand-dark-blue">Fee: </span>
                    {service.fee}
                  </p>
                </div>

                <Link
                  to="/enquiry"
                  className="inline-block w-full bg-brand-navy hover:bg-brand-dark-blue text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Enquire About This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-soft-blue to-brand-light-blue py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-brand-navy mb-8">
            Contact us for a free consultation and we'll recommend the best solution for your credit situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="bg-white hover:bg-brand-cream text-brand-navy px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
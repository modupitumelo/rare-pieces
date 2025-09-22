import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, CheckCircle, Target } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Legal & Professional",
      description: "All our credit repair methods are 100% legal and compliant with South African credit laws and regulations."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Proven Expertise",
      description: "Years of experience in credit repair with hundreds of successful cases across South Africa."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Client-Focused",
      description: "We prioritize our clients' financial wellbeing and provide personalized solutions for each case."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Efficient Process",
      description: "Streamlined procedures ensure faster turnaround times while maintaining quality and accuracy."
    }
  ];

  const achievements = [
    { number: "500+", label: "Clients Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Rare Pieces Credit Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in credit repair and financial rehabilitation across South Africa
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Helping South Africans Achieve Financial Freedom
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Rare Pieces Credit Solutions is a registered South African company specializing in professional 
              credit repair services. Since our establishment, we have been dedicated to helping individuals 
              overcome credit challenges and rebuild their financial futures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of credit repair specialists understands the South African credit landscape and works 
              within the legal framework to provide effective solutions for debt review removal, adverse account 
              clearance, judgement removal, and credit score improvement.
            </p>
            <div className="bg-brand-cream border border-brand-beige rounded-lg p-6">
              <p className="text-brand-brown">
                <strong>Company Registration:</strong> 2016/310023/07
              </p>
            </div>
          </div>
          <div>
            <img 
              src="/credit-clear.jpg"
              alt="Rare Pieces Credit Solutions"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide professional, legal, and effective credit repair solutions that empower South Africans 
                to overcome financial obstacles and achieve their dreams of homeownership, business ownership, 
                and financial stability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become South Africa's most trusted credit repair company, known for our integrity, 
                professionalism, and commitment to helping clients achieve lasting financial wellness 
                and creditworthiness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-300">
              Numbers that demonstrate our commitment to client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-brand-light-blue mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Specialize In</h2>
            <p className="text-xl text-gray-600">
              Comprehensive credit repair solutions for every situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Debt Review Removal",
              "Prescribed Debt Removal", 
              "Judgement Removal",
              "Adverse Accounts Removal",
              "Credit Score Fix",
              "Unlawful Fraud Listing Removal",
              "Detailed Credit Reports",
              "Bank Loans (Quick Approval)"
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-brand-soft-blue to-brand-light-blue py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-brand-navy mb-8">
            Let's discuss how we can help improve your credit situation and secure your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Your Enquiry
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-brand-cream text-brand-navy px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React, { useState } from 'react';
import { MessageCircle, Upload, CheckCircle, Send, Loader } from 'lucide-react';

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    documents: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    { value: 'credit-score-fix', label: 'Credit Score Fix / Adverse Accounts (R6,000)', price: 'R6,000' },
    { value: 'prescribed-debt', label: 'Prescribed Debt Removal (R6,000)', price: 'R6,000' },
    { value: 'debt-review-single', label: 'Debt Review Removal - Single (R8,000)', price: 'R8,000' },
    { value: 'debt-review-married', label: 'Debt Review Removal - Married/COP (R16,000)', price: 'R16,000' },
    { value: 'judgement-removal', label: 'Judgement Removal (R8,000)', price: 'R8,000' },
    { value: 'fraud-listing', label: 'Unlawful Fraud Listing Removal (R8,000)', price: 'R8,000' },
    { value: 'credit-report', label: 'Detailed Credit Report (R500)', price: 'R500' },
    { value: 'bank-loans', label: 'Bank Loans Assistance (Quote on Request)', price: 'Contact for Quote' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', getSelectedServiceLabel());
      formDataToSend.append('message', formData.message || 'No additional message provided');
      
      if (formData.documents) {
        formDataToSend.append('documents', formData.documents);
      }

      const response = await fetch('https://formspree.io/f/xpwyayak', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedServiceLabel = () => {
    const selected = services.find(service => service.value === formData.service);
    return selected ? selected.label : '';
  };

  const getSelectedServicePrice = () => {
    const selected = services.find(service => service.value === formData.service);
    return selected ? selected.price : '';
  };

  const whatsappMessage = `Hi Rare Pieces, I submitted my enquiry for ${getSelectedServiceLabel()}. My name is ${formData.fullName}. Please contact me to discuss payment and next steps.`;
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      documents: null
    });
    setIsSubmitted(false);
    setSubmitError('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Enquiry Submitted Successfully!</h2>
            <p className="text-green-700 text-lg mb-6">
              Thank you, <strong>{formData.fullName}</strong>! We have received your enquiry for <strong>{getSelectedServiceLabel()}</strong>.
            </p>
            <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
              <ul className="text-left text-green-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  We'll review your enquiry within 24 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  You'll receive payment details via email or WhatsApp
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Once payment is confirmed, we'll start your case
                </li>
              </ul>
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Selected Service</h3>
            <div className="bg-brand-soft-blue border border-brand-blue rounded-lg p-6">
              <h4 className="text-xl font-semibold text-brand-navy mb-2">{getSelectedServiceLabel()}</h4>
              <p className="text-2xl font-bold text-brand-navy">{getSelectedServicePrice()}</p>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need to Contact Us?</h3>
            <p className="text-gray-600 mb-6">
              For immediate assistance or questions about your enquiry, reach out to us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:info@rarepieces.co.za?subject=Enquiry Follow-up"
                className="flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-light-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Send size={20} />
                <span>Email Us</span>
              </a>
            </div>

            <button
              onClick={resetForm}
              className="text-brand-blue hover:text-brand-dark-blue font-medium transition-colors duration-300"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Submit Your Enquiry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete the form below to start your credit repair journey. We'll contact you with payment details and next steps.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900">Credit Repair Enquiry Form</h2>
            <p className="text-gray-600 mt-2">Please provide accurate information for faster processing</p>
          </div>

          <div className="p-8 space-y-6">
            {/* Error Message */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone/WhatsApp Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                placeholder="e.g., +27 78 123 4567"
                disabled={isSubmitting}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Service *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                disabled={isSubmitting}
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                placeholder="Tell us more about your situation or any specific requirements..."
                disabled={isSubmitting}
              />
            </div>

            {/* Document Upload */}
            <div>
              <label htmlFor="documents" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-blue transition-colors">
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload or drag and drop files here
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, JPG, PNG files up to 10MB
                  </p>
                  <input
                    type="file"
                    id="documents"
                    name="documents"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="documents"
                    className={`inline-block mt-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-brand-blue hover:bg-brand-light-blue text-white'
                    }`}
                  >
                    Choose Files
                  </label>
                </div>
              </div>
              {formData.documents && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.documents.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-brand-navy hover:bg-brand-dark-blue text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Privacy Notice:</strong> Your information is kept strictly confidential and is used only for processing your credit repair case. 
                We comply with all South African data protection regulations.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;
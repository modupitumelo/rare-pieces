import React, { useState } from 'react';
import { MessageCircle, Upload, CheckCircle, CreditCard, Copy } from 'lucide-react';

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    documents: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

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

  const bankDetails = {
    bankName: "Nedbank",
    accountNumber: "1224250532",
    branchCode: "198765",
    accountType: "Current Account",
    accountHolder: "S.I. Bopape"
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object for Formspree submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('fullName', formData.fullName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('service', getSelectedServiceLabel());
    formDataToSubmit.append('message', formData.message);
    if (formData.documents) {
      formDataToSubmit.append('documents', formData.documents);
    }

    // Submit to Formspree
    fetch('https://formspree.io/f/xpwyayak', {
      method: 'POST',
      body: formDataToSubmit,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setShowPayment(true);
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    });
  };

  const getSelectedServiceLabel = () => {
    const selected = services.find(service => service.value === formData.service);
    return selected ? selected.label : '';
  };

  const getSelectedServicePrice = () => {
    const selected = services.find(service => service.value === formData.service);
    return selected ? selected.price : '';
  };

  const whatsappMessage = `Hi Rare Pieces, I submitted my enquiry for ${getSelectedServiceLabel()}. My reference is ${formData.fullName}. I will send proof of payment shortly.`;
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (isSubmitted && showPayment) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-green-800">Enquiry Submitted Successfully!</h2>
            </div>
            <p className="text-green-700 text-lg">
              Thank you, {formData.fullName}! We have received your enquiry for <strong>{getSelectedServiceLabel()}</strong>.
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-brand-navy text-white px-8 py-6">
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 text-brand-light-blue mr-3" />
                <h3 className="text-2xl font-bold">Payment Details</h3>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{bankDetails.bankName}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.bankName)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number</label>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium font-mono">{bankDetails.accountNumber}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.accountNumber)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Branch Code</label>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{bankDetails.branchCode}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.branchCode)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{bankDetails.accountType}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Account Holder</label>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{bankDetails.accountHolder}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Amount to Pay</label>
                    <div className="bg-brand-soft-blue border border-brand-blue p-3 rounded-lg">
                      <span className="font-bold text-2xl text-brand-navy">{getSelectedServicePrice()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Payment Reference Instructions:</h4>
                <p className="text-blue-700">
                  Please use "<strong>{formData.fullName}</strong>" as your payment reference or include your full name in the reference field.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Next Steps</h3>
            <p className="text-gray-600 mb-6">
              After making your payment, please send proof of payment via WhatsApp to proceed with your case.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 mb-4"
            >
              <MessageCircle size={20} />
              <span>Send WhatsApp Message</span>
            </a>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Pre-filled message:</p>
              <p className="text-sm italic text-gray-700 border-l-4 border-gray-300 pl-4">
                "{whatsappMessage}"
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>Or email proof of payment to: <a href="mailto:info@rarepieces.co.za" className="text-blue-600 hover:underline">info@rarepieces.co.za</a></p>
            </div>
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
            Complete the form below to start your credit repair journey. We'll provide payment details after submission.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="e.g., +27 78 123 4567"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Tell us more about your situation or any specific requirements..."
              />
            </div>

            {/* Document Upload */}
            <div>
              <label htmlFor="documents" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-amber-500 transition-colors">
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
                  />
                  <label
                    htmlFor="documents"
                    className="inline-block mt-2 px-4 py-2 bg-brand-blue hover:bg-brand-light-blue text-white rounded-lg cursor-pointer transition-colors"
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
                className="w-full bg-brand-navy hover:bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Submit Enquiry & Get Payment Details
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
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertTriangle, Gavel, CreditCard, CheckCircle } from 'lucide-react';

const DocumentsPage = () => {
  const documentRequirements = [
    {
      service: "General Requirements",
      description: "Basic documents required for all credit repair services",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      documents: [
        "Clear copy of South African ID document (both sides)",
        "Proof of residence (utility bill, lease agreement, or bank statement not older than 3 months)",
        "Contact details (phone number, email address, physical address)"
      ],
      notes: "These documents are required for identity verification and communication purposes."
    },
    {
      service: "Debt Review Removal",
      description: "Additional documents for debt review removal cases",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      documents: [
        "Debt counselling clearance certificate (if available)",
        "Form 17.4 (if available)",
        "Power of Attorney (if someone else is handling your case)",
        "Marriage certificate (for married in community of property cases)",
        "List of all creditors and outstanding amounts"
      ],
      notes: "Some documents may be obtained during the process if not immediately available."
    },
    {
      service: "Judgement Removal",
      description: "Documents required for court judgement removal",
      icon: <Gavel className="w-8 h-8 text-red-500" />,
      documents: [
        "Copy of the court judgement",
        "Proof of payment or settlement agreement (if applicable)",
        "Satisfaction of judgement document (if available)",
        "Attorney's details (if you were represented)",
        "Court case number and details"
      ],
      notes: "We can assist in obtaining court documents if you don't have copies."
    },
    {
      service: "Unlawful Fraud Listing Removal",
      description: "Evidence required for fraudulent listing disputes",
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      documents: [
        "Sworn affidavit stating you did not apply for or authorize the account",
        "Police case number (if identity theft was reported)",
        "Any correspondence with the credit provider",
        "Supporting evidence (contradictory documents, alibi evidence)",
        "Credit report showing the fraudulent listings"
      ],
      notes: "Strong supporting evidence increases the success rate of fraud disputes."
    },
    {
      service: "Credit Score Fix / Adverse Accounts",
      description: "Documents for credit score improvement and adverse account removal",
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
      documents: [
        "Recent credit report (if available)",
        "Correspondence with credit providers",
        "Payment history and proof of payments",
        "Settlement agreements (if applicable)",
        "Dispute letters previously sent (if any)"
      ],
      notes: "We can obtain your credit report if you don't have a recent copy."
    }
  ];

  const tips = [
    "Ensure all documents are clear and legible",
    "Provide certified copies where required",
    "Keep originals for your records",
    "Notify us immediately if any information changes",
    "All documents are kept confidential and secure"
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Required Documents
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prepare the necessary documents for your credit repair service. Having the right documentation 
            ensures faster processing and better results.
          </p>
        </div>
      </div>

      {/* Document Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {documentRequirements.map((requirement, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center">
                  {requirement.icon}
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-slate-900">{requirement.service}</h2>
                    <p className="text-gray-600 mt-1">{requirement.description}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Required Documents:</h3>
                <ul className="space-y-3 mb-6">
                  {requirement.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    <strong>Note:</strong> {requirement.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Document Preparation Tips
            </h2>
            <p className="text-xl text-gray-600">
              Follow these guidelines to ensure smooth processing of your case
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Submit Your Documents?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You can upload your documents securely through our enquiry form or send them via WhatsApp after submission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="bg-brand-blue hover:bg-brand-light-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Submit Enquiry & Upload Documents
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

export default DocumentsPage;
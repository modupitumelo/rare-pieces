import React from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send, Shield, FileText } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-brand-navy text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-brand-light-blue mr-3" />
              <h2 className="text-2xl font-bold">Privacy & Data Use Statement</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection and Use</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Rare Pieces of the Essence shall utilise clients' personal information solely for the purposes of credit 
              repair solutions. Client information will only be shared with relevant third-party service providers 
              involved in the credit repair process.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Protection</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We will not disclose, sell, or use client information for any other purposes without explicit consent, 
              except as required by law or regulation. Your personal information is protected and handled with the 
              utmost care and confidentiality.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Sharing</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Information may be shared with credit bureaus, legal representatives, and other service providers 
              directly involved in your credit repair process. This sharing is limited to what is necessary to 
              provide our services effectively.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You have the right to request information about how your data is being used and to request corrections 
              to any inaccurate information. You may also request that we stop processing your information, subject 
              to legal and contractual obligations.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-blue-800">
                <strong>Contact Us:</strong> If you have any questions about this privacy statement or how we handle 
                your personal information, please contact us at info@rarepieces.co.za or +27 78 430 6215.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = React.useState(false);
  
  const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <footer className="bg-brand-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-dark-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Credit Repair Tips
            </h3>
            <p className="text-brand-light-blue mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert credit repair advice, industry updates, 
              and exclusive tips to improve your financial health.
            </p>
            
            {/* Newsletter Form */}
            <div className="max-w-md mx-auto">
              <div id="mc_embed_signup">
                <form 
                  action="https://rarepieces.us22.list-manage.com/subscribe/post?u=67405654fa0e67bf8999d1191&amp;id=07e94357fd" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate flex flex-col sm:flex-row gap-3"
                  target="_blank" 
                  noValidate
                >
                  <div id="mc_embed_signup_scroll" className="flex-1">
                    <input 
                      type="email" 
                      name="EMAIL" 
                      id="mce-EMAIL" 
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light-blue"
                    />
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_67405654fa0e67bf8999d1191_07e94357fd" tabIndex={-1} defaultValue="" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="flex items-center justify-center space-x-2 bg-brand-light-blue hover:bg-white text-brand-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
                  >
                    <Send size={18} />
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
              
              <p className="text-sm text-brand-light-blue mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/rare.png" 
                alt="Rare Pieces Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional credit repair services in South Africa. Fix your credit, secure your future.
            </p>
            <p className="text-sm text-gray-400">
              Company Registration: 2016/310023/07
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-light-blue">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-light-blue" />
                <a href="tel:+27784306215" className="hover:text-brand-light-blue transition-colors">
                  +27 78 430 6215
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-light-blue" />
                <a href="mailto:info@rarepieces.co.za" className="hover:text-brand-light-blue transition-colors">
                  info@rarepieces.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-light-blue mt-1" />
                <div>
                  <p>1531 Forbes Road, Zone 9</p>
                  <p>Meadowlands, 1852</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-light-blue">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Debt Review Removal</li>
              <li>Prescribed Debt Removal</li>
              <li>Judgement Removal</li>
              <li>Adverse Accounts Removal</li>
              <li>Credit Score Fix</li>
              <li>Unlawful Fraud Listing Removal</li>
              <li>Detailed Credit Reports</li>
              <li>Bank Loans (Quick Approval)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rare Pieces Credit Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@rarepieces.co.za?subject=Credit Repair Enquiry"
                className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-light-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
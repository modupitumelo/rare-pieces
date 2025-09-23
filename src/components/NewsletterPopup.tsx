import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('newsletterPopupShown');
    if (!popupShown) {
      setIsVisible(true);
      sessionStorage.setItem('newsletterPopupShown', 'true');
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-brand-navy text-white p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold mb-2">Stay Updated on Credit Repair Tips</h2>
          <p className="text-brand-light-blue">
            Get expert advice, industry updates, and exclusive tips to improve your financial health.
          </p>
        </div>

        {/* Mailchimp Form */}
        <div className="p-6">
          <div id="mc_embed_shell">
            <style type="text/css">
              {`
                #mc_embed_signup {
                  background: #fff;
                  clear: left;
                  font: 14px Helvetica, Arial, sans-serif;
                  width: 100%;
                }
                #mc_embed_signup h2 {
                  display: none;
                }
                #mc_embed_signup .mc-field-group {
                  margin-bottom: 1rem;
                }
                #mc_embed_signup label {
                  display: block;
                  font-weight: 600;
                  color: #374151;
                  margin-bottom: 0.5rem;
                }
                #mc_embed_signup input[type="email"] {
                  width: 100%;
                  padding: 0.75rem;
                  border: 1px solid #d1d5db;
                  border-radius: 0.5rem;
                  font-size: 1rem;
                  transition: border-color 0.2s;
                }
                #mc_embed_signup input[type="email"]:focus {
                  outline: none;
                  border-color: #87CEEB;
                  box-shadow: 0 0 0 3px rgba(135, 206, 235, 0.1);
                }
                #mc_embed_signup .button {
                  background-color: #2C5282;
                  color: white;
                  padding: 0.75rem 2rem;
                  border: none;
                  border-radius: 0.5rem;
                  font-size: 1rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background-color 0.2s;
                  width: 100%;
                }
                #mc_embed_signup .button:hover {
                  background-color: #4682B4;
                }
                #mc_embed_signup .indicates-required {
                  color: #6b7280;
                  font-size: 0.875rem;
                  margin-bottom: 1rem;
                }
                #mc_embed_signup .asterisk {
                  color: #ef4444;
                }
                #mc_embed_signup .optionalParent {
                  margin-top: 1rem;
                }
                #mc_embed_signup .refferal_badge {
                  display: none !important;
                }
                #mc_embed_signup .optionalParent p {
                  display: none !important;
                }
                #mc_embed_signup .response {
                  padding: 0.75rem;
                  margin: 0.5rem 0;
                  border-radius: 0.5rem;
                }
                #mce-success-response {
                  background-color: #d1fae5;
                  color: #065f46;
                  border: 1px solid #a7f3d0;
                }
                #mce-error-response {
                  background-color: #fee2e2;
                  color: #991b1b;
                  border: 1px solid #fca5a5;
                }
              `}
            </style>
            <div id="mc_embed_signup">
              <form 
                action="https://app.us14.list-manage.com/subscribe/post?u=67405654fa0e67bf8999d1191&id=72f590dc37&f_id=006cb6e5f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email" 
                      id="mce-EMAIL" 
                      required 
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                  </div>
                  <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_67405654fa0e67bf8999d1191_72f590dc37" tabIndex={-1} />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input 
                        type="submit" 
                        name="subscribe" 
                        id="mc-embedded-subscribe" 
                        className="button" 
                        value="Subscribe to Newsletter" 
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;

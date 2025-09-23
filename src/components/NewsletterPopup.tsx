// src/components/NewsletterPopup.tsx
import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Loader } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const popupShown = sessionStorage.getItem('newsletterPopupShown');
    if (!popupShown) {
      setIsVisible(true);
      sessionStorage.setItem('newsletterPopupShown', 'true');
    }
  }, []);

  const closePopup = () => setIsVisible(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('b_d1f48d5faf14a145ea2522aaa_d3fe1f22f8', ''); // honeypot field

      const response = await fetch(
        'https://rarepieces.us19.list-manage.com/subscribe/post-json?u=d1f48d5faf14a145ea2522aaa&id=d3fe1f22f8&c=?',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }
      );

      // Since we're using no-cors mode, we can't read the response
      // But Mailchimp will still process the subscription
      setIsSuccess(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        closePopup();
      }, 3000);

    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative">
          <button
            onClick={closePopup}
            aria-label="Close newsletter popup"
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-navy"
          >
            <X size={20} />
          </button>
          
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Successfully Subscribed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for subscribing to our newsletter. You'll receive credit repair tips and updates directly in your inbox.
          </p>
          <p className="text-sm text-gray-500">
            This popup will close automatically in a few seconds...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close newsletter popup"
          className="absolute top-4 right-4 p-2 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-brand-navy text-white p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold mb-2">Stay Updated on Credit Repair Tips</h2>
          <p className="text-brand-light-blue">
            Get expert advice, industry updates, and exclusive tips to improve your financial health.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-red-500">*</span> indicates required
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="newsletter-email" className="block font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center space-x-2 ${
                isSubmitting || !email.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-brand-navy hover:bg-brand-dark-blue'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe to Newsletter</span>
              )}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
            </div>

            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
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

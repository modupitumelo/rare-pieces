import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Mail, FileText, CreditCard } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with your credit repair needs. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "What services do you offer?",
        "How much does debt review removal cost?",
        "How long does the process take?",
        "What documents do I need?"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();

    // Service inquiries
    if (message.includes('service') || message.includes('what do you do')) {
      return {
        text: "We offer comprehensive credit repair services including:\n\n• Debt Review Removal (R8,000 single / R16,000 married)\n• Credit Score Fix & Adverse Accounts (R6,000)\n• Judgement Removal (R8,000)\n• Prescribed Debt Removal (R6,000)\n• Fraud Listing Removal (R8,000)\n• Credit Reports (R500)\n• Bank Loan Assistance\n\nWhich service interests you most?",
        suggestions: ["Debt review removal", "Credit score fix", "Judgement removal", "View all pricing"]
      };
    }

    // Pricing inquiries
    if (message.includes('cost') || message.includes('price') || message.includes('fee')) {
      return {
        text: "Our pricing is transparent with no hidden fees:\n\n💰 Credit Score Fix: R6,000\n💰 Debt Review Removal: R8,000 (single) / R16,000 (married)\n💰 Judgement Removal: R8,000\n💰 Prescribed Debt: R6,000\n💰 Fraud Listings: R8,000\n💰 Credit Reports: R500\n\nPayment is required upfront via bank transfer. Would you like our banking details?",
        suggestions: ["Get banking details", "Submit enquiry", "What's included?", "Payment methods"]
      };
    }

    // Time/duration inquiries
    if (message.includes('long') || message.includes('time') || message.includes('duration')) {
      return {
        text: "Processing times vary by service:\n\n⏱️ Credit Reports: 2-3 days\n⏱️ Debt Review Removal: 30-90 days\n⏱️ Judgement Removal: 30-60 days\n⏱️ Credit Score Fix: 30-90 days\n⏱️ Fraud Listings: 30-60 days\n\nWe provide regular updates throughout the process. Which service are you interested in?",
        suggestions: ["Debt review removal", "Credit score fix", "Submit enquiry", "Contact us"]
      };
    }

    // Document inquiries
    if (message.includes('document') || message.includes('paperwork') || message.includes('need')) {
      return {
        text: "Required documents vary by service, but generally include:\n\n📄 ID copy (both sides)\n📄 Proof of residence (recent utility bill)\n📄 Contact details\n\nSpecific services may need:\n• Court documents (judgements)\n• Debt counselling certificates\n• Credit reports\n• Affidavits (fraud cases)\n\nWhat service are you considering?",
        suggestions: ["View document requirements", "Debt review removal", "Judgement removal", "Submit enquiry"]
      };
    }

    // Debt review specific
    if (message.includes('debt review') || message.includes('debt counselling')) {
      return {
        text: "Debt Review Removal is one of our most popular services!\n\n✅ Remove debt counselling status\n✅ Restore credit applications\n✅ Legal process (100% compliant)\n✅ Regular updates\n\n💰 Cost: R8,000 (single) / R16,000 (married in COP)\n⏱️ Time: 30-90 days\n\nReady to get started?",
        suggestions: ["Submit enquiry", "Required documents", "Contact via WhatsApp", "More info"]
      };
    }

    // Credit score specific
    if (message.includes('credit score') || message.includes('adverse')) {
      return {
        text: "Credit Score Fix & Adverse Account Removal:\n\n✅ Remove negative listings\n✅ Improve credit score\n✅ Clear adverse accounts\n✅ Professional dispute process\n\n💰 Cost: R6,000\n⏱️ Time: 30-90 days\n\nThis service can significantly improve your creditworthiness!",
        suggestions: ["Submit enquiry", "How it works", "Success rate", "Contact us"]
      };
    }

    // Contact inquiries
    if (message.includes('contact') || message.includes('phone') || message.includes('whatsapp')) {
      return {
        text: "You can reach us through:\n\n📱 WhatsApp: +27 78 430 6215\n📞 Phone: +27 78 430 6215\n📧 Email: info@rarepieces.co.za\n📍 Address: 1531 Forbes Road, Zone 9, Meadowlands, 1852\n\nWhatsApp is usually the fastest way to get a response!",
        suggestions: ["WhatsApp us now", "Submit enquiry", "View location", "Email us"]
      };
    }

    // Banking/payment details
    if (message.includes('bank') || message.includes('payment') || message.includes('pay')) {
      return {
        text: "Banking Details:\n\n🏦 Bank: First National Bank (FNB)\n💳 Account: 1234567890\n🏢 Branch Code: 250655\n📝 Account Type: Business Cheque\n👤 Account Holder: Rare Pieces Credit Solutions\n\nUse your full name as payment reference. Send proof of payment via WhatsApp after transfer.",
        suggestions: ["WhatsApp proof of payment", "Submit enquiry first", "More payment info", "Contact us"]
      };
    }

    // Success rate inquiries
    if (message.includes('success') || message.includes('guarantee') || message.includes('work')) {
      return {
        text: "We have a high success rate with our credit repair services:\n\n📈 95%+ success rate across all services\n🏆 500+ satisfied clients\n⚖️ 100% legal methods only\n🔒 Registered company (2016/310023/07)\n\nWhile we can't guarantee specific outcomes, we work diligently on every case and only use legitimate dispute processes.",
        suggestions: ["Submit enquiry", "View testimonials", "Our process", "Contact us"]
      };
    }

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! Welcome to Rare Pieces Credit Solutions. I'm here to help you with any questions about our credit repair services. What would you like to know?",
        suggestions: ["What services do you offer?", "How much does it cost?", "How long does it take?", "Contact information"]
      };
    }

    // Default response
    return {
      text: "I'd be happy to help you with that! For specific questions about your credit situation, I recommend:\n\n1. Submitting an enquiry form for personalized assistance\n2. Contacting us directly via WhatsApp for immediate help\n3. Calling us at +27 78 430 6215\n\nWhat would you prefer to do?",
      suggestions: ["Submit enquiry", "WhatsApp us", "Call now", "View services"]
    };
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'whatsapp':
        const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
        const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        break;
      case 'call':
        window.open('tel:+27784306215', '_self');
        break;
      case 'email':
        window.open('mailto:info@rarepieces.co.za?subject=Credit Repair Enquiry', '_self');
        break;
      case 'enquiry':
        window.location.href = '/enquiry';
        break;
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-blue hover:bg-brand-light-blue text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brand-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={16} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="font-semibold">Rare Pieces Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-brand-blue text-white'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {messages.length > 0 && messages[messages.length - 1].isBot && messages[messages.length - 1].suggestions && (
              <div className="flex flex-wrap gap-2 mt-2">
                {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs bg-brand-soft-blue text-brand-navy px-3 py-1 rounded-full hover:bg-brand-light-blue transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 p-2">
            <div className="flex space-x-1 mb-2">
              <button
                onClick={() => handleQuickAction('whatsapp')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <MessageCircle size={12} />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => handleQuickAction('call')}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <Phone size={12} />
                <span>Call</span>
              </button>
              <button
                onClick={() => handleQuickAction('enquiry')}
                className="flex-1 bg-brand-navy hover:bg-brand-dark-blue text-white text-xs py-2 px-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <FileText size={12} />
                <span>Enquiry</span>
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="bg-brand-blue hover:bg-brand-light-blue disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-20.right-4 {
            bottom: 5rem;
            right: 1rem;
            left: 1rem;
            width: auto;
            max-height: 70vh;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
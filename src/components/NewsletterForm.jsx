// components/NewsletterForm.js
import React, { useState } from "react";
import { Send } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus(data.message || "Failed to subscribe.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light-blue"
      />
      <button
        type="submit"
        className="flex items-center justify-center space-x-2 bg-brand-light-blue hover:bg-white text-brand-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
      >
        <Send size={18} />
        <span>Subscribe</span>
      </button>
      {status && <p className="text-sm text-brand-light-blue mt-2">{status}</p>}
    </form>
  );
};

export default NewsletterForm;

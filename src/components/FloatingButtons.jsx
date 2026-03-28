import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 items-end pointer-events-none">
      {/* Call Button */}
      <a 
        href="tel:+919557239525" 
        className="pointer-events-auto bg-charcoal text-white shadow-lg rounded-full p-3 hover:bg-gold transition-colors duration-300 flex items-center justify-center w-14 h-14"
        aria-label="Call Us"
      >
        <Phone fill="currentColor" size={24} />
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918864842743?text=Hi,%20I%20want%20to%20book%20an%20appointment%20at%20Riddhi%20Makeover%20%26%20Unisex%20Salon." 
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto bg-green-500 text-white shadow-lg rounded-full p-3 hover:bg-green-600 transition-colors duration-300 flex items-center justify-center w-14 h-14"
        style={{ animation: 'pulse-soft 2s infinite' }}
        aria-label="WhatsApp Us"
      >
        <MessageCircle fill="currentColor" size={28} />
      </a>
    </div>
  );
};

export default FloatingButtons;

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 w-full px-6 flex justify-between items-end z-40 pointer-events-none">
      {/* Call Button - Bottom Left */}
      <a 
        href="tel:+916398412288" 
        className="pointer-events-auto bg-white text-charcoal shadow-soft rounded-full p-4 hover:bg-gold hover:text-white transition-colors duration-300 md:mb-0 mb-[60px]"
        aria-label="Call Us"
      >
        <Phone fill="currentColor" size={24} />
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a 
        href="https://wa.me/916398412288?text=Hi,%20I%20want%20to%20book%20an%20appointment%20at%20Riddhi%20Makeover%20%26%20Unisex%20Salon." 
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto bg-green-500 text-white rounded-full p-4 shadow-soft hover:bg-green-600 transition-colors duration-300"
        style={{ animation: 'pulse-soft 2s infinite' }}
        aria-label="WhatsApp Us"
      >
        <MessageCircle fill="currentColor" size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

const HeroSection = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:w-2/3">
        {/* Trust Badges - Top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="flex items-center gap-1 text-gold text-sm font-semibold bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <Star size={16} fill="currentColor" /> 4.8/5 Rating
          </div>
          <div className="flex items-center gap-1 text-charcoal/80 text-sm font-medium bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <ShieldCheck size={16} className="text-gold" /> Experienced Professionals
          </div>
          <div className="flex items-center gap-1 text-charcoal/80 text-sm font-medium bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles size={16} className="text-gold" /> Hygienic & Safe
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight mb-6"
        >
          Transform Your Look with <br />
          <span className="italic text-gold">Expert Care</span> ✨
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-xl font-light"
        >
          Rated <strong className="font-semibold text-charcoal">4.8★</strong> by <strong className="font-semibold text-charcoal">179+ Happy Clients</strong> in Dehradun.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button 
            onClick={onBookClick}
            className="btn-whatsapp w-full sm:w-auto"
          >
            Book on WhatsApp
          </button>
          
          <a 
            href="#services" 
            className="btn-secondary w-full sm:w-auto bg-white/50 backdrop-blur-sm"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

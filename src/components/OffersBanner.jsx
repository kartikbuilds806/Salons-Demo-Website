import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock } from 'lucide-react';

const OffersBanner = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-charcoal text-white relative flex items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-gold text-sm font-semibold tracking-wide uppercase mb-8 border border-white/20"
        >
          <Gift size={18} />
          Special Welcome Offer
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
        >
          Get <span className="text-gold italic">20% Off</span> on <br className="hidden sm:block" /> Your First Visit
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 mb-10"
        >
          <Clock size={16} className="text-gold" />
          <p className="tracking-wide text-sm font-light">Limited Time Offer. Hurry Up!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button 
            onClick={onBookClick}
            className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Claim Offer on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersBanner;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Sparkles, Heart } from 'lucide-react';

import heroImg1 from '../assets/Hero Section Image/360_F_218337017_QPrVHv5dTtoR8kI1k8SZd0gQT3MjkQd0.jpg';
import heroImg2 from '../assets/Hero Section Image/barber-tools-metal-holder-blurred-salon-background-close-up-including-scissors-combs-clippers-hair-399196001.webp';
import heroImg3 from '../assets/Hero Section Image/unnamed.webp';

const heroImages = [heroImg1, heroImg2, heroImg3];

const HeroSection = ({ onBookClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-charcoal overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:w-2/3">
        {/* Trust Badges - Top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="flex items-center gap-1 text-gold text-sm font-semibold bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-white">
            <Star size={16} fill="currentColor" /> 4.8/5 Rating
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <Heart size={16} className="text-gold" fill="currentColor" /> 482+ Happy Clients
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <ShieldCheck size={16} className="text-gold" /> Skilled Professionals
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles size={16} className="text-gold" /> Clean & Hygienic Environment
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
        >
          Transform Your Look with <br />
          <span className="italic text-gold">Expert Care</span> ✨
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light"
        >
          Rated <strong className="font-semibold text-white">4.8★</strong> by <strong className="font-semibold text-white">482+ Happy Clients</strong> in Dehradun.
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

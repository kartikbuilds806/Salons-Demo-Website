import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/About Section/About.webp';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blush rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5] md:aspect-square">
              <img 
                src={aboutImage} 
                alt="Cloud 9 Unisex Salon Environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-2xl shadow-lg border border-beige max-w-xs hidden sm:block">
              <p className="font-serif text-lg text-charcoal font-semibold leading-tight">
                "Beauty is all about confidence."
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h4 className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">About Us</h4>
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Cloud 9 <span className="italic text-gold">Unisex</span> <br /> Salon
            </h2>
            
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              At <strong>Cloud 9 Unisex Salon</strong>, we focus on enhancing your natural beauty with expert care and personalized services.
            </p>
            
            <p className="text-charcoal/80 mb-8 leading-relaxed">
              Our skilled team ensures every client gets the perfect look, whether it's a haircut, styling, or complete makeover. We maintain a clean, welcoming environment where you can relax and enjoy a premium salon experience.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-charcoal font-bold">482+</span>
                <span className="text-sm text-charcoal/60 uppercase tracking-widest mt-1">Happy Clients</span>
              </div>
              <div className="w-px h-12 bg-beige"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-charcoal font-bold">4.8★</span>
                <span className="text-sm text-charcoal/60 uppercase tracking-widest mt-1">High Rating</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

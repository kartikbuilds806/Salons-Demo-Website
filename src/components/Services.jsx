import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Heart, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Hair Styling',
    description: 'Transform your look with expert cutting, coloring, and styling tailored to your face shape.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Facial & Skincare',
    description: 'Rejuvenate your skin with our premium facials using top-tier organic products.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Bridal Makeup',
    description: 'Look absolutely stunning on your big day with our professional bridal makeup services.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Nail Art & Care',
    description: 'Express yourself with beautiful manicures, pedicures, and custom nail art designs.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = ({ onBookClick }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-charcoal font-serif mb-4"
          >
            Our Premium <span className="text-gold italic">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/70"
          >
            Indulge in our wide range of beauty treatments designed to make you look and feel your absolute best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm text-gold">
                  <service.icon size={20} />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-charcoal mb-2">{service.title}</h3>
                <p className="text-sm text-charcoal/70 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <button 
                    onClick={onBookClick}
                    className="w-full py-2.5 rounded-xl border border-gold/50 text-gold hover:bg-gold hover:text-white transition-colors duration-300 font-medium text-sm text-center flex items-center justify-center gap-2"
                  >
                    Enquire on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

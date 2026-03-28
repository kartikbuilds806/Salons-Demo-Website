import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Heart, Star } from 'lucide-react';
import hairImage from '../assets/Our Services/HaIr_Service.png';
import makeupImage from '../assets/Our Services/Makeup_Service.png';

const services = [
  {
    id: 1,
    title: 'Hair Services',
    description: '• Haircut & Styling\n• Hair Coloring\n• Hair Rebonding & Smoothening\n• Hair Spa',
    icon: Scissors,
    image: hairImage
  },
  {
    id: 2,
    title: 'Beauty Services',
    description: '• Facial & Skincare\n• Waxing & Threading\n• Manicure & Pedicure',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Makeup Services',
    description: '• Party Makeup\n• Bridal Makeup',
    icon: Heart,
    image: makeupImage
  },
  {
    id: 4,
    title: 'Other Services',
    description: '• Nail Services\n• Body Art Services\n• Threading & Waxing\n• Custom Care',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = ({ onBookClick }) => {
  return (
    <section id="services" className="py-24 bg-cream relative">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col"
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
                <h3 className="text-xl font-serif text-charcoal mb-4">{service.title}</h3>
                <div className="text-sm text-charcoal/70 mb-6 flex-grow whitespace-pre-line leading-relaxed">
                  {service.description}
                </div>
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

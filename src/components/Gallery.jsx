import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080661-46b0ed812b71?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800'
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl text-charcoal font-serif mb-4"
            >
              Our <span className="text-gold italic">Gallery</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-charcoal/70"
            >
              Take a peek into our world of beauty. Highlighting our best works, stunning transformations, and our luxurious studio environment.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden mt-6 md:mt-0 md:inline-flex items-center gap-2 text-gold font-medium border-b border-gold pb-1 hover:text-charcoal hover:border-charcoal cursor-pointer transition-colors"
          >
            Follow on Instagram
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 3 ? 'row-span-2 h-full min-h-[300px]' : 'h-64'
              }`}
            >
              <img 
                src={src} 
                alt="Salon Work Gallery" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-charcoal backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

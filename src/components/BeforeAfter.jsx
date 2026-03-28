import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-blush">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-charcoal font-serif mb-4"
          >
            Real Client <span className="text-gold italic">Transformations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/70"
          >
            Experience the difference with our expert services.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Example 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 rounded-2xl shadow-soft w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center px-2">
              <span className="font-serif text-charcoal/60 uppercase tracking-widest text-xs font-semibold">Before</span>
              <span className="font-serif text-gold uppercase tracking-widest text-xs font-semibold">After</span>
            </div>
            <div className="flex gap-2 h-64 sm:h-80 md:h-[400px] overflow-hidden rounded-xl">
              <div className="w-1/2 relative bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=800" 
                  alt="Before" 
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <div className="w-1/2 relative bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800" 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-center font-serif text-charcoal/80 text-lg mt-2">Bridal Glow Makeover ✨</p>
          </motion.div>

          {/* Example 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-4 rounded-2xl shadow-soft w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center px-2">
              <span className="font-serif text-charcoal/60 uppercase tracking-widest text-xs font-semibold">Before</span>
              <span className="font-serif text-gold uppercase tracking-widest text-xs font-semibold">After</span>
            </div>
            <div className="flex gap-2 h-64 sm:h-80 md:h-[400px] overflow-hidden rounded-xl">
              <div className="w-1/2 relative bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" 
                  alt="Before" 
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <div className="w-1/2 relative bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-center font-serif text-charcoal/80 text-lg mt-2">Premium Hair Coloring & Styling 💁‍♀️</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

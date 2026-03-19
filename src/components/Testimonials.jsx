import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: "Absolutely loved my bridal makeup! The team was so professional, and they exactly understood what I wanted. Highly recommended!",
    rating: 5,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    text: "Best facial I've ever had. The ambiance is so luxurious and relaxing. My skin has never felt better. Thank you, Lumina!",
    rating: 5,
    type: 'text',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Emily Chen',
    text: "Got a completely new haircut and color. The stylist was amazing and helped me choose a color that suits my skin tone perfectly.",
    rating: 5,
    type: 'text',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl text-charcoal font-serif mb-4"
            >
              Loved By <br />
              <span className="text-gold italic">Our Clients</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-charcoal/70 mb-8"
            >
              Don't just take our word for it. Look at what our 500+ happy clients have to say about their experience with us.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div>
                <h4 className="text-3xl font-serif text-charcoal font-bold mb-1">500+</h4>
                <p className="text-xs uppercase tracking-widest text-charcoal/60">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-beige"></div>
              <div>
                <h4 className="flex items-center gap-1 text-3xl font-serif text-charcoal font-bold mb-1">
                  4.8 <Star className="text-gold fill-gold" size={20} />
                </h4>
                <p className="text-xs uppercase tracking-widest text-charcoal/60">Average Rating</p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-cream p-6 rounded-2xl shadow-sm ${testimonial.type === 'video' ? 'sm:col-span-2' : ''}`}
              >
                {testimonial.type === 'video' ? (
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-full sm:w-1/2 relative rounded-xl overflow-hidden group">
                      <img src={testimonial.thumbnail} alt="Video Thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gold pl-1 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                          <Play fill="currentColor" size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="flex text-gold mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-charcoal/80 italic mb-4">"{testimonial.text}"</p>
                      <h4 className="font-serif text-charcoal font-semibold">{testimonial.name}</h4>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Quote className="text-gold/20 w-10 h-10 mb-2 -ml-2" />
                    <div className="flex text-gold mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-charcoal/80 italic mb-6 text-sm flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                      <h4 className="font-serif text-charcoal font-semibold text-sm">{testimonial.name}</h4>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

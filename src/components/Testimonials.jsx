import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alka',
    text: "Love this salon! The team is knowledgeable, creative, and always make me feel pampered.",
    rating: 5,
    type: 'text',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Anushka Deoli',
    text: "My haircut turned out exactly the way I wanted. The salon was clean and well-maintained. Highly recommended!",
    rating: 5,
    type: 'text',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Sachin',
    text: "Exceptional service, friendly staff, and a clean environment. Loved my haircut and styling.",
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
              className="text-charcoal/70 mb-8 leading-relaxed"
            >
              Don't just take our word for it. Look at what our happy clients have to say about their experience with us.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="flex items-center gap-1 text-3xl font-serif text-charcoal font-bold mb-1">
                    4.8 <Star className="text-gold fill-gold" size={20} />
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60">Rating</p>
                </div>
                <div className="w-px h-12 bg-beige"></div>
                <div>
                  <h4 className="text-3xl font-serif text-charcoal font-bold mb-1">482+</h4>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60">Reviews</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-serif text-charcoal font-bold mb-1">1000+</h4>
                <p className="text-xs uppercase tracking-widest text-charcoal/60">Services Done</p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-cream p-6 rounded-2xl shadow-sm flex flex-col items-start"
              >
                <Quote className="text-gold/20 w-10 h-10 mb-2 -ml-2 shrink-0" />
                <div className="flex text-gold mb-3 shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-charcoal/80 italic mb-6 text-sm leading-relaxed flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 mt-auto shrink-0 w-full">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                  <h4 className="font-serif text-charcoal font-semibold text-sm">{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

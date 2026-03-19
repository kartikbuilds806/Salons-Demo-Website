import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl text-charcoal font-serif mb-4"
            >
              Visit Our <br />
              <span className="text-gold italic">Premium Studio</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-charcoal/70 mb-10"
            >
              Step into a world of relaxation and let our experts take care of your beauty needs.
            </motion.p>

            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cream p-3 rounded-full text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal">Location</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    Anand Tower, Shakumbri Garden,<br />
                    Raipur, Dehradun, Uttarakhand 248008
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cream p-3 rounded-full text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal">Working Hours</h4>
                  <p className="text-charcoal/70">Open Daily</p>
                  <p className="text-charcoal/70">10:00 AM - 8:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cream p-3 rounded-full text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal">Contact Us</h4>
                  <p className="text-charcoal/70">+91 63984 12288</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a href="tel:+916398412288" className="btn-primary inline-flex w-auto border border-charcoal text-charcoal hover:text-white bg-transparent">
                Book Your Appointment Now
              </a>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-soft relative bg-cream border border-beige"
          >
            {/* Embedded Google Map Example directed roughly to Dehradun */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110191.02890610998!2d77.92383853109312!3d30.325556276805096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
              title="Salon Location"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white text-center pointer-events-auto">
                 <h4 className="font-serif font-bold text-xl text-charcoal">Riddhi Makeover</h4>
                 <p className="text-sm text-charcoal/70 mb-3">Anand Tower, Raipur, Dehradun</p>
                 <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gold hover:text-charcoal transition-colors">Get Directions →</a>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

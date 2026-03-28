import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const phoneNumber = "916398412288"; // Riddhi Makeover phone number
    const text = `Hi, I want to book an appointment at Cloud 9 Saloon.%0A*Name:* ${formData.name}%0A*Service:* ${formData.service}%0A*Date & Time:* ${formData.date} at ${formData.time}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          ></motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 my-4 max-h-screen flex flex-col"
          >
            {/* Header */}
            <div className="bg-blush px-6 py-4 flex justify-between items-center border-b border-beige shrink-0">
              <h3 className="font-serif text-2xl text-charcoal">Book Appointment</h3>
              <button onClick={onClose} className="text-charcoal/60 hover:text-charcoal transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="overflow-y-auto w-full p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-charcoal/40 bg-cream/50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-charcoal/40 bg-cream/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1">Select Service</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/50 text-charcoal"
                  >
                    <option value="" disabled>Choose a service...</option>
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Hair Coloring or Rebonding">Hair Coloring or Rebonding</option>
                    <option value="Facial & Skincare">Facial & Skincare</option>
                    <option value="Bridal/Party Makeup">Bridal/Party Makeup</option>
                    <option value="Nail or Body Art">Nail or Body Art</option>
                    <option value="Other">Other / Request Information</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      name="date"
                      required 
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/50 text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-1">Preferred Time</label>
                    <input 
                      type="time" 
                      name="time"
                      required 
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/50 text-charcoal"
                    />
                  </div>
                </div>

                <div className="mt-4 pb-2">
                  <button type="submit" className="btn-whatsapp w-full !py-3">
                    Confirm via WhatsApp
                  </button>
                  <p className="text-xs text-center text-charcoal/50 mt-3">
                    You will be redirected to WhatsApp to confirm your booking at Cloud 9 Saloon.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

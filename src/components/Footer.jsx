import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-cream/10 pb-12 mb-8">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold tracking-wide text-white mb-6 inline-block flex flex-col">
              Cloud 9 <span className="text-gold italic font-medium text-[1.1rem] -mt-1">Unisex Saloon</span>
            </a>
            <p className="text-cream/60 leading-relaxed mb-6">
              Serving Dehradun with premium beauty services
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/916398412288" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-cream/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-cream/70 hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-cream/70 hover:text-gold transition-colors">Gallery Focus</a></li>
              <li><a href="#contact" className="text-cream/70 hover:text-gold transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-cream/70">
              <li className="leading-relaxed">Indraprastha, Rajpur Road,<br />Dehradun, Uttarakhand 248001</li>
              <li className="text-gold mt-2">+91 63984 12288</li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Working Hours</h4>
            <ul className="flex flex-col gap-3 text-cream/70">
              <li className="flex justify-between border-b border-cream/10 pb-2">
                <span>Working Days</span> <span>Open Daily</span>
              </li>
              <li className="flex justify-between border-b border-cream/10 pb-2">
                <span>Timings</span> <span>10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/40">
          <p>© 2026 Cloud 9 Unisex Saloon. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-charcoal flex flex-col pt-1">
          Cloud 9 <span className="text-gold italic font-medium text-sm sm:text-lg -mt-1">Unisex Saloon</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-charcoal/80 hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBookClick}
            className="hidden md:block btn-primary text-sm py-2 px-5"
          >
            Book Now
          </button>
          
          <button 
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-charcoal/80 hover:text-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              onBookClick();
              setIsMobileMenuOpen(false);
            }}
            className="btn-primary w-full mt-2"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

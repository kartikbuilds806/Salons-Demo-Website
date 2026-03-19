import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import OffersBanner from './components/OffersBanner';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookingModal from './components/BookingModal';
import { useState } from 'react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      
      <main>
        <HeroSection onBookClick={() => setIsBookingOpen(true)} />
        <AboutSection />
        <Services onBookClick={() => setIsBookingOpen(true)} />
        <BeforeAfter />
        <Testimonials />
        <OffersBanner onBookClick={() => setIsBookingOpen(true)} />
        <Gallery />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButtons />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

export default App;

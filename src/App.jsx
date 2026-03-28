import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal flex flex-col">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onBookClick={() => setIsBookingOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onBookClick={() => setIsBookingOpen(true)} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

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

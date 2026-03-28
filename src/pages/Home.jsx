import React from 'react';
import HeroSection from '../components/HeroSection';
import OffersBanner from '../components/OffersBanner';
import Testimonials from '../components/Testimonials';
import BeforeAfter from '../components/BeforeAfter';

const Home = ({ onBookClick }) => {
  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <HeroSection onBookClick={onBookClick} />
      <BeforeAfter />
      <OffersBanner onBookClick={onBookClick} />
      <Testimonials />
    </main>
  );
};

export default Home;

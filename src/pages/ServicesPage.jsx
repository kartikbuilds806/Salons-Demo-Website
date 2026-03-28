import React from 'react';
import Services from '../components/Services';

const ServicesPage = ({ onBookClick }) => {
  return (
    <main className="pt-24 min-h-screen">
      <Services onBookClick={onBookClick} />
    </main>
  );
};

export default ServicesPage;

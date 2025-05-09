import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import TestimonialSection from '../components/home/TestimonialSection';
import BookingCTA from '../components/home/BookingCTA';
import FeaturesSection from '../components/home/FeaturesSection';
import FAQSection from '../components/common/FAQSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceHighlights />
      <FeaturesSection />
      <TestimonialSection />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <FAQSection limit={4} />
        </div>
      </div>
      <BookingCTA />
    </div>
  );
};

export default Home;
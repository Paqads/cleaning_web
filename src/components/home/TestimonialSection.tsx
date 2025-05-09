import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our clients trust us to deliver exceptional cleaning services that meet their unique needs.
            Here's what some of them have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              {testimonials[currentIndex].image && (
                <div className="mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                {testimonials[currentIndex].position && (
                  <p className="text-neutral-600">
                    {testimonials[currentIndex].position}
                    {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                  </p>
                )}
                <div className="flex justify-center md:justify-start mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonials[currentIndex].rating ? "#FF8C00" : "none"} 
                      color={i < testimonials[currentIndex].rating ? "#FF8C00" : "#CBD5E1"} 
                      className="mr-1"
                    />
                  ))}
                </div>
              </div>
            </div>
            <blockquote>
              <p className="text-lg italic text-neutral-700">"{testimonials[currentIndex].quote}"</p>
            </blockquote>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
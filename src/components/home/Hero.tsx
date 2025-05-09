import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-primary-500 text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/4107269/pexels-photo-4107269.jpeg?auto=compress&cs=tinysrgb&w=1600)' 
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Cleaning Services in Ottawa
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white text-opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exceptional cleaning solutions for residential and industrial spaces. 
              Eco-friendly options available for a healthier environment.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/booking" 
                className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Book Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3 mt-0.5">✓</span>
                  <span>Professional, trained, and insured staff</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3 mt-0.5">✓</span>
                  <span>Eco-friendly cleaning options</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3 mt-0.5">✓</span>
                  <span>Flexible scheduling and reliable service</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3 mt-0.5">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3 mt-0.5">✓</span>
                  <span>Customized cleaning plans</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
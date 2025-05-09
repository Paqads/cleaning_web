import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFilter from '../components/services/ServiceFilter';
import { services } from '../data/services';
import { Service } from '../types';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [ecoOnly, setEcoOnly] = useState(false);
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);
  
  // Set initial filter from URL query parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const ecoParam = searchParams.get('filter') === 'eco';
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    
    if (ecoParam) {
      setEcoOnly(true);
    }
  }, [searchParams]);
  
  // Filter services when filter criteria change
  useEffect(() => {
    let filtered = [...services];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => service.category === activeCategory);
    }
    
    // Filter eco-friendly only
    if (ecoOnly) {
      filtered = filtered.filter(service => service.eco);
    }
    
    setFilteredServices(filtered);
  }, [activeCategory, ecoOnly]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Cleaning Services</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional cleaning services for residential,
            commercial, and industrial clients in Ottawa. Browse our services below or use
            the filters to find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ServiceFilter 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                ecoOnly={ecoOnly}
                setEcoOnly={setEcoOnly}
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredServices.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredServices.map(service => (
                  <motion.div key={service.id} variants={itemVariants}>
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p className="text-neutral-600">
                  No services match your current filter criteria. Please try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
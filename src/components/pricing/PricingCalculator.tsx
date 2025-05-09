import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { frequencyOptions, calculatePrice } from '../../data/pricing';

const PricingCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [propertySize, setPropertySize] = useState('medium');
  const [frequency, setFrequency] = useState('one-time');
  const [staffCount, setStaffCount] = useState(1);
  const [squareFeet, setSquareFeet] = useState<number | undefined>(undefined);
  const [priceResult, setPriceResult] = useState<any>(null);

  // Calculate price when inputs change
  useEffect(() => {
    if (selectedService) {
      const service = services.find(s => s.id === selectedService);
      
      // Only include square feet for per sqft services
      const sqft = service?.priceUnit === 'sqft' ? squareFeet : undefined;
      
      const result = calculatePrice(
        selectedService,
        propertySize,
        frequency,
        sqft,
        staffCount
      );
      
      setPriceResult(result);
    } else {
      setPriceResult(null);
    }
  }, [selectedService, propertySize, frequency, squareFeet, staffCount]);

  // Get service categories for grouping in select
  const getServiceCategories = () => {
    const categories = [...new Set(services.map(service => service.category))];
    return categories.map(category => ({
      category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      services: services.filter(service => service.category === category)
    }));
  };

  // Property size options
  const propertySizes = [
    { value: 'small', label: 'Small (< 1,000 sq ft)' },
    { value: 'medium', label: 'Medium (1,000 - 2,000 sq ft)' },
    { value: 'large', label: 'Large (2,000 - 3,500 sq ft)' },
    { value: 'xlarge', label: 'Extra Large (> 3,500 sq ft)' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary-500 p-6 text-white">
        <h2 className="text-2xl font-semibold">Pricing Calculator</h2>
        <p className="text-white text-opacity-90">Estimate the cost of your cleaning service</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Select Service</label>
              <select 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-neutral-300 rounded-lg"
              >
                <option value="">Select a service...</option>
                {getServiceCategories().map(categoryGroup => (
                  <optgroup key={categoryGroup.category} label={categoryGroup.label}>
                    {categoryGroup.services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block font-medium mb-2">Property Size</label>
              <select 
                value={propertySize}
                onChange={(e) => setPropertySize(e.target.value)}
                className="w-full p-3 border border-neutral-300 rounded-lg"
              >
                {propertySizes.map(size => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedService && services.find(s => s.id === selectedService)?.priceUnit === 'sqft' && (
              <div>
                <label className="block font-medium mb-2">Square Footage</label>
                <input 
                  type="number" 
                  value={squareFeet || ''}
                  onChange={(e) => setSquareFeet(e.target.value ? Number(e.target.value) : undefined)}
                  placeholder="Enter square footage"
                  className="w-full p-3 border border-neutral-300 rounded-lg"
                />
              </div>
            )}
            
            <div>
              <label className="block font-medium mb-2">Cleaning Frequency</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {frequencyOptions.map(option => (
                  <label 
                    key={option.id}
                    className={`
                      flex items-center p-3 border rounded-lg cursor-pointer transition-colors
                      ${frequency === option.id 
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-300 hover:bg-neutral-50'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      value={option.id}
                      checked={frequency === option.id}
                      onChange={() => setFrequency(option.id)}
                      className="sr-only"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{option.label}</span>
                      {option.discount > 0 && (
                        <span className="text-sm text-success-600">Save {option.discount}%</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block font-medium mb-2">Number of Cleaning Staff</label>
              <select 
                value={staffCount}
                onChange={(e) => setStaffCount(Number(e.target.value))}
                className="w-full p-3 border border-neutral-300 rounded-lg"
              >
                <option value={1}>1 Person (Standard)</option>
                <option value={2}>2 People (Faster)</option>
                <option value={3}>3 People (Quickest)</option>
              </select>
            </div>
          </div>
          
          <div>
            {priceResult ? (
              <motion.div 
                className="bg-primary-50 p-6 rounded-lg border border-primary-100 h-full flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={`${selectedService}-${propertySize}-${frequency}-${staffCount}`}
              >
                <h3 className="text-xl font-semibold mb-4">Price Estimate</h3>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span className="font-medium">
                      ${priceResult.basePrice} CAD
                      {services.find(s => s.id === selectedService)?.priceUnit === 'sqft' && ' per sq.ft'}
                    </span>
                  </div>
                  
                  {priceResult.discount > 0 && (
                    <div className="flex justify-between text-success-600">
                      <span>Frequency Discount:</span>
                      <span>-{priceResult.discount}%</span>
                    </div>
                  )}
                  
                  {priceResult.staffMultiplier && (
                    <div className="flex justify-between">
                      <span>Additional Staff:</span>
                      <span>{priceResult.staffMultiplier} staff members</span>
                    </div>
                  )}
                  
                  {priceResult.estimatedTime && (
                    <div className="flex justify-between">
                      <span>Estimated Duration:</span>
                      <span>{priceResult.estimatedTime}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-primary-200 pt-4 mt-4">
                    <div className="flex justify-between text-xl">
                      <span className="font-semibold">Total Estimate:</span>
                      <span className="font-bold">${priceResult.totalPrice} CAD</span>
                    </div>
                    {frequency !== 'one-time' && (
                      <p className="text-sm text-neutral-600 text-right">per service</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    to={`/booking?service=${selectedService}&size=${propertySize}&frequency=${frequency}&staff=${staffCount}`}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    Book This Service <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Select a Service</h3>
                <p className="text-neutral-600 mb-4">
                  Choose a service to see pricing information and get an estimate for your cleaning needs.
                </p>
                <div className="bg-primary-100 text-primary-700 p-3 rounded-lg w-full">
                  <p>All prices are in Canadian Dollars (CAD) and include all cleaning supplies and equipment.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
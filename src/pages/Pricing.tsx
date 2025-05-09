import React from 'react';
import { motion } from 'framer-motion';
import PricingCalculator from '../components/pricing/PricingCalculator';
import FAQSection from '../components/common/FAQSection';

const Pricing = () => {
  return (
    <div className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Pricing & Estimates</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Use our pricing calculator to get an estimate for your cleaning service.
            Our transparent pricing ensures you know exactly what you're paying for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PricingCalculator />
          </div>
          
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-24 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Pricing Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">How Our Pricing Works</h4>
                    <p className="text-neutral-600 text-sm">
                      Our pricing is based on several factors including the type of service, size of the property, 
                      frequency of cleaning, and number of staff. We offer fixed pricing for standard residential 
                      services and per square foot pricing for commercial and industrial spaces.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Frequency Discounts</h4>
                    <p className="text-neutral-600 text-sm">
                      We offer discounts for recurring cleaning services. Weekly cleanings receive a 15% discount, 
                      bi-weekly cleanings receive a 10% discount, and monthly cleanings receive a 5% discount.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Additional Services</h4>
                    <p className="text-neutral-600 text-sm">
                      For specialized services such as carpet cleaning, window washing, or deep cleaning, 
                      additional charges may apply. These can be added to your standard cleaning service.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <FAQSection category="pricing" limit={3} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
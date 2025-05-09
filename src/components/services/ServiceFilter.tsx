import React from 'react';
import { motion } from 'framer-motion';
import { Check, Home, Briefcase, Package, Sparkles, LeafyGreen } from 'lucide-react';

interface ServiceFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  ecoOnly: boolean;
  setEcoOnly: (eco: boolean) => void;
}

const ServiceFilter: React.FC<ServiceFilterProps> = ({ 
  activeCategory, 
  setActiveCategory, 
  ecoOnly, 
  setEcoOnly 
}) => {
  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles size={20} /> },
    { id: 'residential', name: 'Residential', icon: <Home size={20} /> },
    { id: 'commercial', name: 'Commercial', icon: <Briefcase size={20} /> },
    { id: 'industrial', name: 'Industrial', icon: <Package size={20} /> },
    { id: 'specialized', name: 'Specialized', icon: <Sparkles size={20} /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Filter Services</h3>
      
      <div className="mb-6">
        <p className="font-medium mb-3">Service Categories</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="flex items-center cursor-pointer">
          <div 
            className={`w-5 h-5 rounded flex items-center justify-center mr-3 transition-colors ${
              ecoOnly ? 'bg-secondary-500' : 'border border-neutral-300'
            }`}
            onClick={() => setEcoOnly(!ecoOnly)}
          >
            {ecoOnly && <Check size={14} className="text-white" />}
          </div>
          <div className="flex items-center">
            <LeafyGreen size={18} className="text-secondary-500 mr-2" />
            <span>Eco-friendly options only</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ServiceFilter;
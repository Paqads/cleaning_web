import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../../data/faqs';

interface FAQSectionProps {
  category?: string;
  limit?: number;
}

const FAQSection: React.FC<FAQSectionProps> = ({ category, limit }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  // Filter FAQs by category if provided
  const filteredFAQs = category 
    ? faqs.filter(faq => faq.category === category)
    : faqs;
  
  // Limit the number of FAQs if limit is provided
  const displayedFAQs = limit 
    ? filteredFAQs.slice(0, limit)
    : filteredFAQs;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {displayedFAQs.map((faq, index) => (
          <div 
            key={index}
            className="border border-neutral-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left p-5 flex justify-between items-center transition-colors ${
                expandedIndex === index ? 'bg-primary-50' : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <span className="font-medium">{faq.question}</span>
              {expandedIndex === index ? (
                <ChevronUp size={20} className="text-primary-500" />
              ) : (
                <ChevronDown size={20} className="text-neutral-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-neutral-200">
                    <p className="text-neutral-700">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
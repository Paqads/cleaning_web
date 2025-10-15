import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: 'Phone',
      details: [
        { value: '+1 (613)-799-6684 call to book', label: 'Main Line' }
      ],
      action: { href: 'tel:+16137996684', label: 'Call us' }
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: 'Email',
      details: [
        { value: 'booking@pristinecleans.ca', label: 'Bookings & Inquiries' }
      ],
      action: { href: 'mailto:booking@pristinecleans.ca', label: 'Email us' }
    },
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: 'Service Area',
      details: [
        { value: 'Ottawa, ON', label: null }
      ]
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: 'Hours',
      details: [
        { value: 'Monday-Friday: 8am-7pm', label: null },
        { value: 'Saturday: 9am-5pm', label: null },
        { value: 'Sunday: Closed', label: null }
      ]
    }
  ];

  return (
    <div className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Have questions about our cleaning services? Need a quote? 
            Get in touch with our friendly team and we'll help you keep your space pristine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {info.icon}
                <h3 className="text-lg font-semibold ml-2">{info.title}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                {info.details.map((detail, i) => (
                  <div key={i}>
                    {detail.label && <span className="text-sm text-neutral-500">{detail.label}: </span>}
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
              
              {info.action && (
                <a
                  href={info.action.href}
                  target={info.action.target || '_self'}
                  className="inline-block text-primary-500 hover:text-primary-700 font-medium transition-colors"
                >
                  {info.action.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
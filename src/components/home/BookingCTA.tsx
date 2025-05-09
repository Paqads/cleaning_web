import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, Users, ArrowRight } from 'lucide-react';

const BookingCTA = () => {
  const steps = [
    {
      icon: <CalendarCheck size={28} />,
      title: 'Select Your Service',
      description: 'Choose from our wide range of cleaning services tailored to your needs.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Pick a Date & Time',
      description: 'Select a convenient date and time that works best for your schedule.'
    },
    {
      icon: <Users size={28} />,
      title: 'Get Professional Cleaning',
      description: 'Our trained professionals will arrive on time and deliver exceptional service.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Book Your Cleaning Service</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Booking a professional cleaning service with us is quick and simple. 
            Follow these easy steps to schedule your next cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-primary-500 text-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Ready for a Spotless Space?</h3>
          <p className="text-lg mb-6">
            Book your cleaning service today and experience the difference professional cleaning makes.
            Our team is ready to transform your space.
          </p>
          <Link 
            to="/booking"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-neutral-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Book Now <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
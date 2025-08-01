import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, UserCheck, Shield, Award } from 'lucide-react';
import TestimonialSection from '../components/home/TestimonialSection';

const About = () => {
  const values = [
    {
      icon: <CheckCircle size={28} className="text-primary-500" />,
      title: 'Quality Service',
      description: 'We are committed to delivering exceptional cleaning services that exceed our clients\' expectations every time.'
    },
    {
      icon: <UserCheck size={28} className="text-secondary-500" />,
      title: 'Professional Staff',
      description: 'Our team consists of trained, background-checked, and insured cleaning professionals who take pride in their work.'
    },
    {
      icon: <Shield size={28} className="text-accent-500" />,
      title: 'Reliability & Trust',
      description: 'We build lasting relationships with our clients based on reliability, consistency, and trustworthy service.'
    },
    {
      icon: <Award size={28} className="text-success-500" />,
      title: 'Environmental Responsibility',
      description: 'We prioritize eco-friendly cleaning methods and products to minimize our environmental impact.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">About PristineCleans</h1>
            <p className="text-xl leading-relaxed mb-8">
              We're Ottawa's trusted cleaning service, dedicated to transforming spaces with our 
              professional, reliable, and eco-friendly cleaning solutions since 2010.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-lg text-neutral-700 mb-4">
                PristineCleans was founded in 2010 with a simple mission: to provide 
                exceptional cleaning services while respecting our environment and valuing our staff.
              </p>
              <p className="text-lg text-neutral-700 mb-4">
                What began as a small residential cleaning service has grown into a comprehensive 
                cleaning company serving hundreds of satisfied clients across Ottawa. Our growth 
                has been built on our reputation for quality, reliability, and attention to detail.
              </p>
              <p className="text-lg text-neutral-700">
                Today, we offer a wide range of cleaning services for residential and commercial 
                clients, but our core values remain the same: deliver excellence, respect 
                our planet, and treat both our clients and staff with the highest regard.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cleaning professionals" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do at PristineCleans and 
              help us deliver exceptional service to every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-primary-500 text-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Experience the Pristine Difference?</h3>
            <p className="text-lg mb-6">
              Book your cleaning service today and see why we're Ottawa's trusted cleaning provider.
              Our team is ready to exceed your expectations.
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
    </div>
  );
};

export default About;
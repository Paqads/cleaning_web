import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Package, Sparkles, ArrowRight } from 'lucide-react';

const ServiceHighlights = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Residential',
      description: 'Comprehensive home cleaning services to keep your living space spotless and healthy.',
      link: '/services?category=residential',
      color: 'bg-secondary-500'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Commercial',
      description: 'Professional cleaning for offices, retail spaces, and restaurants to maintain a welcoming environment.',
      link: '/services?category=commercial',
      color: 'bg-primary-500'
    },
    {
      icon: <Package size={32} />,
      title: 'Industrial',
      description: 'Specialized heavy-duty cleaning for warehouses, manufacturing facilities, and construction sites.',
      link: '/services?category=industrial',
      color: 'bg-accent-500'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Specialized',
      description: 'Targeted cleaning services including carpet cleaning, window washing, and pressure washing.',
      link: '/services?category=specialized',
      color: 'bg-success-500'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a wide range of professional cleaning services tailored to meet the unique needs 
            of residential and commercial clients in Ottawa.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
              variants={itemVariants}
            >
              <div className={`${service.color} p-4 text-white`}>
                <div className="flex justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title} Cleaning</h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center font-medium text-primary-500 hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            View All Services <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
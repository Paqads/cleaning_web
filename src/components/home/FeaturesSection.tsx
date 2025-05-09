import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, LeafyGreen, Shield, Clock, Award, UserCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle size={36} className="text-success-500" />,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee. If you&apos;re not happy, we&apos;ll make it right.'
    },
    {
      icon: <LeafyGreen size={36} className="text-secondary-500" />,
      title: 'Eco-Friendly Options',
      description: 'Our green cleaning solutions are safe for your family, pets, and the environment without sacrificing effectiveness.'
    },
    {
      icon: <Shield size={36} className="text-primary-500" />,
      title: 'Fully Insured & Bonded',
      description: 'Rest easy knowing our services are fully insured, bonded, and all our staff undergo thorough background checks.'
    },
    {
      icon: <Clock size={36} className="text-accent-500" />,
      title: 'Reliable & Punctual',
      description: 'We respect your time and always arrive within the scheduled window. Consistent, dependable service is our promise.'
    },
    {
      icon: <Award size={36} className="text-warning-500" />,
      title: 'Quality Assurance',
      description: 'Our rigorous quality control process ensures consistent excellence in every cleaning project we undertake.'
    },
    {
      icon: <UserCheck size={36} className="text-error-500" />,
      title: 'Trained Professionals',
      description: 'Our cleaning staff receive comprehensive training in best practices, safety protocols, and customer service.'
    }
  ];

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
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Our Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            At Ottawa Pristine Cleaning, we go beyond standard cleaning to deliver exceptional results 
            that exceed your expectations. Here&apos;s what sets us apart:
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex"
              variants={itemVariants}
            >
              <div className="mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
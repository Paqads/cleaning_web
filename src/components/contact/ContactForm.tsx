import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // In a real app, this would send the data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="bg-white rounded-lg shadow-md p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="mb-6 flex justify-center">
          <CheckCircle size={60} className="text-success-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Message Sent Successfully!</h3>
        <p className="text-lg">
          Thank you for contacting Ottawa Pristine Cleaning. We've received your message and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary-500 p-6 text-white">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-white text-opacity-90">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block font-medium mb-2">Full Name</label>
            <input 
              type="text" 
              {...register('name', { required: 'Name is required' })}
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-error-500' : 'border-neutral-300'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-error-500 mt-1">{errors.name.message}</p>}
          </div>
          
          <div className="form-group">
            <label className="block font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-error-500' : 'border-neutral-300'}`}
              placeholder="john.doe@example.com"
            />
            {errors.email && <p className="text-error-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block font-medium mb-2">Phone Number</label>
            <input 
              type="tel" 
              {...register('phone')}
              className="w-full p-3 border border-neutral-300 rounded-lg"
              placeholder="(613) 555-1234"
            />
          </div>
          
          <div className="form-group">
            <label className="block font-medium mb-2">Subject</label>
            <select 
              {...register('subject', { required: 'Please select a subject' })}
              className={`w-full p-3 border rounded-lg ${errors.subject ? 'border-error-500' : 'border-neutral-300'}`}
            >
              <option value="">Select a subject</option>
              <option value="quote">Request a Quote</option>
              <option value="booking">Booking Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="other">Other</option>
            </select>
            {errors.subject && <p className="text-error-500 mt-1">{errors.subject.message}</p>}
          </div>
        </div>
        
        <div className="form-group">
          <label className="block font-medium mb-2">Message</label>
          <textarea 
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full p-3 border rounded-lg ${errors.message ? 'border-error-500' : 'border-neutral-300'}`}
            placeholder="Please provide details about your inquiry..."
          />
          {errors.message && <p className="text-error-500 mt-1">{errors.message.message}</p>}
        </div>
        
        <div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            Send Message <Send size={18} className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
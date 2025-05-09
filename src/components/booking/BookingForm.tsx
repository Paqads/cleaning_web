import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { BookingFormData, FrequencyOption } from '../../types';
import { services } from '../../data/services';
import { frequencyOptions, calculatePrice } from '../../data/pricing';
import { CheckCircle } from 'lucide-react';

interface BookingFormProps {
  preselectedServiceId?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ preselectedServiceId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [priceEstimate, setPriceEstimate] = useState<number | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const totalSteps = 3;
  
  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm<BookingFormData>({
    defaultValues: {
      service: preselectedServiceId || '',
      propertyType: '',
      propertySize: 'medium',
      date: format(new Date().setDate(new Date().getDate() + 2), 'yyyy-MM-dd'),
      time: '09:00',
      frequency: 'one-time',
      staffCount: 1,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: 'Ottawa',
      postalCode: '',
      specialInstructions: ''
    }
  });

  const watchedValues = watch();
  
  // Update price estimate when form values change
  useEffect(() => {
    if (watchedValues.service && watchedValues.propertySize && watchedValues.frequency) {
      const pricingResult = calculatePrice(
        watchedValues.service,
        watchedValues.propertySize,
        watchedValues.frequency,
        undefined,
        watchedValues.staffCount
      );
      
      if (pricingResult) {
        setPriceEstimate(pricingResult.totalPrice);
      }
    }
  }, [watchedValues.service, watchedValues.propertySize, watchedValues.frequency, watchedValues.staffCount]);
  
  // Set preselected service if provided
  useEffect(() => {
    if (preselectedServiceId) {
      setValue('service', preselectedServiceId);
    }
  }, [preselectedServiceId, setValue]);

  const onSubmit = (data: BookingFormData) => {
    console.log('Form submitted:', data);
    // In a real app, this would send the data to a backend
    setSubmissionSuccess(true);
    setTimeout(() => {
      reset();
      setCurrentStep(1);
      setSubmissionSuccess(false);
    }, 5000);
  };

  const nextStep = () => {
    setCurrentStep(current => Math.min(current + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(current => Math.max(current - 1, 1));
  };

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'office', label: 'Office' },
    { value: 'retail', label: 'Retail Space' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'industrial', label: 'Industrial Facility' },
    { value: 'other', label: 'Other' }
  ];

  const propertySizes = [
    { value: 'small', label: 'Small (< 1,000 sq ft)' },
    { value: 'medium', label: 'Medium (1,000 - 2,000 sq ft)' },
    { value: 'large', label: 'Large (2,000 - 3,500 sq ft)' },
    { value: 'xlarge', label: 'Extra Large (> 3,500 sq ft)' }
  ];

  if (submissionSuccess) {
    return (
      <motion.div 
        className="bg-white rounded-lg shadow-md p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="mb-6 flex justify-center">
          <CheckCircle size={60} className="text-success-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Booking Successful!</h3>
        <p className="text-lg mb-6">
          Thank you for booking with Ottawa Pristine Cleaning. We've received your request and will contact you shortly to confirm the details.
        </p>
        <p className="mb-2">
          <strong>Reference Number:</strong> OCB-{Math.floor(100000 + Math.random() * 900000)}
        </p>
        <p>A confirmation email has been sent to your email address.</p>
      </motion.div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Select Your Service</h3>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Service Type</label>
              <select 
                {...register('service', { required: 'Please select a service' })}
                className={`w-full p-3 border rounded-lg ${errors.service ? 'border-error-500' : 'border-neutral-300'}`}
              >
                <option value="">Select a service...</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-error-500 mt-1">{errors.service.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Property Type</label>
              <select 
                {...register('propertyType', { required: 'Please select a property type' })}
                className={`w-full p-3 border rounded-lg ${errors.propertyType ? 'border-error-500' : 'border-neutral-300'}`}
              >
                <option value="">Select property type...</option>
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.propertyType && <p className="text-error-500 mt-1">{errors.propertyType.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Property Size</label>
              <select 
                {...register('propertySize')}
                className="w-full p-3 border border-neutral-300 rounded-lg"
              >
                {propertySizes.map(size => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Cleaning Frequency</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {frequencyOptions.map((option: FrequencyOption) => (
                  <label 
                    key={option.id}
                    className={`
                      flex items-center p-3 border rounded-lg cursor-pointer transition-colors
                      ${watchedValues.frequency === option.id 
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-300 hover:bg-neutral-50'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      value={option.id}
                      {...register('frequency')}
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
            
            <div className="form-group">
              <label className="block font-medium mb-2">Number of Cleaning Staff</label>
              <select 
                {...register('staffCount', { 
                  valueAsNumber: true 
                })}
                className="w-full p-3 border border-neutral-300 rounded-lg"
              >
                <option value={1}>1 Person (Standard)</option>
                <option value={2}>2 People (Faster)</option>
                <option value={3}>3 People (Quickest)</option>
              </select>
            </div>

            {priceEstimate !== null && (
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-lg">
                  Estimated Price: <span className="font-semibold">${priceEstimate} CAD</span>
                  {watchedValues.frequency !== 'one-time' && (
                    <span className="text-sm text-neutral-600"> per service</span>
                  )}
                </p>
              </div>
            )}
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Schedule Your Cleaning</h3>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Preferred Date</label>
              <input 
                type="date" 
                {...register('date', { required: 'Date is required' })}
                className={`w-full p-3 border rounded-lg ${errors.date ? 'border-error-500' : 'border-neutral-300'}`}
                min={format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')}
              />
              {errors.date && <p className="text-error-500 mt-1">{errors.date.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Preferred Time</label>
              <select 
                {...register('time', { required: 'Time is required' })}
                className={`w-full p-3 border rounded-lg ${errors.time ? 'border-error-500' : 'border-neutral-300'}`}
              >
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
              {errors.time && <p className="text-error-500 mt-1">{errors.time.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Special Instructions (Optional)</label>
              <textarea 
                {...register('specialInstructions')}
                rows={4}
                placeholder="Enter any special requests, access instructions, or important details we should know."
                className="w-full p-3 border border-neutral-300 rounded-lg resize-none"
              />
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
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
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-error-500' : 'border-neutral-300'}`}
                  placeholder="(613) 555-1234"
                />
                {errors.phone && <p className="text-error-500 mt-1">{errors.phone.message}</p>}
              </div>
              
              <div className="form-group">
                <label className="block font-medium mb-2">City</label>
                <input 
                  type="text" 
                  {...register('city', { required: 'City is required' })}
                  className={`w-full p-3 border rounded-lg ${errors.city ? 'border-error-500' : 'border-neutral-300'}`}
                  defaultValue="Ottawa"
                />
                {errors.city && <p className="text-error-500 mt-1">{errors.city.message}</p>}
              </div>
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Street Address</label>
              <input 
                type="text" 
                {...register('address', { required: 'Address is required' })}
                className={`w-full p-3 border rounded-lg ${errors.address ? 'border-error-500' : 'border-neutral-300'}`}
                placeholder="123 Main St, Apt 4B"
              />
              {errors.address && <p className="text-error-500 mt-1">{errors.address.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block font-medium mb-2">Postal Code</label>
              <input 
                type="text" 
                {...register('postalCode', { 
                  required: 'Postal code is required',
                  pattern: {
                    value: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
                    message: 'Enter a valid postal code (e.g. K1A 0B1)'
                  }
                })}
                className={`w-full p-3 border rounded-lg ${errors.postalCode ? 'border-error-500' : 'border-neutral-300'}`}
                placeholder="K1A 0B1"
              />
              {errors.postalCode && <p className="text-error-500 mt-1">{errors.postalCode.message}</p>}
            </div>
            
            {priceEstimate !== null && (
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <p>
                  <strong>Service:</strong> {services.find(s => s.id === watchedValues.service)?.name}
                </p>
                <p>
                  <strong>Date & Time:</strong> {watchedValues.date} at {
                    new Date(`2000-01-01T${watchedValues.time}`).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})
                  }
                </p>
                <p>
                  <strong>Frequency:</strong> {frequencyOptions.find(f => f.id === watchedValues.frequency)?.label}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Total: ${priceEstimate} CAD
                  {watchedValues.frequency !== 'one-time' && (
                    <span className="text-sm font-normal"> per service</span>
                  )}
                </p>
              </div>
            )}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Progress bar */}
      <div className="bg-neutral-50 p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Book Your Cleaning Service</h2>
          <span className="text-neutral-500 text-sm">Step {currentStep} of {totalSteps}</span>
        </div>
        <div className="h-2 bg-neutral-200 rounded-full">
          <div 
            className="h-full bg-primary-500 rounded-full transition-all duration-300" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Form content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        {renderStep()}
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Complete Booking
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
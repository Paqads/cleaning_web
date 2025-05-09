import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookingForm from '../components/booking/BookingForm';
import FAQSection from '../components/common/FAQSection';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  
  return (
    <div className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Book Your Cleaning Service</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Schedule a professional cleaning service with Ottawa Pristine Cleaning. 
            Fill out the booking form below and we'll take care of the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm preselectedServiceId={serviceId || undefined} />
          </div>
          
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-24 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Scheduling</h4>
                    <p className="text-neutral-600 text-sm">
                      Bookings can be made up to 3 months in advance. We recommend booking at least 
                      48 hours before your desired cleaning date for better availability.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cancellations</h4>
                    <p className="text-neutral-600 text-sm">
                      You can reschedule or cancel your booking up to 24 hours before your scheduled service 
                      without any charges. Late cancellations may incur a fee.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Payment</h4>
                    <p className="text-neutral-600 text-sm">
                      Payment is processed upon completion of the service. We accept credit cards, 
                      debit cards, e-transfers, and cash.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Special Requests</h4>
                    <p className="text-neutral-600 text-sm">
                      If you have special cleaning requirements or need additional services, 
                      please indicate these in the special instructions field.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <FAQSection category="booking" limit={3} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
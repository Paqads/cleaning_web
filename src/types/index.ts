export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  basePrice: number;
  priceUnit: 'hour' | 'sqft' | 'room' | 'fixed';
  eco: boolean;
  popular: boolean;
}

export type ServiceCategory = 
  | 'residential' 
  | 'commercial' 
  | 'industrial' 
  | 'specialized';

export interface BookingFormData {
  service: string;
  propertyType: string;
  propertySize: string;
  date: string;
  time: string;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  specialInstructions?: string;
  staffCount: number;
}

export type FrequencyOption = {
  id: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  label: string;
  discount: number;
};

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  company?: string;
  quote: string;
  rating: number;
  image?: string;
  serviceType: ServiceCategory;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'residential' | 'commercial' | 'industrial' | 'pricing' | 'booking';
}

export interface PricingOption {
  serviceId: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  price: number;
  unit: string;
  estimatedTime?: string;
}
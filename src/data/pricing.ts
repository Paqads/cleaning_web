import { PricingOption } from '../types';

export const pricingOptions: PricingOption[] = [
  // Residential Standard
  {
    serviceId: 'residential-standard',
    size: 'small',
    price: 120,
    unit: 'fixed',
    estimatedTime: '2-3 hours'
  },
  {
    serviceId: 'residential-standard',
    size: 'medium',
    price: 160,
    unit: 'fixed',
    estimatedTime: '3-4 hours'
  },
  {
    serviceId: 'residential-standard',
    size: 'large',
    price: 200,
    unit: 'fixed',
    estimatedTime: '4-5 hours'
  },
  {
    serviceId: 'residential-standard',
    size: 'xlarge',
    price: 240,
    unit: 'fixed',
    estimatedTime: '5-6 hours'
  },

  // Residential Deep
  {
    serviceId: 'residential-deep',
    size: 'small',
    price: 220,
    unit: 'fixed',
    estimatedTime: '4-5 hours'
  },
  {
    serviceId: 'residential-deep',
    size: 'medium',
    price: 280,
    unit: 'fixed',
    estimatedTime: '5-6 hours'
  },
  {
    serviceId: 'residential-deep',
    size: 'large',
    price: 340,
    unit: 'fixed',
    estimatedTime: '6-7 hours'
  },
  {
    serviceId: 'residential-deep',
    size: 'xlarge',
    price: 400,
    unit: 'fixed',
    estimatedTime: '7-8 hours'
  },

  // Commercial Office
  {
    serviceId: 'commercial-office',
    size: 'small',
    price: 0.75,
    unit: 'per sqft'
  },
  {
    serviceId: 'commercial-office',
    size: 'medium',
    price: 0.70,
    unit: 'per sqft'
  },
  {
    serviceId: 'commercial-office',
    size: 'large',
    price: 0.65,
    unit: 'per sqft'
  },
  {
    serviceId: 'commercial-office',
    size: 'xlarge',
    price: 0.60,
    unit: 'per sqft'
  },
  
  // Industrial Warehouse
  {
    serviceId: 'industrial-warehouse',
    size: 'small',
    price: 0.55,
    unit: 'per sqft'
  },
  {
    serviceId: 'industrial-warehouse',
    size: 'medium',
    price: 0.50,
    unit: 'per sqft'
  },
  {
    serviceId: 'industrial-warehouse',
    size: 'large',
    price: 0.45,
    unit: 'per sqft'
  },
  {
    serviceId: 'industrial-warehouse',
    size: 'xlarge',
    price: 0.40,
    unit: 'per sqft'
  }
];

export const frequencyOptions = [
  { id: 'one-time', label: 'One-time', discount: 0 },
  { id: 'monthly', label: 'Monthly', discount: 5 },
  { id: 'bi-weekly', label: 'Bi-weekly', discount: 10 },
  { id: 'weekly', label: 'Weekly', discount: 15 }
];

export const getServicePricing = (serviceId: string) => {
  return pricingOptions.filter(option => option.serviceId === serviceId);
};

export const calculatePrice = (
  serviceId: string,
  size: string,
  frequency: string,
  sqft?: number,
  staffCount: number = 1
) => {
  // Find the base pricing option
  const options = pricingOptions.filter(option => option.serviceId === serviceId);
  
  if (!options.length) return null;
  
  // Find the specific size option
  const sizeOption = options.find(option => option.size === size);
  if (!sizeOption) return null;
  
  // Get frequency discount
  const frequencyOption = frequencyOptions.find(option => option.id === frequency);
  const discount = frequencyOption ? frequencyOption.discount : 0;
  
  // Calculate price based on pricing unit
  let price = 0;
  
  if (sizeOption.unit === 'per sqft' && sqft) {
    price = sizeOption.price * sqft;
  } else {
    price = sizeOption.price;
  }
  
  // Apply staff multiplier (each additional staff member adds 80% of the base price)
  if (staffCount > 1) {
    price = price + (price * 0.8 * (staffCount - 1));
  }
  
  // Apply frequency discount
  if (discount > 0) {
    price = price * (1 - discount / 100);
  }
  
  return {
    basePrice: sizeOption.price,
    totalPrice: Math.round(price),
    discount: discount,
    staffMultiplier: staffCount > 1 ? staffCount : null,
    estimatedTime: sizeOption.estimatedTime
  };
};
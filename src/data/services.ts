import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'residential-standard',
    name: 'Standard Home Cleaning',
    description: 'Complete cleaning of living spaces including dusting, vacuuming, mopping, and bathroom sanitization.',
    icon: 'home',
    category: 'residential',
    basePrice: 120,
    priceUnit: 'fixed',
    eco: true,
    popular: true
  },
  {
    id: 'residential-deep',
    name: 'Deep Home Cleaning',
    description: 'Thorough cleaning including hard-to-reach areas, inside appliances, detailed kitchen and bathroom cleaning.',
    icon: 'sparkles',
    category: 'residential',
    basePrice: 220,
    priceUnit: 'fixed',
    eco: true,
    popular: true
  },
  {
    id: 'residential-move',
    name: 'Move-In/Move-Out Cleaning',
    description: 'Comprehensive cleaning for moving in or out of a property to ensure a pristine space.',
    icon: 'truck',
    category: 'residential',
    basePrice: 240,
    priceUnit: 'fixed',
    eco: true,
    popular: false
  },
  {
    id: 'commercial-office',
    name: 'Office Cleaning',
    description: 'Professional cleaning for office spaces including workstations, meeting rooms, and common areas.',
    icon: 'briefcase',
    category: 'commercial',
    basePrice: 0.75,
    priceUnit: 'sqft',
    eco: true,
    popular: true
  },
  {
    id: 'commercial-retail',
    name: 'Retail Space Cleaning',
    description: 'Specialized cleaning for retail environments focusing on customer areas and merchandise displays.',
    icon: 'shopping-bag',
    category: 'commercial',
    basePrice: 0.85,
    priceUnit: 'sqft',
    eco: true,
    popular: false
  },
  {
    id: 'commercial-restaurant',
    name: 'Restaurant Cleaning',
    description: 'Detailed cleaning for food service areas, dining spaces, and kitchens with attention to health regulations.',
    icon: 'utensils',
    category: 'commercial',
    basePrice: 1.25,
    priceUnit: 'sqft',
    eco: true,
    popular: false
  },
  {
    id: 'industrial-warehouse',
    name: 'Warehouse Cleaning',
    description: 'Heavy-duty cleaning for warehouses, including floor scrubbing, dust removal, and loading dock areas.',
    icon: 'package',
    category: 'industrial',
    basePrice: 0.55,
    priceUnit: 'sqft',
    eco: false,
    popular: false
  },
  {
    id: 'industrial-manufacturing',
    name: 'Manufacturing Facility Cleaning',
    description: 'Specialized cleaning for manufacturing environments, addressing machinery areas and production floors.',
    icon: 'factory',
    category: 'industrial',
    basePrice: 0.85,
    priceUnit: 'sqft',
    eco: false,
    popular: false
  },
  {
    id: 'industrial-construction',
    name: 'Post-Construction Cleaning',
    description: 'Thorough cleaning after construction or renovation projects, removing dust, debris, and construction materials.',
    icon: 'hard-hat',
    category: 'industrial',
    basePrice: 1.05,
    priceUnit: 'sqft',
    eco: false,
    popular: true
  },
  {
    id: 'specialized-carpet',
    name: 'Carpet Cleaning',
    description: 'Deep cleaning of carpets using steam extraction method to remove stains, allergens, and odors.',
    icon: 'carpet',
    category: 'specialized',
    basePrice: 0.40,
    priceUnit: 'sqft',
    eco: true,
    popular: false
  },
  {
    id: 'specialized-window',
    name: 'Window Cleaning',
    description: 'Professional cleaning of interior and exterior windows, including frames and sills.',
    icon: 'window',
    category: 'specialized',
    basePrice: 8,
    priceUnit: 'fixed',
    eco: true,
    popular: false
  },
  {
    id: 'specialized-pressure',
    name: 'Pressure Washing',
    description: 'High-pressure cleaning for exterior surfaces, driveways, decks, and siding.',
    icon: 'droplets',
    category: 'specialized',
    basePrice: 0.75,
    priceUnit: 'sqft',
    eco: false,
    popular: false
  }
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};
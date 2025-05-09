import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { Home, Briefcase, Package, Sparkles, ArrowRight, Truck, ShoppingBag, Utensils, Factory, Droplets, AppWindow as Window, LeafyGreen, Car as Carpet } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Map service icon string to actual icon component
  const getIcon = (iconName: string) => {
    const iconSize = 24;
    const icons: { [key: string]: JSX.Element } = {
      'home': <Home size={iconSize} />,
      'sparkles': <Sparkles size={iconSize} />,
      'truck': <Truck size={iconSize} />,
      'briefcase': <Briefcase size={iconSize} />,
      'shopping-bag': <ShoppingBag size={iconSize} />,
      'utensils': <Utensils size={iconSize} />,
      'package': <Package size={iconSize} />,
      'factory': <Factory size={iconSize} />,
      'hard-hat': <Package size={iconSize} />,
      'carpet': <Carpet size={iconSize} />,
      'window': <Window size={iconSize} />,
      'droplets': <Droplets size={iconSize} />
    };
    
    return icons[iconName] || <Sparkles size={iconSize} />;
  };

  // Get category and price display information
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'residential': 'bg-secondary-500',
      'commercial': 'bg-primary-500',
      'industrial': 'bg-accent-500',
      'specialized': 'bg-success-500'
    };
    
    return colors[category] || 'bg-primary-500';
  };

  const formatPrice = (price: number, unit: string) => {
    switch(unit) {
      case 'hour':
        return `$${price}/hour`;
      case 'sqft':
        return `$${price}/sq.ft`;
      case 'room':
        return `$${price}/room`;
      case 'fixed':
      default:
        return `$${price}`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-5px]">
      <div className={`${getCategoryColor(service.category)} p-4 text-white`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {getIcon(service.icon)}
            <span className="ml-2 text-sm font-medium capitalize">{service.category}</span>
          </div>
          {service.eco && (
            <div className="bg-white bg-opacity-20 p-1 rounded flex items-center">
              <LeafyGreen size={16} />
              <span className="text-xs ml-1">Eco</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-neutral-600 mb-4">{service.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-neutral-800">
              {formatPrice(service.basePrice, service.priceUnit)}
            </span>
            {service.popular && (
              <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>
          
          <div className="flex space-x-3">
            <Link 
              to={`/booking?service=${service.id}`}
              className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded font-medium transition-colors"
            >
              Book Now
            </Link>
            <Link 
              to={`/services/${service.id}`}
              className="flex items-center justify-center border border-primary-500 text-primary-500 hover:bg-primary-50 px-3 py-2 rounded transition-colors"
            >
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
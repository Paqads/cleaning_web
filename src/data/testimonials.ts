import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Homeowner',
    quote: 'Ottawa Pristine Cleaning Services has transformed our home. Their attention to detail is incredible, and they use eco-friendly products which was important for our family. Highly recommend their residential cleaning service!',
    rating: 5,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'residential'
  },
  {
    id: '2',
    name: 'Michael Thompson',
    position: 'Office Manager',
    company: 'Thompson Consulting',
    quote: 'We&apos;ve been using Ottawa Pristine for our office cleaning for over a year now. Their team is professional, thorough, and reliable. Our workspace always looks impeccable after they&apos;re done.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'commercial'
  },
  {
    id: '3',
    name: 'Jennifer Lee',
    position: 'Property Manager',
    company: 'Ottawa Luxury Apartments',
    quote: 'Their move-in/move-out cleaning service is exceptional. Our new tenants are always impressed with how spotless their apartments are when they arrive. Consistent quality every time.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'residential'
  },
  {
    id: '4',
    name: 'Robert Wilson',
    position: 'Operations Director',
    company: 'Wilson Manufacturing',
    quote: 'Managing an industrial facility requires specialized cleaning. Ottawa Pristine understands our needs and has developed a customized cleaning program that maintains our strict standards.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'industrial'
  },
  {
    id: '5',
    name: 'Amanda Peters',
    position: 'Restaurant Owner',
    company: 'The Cozy Corner',
    quote: 'Food service requires meticulous cleaning. Ottawa Pristine has never let us down. They understand health regulations and ensure our restaurant is always inspection-ready.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'commercial'
  },
  {
    id: '6',
    name: 'David Chen',
    position: 'Project Manager',
    company: 'Ottawa Modern Construction',
    quote: 'After our renovation projects, Ottawa Pristine handles the post-construction cleaning. They remove all traces of construction work and prepare the spaces for immediate use. Excellent service!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    serviceType: 'industrial'
  }
];

export const getTestimonialsByService = (serviceType: string) => {
  return testimonials.filter(testimonial => testimonial.serviceType === serviceType);
};
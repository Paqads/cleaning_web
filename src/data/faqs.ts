import { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  {
    question: 'How do I book a cleaning service?',
    answer: 'You can book our services through our online booking system on this website, by calling our customer service line, or by sending an email. Our online system allows you to select the type of service, date, time, and any special requirements you may have.',
    category: 'booking'
  },
  {
    question: 'What areas in Ottawa do you serve?',
    answer: 'We serve the entire Ottawa region, including downtown, suburbs, and surrounding areas like Kanata, Orleans, Barrhaven, Nepean, and Stittsville. For locations outside these areas, please contact us to check availability.',
    category: 'general'
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, we bring all necessary cleaning supplies and equipment. We use professional-grade products that are effective and, when requested, environmentally friendly. If you have specific products you prefer we use in your home or business, we&apos;re happy to accommodate.',
    category: 'general'
  },
  {
    question: 'What is included in your standard residential cleaning?',
    answer: 'Our standard residential cleaning includes dusting of all accessible surfaces, vacuuming carpets and floors, mopping hard floors, cleaning kitchen counters, appliance exteriors, sinks, and fixtures, bathroom sanitization including toilets, showers, tubs, and sinks, and emptying trash bins.',
    category: 'residential'
  },
  {
    question: 'How does your pricing work?',
    answer: 'Our pricing is based on several factors including the type of service, size of the space, frequency of cleaning, and any special requirements. We offer fixed pricing for standard residential services and per square foot pricing for commercial and industrial spaces. You can get an estimate using our pricing calculator.',
    category: 'pricing'
  },
  {
    question: 'Do you offer recurring cleaning schedules?',
    answer: 'Yes, we offer weekly, bi-weekly, and monthly recurring cleaning services. Regular clients receive priority scheduling and discounted rates. You can easily set up a recurring schedule through our booking system.',
    category: 'booking'
  },
  {
    question: 'What COVID-19 precautions do your cleaners take?',
    answer: 'Our staff follows all public health guidelines, including wearing masks and gloves, maintaining social distancing when clients are present, using disinfectants effective against viruses, and practicing thorough hand hygiene. All our team members are screened regularly.',
    category: 'general'
  },
  {
    question: 'Can you accommodate specialized industrial cleaning needs?',
    answer: 'Yes, we have specialized teams for industrial cleaning with expertise in manufacturing facilities, warehouses, and construction sites. We can develop customized cleaning protocols for your specific industrial environment and compliance requirements.',
    category: 'industrial'
  },
  {
    question: 'What eco-friendly options do you offer?',
    answer: 'We offer completely eco-friendly cleaning options using green-certified products that are effective yet safe for the environment, children, and pets. Our eco-friendly approach includes microfiber cleaning cloths, HEPA filter vacuums, and sustainable practices to minimize waste.',
    category: 'general'
  },
  {
    question: 'How do you ensure quality control?',
    answer: 'We maintain high standards through comprehensive training of our staff, detailed cleaning checklists, regular supervision, and quality inspections. We also value client feedback and conduct follow-ups after service to ensure satisfaction.',
    category: 'general'
  }
];

export const getFAQsByCategory = (category: string) => {
  return faqs.filter(faq => faq.category === category);
};
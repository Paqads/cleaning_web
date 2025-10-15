import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-primary-400 text-2xl font-display font-bold">Pristine</span>
              <span className="ml-2 text-white text-lg font-medium">Cleans</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Professional cleaning services for residential and commercial clients in Ottawa. 
              We provide eco-friendly, reliable, and high-quality cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/pristinecleans" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/pristinecleans" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services?category=residential" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services?category=commercial" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services?category=industrial" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Industrial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services?category=specialized" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Specialized Services
                </Link>
              </li>
              <li>
                <Link to="/services?filter=eco" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Eco-Friendly Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/booking" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Book a Service
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Pricing Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">Ottawa, ON</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="tel:+16137996684" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  +1 (613)-799684 call to book
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="mailto:booking@pristinecleans.ca" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  booking@pristinecleans.ca
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">Mon-Fri: 8am-7pm<br />Sat: 9am-5pm<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-700 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} PristineCleans.ca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
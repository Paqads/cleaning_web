import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Booking', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-primary-500 text-3xl font-display font-bold">Pristine</span>
            <span className="ml-2 text-neutral-700 text-lg font-medium">Cleans</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:613799684"
              className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-full transition-colors hover:bg-primary-600"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">613799684 call to book</span>
            </a>
          </div>

          <button
            className="md:hidden text-neutral-700 p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-neutral-100 ${
                    isActive ? 'text-primary-500' : 'text-neutral-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:613799684"
              className="flex items-center justify-center py-3 mt-2 bg-primary-500 text-white rounded-lg"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">613799684 call to book</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
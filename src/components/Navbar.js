import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/history', text: 'History' },
    { to: '/membership', text: 'Membership' }
  ];

  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || location.pathname !== '/' 
      ? 'bg-kofc-dark shadow-lg'
      : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 bg-gradient-to-r from-kofc-gold via-kofc-red to-kofc-blue rounded-full p-0.5">
                <div className="w-full h-full bg-kofc-dark rounded-full overflow-hidden">
                  <img 
                    src="/images/kofc-logo.png" 
                    alt="Knights of Columbus Logo" 
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">
              Council 6883
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className={`text-white hover:text-kofc-gold transition-colors duration-200 ${
                  location.pathname === to ? 'text-kofc-gold' : ''
                }`}
              >
                {text}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-kofc-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-kofc-dark rounded-b-lg">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className={`block px-3 py-2 rounded-md text-white hover:bg-kofc-gold/20 transition-colors duration-200 ${
                  location.pathname === to ? 'bg-kofc-gold/20' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            ))}
            <Link
              to="/join"
              className="block px-3 py-2 text-center bg-kofc-red hover:bg-red-700 text-white rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

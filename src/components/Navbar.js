import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHome = location.pathname === '/';
  const navbarBg = isHome && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-kofc-blue shadow-lg';

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/history', text: 'History' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/faith', text: 'Faith Q&A' },
    { to: '/directory', text: 'Directory' }, // Add Directory link
    { to: '/membership', text: 'Membership' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto" src="/images/kofc-logo.png" alt="Council 6883" />
              <span className="ml-3 text-kofc-gold font-trajan text-xl">Council 6883</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.filter(link => link.text !== 'Membership').map(({ to, text }) => ( // Exclude Membership from main links
              <Link
                key={to}
                to={to}
                className={`text-white hover:text-kofc-gold transition-colors duration-200 font-garamond text-lg ${
                  location.pathname === to ? 'text-kofc-gold' : ''
                }`}
              >
                {text}
              </Link>
            ))}
            {/* Move Membership (Join Us) button to the end */}
            <Link
              to="/membership"
              className={`${
                isHome && !isScrolled
                  ? 'bg-kofc-red/90 hover:bg-kofc-red'
                  : 'bg-kofc-red hover:bg-red-700'
              } text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 font-trajan text-lg transform hover:scale-105`}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-kofc-gold hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-kofc-blue border-t border-kofc-gold/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.filter(link => link.text !== 'Membership').map(({ to, text }) => ( // Exclude Membership from main links
            <Link
              key={to}
              to={to}
              className="text-white hover:text-kofc-gold hover:bg-kofc-blue-light/10 block px-3 py-2 rounded-md font-garamond text-lg"
              onClick={toggleMenu}
            >
              {text}
            </Link>
          ))}
          {/* Move Membership (Join Us) button to the end */}
          <Link
            to="/membership"
            className="bg-kofc-red text-white block px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-trajan text-lg mt-4 text-center shadow-md hover:shadow-lg"
            onClick={toggleMenu}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const pillars = [
    {
      title: 'Charity',
      description: 'Charity is at the heart of our work and our faith — and it always has been.',
      icon: '❤️‍🔥',
      color: 'from-kofc-red to-kofc-gold'
    },
    {
      title: 'Unity',
      description: 'Together we accomplish far more than any of us could individually.',
      icon: '🤝',
      color: 'from-kofc-blue to-kofc-gold'
    },
    {
      title: 'Fraternity',
      description: 'The Knights of Columbus was founded on the principles of brotherly care.',
      icon: '⚜️',
      color: 'from-kofc-gold to-kofc-red'
    },
    {
      title: 'Patriotism',
      description: 'We are proud of our devotion to God and country.',
      icon: '🦅',
      color: 'from-kofc-blue to-kofc-red'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cathedral-bg.jpg"
            alt="Cathedral Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="flex-1 flex flex-col justify-center items-center max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5,
                type: "spring",
                bounce: 0.2,
                mass: 2,
                damping: 15
              }}
              className="mb-8"
            >
              <div className="inline-block">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-kofc-gold via-kofc-red to-kofc-blue p-2 rounded-full">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden">
                      <img
                        src="/images/kofc-logo.png"
                        alt="Knights of Columbus"
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                bounce: 0.3
              }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-trajan text-white mb-6 gothic-text-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Knights of Columbus
                <motion.span 
                  className="block text-kofc-gold mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Council 6883
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-white font-garamond mb-8 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Faith • Service • Brotherhood
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link 
                  to="/membership"
                  className="inline-block bg-kofc-gold hover:bg-kofc-gold/90 text-kofc-dark px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
                >
                  Join Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Four Pillars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-trajan text-center mb-12 text-kofc-blue">
            The Four Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-gradient-to-b from-white to-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-kofc-gold text-4xl mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-trajan mb-2 text-kofc-blue">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 font-garamond">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kofc-blue via-kofc-red to-kofc-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-trajan mb-4 text-white">
            Join Our Brotherhood
          </h2>
          <p className="text-xl font-garamond mb-8 text-white">
            Become part of a community dedicated to making a difference through faith and service.
          </p>
          <Link
            to="/membership"
            className="mt-8 inline-flex items-center text-kofc-gold hover:text-white transition-colors duration-300"
          >
            <span className="mr-2">Join the Brotherhood</span>
            <FaArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

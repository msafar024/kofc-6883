import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const stainedGlassVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const pillars = [
    {
      title: 'Charity',
      description: 'Charity is at the heart of our work and our faith — and it always has been.',
      icon: '🤲',
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
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              <motion.div
                variants={stainedGlassVariants}
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

              <motion.h1
                variants={textRevealVariants}
                className="text-5xl md:text-7xl font-trajan text-white mb-6 gothic-text-shadow"
              >
                Knights of Columbus
                <span className="block text-kofc-gold mt-2">Council 6883</span>
              </motion.h1>

              <motion.p
                variants={textRevealVariants}
                className="text-xl md:text-2xl text-white font-garamond mb-8 tracking-wide"
              >
                Faith • Service • Brotherhood
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-kofc-red to-kofc-blue text-white font-trajan px-8 py-3 rounded-md text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Join Our Brotherhood</span>
                <div className="absolute inset-0 bg-gradient-to-r from-kofc-blue to-kofc-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Four Pillars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-trajan text-center mb-12 text-kofc-blue"
          >
            The Four Pillars
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kofc-blue via-kofc-red to-kofc-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-trajan mb-4 text-white">
              Join Our Brotherhood
            </h2>
            <p className="text-xl font-garamond mb-8 text-white">
              Become part of a community dedicated to making a difference through faith and service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-kofc-blue font-trajan px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Learn More About Membership
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

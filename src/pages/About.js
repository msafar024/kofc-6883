import React from 'react';
import { motion } from 'framer-motion';
import { FaCross, FaHandsHelping, FaUsers, FaChurch, FaHandHoldingHeart, FaPray } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const principles = [
    {
      icon: <FaCross className="h-8 w-8 text-kofc-gold" />,
      title: "Faith",
      description: "Our Catholic faith is the cornerstone of our organization, guiding our actions and service."
    },
    {
      icon: <FaHandsHelping className="h-8 w-8 text-kofc-gold" />,
      title: "Charity",
      description: "We are dedicated to serving others through charitable works and community support."
    },
    {
      icon: <FaUsers className="h-8 w-8 text-kofc-gold" />,
      title: "Unity",
      description: "Together we stand as brothers, supporting one another and our community."
    },
    {
      icon: <FaHandHoldingHeart className="h-8 w-8 text-kofc-gold" />,
      title: "Fraternity",
      description: "We foster a spirit of brotherhood and mutual support among our members."
    }
  ];

  const services = [
    {
      icon: <FaChurch className="h-6 w-6" />,
      text: "Church Support"
    },
    {
      icon: <FaHandsHelping className="h-6 w-6" />,
      text: "Community Service"
    },
    {
      icon: <FaPray className="h-6 w-6" />,
      text: "Faith Formation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-b from-kofc-dark to-kofc-blue/90 overflow-hidden">
        <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-kofc-dark/80 via-kofc-dark/50 to-transparent" />
        <motion.div 
          className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-trajan text-white mb-4">
            About Our Council
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Serving our community through faith, charity, and fraternal brotherhood
          </p>
        </motion.div>
      </div>

      {/* Core Principles */}
      <div className="py-16 px-4 md:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-trajan text-center mb-12 text-kofc-dark">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-trajan mb-2 text-kofc-dark">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-trajan mb-6 text-kofc-dark">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                As Knights of Columbus, we are dedicated to serving our community through charitable works,
                supporting our Church, and fostering a spirit of unity among all people.
              </p>
              <p className="text-gray-600 mb-8">
                Our council actively engages in various charitable initiatives, from supporting local food banks to
                organizing youth programs and assisting families in need.
              </p>
              <div className="flex flex-wrap gap-4">
                {services.map((service, index) => (
                  <div
                    key={service.text}
                    className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2"
                  >
                    {service.icon}
                    <span className="text-gray-700">{service.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/kofc-logo.png"
                alt="Knights of Columbus Logo"
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-kofc-blue to-kofc-dark overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-trajan mb-6 md:mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Brotherhood
          </motion.h2>
          <motion.p 
            className="text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Become part of a global organization dedicated to serving others and growing in faith.
            Join us in making a difference in our community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/membership"
              className="inline-block bg-kofc-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Learn More About Membership
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

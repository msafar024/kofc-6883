import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChurch, FaCross, FaHandshake, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const History = () => {
  const [activeEra, setActiveEra] = useState(0);

  const eras = [
    {
      year: "1882",
      title: "Foundation",
      description: "Father Michael J. McGivney founded the Knights of Columbus to provide mutual aid and assistance to members and their families.",
      icon: <FaCross className="h-8 w-8 text-kofc-gold" />,
      events: [
        "Founded in New Haven, Connecticut",
        "First council established",
        "Initial focus on providing for widows and orphans"
      ]
    },
    {
      year: "1900-1920",
      title: "Early Growth",
      description: "The Order experienced rapid growth and expansion across North America.",
      icon: <FaChurch className="h-8 w-8 text-kofc-gold" />,
      events: [
        "Expansion beyond Connecticut",
        "Establishment of insurance program",
        "Support for World War I efforts"
      ]
    },
    {
      year: "1920-1960",
      title: "Service & Unity",
      description: "Knights became known for their charitable work and community service.",
      icon: <FaHandshake className="h-8 w-8 text-kofc-gold" />,
      events: [
        "Major charitable initiatives",
        "Support during Great Depression",
        "World War II assistance programs"
      ]
    },
    {
      year: "1960-Present",
      title: "Global Impact",
      description: "The Knights of Columbus expanded globally while maintaining their core principles.",
      icon: <FaGlobe className="h-8 w-8 text-kofc-gold" />,
      events: [
        "International expansion",
        "Enhanced charitable programs",
        "Continued growth and service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-b from-kofc-dark to-kofc-blue/90 overflow-hidden">
        <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-kofc-dark/80 via-kofc-dark/50 to-transparent" />
        <motion.div 
          className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-trajan text-white mb-4">
            Our History
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            A legacy of service, faith, and fraternity since 1882
          </p>
        </motion.div>
      </div>

      {/* Timeline Navigation */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            {eras.map((era, index) => (
              <button
                key={era.year}
                onClick={() => setActiveEra(index)}
                className={`flex-shrink-0 px-4 py-2 mx-2 rounded-md transition-colors duration-200 whitespace-nowrap ${
                  activeEra === index
                    ? 'bg-kofc-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {era.year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Era Information */}
            <motion.div
              key={activeEra}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                {eras[activeEra].icon}
                <h2 className="text-2xl md:text-3xl font-trajan ml-4 text-kofc-dark">
                  {eras[activeEra].title}
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                {eras[activeEra].description}
              </p>
              <div className="space-y-4">
                {eras[activeEra].events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-kofc-gold rounded-full" />
                    <p className="text-gray-700">{event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Visualization */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kofc-blue via-kofc-gold to-kofc-red" />
              {eras.map((era, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-12 pb-8 ${
                    index === eras.length - 1 ? '' : 'mb-8'
                  }`}
                >
                  <div className="absolute left-2 w-4 h-4 rounded-full bg-white border-4 border-kofc-gold" />
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-trajan text-kofc-dark mb-2">
                      {era.year}
                    </h3>
                    <p className="text-gray-600">
                      {era.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            Continue Our Legacy
          </motion.h2>
          <motion.p 
            className="text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join us in writing the next chapter of our story. Become a Knight and be part of our continuing legacy of service and faith.
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
              Join Our Council
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;

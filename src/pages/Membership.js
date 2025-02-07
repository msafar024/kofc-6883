import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUserTie, FaCross } from 'react-icons/fa';

const ContactCard = ({ title, name, email, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
  >
    <div className="relative">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="bg-gradient-to-br from-kofc-blue to-kofc-dark p-4 rounded-full shadow-lg"
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-xl font-trajan text-kofc-dark mb-1"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-lg font-semibold text-gray-700 mb-3"
      >
        {name}
      </motion.p>
      <motion.a
        href={`mailto:${email}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="inline-flex items-center space-x-2 text-kofc-blue hover:text-kofc-gold transition-colors duration-300"
      >
        <FaEnvelope className="h-4 w-4" />
        <span>{email}</span>
      </motion.a>
    </div>
  </motion.div>
);

const Membership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] bg-gradient-to-b from-kofc-dark to-kofc-blue/90 overflow-hidden pt-32"
      >
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-trajan text-white mb-6"
            >
              Join Our Brotherhood
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Become part of a community dedicated to faith, charity, and fraternal service. Together, we make a difference.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-trajan text-center text-kofc-dark mb-16"
        >
          Contact Our Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <ContactCard
            title="Faculty Advisor"
            name="Fr. Maher"
            email="michael.maher@marquette.edu"
            icon={FaCross}
            delay={0.2}
          />
          <ContactCard
            title="Grand Knight"
            name="Brennan Wills"
            email="brennan.wills@marquette.edu"
            icon={FaUserTie}
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

export default Membership;

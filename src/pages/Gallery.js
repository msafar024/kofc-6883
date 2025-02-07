import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const Gallery = () => {
  const googlePhotosUrl = "https://photos.app.goo.gl/TBD"; // Replace with your actual Google Photos URL

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-trajan text-kofc-dark mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 font-garamond">Capturing moments of faith, service, and brotherhood</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-trajan text-kofc-dark mb-6">View Our Complete Photo Collection</h2>
            <p className="text-gray-600 mb-8">
              Explore our full gallery of events, ceremonies, and community service activities on Google Photos.
            </p>
            <a
              href={googlePhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-kofc-gold hover:bg-kofc-gold/90 text-kofc-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaGoogle className="text-2xl" />
              Open Google Photos Album
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <iframe
              src={googlePhotosUrl}
              width="100%"
              height="600"
              style={{ border: 'none' }}
              className="rounded-xl shadow-lg"
              title="Knights of Columbus Photo Gallery"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

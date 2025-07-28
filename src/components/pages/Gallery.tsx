import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Camera, Users, Star } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import InstagramFeed from '../sections/InstagramFeed';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />
      
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Camera className="h-8 w-8 text-pink-600 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our Gallery
                </h1>
              </motion.div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explore our journey through photos! See our students' success stories, 
                our modern fleet, behind-the-scenes moments, and the Drive Dojo experience.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">2,000+</div>
                  <div className="text-gray-600">Happy Students</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Star className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-gray-600">Average Rating</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1,500+</div>
                  <div className="text-gray-600">Instagram Followers</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Camera className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Photos Shared</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* Additional Gallery Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More From Drive Dojo
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check out our latest updates, student achievements, and driving tips
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl"
              >
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Student Success Stories
                  </h3>
                  <p className="text-gray-600">
                    Celebrating our students' achievements and first-time passes
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl"
              >
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Camera className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Behind the Scenes
                  </h3>
                  <p className="text-gray-600">
                    See what goes on during our driving lessons and instructor training
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl"
              >
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Daily Updates
                  </h3>
                  <p className="text-gray-600">
                    Follow our daily posts for tips, motivation, and community updates
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of successful drivers who learned with Drive Dojo. 
                Your success story could be next!
              </p>
              <button
                onClick={() => window.open('https://instagram.com/drive.dojo', '_blank')}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Follow @drive.dojo
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;

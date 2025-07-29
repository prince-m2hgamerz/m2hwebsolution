import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Sparkles, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'Modern Web Development',
    'Digital Solutions',
    'Custom Applications',
    'SEO Optimization'
  ];

  useEffect(() => {
    const currentFullText = texts[textIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, textIndex, isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center space-x-3"
              >
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Welcome to the Future
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <span className="text-gray-900 dark:text-white">We Build</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-blue-500"
                  >
                    |
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform your business with cutting-edge web solutions. We create stunning, 
                performance-optimized websites that drive results and exceed expectations.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                'Custom Web Development',
                'SEO & Performance Optimization',
                'Mobile-First Design',
                '24/7 Support & Maintenance'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="glass-card dark:glass-card-dark bg-gradient-to-r from-blue-500 to-purple-600 text-whitetext-black dark:text-white
 px-6 py-3 rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="glass-card dark:glass-card-dark border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              {[
                { number: '50+', label: 'Projects Completed', color: 'text-blue-500' },
                { number: '25+', label: 'Happy Clients', color: 'text-purple-500' },
                { number: '2+', label: 'Years Experience', color: 'text-green-500' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Web Development"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-pink-600/30"></div>
              </div>
            </motion.div>
            
            {/* Floating 3D Elements */}
            <motion.div
              className="absolute -top-6 -right-6 glass-card dark:glass-card-dark w-16 h-16 rounded-xl flex items-center justify-center"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Code className="w-8 h-8 text-blue-500" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 glass-card dark:glass-card-dark w-18 h-18 rounded-xl flex items-center justify-center"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Zap className="w-10 h-10 text-yellow-500" />
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              className="absolute top-1/4 -right-12 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
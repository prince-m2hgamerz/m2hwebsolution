import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-6 glass-card dark:glass-card-dark bg-gradient-to-r from-blue-500 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl z-10"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative transform-3d">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Code className="w-8 h-8 text-blue-400" />
                  <Zap className="w-4 h-4 text-green-400 absolute -top-1 -right-1 animate-pulse" />
                </motion.div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                M2H Web Solution
              </span>
            </motion.div>
            
            <p className="text-gray-300 text-base leading-relaxed">
              We are a passionate team of developers and designers dedicated to creating 
              exceptional digital experiences that drive business growth.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item, index) => (
                <motion.li key={item}>
                  <motion.button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-base capitalize"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'UI/UX Design',
                'E-commerce Solutions',
                'SEO Optimization',
                'Mobile Apps',
                'Digital Marketing'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  className="text-gray-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  details: ['m2hgamerz.prince@gmail.com', 'support@m2hwebsolution.com'],
                  color: 'text-blue-400'
                },
                {
                  icon: Phone,
                  details: ['+91 9876543210', '+91 8765432109'],
                  color: 'text-green-400'
                },
                {
                  icon: MapPin,
                  details: ['Mumbai, Maharashtra', 'India'],
                  color: 'text-purple-400'
                }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 3 }}
                >
                  <motion.div
                    className={`${contact.color} mt-1`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 text-base">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-300 text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              © 2024 M2H Web Solution. All rights reserved.
            </motion.p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Refund Policy', path: '/refund-policy' }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  as={Link}
                  to={link.path}
                  className="text-gray-300 hover:text-white text-base transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { 
  Code, 
  Palette, 
  Search, 
  Settings, 
  Globe, 
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Cloud
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: 'Custom Website Development',
      description: 'Full-stack web development with modern technologies like React, Node.js, and databases.',
      features: ['Responsive Design', 'Modern Frameworks', 'Database Integration', 'API Development'],
      gradient: 'from-blue-500 to-cyan-500',
      price: ''
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly interfaces that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      gradient: 'from-purple-500 to-pink-500',
      price: ''
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-500" />,
      title: 'E-commerce Solutions',
      description: 'Build powerful online stores with secure payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Commerce'],
      gradient: 'from-green-500 to-emerald-500',
      price: ''
    },
    {
      icon: <Search className="w-12 h-12 text-yellow-500" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Optimization'],
      gradient: 'from-yellow-500 to-orange-500',
      price: ''
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'Cross-platform'],
      gradient: 'from-red-500 to-pink-500',
      price: ''
    },
    {
      icon: <Settings className="w-12 h-12 text-gray-500" />,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and running smoothly with our maintenance services.',
      features: ['Security Updates', 'Performance Monitoring', 'Bug Fixes', 'Content Updates'],
      gradient: 'from-gray-500 to-slate-500',
      price: ''
    },
    {
      icon: <Cloud className="w-12 h-12 text-indigo-500" />,
      title: 'Cloud Hosting & Deployment',
      description: 'Reliable cloud hosting solutions with fast deployment and excellent uptime.',
      features: ['AWS/Azure Hosting', 'SSL Certificates', 'Domain Management', 'Backup Solutions'],
      gradient: 'from-indigo-500 to-blue-500',
      price: ''
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-pink-500" />,
      title: 'Digital Marketing',
      description: 'Boost your online presence with comprehensive digital marketing strategies.',
      features: ['Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Analytics'],
      gradient: 'from-pink-500 to-rose-500',
      price: ''
    },
    {
      icon: <Database className="w-12 h-12 text-teal-500" />,
      title: 'Database Management',
      description: 'Professional database design, optimization, and management services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
      gradient: 'from-teal-500 to-cyan-500',
      price: ''
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: 'Website Security',
      description: 'Comprehensive security solutions to protect your website from threats.',
      features: ['SSL Implementation', 'Malware Protection', 'Security Audits', 'Firewall Setup'],
      gradient: 'from-orange-500 to-red-500',
      price: ''
    },
    {
      icon: <Zap className="w-12 h-12 text-violet-500" />,
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced performance optimization techniques.',
      features: ['Speed Optimization', 'CDN Setup', 'Image Compression', 'Code Minification'],
      gradient: 'from-violet-500 to-purple-500',
      price: ''
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-500" />,
      title: 'Domain & Email Setup',
      description: 'Professional domain registration and business email setup services.',
      features: ['Domain Registration', 'Business Email', 'DNS Management', 'Email Security'],
      gradient: 'from-emerald-500 to-green-500',
      price: ''
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p 
            className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We offer comprehensive web development and digital solutions to help your business 
            succeed in the digital world with cutting-edge technology and competitive pricing.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl p-5 h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Icon */}
                <motion.div 
                  className="flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="glass-card dark:glass-card-dark rounded-xl p-2 group-hover:shadow-lg transition-all duration-300">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white text-center mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>

                {/* <p className="text-base lg:text-lg font-bold text-gray-900 dark:text-white text-center mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.features}
                </p> */}
                
                <p className="text-gray-600 dark:text-gray-300 text-center text-xs lg:text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-center mb-3">
                  <span className={`text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                </div>

{/* Features */}
<ul className="space-y-1">
  {service.features.map((feature, featureIndex) => (
    <motion.li
      key={featureIndex}
      className="flex items-center text-xs text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * featureIndex, duration: 0.3 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2 flex-shrink-0"
        whileHover={{ scale: 1.2 }}
      />
      {feature}
    </motion.li>
  ))}
</ul>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card dark:glass-card-dark rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-2xl" />
            <div className="relative z-10 text-white">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Ready to Get Started?
              </motion.h3>
              <motion.p 
                className="text-base lg:text-lg mb-5 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Let's discuss your project and bring your vision to life with our expert team.
              </motion.p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass-card dark:glass-card-dark bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 hover:text-blue-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
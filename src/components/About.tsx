import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Heart, Sparkles, TrendingUp, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge technologies and creative solutions.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: 'Passion',
      description: 'Our team is passionate about creating exceptional digital experiences.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Award className="w-10 h-10 text-purple-500" />,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: 'Collaboration',
      description: 'We work closely with clients to deliver tailored solutions.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Growth Focused',
      description: 'We help businesses achieve 300% faster growth through digital transformation.',
      stats: '300% Faster Growth'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Security First',
      description: 'Enterprise-grade security with SSL, data encryption, and regular backups.',
      stats: '99.9% Uptime'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or functionality.',
      stats: '48hr Response'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
            <span className="text-base font-semibold text-gray-600 dark:text-gray-300">
              Our Story
            </span>
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About M2H Web Solution
            </span>
          </motion.h2>

          <motion.p 
            className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We are a passionate team of developers, designers, and digital strategists 
            dedicated to transforming your digital presence and driving business growth.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-card dark:glass-card-dark rounded-2xl p-6 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
            <div className="flex items-center mb-4 relative z-10">
              <motion.div
                className="glass-card dark:glass-card-dark rounded-xl p-2 mr-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
              To empower businesses with innovative web solutions that drive growth, 
              enhance user experience, and deliver measurable results. We believe in 
              creating digital experiences that perform exceptionally well.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card dark:glass-card-dark rounded-2xl p-6 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
            <div className="flex items-center mb-4 relative z-10">
              <motion.div
                className="glass-card dark:glass-card-dark rounded-xl p-2 mr-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Eye className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
              To be the leading web development agency in India, known for delivering 
              cutting-edge solutions that help businesses thrive in the digital age. 
              We envision a future where every business has access to world-class web solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* New Achievements Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl lg:text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl p-6 text-center relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
                
                <motion.div 
                  className="flex items-center justify-center mb-3 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="glass-card dark:glass-card-dark rounded-xl p-2">
                    {achievement.icon}
                  </div>
                </motion.div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3 relative z-10">
                  {achievement.description}
                </p>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg inline-block relative z-10">
                  {achievement.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl lg:text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl p-5 text-center relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                <motion.div 
                  className="flex items-center justify-center mb-3 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="glass-card dark:glass-card-dark rounded-xl p-2">
                    {value.icon}
                  </div>
                </motion.div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Company Story */}
        <motion.div 
          className="glass-card dark:glass-card-dark rounded-2xl p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-2xl" />
          <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Story
            </motion.h3>
            
            <motion.p 
              className="text-base lg:text-lg leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Founded in 2022, M2H Web Solution began as a small team of passionate developers 
              with a big vision. We recognized the growing need for businesses to establish 
              a strong digital presence and decided to bridge that gap with innovative, 
              affordable web solutions.
            </motion.p>
            
            <motion.p 
              className="text-base lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Today, we've grown into a trusted partner for businesses across India, 
              helping them succeed online with custom web applications, stunning designs, 
              and comprehensive digital strategies. Our journey continues as we strive 
              to push the boundaries of what's possible in web development.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ExternalLink, Github, Zap, Globe, ShoppingCart, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment gateway integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Mobile Responsive'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare Portal',
      description: 'A comprehensive healthcare management system with appointment booking, patient records, and telemedicine features.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare',
      icon: <Heart className="w-8 h-8" />,
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      features: ['Appointment Booking', 'Patient Records', 'Telemedicine', 'Real-time Chat'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Business Website',
      description: 'Modern corporate website with CMS integration, SEO optimization, and lead generation forms.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      features: ['CMS Integration', 'SEO Optimized', 'Lead Generation', 'Analytics Dashboard'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for a SaaS platform with real-time data visualization and user management.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      features: ['Real-time Analytics', 'User Management', 'Data Visualization', 'API Integration'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Restaurant App',
      description: 'Food ordering app with menu management, order tracking, and delivery integration.',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Food & Beverage',
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
      features: ['Menu Management', 'Order Tracking', 'Payment Gateway', 'Push Notifications'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Educational Platform',
      description: 'Online learning platform with course management, video streaming, and student progress tracking.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Certificates'],
      gradient: 'from-purple-500 to-indigo-500'
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-cyan-500 animate-pulse" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Our Work
            </span>
            <Sparkles className="w-8 h-8 text-cyan-500 animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </motion.h2>

          <motion.p 
            className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore our recent projects and see how we've helped businesses transform 
            their digital presence with innovative solutions and cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden relative">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <motion.div 
                      className="glass-card dark:glass-card-dark rounded-xl p-2 text-white"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.icon}
                    </motion.div>
                    <span className="glass-card dark:glass-card-dark text-white px-3 py-1.5 rounded-xl text-sm font-semibold backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <motion.button 
                      className="glass-card dark:glass-card-dark rounded-xl p-2 text-white hover:bg-white/20 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button 
                      className="glass-card dark:glass-card-dark rounded-xl p-2 text-white hover:bg-white/20 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
{/* Technologies */}
<div className="flex flex-wrap gap-2 mb-4">
  {project.technologies.map((tech, techIndex) => (
    <motion.span
      key={techIndex}
      className={`glass-card dark:glass-card-dark bg-gradient-to-r ${project.gradient} 
                  text-black dark:text-white px-2 py-1 rounded-lg text-xs font-medium`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {tech}
    </motion.span>
  ))}
</div>



{/* Features */}
<div className="space-y-2">
  {project.features.map((feature, featureIndex) => (
    <motion.div
      key={featureIndex}
      className="flex items-center text-xs text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
    >
      <motion.div 
        className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mr-2 flex-shrink-0`}
        whileHover={{ scale: 1.2 }}
      />
      {feature}
    </motion.div>
  ))}
</div>


                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} 
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card dark:glass-card-dark rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-90 rounded-2xl" />
            <div className="relative z-10 text-white">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Have a Project in Mind?
              </motion.h3>
              
              <motion.p 
                className="text-base lg:text-lg mb-6 opacity-90"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Let's work together to create something amazing. Share your vision and we'll bring it to life.
              </motion.p>
              
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass-card dark:glass-card-dark bg-white text-black dark:text-white
 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 hover:text-blue-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
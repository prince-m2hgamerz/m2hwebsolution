import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Tech Innovations Pvt Ltd',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'M2H Web Solution delivered exactly what we needed. Their team is professional, responsive, and delivered our e-commerce platform on time. The results exceeded our expectations!',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Priya Sharma',
      position: 'Founder, Creative Studio',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with M2H was a game-changer for our business. They created a stunning website that perfectly represents our brand and significantly increased our online presence.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Amit Patel',
      position: 'Director, Healthcare Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The healthcare portal they developed for us is outstanding. The user interface is intuitive, and the backend functionality is robust. Highly recommend their services!',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Sneha Gupta',
      position: 'Marketing Manager, FoodDelight',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'M2H Web Solution helped us launch our food delivery app successfully. The app is user-friendly, fast, and has helped us reach more customers. Great work!',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Vikram Singh',
      position: 'Owner, Singh Enterprises',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Professional service, excellent communication, and outstanding results. They transformed our outdated website into a modern, mobile-friendly platform that drives results.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Anita Reddy',
      position: 'Principal, EduTech Institute',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The educational platform they built for us is fantastic. Students love the interface, and we\'ve seen a significant improvement in engagement. Thank you, M2H!',
      gradient: 'from-teal-500 to-blue-500'
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
    <section id="testimonials" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
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
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Client Love
            </span>
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>

          <motion.p 
            className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with M2H Web Solution and the amazing results we've achieved together.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-4 right-4 text-blue-500 opacity-20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Quote className="w-10 h-10" />
                </motion.div>

                {/* Rating */}
                <motion.div 
                  className="flex mb-4 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 italic text-base leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Client Info */}
                <motion.div 
                  className="flex items-center relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-xl object-cover mr-3 glass-card dark:glass-card-dark"
                    />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${testimonial.gradient} opacity-20`} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 glass-card dark:glass-card-dark rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90 rounded-2xl" />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative z-10 text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-base lg:text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Join Our Success Stories?
            </span>
          </motion.h3>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Let's create something amazing together. Contact us today to get started.
          </motion.p>
          
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="glass-card dark:glass-card-dark bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-black dark:text-white
 px-6 py-3 rounded-xl font-semibold text-sm hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
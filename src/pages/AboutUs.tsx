import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Calendar,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mohit Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Full-stack developer with 5+ years of experience in web technologies.'
    },
    {
      name: 'Harshit Singh',
      position: 'Co-Founder & CTO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in modern web frameworks and cloud architecture.'
    }
  ];

  const companyStats = [
    { icon: <Calendar className="w-8 h-8" />, label: 'Founded', value: '2023', color: 'text-blue-500' },
    { icon: <Users className="w-8 h-8" />, label: 'Team Members', value: '5+', color: 'text-green-500' },
    { icon: <Award className="w-8 h-8" />, label: 'Projects Completed', value: '50+', color: 'text-purple-500' },
    { icon: <TrendingUp className="w-8 h-8" />, label: 'Client Satisfaction', value: '100%', color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              About Our Company
            </span>
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              M2H Web Solution
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers and designers dedicated to creating 
            exceptional digital experiences that drive business growth and success.
          </p>
        </motion.div>

        {/* Company Information */}
        <motion.div 
          className="glass-card dark:glass-card-dark rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-500" />
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To empower businesses with innovative web solutions that drive growth, 
                enhance user experience, and deliver measurable results. We believe in 
                creating digital experiences that not only look great but also perform 
                exceptionally well.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Quality and Excellence
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Client Satisfaction
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Innovation and Creativity
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Transparency and Trust
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Company Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Registered Address</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Delhi, India - 110076
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Contact Numbers</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 9818322072<br />
                      +91 7678289728
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email Addresses</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@m2hwebsolution.com<br />
                      support@m2hwebsolution.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Website</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      www.m2hwebsolution.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Business Type</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Web Development & Digital Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card dark:glass-card-dark rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Information */}
        <motion.div 
          className="glass-card dark:glass-card-dark rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-2xl" />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose M2H Web Solution?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
                <p className="text-sm opacity-90">
                  Years of experience in delivering high-quality web solutions
                </p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                <p className="text-sm opacity-90">
                  We prioritize client satisfaction and long-term partnerships
                </p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                <p className="text-sm opacity-90">
                  Our solutions are designed to drive measurable business growth
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
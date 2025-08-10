import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
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
            <Scale className="w-8 h-8 text-purple-500" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Legal Agreement
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div 
          className="glass-card dark:glass-card-dark rounded-2xl p-8 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
              Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>By accessing and using M2H Web Solution's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services Description</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>M2H Web Solution provides web development, design, and digital marketing services including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom website development</li>
                <li>E-commerce solutions</li>
                <li>Mobile application development</li>
                <li>UI/UX design services</li>
                <li>SEO and digital marketing</li>
                <li>Website maintenance and support</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-yellow-500" />
              Payment Terms
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Payment terms and conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All payments are processed securely through Razorpay</li>
                <li>Payment is required before project commencement unless otherwise agreed</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are in Indian Rupees (INR) unless specified otherwise</li>
                <li>Additional charges may apply for scope changes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Upon full payment, clients receive ownership of the final deliverables. However:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>M2H Web Solution retains the right to showcase work in portfolios</li>
                <li>Third-party components may have separate licensing terms</li>
                <li>Source code and development methodologies remain our intellectual property</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>M2H Web Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>For questions about these Terms of Service, contact us:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>M2H Web Solution</strong></p>
                <p>Email: legal@m2hwebsolution.com</p>
                <p>Phone: +91 9818322072</p>
                <p>Address: Delhi, India</p>
                <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
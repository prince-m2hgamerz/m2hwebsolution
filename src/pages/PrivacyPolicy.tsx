import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Sparkles } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Legal Information
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacy Policy
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
              <Eye className="w-6 h-6 mr-3 text-blue-500" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or register for our services</li>
                <li>Make a purchase or payment</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>This information may include your name, email address, phone number, billing address, and payment information.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-green-500" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate about promotions, events, and other news</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-500" />
              Information Security
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Payment Information</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We use Razorpay as our payment processor. When you make a payment, your payment information is processed securely by Razorpay in compliance with PCI DSS standards. We do not store your complete credit card information on our servers.</p>
              <p>For more information about how Razorpay handles your payment data, please refer to Razorpay's Privacy Policy.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>M2H Web Solution</strong></p>
                <p>Email: privacy@m2hwebsolution.com</p>
                <p>Phone: +91 9818322072</p>
                <p>Address: Delhi, India</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
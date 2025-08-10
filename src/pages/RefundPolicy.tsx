import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Clock, CreditCard, AlertCircle } from 'lucide-react';

const RefundPolicy: React.FC = () => {
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
            <RefreshCw className="w-8 h-8 text-green-500" />
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Refund Information
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Refund & Cancellation Policy
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
              <Clock className="w-6 h-6 mr-3 text-blue-500" />
              Refund Eligibility
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We offer refunds under the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service cancellation within 24 hours of payment (before project initiation)</li>
                <li>Failure to deliver services as per agreed timeline without valid reason</li>
                <li>Major deviation from agreed project specifications</li>
                <li>Technical issues preventing service delivery</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-yellow-500" />
              Non-Refundable Services
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>The following services are non-refundable:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Completed and delivered projects</li>
                <li>Domain registration and hosting fees</li>
                <li>Third-party service costs (SSL certificates, premium plugins, etc.)</li>
                <li>Custom development work that has been completed</li>
                <li>Consultation and planning services already provided</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-green-500" />
              Refund Process
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us at refunds@m2hwebsolution.com with your order details</li>
                <li>Provide a detailed reason for the refund request</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>If approved, refunds will be processed within 5-7 business days</li>
                <li>Refunds will be credited to the original payment method</li>
              </ol>
              <p className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <strong>Note:</strong> Refund processing time may vary depending on your bank or payment provider. 
                Razorpay typically processes refunds within 5-7 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Partial Refunds</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>In some cases, partial refunds may be offered:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>When part of the project has been completed</li>
                <li>For milestone-based projects where some milestones are delivered</li>
                <li>When third-party costs cannot be recovered</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cancellation Policy</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Project cancellation terms:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation within 24 hours: Full refund (minus payment processing fees)</li>
                <li>Cancellation after project initiation: Charges apply for work completed</li>
                <li>Client-requested scope changes may affect cancellation terms</li>
                <li>Force majeure events may affect standard cancellation policies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact for Refunds</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>For refund requests or questions:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>M2H Web Solution - Refund Department</strong></p>
                <p>Email: refunds@m2hwebsolution.com</p>
                <p>Phone: +91 9818322072</p>
                <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                <p>Response Time: Within 24-48 hours</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
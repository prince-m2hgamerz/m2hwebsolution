import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919818322072'; // Replace with your actual WhatsApp number
    const message = 'Hello! I would like to discuss my project requirements.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 glass-card dark:glass-card-dark bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)",
        y: -3
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 0.8,
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      </motion.div>
      
      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-xl opacity-30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;
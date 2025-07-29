import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from './UserProfile';
import AuthModal from './auth/AuthModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass dark:glass-dark shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
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
                  <Code className="w-8 h-8 text-blue-500 drop-shadow-lg" />
                  <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse drop-shadow-lg" />
                </motion.div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                M2H Web Solution
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 capitalize"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <ThemeToggle />
              
              {!loading && (
                <>
                  {user ? (
                    <UserProfile />
                  ) : (
                    <div className="flex items-center space-x-3">
                      <motion.button
                        onClick={() => openAuthModal('login')}
                        className="glass-card dark:glass-card-dark text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Login</span>
                      </motion.button>
                      <motion.button
                        onClick={() => openAuthModal('register')}
                        className="glass-card dark:glass-card-dark text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Sign Up</span>
                      </motion.button>
                    </div>
                  )}
                </>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              {!loading && user && <UserProfile />}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 p-2"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden glass-card dark:glass-card-dark rounded-xl mt-3 overflow-hidden"
              >
                <div className="px-4 py-6 space-y-4">
                  {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 capitalize transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                  
                  {!loading && !user && (
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <motion.button
                        onClick={() => {
                          openAuthModal('login');
                          setIsOpen(false);
                        }}
                        className="w-full glass-card dark:glass-card-dark text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Login</span>
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          openAuthModal('register');
                          setIsOpen(false);
                        }}
                        className="w-full glass-card dark:glass-card-dark text-white px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Sign Up</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;
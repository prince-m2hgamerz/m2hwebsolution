import React from 'react';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { initializeDatabase } from './lib/database';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </AuthProvider>
  );
}

export default App;
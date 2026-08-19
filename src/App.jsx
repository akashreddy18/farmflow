import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';
import ProblemSolution from './sections/ProblemSolution';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup'

  const handleSignIn = () => {
    setAuthMode('signin');
    setIsAuthOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-[#070a13] dark:text-gray-150 transition-colors duration-200 selection:bg-emerald-500 selection:text-white">
        {/* Navigation Header */}
        <Navbar onSignInClick={handleSignIn} onSignUpClick={handleSignUp} />
        
        {/* Main Sections */}
        <main className="flex-grow">
          <Hero onSignUpClick={handleSignUp} />
          <ProductPreview />
          <ProblemSolution />
          <Features />
          <HowItWorks />
          <FinalCTA onSignUpClick={handleSignUp} />
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Modal Overlay */}
        <AnimatePresence>
          {isAuthOpen && (
            <AuthModal
              isOpen={isAuthOpen}
              onClose={() => setIsAuthOpen(false)}
              initialMode={authMode}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';
import ProblemSolution from './sections/ProblemSolution';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-[#070a13] dark:text-gray-150 transition-colors duration-200 selection:bg-emerald-500 selection:text-white">
        {/* Navigation Header */}
        <Navbar />
        
        {/* Main Sections */}
        <main className="flex-grow">
          <Hero />
          <ProductPreview />
          <ProblemSolution />
          <Features />
          <HowItWorks />
          <FinalCTA />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

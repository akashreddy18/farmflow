import React, { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#070a13]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group focus-visible:outline-none">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                FarmFlow
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#signin"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors px-3 py-1.5"
              >
                Sign in
              </a>
              <a
                href="#getstarted"
                className="text-sm font-medium bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-sm shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all cursor-pointer"
              >
                Get started
              </a>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 w-full z-30 md:hidden glass-panel border-b border-gray-200 dark:border-slate-800 py-6 px-4 shadow-xl"
          >
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 px-3 hover:bg-gray-100/50 dark:hover:bg-slate-850 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
              <a
                href="#signin"
                onClick={() => setIsOpen(false)}
                className="text-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2.5 hover:bg-gray-100/50 dark:hover:bg-slate-850 rounded-lg transition-all"
              >
                Sign in
              </a>
              <a
                href="#getstarted"
                onClick={() => setIsOpen(false)}
                className="text-center font-medium bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-2.5 rounded-lg shadow-sm shadow-emerald-500/10 transition-all"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

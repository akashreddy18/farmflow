import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100/80 hover:bg-gray-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-gray-600 dark:text-gray-300 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 border border-gray-200/50 dark:border-slate-700/50 relative w-9 h-9 flex items-center justify-center overflow-hidden cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ 
          scale: isDark ? 1 : 0, 
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-amber-400" />
      </motion.div>
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{ 
          scale: isDark ? 0 : 1, 
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-slate-600" />
      </motion.div>
    </button>
  );
}

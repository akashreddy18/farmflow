import React from 'react';
import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#070a13] border-t border-gray-200/60 dark:border-slate-800/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
              <div className="w-7 h-7 rounded bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white">
                <Sprout className="w-3.5 h-3.5" />
              </div>
              <span className="text-base tracking-tight">FarmFlow</span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              FarmFlow is a specialized planning and cost-tracking workspace designed for individual farmers, managers, and agricultural operations to understand margins and grow their profits.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="text-xs sm:text-sm text-gray-650 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Product Preview
                </a>
              </li>
              <li>
                <a href="#features" className="text-xs sm:text-sm text-gray-650 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-xs sm:text-sm text-gray-650 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  How it works
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-xs sm:text-sm text-gray-650 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-xs sm:text-sm text-gray-650 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-150/40 dark:border-slate-800/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} FarmFlow. Built for the Acdyon frontend assignment. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Simple SVGs for social media links */}
            <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded">
              Demo Version
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

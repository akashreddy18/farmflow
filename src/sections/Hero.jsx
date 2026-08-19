import React from 'react';
import { motion } from 'framer-motion';
import DashboardMockup from '../components/DashboardMockup';
import { Play } from 'lucide-react';

export default function Hero({ onSignUpClick }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gray-50/30 dark:bg-[#070a13]/30">
      {/* Visual background grids */}
      <div className="absolute inset-0 pointer-events-none grid-bg-light dark:grid-bg-dark opacity-70"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] aspect-square rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] aspect-square rounded-full bg-emerald-600/10 dark:bg-emerald-600/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-250/20 dark:border-emerald-800/30"
            >
              <span>Now in Active Beta</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.08] tracking-tight"
            >
              Know what your farm earns — <span className="text-emerald-600 dark:text-emerald-400">before harvest.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-650 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              FarmFlow brings crop expenses, equipment costs, inputs and sales into one simple workspace, so you can make better decisions from planting to harvest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onSignUpClick}
                className="w-full sm:w-auto px-7 py-3.5 text-center font-semibold bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all cursor-pointer border-none"
              >
                Start planning
              </button>
              <a
                href="#product"
                className="w-full sm:w-auto px-7 py-3.5 text-center font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-slate-800 transition-colors">
                  <Play className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400 fill-current" />
                </div>
                <span>See how it works</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative w-full"
          >
            {/* Visual halo effect behind dashboard */}
            <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/[0.02] rounded-2xl blur-3xl -z-10 scale-90"></div>
            
            {/* Hover floating container */}
            <div className="animate-float">
              <DashboardMockup variant="compact" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

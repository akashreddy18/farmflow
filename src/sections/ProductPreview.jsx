import React from 'react';
import { motion } from 'framer-motion';
import DashboardMockup from '../components/DashboardMockup';

export default function ProductPreview() {
  return (
    <section id="product" className="py-20 md:py-28 bg-white dark:bg-[#070a13] relative scroll-mt-20">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[10%] w-[35%] aspect-square rounded-full bg-emerald-500/5 blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[35%] aspect-square rounded-full bg-teal-600/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Your entire crop cycle, <span className="text-emerald-600 dark:text-emerald-400">in one view.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400"
          >
            Say goodbye to scattered notebooks and complicated spreadsheets. FarmFlow organizes every input, labor expense, machinery hour and grain contract into a single collaborative cockpit.
          </motion.p>
        </div>

        {/* Full Dashboard Mockup Container with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle frame glow for premium effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-20 dark:opacity-30"></div>
          
          <div className="relative">
            <DashboardMockup variant="full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

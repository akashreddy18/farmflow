import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Add your crop',
      description: 'Define your field boundaries, seed variety, and total acres planted. Set your target yield expectations.'
    },
    {
      num: '02',
      title: 'Track your investment',
      description: 'Quickly log seeds, fertilizers, chemical sprays, equipment leases, and worker hours as you apply them.'
    },
    {
      num: '03',
      title: 'Understand your return',
      description: 'Record harvest yields and sale contracts to immediately compare your total costs against actual revenue.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50/30 dark:bg-slate-900/10 border-t border-gray-150/40 dark:border-slate-800/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How FarmFlow works
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
            A direct, three-step process built to slot seamlessly into your existing farm routine.
          </p>
        </div>

        {/* Stepper Steps Row */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1.5px] border-t border-dashed border-gray-200 dark:border-slate-800 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="space-y-4 flex flex-col items-center"
              >
                {/* Step Indicator */}
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 select-none z-10">
                  {step.num}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

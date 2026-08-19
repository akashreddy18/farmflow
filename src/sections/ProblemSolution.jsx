import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, CheckCircle, Smartphone, BarChart3, CalendarRange } from 'lucide-react';

export default function ProblemSolution() {
  const steps = [
    {
      num: '01',
      title: 'Track',
      description: 'Record inputs, machinery usage, fuel, and labour hours on the go. Stop losing invoices and relying on memory.',
      icon: Smartphone,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
    },
    {
      num: '02',
      title: 'Understand',
      description: 'See live cost-per-acre metrics and margin projections. Instantly spot where budgets are being stretched.',
      icon: BarChart3,
      color: 'text-teal-650 dark:text-teal-400 bg-teal-500/10'
    },
    {
      num: '03',
      title: 'Plan',
      description: 'Use historical crop cycle data to run scenario simulations, negotiate inputs, and forecast next year\'s profit.',
      icon: CalendarRange,
      color: 'text-amber-650 dark:text-amber-400 bg-amber-500/10'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-slate-900/20 border-y border-gray-150/40 dark:border-slate-800/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Splitting: Left Problem, Right solution intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              The Reality of Farm Admin
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Farm expenses are often scattered across notebooks, messages and memory.
            </h3>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-gray-650 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Relying on paper receipts, spreadsheets that break, or checking balances at the end of the year leaves you in the dark. FarmFlow structures your financial workflow so you can manage your operations with data-driven confidence.
            </p>
          </div>
        </div>

        {/* 3 Solutions Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl border border-gray-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-gray-200 dark:text-slate-800 select-none">
                    {step.num}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

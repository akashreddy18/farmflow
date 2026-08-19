import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sprout, Wrench, Scale } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'Expense tracking',
      description: 'Record every input and understand where your money goes.',
      detail: 'Log seed bags, herbicide formulas, and specialized crop sprays. Categorize transactions instantly to review seasonal trends.',
      icon: Calculator,
      color: 'from-emerald-500/10 to-emerald-600/5 text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'Crop profitability',
      description: 'Compare investment and expected returns for each crop cycle.',
      detail: 'Analyze real-time revenue projections based on actual crop status. Know exactly how weather variations affect your final profit margin.',
      icon: Sprout,
      color: 'from-teal-500/10 to-teal-650/5 text-teal-600 dark:text-teal-400'
    },
    {
      title: 'Equipment costs',
      description: 'Track machinery and equipment costs without losing the bigger picture.',
      detail: 'Account for diesel fuel consumption, maintenance labor, and harvester operating leases directly against individual fields.',
      icon: Wrench,
      color: 'from-blue-500/10 to-blue-600/5 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Sales tracking',
      description: 'Record sales and compare revenue against total crop investment.',
      detail: 'Log grain elevator tickets, contracts, and private sales. Instantly compare crop revenue to evaluate overall farm performance.',
      icon: Scale,
      color: 'from-amber-500/10 to-amber-600/5 text-amber-600 dark:text-amber-400'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-[#070a13] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Product Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Built for modern farm management.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Every feature is designed to reduce mental overhead and deliver immediate clarity about your agricultural financials.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {featuresList.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl border border-gray-250/50 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-emerald-500/30 dark:hover:border-emerald-400/25 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feat.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Copy */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {feat.description}
                    </p>
                    <p className="text-xs text-gray-550 dark:text-gray-400 leading-relaxed pt-1">
                      {feat.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

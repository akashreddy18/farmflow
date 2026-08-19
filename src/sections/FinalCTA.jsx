import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#070a13] relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-slate-900 dark:bg-slate-950/60 border border-slate-800 text-center px-6 py-12 md:py-16 md:px-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle grid pattern in card */}
          <div className="absolute inset-0 pointer-events-none grid-bg-dark opacity-10"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Make every crop decision with <span className="text-emerald-400">better numbers.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-350 leading-relaxed max-w-md mx-auto">
              Bring your farm's costs and returns into one clear view. Start optimizing your margins today.
            </p>
            <div className="pt-4">
              <a
                href="#getstarted"
                className="inline-block px-8 py-4 text-center font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/10 transition-all transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                Get started
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Free 14-day sample workspace. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

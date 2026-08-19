import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, User, Sprout, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  
  // Fields State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [farmName, setFarmName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Validation Errors
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signup') {
      if (!farmName.trim()) {
        newErrors.farmName = 'Farm Name is required';
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate static API call/latency
      setTimeout(() => {
        setIsSubmitting(false);
        if (mode === 'signin') {
          setSuccessMsg(`Welcome back to FarmFlow! Loading workspace...`);
        } else {
          setSuccessMsg('Account created successfully! Welcome to FarmFlow!');
        }
        
        // Auto-close modal after 2 seconds
        setTimeout(() => {
          setEmail('');
          setPassword('');
          setFarmName('');
          setConfirmPassword('');
          setSuccessMsg('');
          onClose();
        }, 1800);
      }, 1000);
    }
  };

  const handleSwitchMode = (newMode) => {
    setMode(newMode);
    setErrors({});
    setSuccessMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#070a13]/70 backdrop-blur-md"
      />

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-md bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 md:p-8"
      >
        {/* Glow backdrop behind modal */}
        <div className="absolute -top-[20%] -left-[20%] w-[50%] aspect-square rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[80px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-150/40 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header / Brand */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-emerald-500/20">
            <Sprout className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
            {mode === 'signin' 
              ? 'Enter details below to access your farm metrics.' 
              : 'Start your 14-day sample farm workspace.'}
          </p>
        </div>

        {successMsg ? (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {successMsg}
            </p>
          </motion.div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Farm Name (Only for Sign Up) */}
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Farm Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Oak Creek Meadows"
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                    className={`w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-slate-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-650 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                      errors.farmName ? 'border-rose-500' : 'border-gray-200 dark:border-slate-800'
                    }`}
                  />
                </div>
                {errors.farmName && (
                  <p className="text-[10px] text-rose-500 font-semibold">{errors.farmName}</p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-slate-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-650 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.email ? 'border-rose-500' : 'border-gray-200 dark:border-slate-800'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-rose-500 font-semibold">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-slate-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-650 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.password ? 'border-rose-500' : 'border-gray-200 dark:border-slate-800'
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-[10px] text-rose-500 font-semibold">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password (Only for Sign Up) */}
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Confirm Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-slate-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-650 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                      errors.confirmPassword ? 'border-rose-500' : 'border-gray-200 dark:border-slate-800'
                    }`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-[10px] text-rose-500 font-semibold">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                /* Loading Spinner */
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                mode === 'signin' ? 'Sign In' : 'Create Account'
              )}
            </button>

            {/* Modal Switch link */}
            <div className="pt-2 text-center text-xs">
              {mode === 'signin' ? (
                <p className="text-gray-500 dark:text-gray-400">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => handleSwitchMode('signup')}
                    className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => handleSwitchMode('signin')}
                    className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

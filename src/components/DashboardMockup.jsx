import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Layers, 
  Wrench, 
  User, 
  Droplet, 
  Sprout, 
  ChevronRight,
  ArrowDownRight,
  ArrowUpRight,
  Sliders,
  Info
} from 'lucide-react';

const CROP_DATA = {
  wheat: {
    name: 'Winter Wheat',
    acres: 120,
    defaultYield: 72,
    minYield: 40,
    maxYield: 100,
    defaultPrice: 6.80,
    minPrice: 4.50,
    maxPrice: 9.50,
    unit: 'Bu/Acre',
    investment: {
      seed: 4200,
      fertilizer: 11500,
      labour: 6000,
      equipment: 8400,
      other: 3200,
    },
    transactions: [
      { id: 'tx-1', name: 'Certified Winter Wheat Seeds', category: 'Seed', amount: 4200, date: 'Aug 12, 2026' },
      { id: 'tx-2', name: 'Liquid N-P-K Application', category: 'Fertilizer', amount: 7800, date: 'Aug 15, 2026' },
      { id: 'tx-3', name: 'Soil Preparation Labor', category: 'Labour', amount: 1800, date: 'Aug 18, 2026' },
      { id: 'tx-4', name: 'Planter Attachment Maintenance', category: 'Equipment', amount: 1200, date: 'Aug 20, 2026' },
    ]
  },
  soybeans: {
    name: 'Organic Soybeans',
    acres: 90,
    defaultYield: 48,
    minYield: 25,
    maxYield: 70,
    defaultPrice: 13.20,
    minPrice: 9.00,
    maxPrice: 18.00,
    unit: 'Bu/Acre',
    investment: {
      seed: 5100,
      fertilizer: 6400,
      labour: 7500,
      equipment: 7200,
      other: 2800,
    },
    transactions: [
      { id: 'tx-1', name: 'Non-GMO Organic Soybean Seeds', category: 'Seed', amount: 5100, date: 'Aug 05, 2026' },
      { id: 'tx-2', name: 'Organic Inoculants & Compost', category: 'Fertilizer', amount: 4200, date: 'Aug 09, 2026' },
      { id: 'tx-3', name: 'No-Till Seed Drill Rental', category: 'Equipment', amount: 2400, date: 'Aug 11, 2026' },
      { id: 'tx-4', name: 'Seasonal Hauling Prep Labour', category: 'Labour', amount: 3500, date: 'Aug 14, 2026' },
    ]
  },
  corn: {
    name: 'Yellow Corn',
    acres: 150,
    defaultYield: 180,
    minYield: 100,
    maxYield: 240,
    defaultPrice: 4.50,
    minPrice: 3.00,
    maxPrice: 7.00,
    unit: 'Bu/Acre',
    investment: {
      seed: 12000,
      fertilizer: 22500,
      labour: 10000,
      equipment: 15000,
      other: 5500,
    },
    transactions: [
      { id: 'tx-1', name: 'High-Yield Hybrid Corn Seeds', category: 'Seed', amount: 12000, date: 'Jul 28, 2026' },
      { id: 'tx-2', name: 'Anhydrous Ammonia Application', category: 'Fertilizer', amount: 16000, date: 'Aug 02, 2026' },
      { id: 'tx-3', name: 'Grain Dryer Gas Hookup', category: 'Equipment', amount: 5800, date: 'Aug 06, 2026' },
      { id: 'tx-4', name: 'Field Scouting Crew Services', category: 'Labour', amount: 4000, date: 'Aug 10, 2026' },
    ]
  }
};

const formatCurrency = (val) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(val);
};

export default function DashboardMockup({ variant = 'compact' }) {
  const [activeCropKey, setActiveCropKey] = useState('wheat');
  const activeCrop = CROP_DATA[activeCropKey];
  
  // Interactive Sliders State
  const [yieldVal, setYieldVal] = useState(activeCrop.defaultYield);
  const [priceVal, setPriceVal] = useState(activeCrop.defaultPrice);

  // Sync state when crop changes
  useEffect(() => {
    setYieldVal(activeCrop.defaultYield);
    setPriceVal(activeCrop.defaultPrice);
  }, [activeCropKey, activeCrop]);

  // Calculations
  const totalInvestment = Object.values(activeCrop.investment).reduce((a, b) => a + b, 0);
  const expectedRevenue = yieldVal * priceVal * activeCrop.acres;
  const estimatedProfit = expectedRevenue - totalInvestment;
  const marginPercentage = expectedRevenue > 0 ? (estimatedProfit / expectedRevenue) * 100 : 0;

  // Expense Categories mapping for chart
  const expenseCategories = [
    { name: 'Seed', value: activeCrop.investment.seed, color: 'bg-emerald-500', icon: Sprout },
    { name: 'Fertilizer', value: activeCrop.investment.fertilizer, color: 'bg-teal-500', icon: Droplet },
    { name: 'Labour', value: activeCrop.investment.labour, color: 'bg-amber-500', icon: User },
    { name: 'Equipment', value: activeCrop.investment.equipment, color: 'bg-blue-500', icon: Wrench },
    { name: 'Other / Fuel', value: activeCrop.investment.other, color: 'bg-slate-400 dark:bg-slate-500', icon: Layers },
  ];

  return (
    <div className="w-full text-left rounded-2xl border border-gray-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden font-sans">
      {/* Dashboard Top bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 border-b border-gray-100 dark:border-slate-800/80 bg-gray-50/50 dark:bg-slate-900/40 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm shadow-emerald-500/20">
            FF
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">FarmFlow Workspace</span>
              <span className="text-[10px] tracking-wider uppercase font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-800/30">
                Demo Workspace
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crop Cycle Planning</p>
          </div>
        </div>

        {/* Crop Selector Tabs */}
        <div className="flex rounded-lg bg-gray-200/50 dark:bg-slate-800/50 p-1 border border-gray-200/20">
          {Object.entries(CROP_DATA).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveCropKey(key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeCropKey === key 
                  ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="p-6 space-y-6">
        {/* Row 1: KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Total Investment */}
          <div className="p-4 rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/30 dark:bg-slate-900/20 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
                Total Investment
              </p>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                {formatCurrency(totalInvestment)}
              </h4>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center text-[10px] text-gray-500 mb-1">
                <span>Spent-to-Budget</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">100% Allocated</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 dark:bg-emerald-500 h-full w-full rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Expected Revenue */}
          <div className="p-4 rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/30 dark:bg-slate-900/20 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
                Expected Revenue
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {formatCurrency(expectedRevenue)}
                </h4>
                <span className="text-[10px] text-gray-400 font-medium">
                  {activeCrop.acres} Acres
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-500">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Based on yield & market price</span>
            </div>
          </div>

          {/* Card 3: Estimated Net Profit */}
          <div className="p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/20 dark:bg-emerald-950/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">
                  Estimated Profit
                </p>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  estimatedProfit >= 0 
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  {marginPercentage.toFixed(1)}% Margin
                </span>
              </div>
              <h4 className={`text-xl font-bold mt-1 ${
                estimatedProfit >= 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
              }`}>
                {formatCurrency(estimatedProfit)}
              </h4>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[10px] text-emerald-600/80 dark:text-emerald-400/80">
              <Info className="w-3 h-3" />
              <span>Auto-calculating harvest projections</span>
            </div>
          </div>
        </div>

        {/* Row 2: Charts & Data breakdown */}
        <div className={`grid grid-cols-1 gap-6 ${variant === 'full' ? 'lg:grid-cols-12' : 'lg:grid-cols-2'}`}>
          
          {/* Expense Breakdown Card */}
          <div className={`p-5 rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/10 dark:bg-slate-900/10 ${variant === 'full' ? 'lg:col-span-6' : ''}`}>
            <h5 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Expense Allocation
            </h5>
            
            {/* Visual Breakdown Bar Chart */}
            <div className="w-full h-4 rounded-full overflow-hidden flex mb-6">
              {expenseCategories.map((cat) => {
                const percentage = (cat.value / totalInvestment) * 100;
                return (
                  <div 
                    key={cat.name} 
                    className={`${cat.color} h-full`} 
                    style={{ width: `${percentage}%` }}
                    title={`${cat.name}: ${formatCurrency(cat.value)} (${percentage.toFixed(0)}%)`}
                  />
                );
              })}
            </div>

            {/* List with Icons and Percentages */}
            <div className="space-y-3">
              {expenseCategories.map((cat) => {
                const percentage = (cat.value / totalInvestment) * 100;
                const IconComponent = cat.icon;
                return (
                  <div key={cat.name} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className={`w-6 h-6 rounded flex items-center justify-center ${cat.color} bg-opacity-10 dark:bg-opacity-10`}>
                        <IconComponent className={`w-3.5 h-3.5`} style={{ color: `var(--color-brand-500)` }} />
                      </div>
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-900 dark:text-gray-100 font-semibold">{formatCurrency(cat.value)}</span>
                      <span className="text-[10px] text-gray-400 font-medium w-8 text-right">{percentage.toFixed(0)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Calculator Sliders (Only in variant="full") */}
          {variant === 'full' && (
            <div className="p-5 rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/10 dark:bg-slate-900/10 lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h5 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Profitability Calculator
                </h5>
              </div>

              {/* Slider 1: Yield */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Estimated Yield:</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {yieldVal} {activeCrop.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={activeCrop.minYield}
                  max={activeCrop.maxYield}
                  step="1"
                  value={yieldVal}
                  onChange={(e) => setYieldVal(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-400 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>Min: {activeCrop.minYield}</span>
                  <span>Target: {activeCrop.defaultYield}</span>
                  <span>Max: {activeCrop.maxYield}</span>
                </div>
              </div>

              {/* Slider 2: Target Sale Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Target Sale Price:</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ${priceVal.toFixed(2)} / Bu
                  </span>
                </div>
                <input
                  type="range"
                  min={activeCrop.minPrice}
                  max={activeCrop.maxPrice}
                  step="0.1"
                  value={priceVal}
                  onChange={(e) => setPriceVal(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-400 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>Min: ${activeCrop.minPrice.toFixed(2)}</span>
                  <span>Target: ${activeCrop.defaultPrice.toFixed(2)}</span>
                  <span>Max: ${activeCrop.maxPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-lg border border-emerald-500/10 text-xs text-gray-600 dark:text-gray-400">
                <p>
                  <strong>How this works:</strong> Drag the sliders to simulate changes in weather yields and global crop market pricing. See the Estimated Profit card recalculate margins dynamically.
                </p>
              </div>
            </div>
          )}

          {/* Recent Transactions Card */}
          <div className={`p-5 rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/10 dark:bg-slate-900/10 ${variant === 'full' ? 'lg:col-span-12' : ''}`}>
            <h5 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Recent Activity
            </h5>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-800 text-[10px] text-gray-400 uppercase font-semibold">
                    <th className="pb-2 text-left font-semibold">Description</th>
                    <th className="pb-2 text-left font-semibold">Category</th>
                    <th className="pb-2 text-left font-semibold">Date</th>
                    <th className="pb-2 text-right font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100/50 dark:divide-slate-800/50">
                  {activeCrop.transactions.map((tx) => (
                    <tr key={tx.id} className="text-xs">
                      <td className="py-2.5 font-medium text-gray-800 dark:text-gray-200">{tx.name}</td>
                      <td className="py-2.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
                          {tx.category}
                        </span>
                      </td>
                      <td className="py-2.5 text-gray-500">{tx.date}</td>
                      <td className="py-2.5 text-right font-semibold text-gray-900 dark:text-gray-100">
                        {formatCurrency(tx.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      
      {/* Dashboard Footer */}
      <div className="px-6 py-3 border-t border-gray-100 dark:border-slate-800/80 bg-gray-50/30 dark:bg-slate-900/20 flex justify-between items-center text-[10px] text-gray-400">
        <span>Cycle Period: May 2026 — Oct 2026</span>
        <span>Auto-sync active</span>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Pricing plans for{' '}
                <span className="text-green-400">every need</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Scale as you go with plans designed to match your growth.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Free Plan Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Start for free.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get access to:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      All core features
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      Built-in integrations
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      Authentication system
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      Database functionality
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg"
                >
                  Start building
                </motion.button>
              </div>
            </div>

            {/* Paid Plan Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Paid plans from{' '}
                    <span className="text-3xl">$20/mo</span>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Upgrade as you go for more credits, more features, and more support.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg"
                >
                  See all plans
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

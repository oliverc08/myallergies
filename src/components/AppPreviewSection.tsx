'use client';

import { motion } from 'framer-motion';
import { Plus, Edit3, Sparkles, ArrowUp } from 'lucide-react';

export function AppPreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Simple. Easy. Awesome.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                MyAllergies allergy cards can easily be stored on your phone, in your wallet, or printed out and carried with you. Now, you don&apos;t have to worry about forgetting or losing your card.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Generate yours
            </motion.button>
          </motion.div>

          {/* Right Section - App Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-blue-50/30 to-orange-100/50 rounded-3xl blur-xl" />
            
            {/* Main Preview Card */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* App Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">AllergyTracker</h3>
              </div>

              {/* Interactive Prompt Overlay */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Create an app that helps people track their allergies and generate personalized digital cards for restaurants and medical visits
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium rounded-full transition-colors duration-200">
                    <Plus className="w-3 h-3" />
                  </button>
                  
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium rounded-full transition-colors duration-200">
                    <Edit3 className="w-3 h-3" />
                    Add styling
                  </button>
                  
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium rounded-full transition-colors duration-200">
                    <Sparkles className="w-3 h-3" />
                    Improve prompt
                  </button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors duration-200 shadow-md"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Blurred App Content */}
              <div className="space-y-4 opacity-60 blur-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-900">This Month</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-gray-900">3</span>
                    <span className="text-sm text-gray-500">Cards Generated</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-gray-700">Recent Cards</h5>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Peanut Allergy Card</span>
                      <span>2 days ago</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Shellfish Alert Card</span>
                      <span>1 week ago</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Gluten Free Card</span>
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h5>
                  <div className="flex gap-2">
                    <div className="w-16 h-8 bg-gray-200 rounded-lg" />
                    <div className="w-20 h-8 bg-gray-200 rounded-lg" />
                    <div className="w-14 h-8 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

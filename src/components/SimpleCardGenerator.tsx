'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export interface SimpleAllergyData {
  allergies: string[];
  language: string;
  name?: string;
}

export function SimpleCardGenerator() {
  const [allergyData, setAllergyData] = useState<SimpleAllergyData>({
    allergies: [],
    language: 'english',
    name: '',
  });

  const handleDataChange = (data: Partial<SimpleAllergyData>) => {
    setAllergyData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Your Allergy Information
          </h2>
          
          {/* Simple form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={allergyData.name || ''}
                onChange={(e) => handleDataChange({ name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Target Language
              </label>
              <select
                value={allergyData.language}
                onChange={(e) => handleDataChange({ language: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              >
                <option value="english">English</option>
                <option value="spanish">Español</option>
                <option value="japanese">日本語</option>
                <option value="mandarin">中文</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Allergies (comma-separated)
              </label>
              <textarea
                value={allergyData.allergies.join(', ')}
                onChange={(e) => {
                  const allergies = e.target.value.split(',').map(a => a.trim()).filter(a => a);
                  handleDataChange({ allergies });
                }}
                placeholder="Peanuts, Tree Nuts, Milk, etc."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Card Preview
          </h2>
          
          {allergyData.allergies.length > 0 ? (
            <div className="bg-white border-2 border-border rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground">FOOD ALLERGY CARD</h3>
                <p className="text-sm text-muted-foreground">Please help me stay safe while dining</p>
              </div>
              
              {allergyData.name && (
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    Name: {allergyData.name}
                  </p>
                </div>
              )}
              
              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">I am allergic to:</p>
                <div className="grid grid-cols-2 gap-2">
                  {allergyData.allergies.map((allergy, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <span className="text-sm font-medium text-red-800">{allergy}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Language: {allergyData.language}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">Enter your allergies to see a preview</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AllergyForm } from './AllergyForm';
import { CardPreview } from './CardPreview';
import { SimpleDownloadButton } from './SimpleDownloadButton';

export interface AllergyData {
  allergies: string[];
  language: string;
  name?: string;
}

export function CardGenerator() {
  const [allergyData, setAllergyData] = useState<AllergyData>({
    allergies: [],
    language: 'english',
    name: '',
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleDataChange = (data: Partial<AllergyData>) => {
    setAllergyData(prev => ({ ...prev, ...data }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation time
    setTimeout(() => {
      setIsGenerating(false);
    }, 1000);
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
          <AllergyForm 
            data={allergyData} 
            onChange={handleDataChange}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Card Preview
            </h2>
            {allergyData.allergies.length > 0 && (
              <SimpleDownloadButton allergyData={allergyData} />
            )}
          </div>
          <CardPreview 
            data={allergyData} 
            isGenerating={isGenerating}
          />
        </div>
      </motion.div>
    </div>
  );
}

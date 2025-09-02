'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Globe, User } from 'lucide-react';
import { AllergyData } from './CardGenerator';

interface AllergyFormProps {
  data: AllergyData;
  onChange: (data: Partial<AllergyData>) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const commonAllergies = [
  'Peanuts', 'Tree Nuts', 'Milk', 'Eggs', 'Fish', 'Shellfish', 
  'Soy', 'Wheat', 'Sesame', 'Mustard', 'Celery', 'Lupin',
  'Sulfites', 'Gluten', 'Dairy', 'Lactose'
];

const languages = [
  { value: 'english', label: 'English', flag: '🇺🇸' },
  { value: 'spanish', label: 'Español', flag: '🇪🇸' },
  { value: 'japanese', label: '日本語', flag: '🇯🇵' },
  { value: 'mandarin', label: '中文', flag: '🇨🇳' },
];

export function AllergyForm({ data, onChange, onGenerate, isGenerating }: AllergyFormProps) {
  const [customAllergy, setCustomAllergy] = useState('');

  const addAllergy = (allergy: string) => {
    if (allergy && !data.allergies.includes(allergy)) {
      onChange({ allergies: [...data.allergies, allergy] });
    }
  };

  const removeAllergy = (allergy: string) => {
    onChange({ allergies: data.allergies.filter(a => a !== allergy) });
  };

  const handleCustomAllergySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAllergy.trim()) {
      addAllergy(customAllergy.trim());
      setCustomAllergy('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          <User className="inline h-4 w-4 mr-2" />
          Your Name (Optional)
        </label>
        <input
          type="text"
          value={data.name || ''}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Enter your name"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
        />
      </div>

      {/* Language Selection */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          <Globe className="inline h-4 w-4 mr-2" />
          Target Language
        </label>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => onChange({ language: lang.value })}
              className={`p-3 rounded-lg border transition-all text-left ${
                data.language === lang.value
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-background hover:bg-muted'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Common Allergies */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Select Your Allergies
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {commonAllergies.map((allergy) => (
            <button
              key={allergy}
              onClick={() => {
                if (data.allergies.includes(allergy)) {
                  removeAllergy(allergy);
                } else {
                  addAllergy(allergy);
                }
              }}
              className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                data.allergies.includes(allergy)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-background hover:bg-muted'
              }`}
            >
              {allergy}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Allergy Input */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Add Custom Allergy
        </label>
        <form onSubmit={handleCustomAllergySubmit} className="flex gap-2">
          <input
            type="text"
            value={customAllergy}
            onChange={(e) => setCustomAllergy(e.target.value)}
            placeholder="Enter custom allergy"
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Plus className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* Selected Allergies */}
      {data.allergies.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Selected Allergies ({data.allergies.length})
          </label>
          <div className="flex flex-wrap gap-2">
            {data.allergies.map((allergy) => (
              <motion.div
                key={allergy}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg"
              >
                <span className="text-sm font-medium text-primary">{allergy}</span>
                <button
                  onClick={() => removeAllergy(allergy)}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Generate Button */}
      <div className="pt-4">
        <button
          onClick={onGenerate}
          disabled={data.allergies.length === 0 || isGenerating}
          className="w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isGenerating ? 'Generating...' : 'Generate Allergy Card'}
        </button>
      </div>
    </div>
  );
}

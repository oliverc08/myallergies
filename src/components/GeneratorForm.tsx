'use client';

import { useRef } from 'react';

export interface GeneratorFormProps {
  state: {
    conditionType: string;
    headline: string;
    description: string;
    foods: string[];
    caution: string;
    language: string;
    emergencyContact?: string;
  };
  onChange: (next: Partial<GeneratorFormProps['state']>) => void;
}

export function GeneratorForm({ state, onChange }: GeneratorFormProps) {
  // Presets for dropdowns
  const headlinePresets: Record<string, string[]> = {
    Intolerance: [
      'I am lactose intolerant.',
      'I am gluten intolerant.',
      'I am fructose intolerant.',
    ],
    Allergy: [
      'I have a severe dairy allergy.',
      'I have a severe peanut allergy.',
      'I have a severe shellfish allergy.',
    ],
  };

  const descriptionPresets: Record<string, string[]> = {
    Intolerance: [
      'I cannot consume food or drinks that contain this ingredient, or I will become very ill. It can be found in:',
      'Please avoid serving me products containing this ingredient. It is commonly present in:',
    ],
    Allergy: [
      'I must strictly avoid this allergen. Even small amounts can cause a severe reaction. It can be found in:',
      'Please make sure my meal does not contain this allergen or traces of it. It is commonly present in:',
    ],
  };

  const foodsPresets: Record<string, { label: string; items: string[] }[]> = {
    Intolerance: [
      { label: 'Lactose sources', items: ['Milk', 'Cheese', 'Cream', 'Yogurt', 'Butter', 'Whey', 'Ice cream', 'Baked goods'] },
      { label: 'Gluten sources', items: ['Wheat', 'Barley', 'Rye', 'Bread', 'Pasta', 'Cereal', 'Baked goods', 'Beer'] },
    ],
    Allergy: [
      { label: 'Peanut sources', items: ['Peanuts', 'Peanut butter', 'Peanut oil', 'Sauces', 'Confections', 'Trail mix', 'Snack bars', 'Baked goods'] },
      { label: 'Shellfish sources', items: ['Shrimp', 'Crab', 'Lobster', 'Clams', 'Oysters', 'Scallops', 'Fish sauce', 'Mixed dishes'] },
    ],
  };

  const cautionPresets: string[] = [
    'Please be aware of these products when preparing my meal. Thank you!',
    'Please use separate utensils and surfaces to avoid cross-contact.',
    'Please confirm with the chef before serving. Thank you!',
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Condition Type</label>
        <select
          value={state.conditionType}
          onChange={(e) => onChange({ conditionType: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          <option value="Intolerance">Intolerance</option>
          <option value="Allergy">Allergy</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Main Headline</label>
        <select
          value={state.headline}
          onChange={(e) => onChange({ headline: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          {headlinePresets[state.conditionType]?.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Description</label>
        <select
          value={state.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          {descriptionPresets[state.conditionType]?.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Restricted Foods</label>
        <select
          value={foodsPresets[state.conditionType]?.[0]?.label}
          onChange={(e) => {
            const opt = foodsPresets[state.conditionType]?.find(o => o.label === e.target.value);
            if (opt) onChange({ foods: opt.items });
          }}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          {foodsPresets[state.conditionType]?.map((set) => (
            <option key={set.label} value={set.label}>{set.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Caution Message</label>
        <select
          value={state.caution}
          onChange={(e) => onChange({ caution: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          {cautionPresets.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Language</label>
        <select
          value={state.language}
          onChange={(e) => onChange({ language: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact</label>
        <input
          type="text"
          value={state.emergencyContact || ''}
          onChange={(e) => onChange({ emergencyContact: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Name and phone (e.g., Jane Doe — +1 555-123-4567)"
        />
      </div>
    </div>
  );
}



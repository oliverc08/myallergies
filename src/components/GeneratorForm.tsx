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
    imageDataUrl?: string | null;
  };
  onChange: (next: Partial<GeneratorFormProps['state']>) => void;
}

export function GeneratorForm({ state, onChange }: GeneratorFormProps) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFoodsChange = (val: string) => {
    // Accept comma-separated or newline-separated
    const list = val
      .split(/\n|,/)
      .map(s => s.trim())
      .filter(Boolean);
    onChange({ foods: list });
  };

  const handleFile = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      onChange({ imageDataUrl: String(reader.result) });
    };
    reader.readAsDataURL(file);
  };

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
        <input
          type="text"
          value={state.headline}
          onChange={(e) => onChange({ headline: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="I am lactose intolerant."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Description</label>
        <textarea
          rows={4}
          value={state.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="I cannot consume food or drinks that contain lactose or dairy products, or I will become very ill."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Restricted Foods (comma or new line)</label>
        <textarea
          rows={4}
          defaultValue={state.foods.join('\n')}
          onChange={(e) => handleFoodsChange(e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder={"Milk\nCheese\nCream\nYogurt"}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Custom Caution Message</label>
        <input
          type="text"
          value={state.caution}
          onChange={(e) => onChange({ caution: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Please be aware when preparing my meal. Thank you!"
        />
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
        <label className="block text-sm font-medium text-foreground mb-2">Optional Image Upload</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-border bg-background hover:bg-muted transition"
            onClick={() => fileRef.current?.click()}
          >
            Choose Image
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          {state.imageDataUrl && (
            <button
              type="button"
              className="text-sm text-red-600 hover:underline"
              onClick={() => onChange({ imageDataUrl: null })}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}



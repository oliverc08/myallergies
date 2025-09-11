"use client";

import { useState } from 'react';
import { CardPreview } from '@/components/CardPreview';
import { GeneratorForm } from '@/components/GeneratorForm';
import { PDFDownloadButton } from '@/components/PDFDownloadButton';

export default function GeneratorPage() {
  const [state, setState] = useState({
    conditionType: 'Intolerance',
    headline: 'I am lactose intolerant.',
    description:
      'I cannot consume food or drinks that contain lactose or dairy products, or I will become very ill. Lactose can be found in:',
    foods: ['Milk', 'Cheese', 'Cream', 'Yogurt', 'Butter', 'Whey', 'Ice cream', 'Baked goods'],
    caution: 'Please be aware of these products when preparing my meal. Thank you!',
    language: 'en',
    imageDataUrl: null as string | null,
  });

  const update = (next: Partial<typeof state>) => setState((s) => ({ ...s, ...next }));

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Create Your Allergy Card
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your card details on the left and preview the design live on the right.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <GeneratorForm state={state} onChange={update} />
            </div>
            <div>
              <CardPreview {...state} />
              <PDFDownloadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

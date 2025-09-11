'use client';

import Image from 'next/image';
import { translateLabel } from '@/lib/i18n';

export interface CardPreviewProps {
  conditionType: 'Allergy' | 'Intolerance' | string;
  headline: string;
  description: string;
  foods: string[];
  caution: string;
  language: string; // locale code like 'en', 'es'
  imageDataUrl?: string | null;
}

export function CardPreview({
  conditionType,
  headline,
  description,
  foods,
  caution,
  language,
  imageDataUrl,
}: CardPreviewProps) {
  const twoColumnFoods = () => {
    const mid = Math.ceil(foods.length / 2);
    return [foods.slice(0, mid), foods.slice(mid)];
  };

  const [leftFoods, rightFoods] = twoColumnFoods();

  return (
    <div className="w-full flex items-center justify-center">
      {/* Container with fixed aspect ratio for predictable PDF capture */}
      <div id="allergy-card" className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Top black banner */}
        <div className="flex items-center justify-between bg-black text-white px-5 py-3">
          <div className="text-sm sm:text-base font-extrabold tracking-wider">
            {String(conditionType || '').toUpperCase()}
          </div>
          <div className="text-xs sm:text-sm font-bold tracking-wider opacity-90">
            EQUAL EATS
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Left content */}
          <div className="col-span-12 md:col-span-8 space-y-3">
            <h1 className="text-[#E60000] font-extrabold text-xl sm:text-2xl leading-snug">
              {headline}
            </h1>
            <p className="text-[15px] leading-relaxed text-black/90">
              {description}
            </p>

            {foods.length > 0 && (
              <div className="mt-1">
                <div className="grid grid-cols-2 gap-x-6">
                  {[leftFoods, rightFoods].map((col, idx) => (
                    <ul key={idx} className="space-y-1.5">
                      {col.map((f, i) => (
                        <li key={`${idx}-${i}`} className="flex items-start gap-2 text-[14px] text-[#444444]">
                          {/* tiny red triangle bullet */}
                          <span className="mt-2 inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#E60000]" aria-hidden="true"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            )}

            {/* Caution box */}
            <div className="mt-2 border border-[#E60000] rounded-md p-3 bg-[#FFEAEA]">
              <div className="text-[#E60000] font-bold text-sm mb-1">
                {translateLabel('caution', language)}
              </div>
              <p className="text-[13px] text-black/90">{caution}</p>
            </div>
          </div>

          {/* Right icon area */}
          <div className="col-span-12 md:col-span-4 flex items-center justify-center">
            <div className="relative w-40 h-40 rounded-full border-4 border-[#E60000]/80 flex items-center justify-center overflow-hidden">
              {imageDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageDataUrl} alt="allergen" className="object-cover w-full h-full" />
              ) : (
                <div className="absolute inset-0 bg-[url('/window.svg')] bg-center bg-contain bg-no-repeat opacity-70" />
              )}
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="#E60000" strokeWidth="6" fill="none" />
                  <line x1="15" y1="85" x2="85" y2="15" stroke="#E60000" strokeWidth="6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between bg-black text-white px-4 py-2 text-xs">
          <span>{translateLabel('languageName', language)}</span>
          <span className="opacity-80">© MyAllergies · {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}



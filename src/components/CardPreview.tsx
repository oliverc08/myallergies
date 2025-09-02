'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Globe } from 'lucide-react';
import { AllergyData } from './CardGenerator';

interface CardPreviewProps {
  data: AllergyData;
  isGenerating: boolean;
}

const translations = {
  english: {
    title: 'FOOD ALLERGY CARD',
    subtitle: 'Please help me stay safe while dining',
    intro: 'I am allergic to the following foods:',
    request: 'Can you please confirm that this food does not contain any of these ingredients?',
    thankYou: 'Thank you for helping me dine safely!',
    emergency: 'In case of emergency, please call 911',
  },
  spanish: {
    title: 'TARJETA DE ALERGIA ALIMENTARIA',
    subtitle: 'Por favor ayúdeme a mantenerme seguro mientras como',
    intro: 'Soy alérgico a los siguientes alimentos:',
    request: '¿Puede confirmar que esta comida no contiene ninguno de estos ingredientes?',
    thankYou: '¡Gracias por ayudarme a comer de forma segura!',
    emergency: 'En caso de emergencia, llame al 911',
  },
  japanese: {
    title: '食物アレルギーカード',
    subtitle: '食事中に安全でいられるようお手伝いください',
    intro: '私は以下の食品にアレルギーがあります：',
    request: 'この料理にこれらの成分が含まれていないことを確認していただけますか？',
    thankYou: '安全に食事ができるようお手伝いいただき、ありがとうございます！',
    emergency: '緊急時は911にお電話ください',
  },
  mandarin: {
    title: '食物过敏卡',
    subtitle: '请帮助我在用餐时保持安全',
    intro: '我对以下食物过敏：',
    request: '您能确认这道菜不包含这些成分吗？',
    thankYou: '感谢您帮助我安全用餐！',
    emergency: '紧急情况请拨打911',
  },
};

export function CardPreview({ data }: CardPreviewProps) {
  const t = translations[data.language as keyof typeof translations] || translations.english;

  if (data.allergies.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
        <div className="text-center">
          <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Select your allergies to see a preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Card Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white border-2 border-border rounded-xl p-6 shadow-lg"
        id="allergy-card"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-bold text-foreground">{t.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Name */}
        {data.name && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium text-foreground">
              Name: {data.name}
            </p>
          </div>
        )}

        {/* Allergies */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-3">{t.intro}</p>
          <div className="grid grid-cols-2 gap-2">
            {data.allergies.map((allergy, index) => (
              <motion.div
                key={allergy}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded-lg"
              >
                <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-red-800">{allergy}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Request */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 leading-relaxed">
            {t.request}
          </p>
        </div>

        {/* Thank you */}
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-foreground">{t.thankYou}</p>
        </div>

        {/* Emergency info */}
        <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800 font-medium">{t.emergency}</p>
        </div>

        {/* Language indicator */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-full">
            <Globe className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase">
              {data.language}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Instructions */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          This is how your allergy card will look. Click the download button to save as PDF.
        </p>
      </div>
    </div>
  );
}

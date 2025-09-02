'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Download, AlertTriangle, CheckCircle } from 'lucide-react';

interface AllergyCard {
  allergies: string[];
  language: string;
  name: string;
}

export function DemoSection() {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [language, setLanguage] = useState('English');
  const [name, setName] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const commonAllergies = [
    'Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish', 'Sesame'
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Mandarin' }
  ];

  const toggleAllergy = (allergy: string) => {
    setAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  const generateCard = () => {
    if (allergies.length > 0) {
      setShowPreview(true);
    }
  };

  const getTranslation = (text: string, lang: string) => {
    const translations: Record<string, Record<string, string>> = {
      'I have allergies to': {
        'en': 'I have allergies to',
        'es': 'Tengo alergias a',
        'ja': '私は以下のアレルギーがあります',
        'zh': '我对以下食物过敏'
      },
      'I have food allergies and cannot eat': {
        'en': 'I have food allergies and cannot eat',
        'es': 'Tengo alergias alimentarias y no puedo comer',
        'ja': '食物アレルギーがあり、以下を食べることはできません',
        'zh': '我有食物过敏，不能食用以下食物'
      },
      'or products containing these ingredients, even in small amounts, or I will have a severe allergic reaction.': {
        'en': 'or products containing these ingredients, even in small amounts, or I will have a severe allergic reaction.',
        'es': 'o productos que contengan estos ingredientes, incluso en pequeñas cantidades, o tendré una reacción alérgica severa.',
        'ja': 'またはこれらの成分を含む製品を、少量でも摂取すると重篤なアレルギー反応を起こします。',
        'zh': '或含有这些成分的产品，即使少量也会引起严重的过敏反应。'
      },
      'Does this food contain': {
        'en': 'Does this food contain',
        'es': '¿Esta comida contiene',
        'ja': 'この食べ物には以下が含まれていますか',
        'zh': '这种食物是否含有'
      },
      'Caution!': {
        'en': 'Caution!',
        'es': '¡Precaución!',
        'ja': '注意！',
        'zh': '注意！'
      },
      'Please use clean gloves, utensils, surfaces, cookware, and frying oil when preparing my meal. Thank you!': {
        'en': 'Please use clean gloves, utensils, surfaces, cookware, and frying oil when preparing my meal. Thank you!',
        'es': 'Por favor use guantes limpios, utensilios, superficies, utensilios de cocina y aceite de freír limpios al preparar mi comida. ¡Gracias!',
        'ja': '私の食事を準備する際は、清潔な手袋、器具、表面、調理器具、揚げ油を使用してください。ありがとうございます！',
        'zh': '准备我的餐食时，请使用干净的手套、器具、表面、炊具和食用油。谢谢！'
      }
    };
    return translations[text]?.[lang] || text;
  };

  const translateAllergies = (allergies: string[], lang: string) => {
    const allergyTranslations: Record<string, Record<string, string>> = {
      'Peanuts': {
        'en': 'peanuts',
        'es': 'cacahuetes',
        'ja': 'ピーナッツ',
        'zh': '花生'
      },
      'Tree Nuts': {
        'en': 'tree nuts',
        'es': 'frutos secos',
        'ja': '木の実',
        'zh': '坚果'
      },
      'Dairy': {
        'en': 'dairy',
        'es': 'lácteos',
        'ja': '乳製品',
        'zh': '乳制品'
      },
      'Eggs': {
        'en': 'eggs',
        'es': 'huevos',
        'ja': '卵',
        'zh': '鸡蛋'
      },
      'Soy': {
        'en': 'soy',
        'es': 'soja',
        'ja': '大豆',
        'zh': '大豆'
      },
      'Wheat': {
        'en': 'wheat',
        'es': 'trigo',
        'ja': '小麦',
        'zh': '小麦'
      },
      'Fish': {
        'en': 'fish',
        'es': 'pescado',
        'ja': '魚',
        'zh': '鱼类'
      },
      'Shellfish': {
        'en': 'shellfish',
        'es': 'mariscos',
        'ja': '甲殻類',
        'zh': '贝类'
      },
      'Sesame': {
        'en': 'sesame',
        'es': 'sésamo',
        'ja': 'ごま',
        'zh': '芝麻'
      }
    };

    return allergies.map(allergy => 
      allergyTranslations[allergy]?.[lang] || allergy.toLowerCase()
    );
  };

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Try It Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create your allergy card in seconds. See how easy it is to communicate your dietary needs safely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-background rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Create Your Allergy Card
                </h3>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                {/* Language Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Allergies Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Your Allergies
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {commonAllergies.map((allergy) => (
                      <button
                        key={allergy}
                        onClick={() => toggleAllergy(allergy)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          allergies.includes(allergy)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-foreground border-border hover:bg-muted'
                        }`}
                      >
                        {allergy}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generateCard}
                  disabled={allergies.length === 0}
                  className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Generate My Card
                </button>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {showPreview ? (
                <div className="bg-background rounded-2xl border border-border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Your Allergy Card
                  </h3>
                  
                  {/* EqualEats-style Card Preview */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
                    {/* Header */}
                    <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
                      <h4 className="text-lg font-bold">FOOD ALLERGY</h4>
                      <div className="text-right">
                        <div className="text-sm font-medium">MYALLERGIES</div>
                        <div className="w-8 h-0.5 bg-blue-400 mt-1"></div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      {/* Main Allergy Statement */}
                      <div className="text-red-600 font-bold text-lg">
                        {getTranslation('I have allergies to', language)} {translateAllergies(allergies, language).join(', ')}.
                      </div>

                      {/* Detailed Explanation */}
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {getTranslation('I have food allergies and cannot eat', language)} <strong>{translateAllergies(allergies, language).join(', ')}</strong> {getTranslation('or products containing these ingredients, even in small amounts, or I will have a severe allergic reaction.', language)}
                      </p>

                      {/* Question */}
                      <div className="text-red-600 font-bold text-lg">
                        {getTranslation('Does this food contain', language)} {translateAllergies(allergies, language).join(', ')}?
                      </div>

                      {/* Caution Box */}
                      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                        <div className="text-red-600 font-bold text-sm mb-2">{getTranslation('Caution!', language)}</div>
                        <p className="text-gray-700 text-sm">
                          {getTranslation('Please use clean gloves, utensils, surfaces, cookware, and frying oil when preparing my meal. Thank you!', language)}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-end text-xs text-gray-500">
                        <span>{languages.find(l => l.code === language)?.name}</span>
                        <div className="text-right">
                          <div>MA001</div>
                          <div>© 2024</div>
                          <div>MyAllergies</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="w-full mt-6 py-3 px-6 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              ) : (
                <div className="bg-background rounded-2xl border border-border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    Preview
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form to see your personalized allergy card preview.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

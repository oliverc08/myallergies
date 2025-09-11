const languageLabels: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
};

const translations: Record<string, Record<string, string>> = {
  en: { caution: 'Caution!', languageName: 'English' },
  es: { caution: '¡Precaución!', languageName: 'Español' },
  fr: { caution: 'Attention !', languageName: 'Français' },
  de: { caution: 'Vorsicht!', languageName: 'Deutsch' },
  zh: { caution: '注意！', languageName: '中文' },
  ja: { caution: '注意！', languageName: '日本語' },
};

export function translateLabel(key: 'caution' | 'languageName', lang: string) {
  const l = (lang || 'en').toLowerCase();
  return translations[l]?.[key] ?? translations['en'][key];
}

export function getLanguageDisplayName(lang: string) {
  return languageLabels[lang] ?? languageLabels.en;
}



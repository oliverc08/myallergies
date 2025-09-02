'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Shield, Globe, Download, Smartphone } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  {
    question: 'What is MyAllergies and how does it work?',
    answer: 'MyAllergies is a free tool that helps you create professional allergy cards in multiple languages. Simply enter your allergies, select your target language, and download a PDF card that you can show to restaurant staff when dining out.',
    icon: HelpCircle,
  },
  {
    question: 'Is MyAllergies completely free to use?',
    answer: 'Yes! MyAllergies is completely free to use. You can create unlimited allergy cards without any cost. We believe that food safety should be accessible to everyone.',
    icon: Shield,
  },
  {
    question: 'What languages are supported?',
    answer: 'Currently, we support English, Spanish, Japanese, and Mandarin. We\'re working on adding more languages based on user feedback. If you need a language that\'s not available, please contact us!',
    icon: Globe,
  },
  {
    question: 'How do I download my allergy card?',
    answer: 'After creating your card, click the "Download PDF" button. The card will be saved as a PDF file that you can print or store on your phone for easy access.',
    icon: Download,
  },
  {
    question: 'Can I use the allergy card on my phone?',
    answer: 'Absolutely! The PDF can be saved to your phone and shown to restaurant staff directly from your device. We\'re also working on Apple Wallet and Google Wallet integration for even easier access.',
    icon: Smartphone,
  },
  {
    question: 'Are the translations accurate and culturally appropriate?',
    answer: 'Yes, our translations are carefully crafted to be both accurate and culturally appropriate. They use polite, clear language that restaurant staff will understand and respect.',
    icon: Globe,
  },
  {
    question: 'What if I have a very rare allergy not listed?',
    answer: 'You can add custom allergies using the "Add Custom Allergy" field. This allows you to include any specific allergies or dietary restrictions that aren\'t in our common list.',
    icon: HelpCircle,
  },
  {
    question: 'How should I use my allergy card at restaurants?',
    answer: 'Show your card to the server or manager when you arrive. Point to the specific allergies and ask them to confirm that your meal doesn\'t contain those ingredients. Always double-check with the kitchen staff if you have severe allergies.',
    icon: Shield,
  },
  {
    question: 'What features are coming soon?',
    answer: 'We\'re working on Apple Wallet and Google Wallet integration, a community forum, restaurant resources, and a weekly newsletter. Follow our updates to be the first to know when these features launch!',
    icon: Smartphone,
  },
  {
    question: 'How can I provide feedback or request new features?',
    answer: 'We\'d love to hear from you! Visit our contact page to send us feedback, feature requests, or report any issues. Your input helps us improve MyAllergies for everyone.',
    icon: HelpCircle,
  },
  {
    question: 'Is my personal information stored when I create a card?',
    answer: 'No, we don\'t store any of your personal information. All card generation happens locally in your browser, and we don\'t collect or store your allergy information or personal details.',
    icon: Shield,
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
              )}
              <span className="font-semibold text-foreground">{item.question}</span>
            </div>
            <motion.div
              animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openItems.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <div className="pl-11">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

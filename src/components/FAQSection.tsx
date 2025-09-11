'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Do you plan to continue to offer your services for free?",
      answer: "Currently, MyAllergies is still in a beta form. As I continue to refine and improve the website, I will keep the offered services free. However, this project isn&apos;t cheating, and at some point there will need to be a form of paid-subscription.\n\nI will always hold true to offering affordable services, I promise :)"
    },
    {
      question: "When you do start charging, are you profiting from this project?",
      answer: "Everything earned from MyAllergies will be put into maintaining and improving the site. A certain amount will be set aside to donate to further research into novel solutions for allergies."
    },
    {
      question: "I want to help you build the community, how can I get involved?",
      answer: "If you&apos;re interested in getting involved in this project, please send me an email! Any help is greatly appreciated."
    },
    {
      question: "I need help creating an allergy card/allergen guide!",
      answer: "No problem! I have set up a complete support page with articles providing step by step instructions for using my services. If you still need help, please don&apos;t hesitate to reach out!"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 tracking-tight">
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="divide-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index}>
                <button
                  type="button"
                  className="group w-full text-left focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between py-8 md:py-10">
                    <h3 className="pr-8 flex-1 text-base md:text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    {/* Minimalist plus icon that animates to minus */}
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gray-900 rounded-full"></span>
                      <motion.span
                        initial={false}
                        animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-900 rounded-full"
                      />
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10">
                        <p className="pt-1 text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider Line */}
                {index < faqs.length - 1 && (
                  <div className="border-t" style={{ borderColor: '#EAEAEA' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
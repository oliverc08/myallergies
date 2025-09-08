'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Do you plan to continue to offer your services for free?",
      answer: "Currently, MyAllergies is still in a beta form. As I continue to refine and improve the website, I will keep the offered services free. However, this project isn't cheating, and at some point there will need to be a form of paid-subscription.\n\nI will always hold true to offering affordable services, I promise :)"
    },
    {
      question: "When you do start charging, are you profiting from this project?",
      answer: "Everything earned from MyAllergies will be put into maintaining and improving the site. A certain amount will be set aside to donate to further research into novel solutions for allergies."
    },
    {
      question: "I want to help you build the community, how can I get involved?",
      answer: "If you're interested in getting involved in this project, please send me an email! Any help is greatly appreciated."
    },
    {
      question: "I need help creating an allergy card/allergen guide!",
      answer: "No problem! I have set up a complete support page with articles providing step by step instructions for using my services. If you still need help, please don't hesitate to reach out!"
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div 
                className="flex items-center justify-between py-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-8 flex-1">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-900" />
                  )}
                </div>
              </div>
              
              {/* Divider Line */}
              {index < faqs.length - 1 && (
                <div className="border-t border-gray-200" />
              )}
              
              {/* Answer Content */}
              {openItems.includes(index) && (
                <div className="pb-6">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
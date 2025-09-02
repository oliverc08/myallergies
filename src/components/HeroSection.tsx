'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight, Users, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function HeroSection() {
  const [allergyInput, setAllergyInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleGenerate = () => {
    // Redirect to sign up/sign in page with both allergy and language data
    const params = new URLSearchParams();
    if (allergyInput.trim()) {
      params.append('allergies', allergyInput.trim());
    }
    params.append('language', selectedLanguage);
    window.location.href = `/signin?${params.toString()}`;
  };

  const suggestions = [
    'Peanut Allergy',
    'Shellfish Allergy', 
    'Gluten Intolerance',
    'Lactose Intolerance',
    'Tree Nuts Allergy'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0">
      {/* Background Elements - Base44 inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Let&apos;s make your safety a{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                reality.
              </span>{' '}
              Right now.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MyAllergies lets you generate personalized digital allergy cards in minutes.{' '}
              <br className="hidden sm:block" />
              Accessible anytime, anywhere.
            </p>
          </motion.div>

          {/* Input Box Section - Base44 inspired */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="max-w-4xl mx-auto">
              {/* Two aligned inputs side by side */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Allergy Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={allergyInput}
                    onChange={(e) => setAllergyInput(e.target.value)}
                    placeholder="Enter allergies (e.g., peanuts, shellfish)"
                    className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border border-border/50 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={handleGenerate}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Language Dropdown */}
                <div className="sm:w-48">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border border-border/50 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </div>
              </div>
              
              {/* Suggestions */}
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Not sure where to start? Try one of these:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setAllergyInput(suggestion)}
                      className="px-4 py-2 text-sm bg-white/60 backdrop-blur-sm border border-border/50 rounded-full hover:bg-white/80 hover:border-purple-300 transition-all duration-300 hover:scale-105"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-muted-foreground"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-sm font-medium">
              Trusted by families, schools, and communities worldwide.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
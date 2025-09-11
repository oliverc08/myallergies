'use client';

import { motion } from 'framer-motion';
import { Shield, Globe, Download, Smartphone, Languages, FileText } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Clear Communication',
      description: 'Professional allergy cards that clearly communicate your dietary restrictions to restaurant staff.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Globe,
      title: 'Multiple Languages',
      description: 'Generate cards in English, Spanish, Japanese, and Mandarin for global travel.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Download,
      title: 'PDF Download',
      description: 'Download your allergy card as a PDF for easy printing or digital storage.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Create and access your allergy cards from any device, anywhere.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Languages,
      title: 'Easy Translation',
      description: 'Polite, culturally appropriate translations that restaurant staff will understand.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: FileText,
      title: 'Professional Design',
      description: 'Clean, legible design inspired by EqualEats cards for maximum clarity.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Everything You Need for Safe Dining
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our allergy card generator provides everything you need to dine safely, anywhere in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section - Temporarily Hidden */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re working on exciting new features to make your allergy management even easier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Apple Wallet</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                <Smartphone className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Google Wallet</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Community Forum</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                <FileText className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Restaurant Resources</span>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

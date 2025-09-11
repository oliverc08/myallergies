'use client';

import { motion } from 'framer-motion';
import { Heart, Globe, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why <em>MyAllergies</em>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Born from personal experience and a desire to help others navigate food allergies safely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As someone who has navigated food allergies throughout my life, I understand the challenges of dining out safely, especially when traveling or in unfamiliar environments. The constant worry about cross-contamination, language barriers, and the fear of having an allergic reaction can really take the relxation out of dining.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  MyAllergies was created to solve this problem. By providing clear, free, and highly customizable translated allergy cards that you can easily share with restaurant staff, we&apos;re making dining safer and more accessible for everyone with food allergies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My mission is simple: to give you the confidence to dine anywhere in the world, knowing that your dietary needs will be clearly communicated and understood. Nobody should have to eat their meals in fear.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">Made with care</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Global reach</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Community Driven</h3>
                      <p className="text-sm text-muted-foreground">Built by and for the allergy community</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Multilingual Support</h3>
                      <p className="text-sm text-muted-foreground">Clear communication in any language</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Always Free</h3>
                      <p className="text-sm text-muted-foreground">Accessible to everyone, forever</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

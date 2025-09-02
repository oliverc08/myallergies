'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      content: 'MyAllergies has been a game-changer for my travels. I can now confidently dine in any country knowing my allergies will be clearly communicated.',
      rating: 5,
    },
    {
      name: 'Miguel Rodriguez',
      location: 'Barcelona, Spain',
      content: 'As someone with multiple food allergies, this tool has given me peace of mind when eating out. The translations are perfect and professional.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      location: 'London, UK',
      content: 'The PDF download feature is brilliant. I keep a few printed copies in my wallet and have the digital version on my phone. So convenient!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Loved by the Allergy Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what people are saying about MyAllergies and how it&apos;s helping them dine safely around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Allergy Card?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join thousands of people who are already dining safely with MyAllergies.
            </p>
            <a
              href="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get Started Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

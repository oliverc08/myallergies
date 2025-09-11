'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source: 'website'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setStatus('error');
          setMessage('This email is already subscribed to our newsletter');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Successfully subscribed! Thank you for joining our newsletter.');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Elements - Consistent with site design */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Stay Updated with MyAllergies
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our newsletter to learn more about our new features, innovations in allergy safety, top allergen free foods, and more!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    disabled={isLoading}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading || !email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap shadow-lg hover:scale-105"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>

              {/* Status Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center justify-center gap-2 text-sm font-medium ${
                    status === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  {message}
                </motion.div>
              )}
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

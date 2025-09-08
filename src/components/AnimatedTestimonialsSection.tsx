'use client';

import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Heart } from 'lucide-react';

export function AnimatedTestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahchen",
      text: "MyAllergies has completely changed how I manage my food allergies. The digital cards are so convenient!",
      avatar: "SC",
      platform: "twitter"
    },
    {
      name: "Dr. Michael Rodriguez",
      handle: "@dr_mrodriguez",
      text: "As a physician, I recommend MyAllergies to all my patients. It's a game-changer for allergy management.",
      avatar: "MR",
      platform: "twitter"
    },
    {
      name: "Emma Thompson",
      handle: "@emmathompson",
      text: "Finally, a solution that makes dining out safe and stress-free. The restaurant integration is brilliant!",
      avatar: "ET",
      platform: "twitter"
    },
    {
      name: "James Wilson",
      handle: "@jameswilson",
      text: "The emergency features give me peace of mind. My family feels so much safer now.",
      avatar: "JW",
      platform: "twitter"
    },
    {
      name: "Lisa Park",
      handle: "@lisapark",
      text: "User-friendly interface and comprehensive features. This app is exactly what I needed!",
      avatar: "LP",
      platform: "twitter"
    },
    {
      name: "David Kim",
      handle: "@davidkim",
      text: "The multilingual support is incredible. Perfect for international travel with allergies.",
      avatar: "DK",
      platform: "twitter"
    },
    {
      name: "Maria Garcia",
      handle: "@mariagarcia",
      text: "MyAllergies has made my life so much easier. I can't imagine going back to paper cards.",
      avatar: "MG",
      platform: "twitter"
    },
    {
      name: "Alex Johnson",
      handle: "@alexjohnson",
      text: "The medication tracking feature is a lifesaver. Everything in one place!",
      avatar: "AJ",
      platform: "twitter"
    }
  ];

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50/30 to-green-100/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Okay, @myallergies has{' '}
            <span className="text-orange-500">blown my mind.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            And other great things our users say about us.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start building
          </motion.button>
        </motion.div>

        {/* Animated Testimonial Cards */}
        <div className="space-y-8">
          {/* Top Row - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-80 mx-2"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm truncate">
                            {testimonial.name}
                          </h4>
                          <span className="text-gray-500 text-sm">
                            {testimonial.handle}
                          </span>
                          <div className="ml-auto">
                            <Twitter className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-gray-400">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs">12</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs">24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-80 mx-2"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm truncate">
                            {testimonial.name}
                          </h4>
                          <span className="text-gray-500 text-sm">
                            {testimonial.handle}
                          </span>
                          <div className="ml-auto">
                            <Twitter className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-gray-400">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs">8</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs">16</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

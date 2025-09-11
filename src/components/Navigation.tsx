'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Globe } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Help' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full py-2">
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Base44-inspired pill-shaped header */}
        <div className="relative">
          <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-8 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Shield className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">MyAllergies</span>
              </Link>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Right side - Auth & CTA */}
              <div className="flex items-center space-x-4">
                {/* Language selector placeholder */}
                <button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
                  <Globe className="h-4 w-4" />
                </button>
                
                {/* Auth Button */}
                <div className="hidden md:flex items-center">
                  <Link
                    href="/signin"
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
                
                {/* CTA Button - Enhanced */}
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Create Your Card
                </Link>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="py-4 px-6 space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border">
                    <div className="space-y-2">
                      <Link
                        href="/signin"
                        className="block w-full text-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/signin"
                        className="block w-full text-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        Create Your Card
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

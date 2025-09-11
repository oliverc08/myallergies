import { HeroSection } from '@/components/HeroSection';
import { DemoSection } from '@/components/DemoSection';
import { AppPreviewSection } from '@/components/AppPreviewSection';
import { AppPreviewSectionReversed } from '@/components/AppPreviewSectionReversed';
import { AboutSection } from '@/components/AboutSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AnimatedTestimonialsSection } from '@/components/AnimatedTestimonialsSection';
import { NewsletterStrip } from '@/components/NewsletterStrip';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <DemoSection /> */}
      <AppPreviewSection />
      <AppPreviewSectionReversed />
      <AboutSection />
      <FeaturesSection />
      <AnimatedTestimonialsSection />
      <NewsletterStrip />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

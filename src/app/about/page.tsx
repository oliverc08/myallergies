import { AboutSection } from '@/components/AboutSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function About() {
  return (
    <div className="min-h-screen pt-0">
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';

export default function Help() {
  return (
    <div className="min-h-screen pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Help & Support
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Find answers to common questions and get the support you need.
          </p>
        </div>
      </div>
      <FAQSection />
      <ContactSection />
    </div>
  );
}

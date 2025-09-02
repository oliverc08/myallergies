import { FAQSection } from '@/components/FAQSection';

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about MyAllergies and how to use your allergy cards safely.
            </p>
          </div>
          
          <FAQSection />
        </div>
      </div>
    </div>
  );
}

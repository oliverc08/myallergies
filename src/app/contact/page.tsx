import { ContactSection } from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We&apos;d love to hear from you and help make MyAllergies even better.
            </p>
          </div>
          
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

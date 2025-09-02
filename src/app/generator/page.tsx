import { SimpleCardGenerator } from '@/components/SimpleCardGenerator';

export default function GeneratorPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Create Your Allergy Card
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate a professional allergy card that clearly communicates your dietary restrictions in multiple languages.
            </p>
          </div>
          
          <SimpleCardGenerator />
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';
import { AllergyData } from './CardGenerator';

interface SimpleDownloadButtonProps {
  allergyData: AllergyData;
}

export function SimpleDownloadButton({ allergyData }: SimpleDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!allergyData.allergies.length) return;

    setIsDownloading(true);

    try {
      // For now, just simulate a download
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a simple text file with the allergy information
      const content = `
MyAllergies - Allergy Card
========================

Name: ${allergyData.name || 'Not provided'}
Language: ${allergyData.language}
Allergies: ${allergyData.allergies.join(', ')}

This is a temporary download. PDF functionality will be available soon.
      `.trim();

      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `allergy_card_${allergyData.language}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating download:', error);
      alert('There was an error generating the download. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      disabled={isDownloading || !allergyData.allergies.length}
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {isDownloading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {isDownloading ? 'Generating...' : 'Download Card'}
    </motion.button>
  );
}

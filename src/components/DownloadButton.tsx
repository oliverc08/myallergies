'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';
// Dynamic imports for PDF generation
const generatePDF = async () => {
  const { default: jsPDF } = await import('jspdf');
  const { default: html2canvas } = await import('html2canvas');
  return { jsPDF, html2canvas };
};
import { AllergyData } from './CardGenerator';

interface DownloadButtonProps {
  allergyData: AllergyData;
}

export function DownloadButton({ allergyData }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!allergyData.allergies.length) return;

    setIsDownloading(true);

    try {
      // Dynamic import of PDF libraries
      const { jsPDF, html2canvas } = await generatePDF();

      // Get the card element
      const cardElement = document.getElementById('allergy-card');
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Create canvas from the card element
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: cardElement.offsetWidth,
        height: cardElement.offsetHeight,
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Calculate dimensions to fit the card on the page
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;

      let finalWidth = pageWidth - 20; // 10mm margin on each side
      let finalHeight = finalWidth / ratio;

      // If height is too large, scale down
      if (finalHeight > pageHeight - 20) {
        finalHeight = pageHeight - 20;
        finalWidth = finalHeight * ratio;
      }

      // Center the image on the page
      const x = (pageWidth - finalWidth) / 2;
      const y = (pageHeight - finalHeight) / 2;

      // Add the image to PDF
      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);

      // Generate filename
      const name = allergyData.name ? `_${allergyData.name.replace(/\s+/g, '_')}` : '';
      const filename = `allergy_card${name}_${allergyData.language}.pdf`;

      // Download the PDF
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
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
      {isDownloading ? 'Generating...' : 'Download PDF'}
    </motion.button>
  );
}

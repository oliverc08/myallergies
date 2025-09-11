'use client';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export function PDFDownloadButton() {
  const handleDownload = async () => {
    const card = document.getElementById('allergy-card');
    if (!card) return;

    const canvas = await html2canvas(card, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - 72; // 1in margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const x = 36;
    const y = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight, undefined, 'FAST');
    pdf.save('allergy-card.pdf');
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
    >
      Download as PDF
    </button>
  );
}



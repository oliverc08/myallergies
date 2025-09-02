import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyAllergies - Digital Allergy Cards for Safe Dining",
  description: "Create personalized digital allergy cards in multiple languages. Safe dining made simple with MyAllergies.",
  keywords: "allergy card, food allergies, dining safety, translation, digital card",
  authors: [{ name: "MyAllergies Team" }],
  openGraph: {
    title: "MyAllergies - Digital Allergy Cards for Safe Dining",
    description: "Create personalized digital allergy cards in multiple languages. Safe dining made simple with MyAllergies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen text-foreground antialiased`}>
        <AuthProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

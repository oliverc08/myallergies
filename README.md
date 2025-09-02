# MyAllergies - Digital Allergy Cards

A modern web application for creating personalized allergy cards in multiple languages, inspired by the Base44 design language and EqualEats card format.

## 🎯 MVP Features

### Core Functionality
- **Allergy Card Generator**: Create personalized digital allergy cards
- **Multi-language Support**: English, Spanish, Japanese, and Mandarin
- **PDF Download**: Download cards as PDFs for printing or digital storage
- **EqualEats-inspired Design**: Clean, professional card layout
- **Responsive Design**: Mobile-first approach with smooth animations

### Pages
- **Landing Page**: Hero section, about section, features, and testimonials
- **Card Generator**: Interactive form with real-time preview
- **FAQ Page**: Comprehensive accordion-style FAQ section
- **Contact Page**: Contact form and information

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth interactions
- **PDF Generation**: jsPDF with html2canvas
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🎨 Design System

Inspired by Base44 design language:
- Clean, modern typography (Inter font)
- Rounded borders and smooth animations
- Generous white space and subtle gradients
- Soft color palette with blue/green accents
- Mobile-first responsive design

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── generator/         # Card generator page
│   ├── faq/              # FAQ page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Landing page hero
│   ├── AboutSection.tsx  # About section
│   ├── FeaturesSection.tsx # Features showcase
│   ├── TestimonialsSection.tsx # Testimonials
│   ├── CardGenerator.tsx # Main generator component
│   ├── AllergyForm.tsx   # Form for allergy input
│   ├── CardPreview.tsx   # Card preview component
│   ├── DownloadButton.tsx # PDF download functionality
│   ├── FAQSection.tsx    # FAQ accordion
│   └── ContactSection.tsx # Contact form
└── ...
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Features Overview

### Landing Page
- Animated hero section with gradient backgrounds
- About section with Oliver's story
- Features showcase with hover animations
- Testimonials section with star ratings
- Smooth scroll animations throughout

### Card Generator
- Interactive form with common allergies selection
- Custom allergy input
- Language selection with flag indicators
- Real-time card preview
- PDF download with professional formatting

### FAQ Page
- Accordion-style questions and answers
- Smooth expand/collapse animations
- Comprehensive coverage of common questions
- Icon-based visual hierarchy

### Contact Page
- Contact form with validation
- Contact information display
- Quick links and helpful resources
- Success state animations

## 🎨 Design Tokens

The app uses a comprehensive design system with CSS custom properties:

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --primary: #3b82f6;
  --accent: #10b981;
  --muted: #f8f9fa;
  --border: #e2e8f0;
  --radius: 0.75rem;
}
```

## 🔮 Future Features (Planned)

- **Apple Wallet Integration**: Save cards directly to Apple Wallet
- **Google Wallet Integration**: Save cards to Google Pay
- **Community Forum**: Discourse integration at forum.myallergies.com
- **Blog**: WordPress subdomain at blog.myallergies.com
- **Restaurant Resources**: Allergen list generator for restaurants
- **Weekly Newsletter**: Email updates and tips

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for consistent styling
- Framer Motion for smooth animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

## 📞 Support

For questions or support, please visit our [contact page](/contact) or email us at hello@myallergies.com.

---

Built with ❤️ for the allergy community
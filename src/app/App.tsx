import { Suspense } from 'react';

// HATA BURADAYDI: Dosyaların "src/app/components" içinde.
// Bu yüzden "./components/..." diyerek yan odadaki dosyayı çağırıyoruz.

// Dosya adı: hero-section.tsx
import { HeroSection } from './components/hero-section';
// Dosya adı: features-section.tsx
import { Features } from './components/features-section';
// Dosya adı: testimonials-section.tsx
import { Testimonials } from './components/testimonials-section';
// Dosya adı: footer.tsx
import { Footer } from './components/footer';

// "how-it-works-section.tsx" dosyan da var, onu kullanmak istersen:
// import { HowItWorks } from './components/how-it-works-section';

function App() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Özellikler */}
      <Features />

      {/* Yorumlar */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;

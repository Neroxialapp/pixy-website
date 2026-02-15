import { Suspense, lazy } from 'react';
// DÜZELTME 1: Dosya ismi 'hero-section' olduğu için küçük harfle çağırmalıyız
// Eğer HeroSection içinde "export default" yoksa süslü parantez {} kalsın.
import { HeroSection } from '@/components/hero-section';

// DÜZELTME 2: Dosya isimleri 'features-section', 'testimonials-section' şeklinde.
// Kodda ise sadece 'Features' yazıyordu. Dosya adını tam yazmalıyız.

// ÖNEMLİ NOT: Lazy load kullanırken, çağırdığın dosyaların (Features, Footer vb.)
// içinde "export default function..." yazdığından emin ol. 
// Eğer "export function" yazıyorsa lazy load hata verebilir.

const Features = lazy(() => import('@/components/features-section')); 
const Testimonials = lazy(() => import('@/components/testimonials-section'));
const Footer = lazy(() => import('@/components/footer'));

// DÜZELTME 3: Listede 'faq.tsx' göremedim. Eğer dosyanın adı 'how-it-works-section.tsx' ise
// aşağıdaki satırı açıp kullanabilirsin. Şimdilik hata vermemesi için FAQ'yu kaldırdım.
// const FAQ = lazy(() => import('@/components/how-it-works-section'));

function App() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      <HeroSection />

      <Suspense fallback={<div className="h-96" />}>
        {/* Component export ismine göre (Features veya FeaturesSection) burası değişebilir */}
        {/* Şimdilik varsayılan import mantığıyla ilerliyoruz */}
        <Features />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <Testimonials />
      </Suspense>
      
      {/* FAQ dosyasını bulamadığım için geçici olarak gizledim, 
          dosya adını teyit edince açabilirsin */}
      {/* <Suspense fallback={<div className="h-40" />}>
        <FAQ />
      </Suspense> 
      */}

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;

import { Suspense, lazy } from 'react';
import { HeroSection } from './components/HeroSection'; // Hero normal import kalsın!

// AŞAĞIDAKİLERİ LAZY YAP (Gereksiz yükü kaldırır)
// Dosya yollarını kendi projene göre düzenle
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      {/* Hero hemen yüklenmeli, LCP için kritiktir */}
      <HeroSection />

      {/* Geri kalanlar arka planda sakince yüklensin */}
      <Suspense fallback={<div className="h-96" />}>
        <Features />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<div className="h-40" />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;

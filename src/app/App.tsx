import { Suspense, lazy } from 'react';
// DİKKAT: "./" yerine "../" yapıyoruz
import { HeroSection } from '../components/HeroSection'; 

// Lazy load bileşenleri (Named export kullanıyorsan import şekline dikkat et)
// Eğer bileşenlerin "export default" değilse, import sonuna .then eklemelisin.
// Ama varsayılan olarak "export default" olduklarını varsayarak şimdilik sadece yolu düzeltiyorum:

const Features = lazy(() => import('../components/Features'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));
const Footer = lazy(() => import('../components/Footer'));

function App() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      <HeroSection />

      <Suspense fallback={<div className="h-96" />}>
        {/* Eğer Features yüklenemezse hata vermemesi için basit bir kontrol ekleyebilirsin veya default export olduğundan emin ol */}
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

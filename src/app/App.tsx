// DİKKAT: Süslü parantezleri { } kaldırdık. 
// Artık "Default Import" yapıyoruz.

import { HeroSection } from './components/hero-section';
import Features from './components/features-section';
import Testimonials from './components/testimonials-section';
import Footer from './components/footer';

// Eğer "How It Works" eklemek istersen:
// import HowItWorks from './components/how-it-works-section';

function App() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;

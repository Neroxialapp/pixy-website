// Lazy load falan yok, dümdüz import ediyoruz.
// HeroSection kodunu gördüğüm için { } kullandım.
import { HeroSection } from "./components/hero-section";

// Eğer aşağıdaki 3'ünde hata alırsan süslü parantezleri { } silip dene.
// Örnek: import Features from "./components/features-section";
import { FeaturesSection } from "./components/features-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { Footer } from "./components/footer";

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

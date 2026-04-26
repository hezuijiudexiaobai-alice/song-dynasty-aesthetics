'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ArtSection from '@/components/ArtSection';
import LifeSection from '@/components/LifeSection';
import ModernSection from '@/components/ModernSection';
import ConclusionSection from '@/components/ConclusionSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ArtSection />
        <LifeSection />
        <ModernSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
}

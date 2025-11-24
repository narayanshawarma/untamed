
import React from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Founder } from './components/Founder';
import { Wilderness } from './components/Wilderness';
import { Sanctuaries } from './components/Sanctuaries';
import { Experiences } from './components/Experiences';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-jungle-950 min-h-screen w-full">
      <Hero />
      <Philosophy />
      <Founder />
      <Wilderness />
      <Sanctuaries />
      <Experiences />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;

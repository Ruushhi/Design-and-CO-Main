'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import FeaturedWorks from '@/components/featured-works';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Philosophy from '@/components/philosophy';
import Team from '@/components/team';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedWorks />
      <About />
      <Services />
      <Testimonials />
      <Philosophy />
      <Team />
      <FAQ />
      <Contact />
    </div>
  );
}

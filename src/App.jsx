import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NeuralEngines from './components/NeuralEngines';
import CaseStudies from './components/CaseStudies';
import InteractiveCanvas from './components/InteractiveCanvas';
import ProductStats from './components/ProductStats';
import BentoAccordion from './components/BentoAccordion';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -10% 0px -10%', // Small inset margin to feel natural
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once revealed, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => {
        try {
          observer.unobserve(el);
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Neural Engines connectivity list */}
        <NeuralEngines />

        {/* Case Studies (Cigna, Aetna, Anthem) - Light Theme */}
        <CaseStudies />

        {/* Node-based Interactive Canvas Editor diagram */}
        <InteractiveCanvas />

        {/* Product stats (gauges, SLA bar chart, token dial, growth curve) */}
        <ProductStats />

        {/* Bento Grid / Accordion (Desktop grid / Mobile list refactoring) */}
        <BentoAccordion />

        {/* Integrations Grid */}
        <Integrations />

        {/* Testimonials Review Cards - Light Theme */}
        <Testimonials />

        {/* Pricing tier switcher (Matrix calculation, direct DOM updates) */}
        <PricingSection />

        {/* FAQ inquiries accordion list */}
        <FAQ />
      </main>

      {/* Branded Footer section */}
      <Footer />
    </div>
  );
}


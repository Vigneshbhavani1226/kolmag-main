import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogoIntroAnimation from './components/LogoIntroAnimation';
import ConsultationModal from './components/ConsultationModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './components/ContentSections';
import LiquidMetalShader from './components/ui/liquid-metal-shader';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import TrainingPage from './pages/TrainingPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

import './styles/Homepage.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem('kolmag_intro_seen');
    } catch {
      return true;
    }
  });
  const [isManualReplay, setIsManualReplay] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInquiryType, setConsultationInquiryType] = useState('IT & Digital Services');
  const [selectedService, setSelectedService] = useState(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsManualReplay(false);
    sessionStorage.setItem('kolmag_intro_seen', 'true');
  };

  const handleReplayIntro = () => {
    setIsManualReplay(true);
    setShowIntro(true);
  };

  const handleOpenConsultation = (inquiryType = 'IT & Digital Services') => {
    setConsultationInquiryType(inquiryType);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="app-main-root">
      {/* 0. Full-Viewport Liquid Metal Animated Background Layer */}
      <div className="site-liquid-metal-backdrop" aria-hidden="true">
        <LiquidMetalShader
          baseColor="#0A0A0A"
          metalColor="#CCD0E2"
          highlightColor="#FFFFFF"
          distortion={0.6}
          interactive={true}
          pixelRatio={1.4}
          scale={0.92}
          speed={0.45}
        />
        <div className="site-liquid-metal-overlay" />
      </div>

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* 1. Accenture-Inspired Minimalist Logo Intro Screen */}
      {showIntro && (
        <LogoIntroAnimation 
          onComplete={handleIntroComplete} 
          isManualReplay={isManualReplay}
        />
      )}

      {/* 2. Consultation Modal ("Talk to an Expert") */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
        initialInquiryType={consultationInquiryType}
      />

      {/* 3. Service Fulfillment Details Modal ("How KOLMAG Fulfills This Service") */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={handleCloseServiceModal}
        onConsultService={() => {
          handleOpenConsultation(selectedService?.type === 'business' ? 'Business & Non-IT Services' : 'IT & Digital Services');
        }}
      />

      {/* 4. Enterprise Navbar (Persistent Across All Pages, Home & About removed from menu) */}
      <Navbar 
        onReplayIntro={handleReplayIntro} 
        onOpenConsultation={handleOpenConsultation}
        onSelectService={handleSelectService}
      />

      {/* 5. Main Single-Page Application Views (Client-Side Routed) */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenConsultation={handleOpenConsultation}
                onSelectService={handleSelectService}
              />
            } 
          />
          <Route 
            path="/solutions" 
            element={<SolutionsPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/our-work" 
            element={<Navigate to="/" replace />} 
          />
          <Route 
            path="/training-internships" 
            element={<TrainingPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/careers" 
            element={<CareersPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/careers/jobsearch" 
            element={<CareersPage onOpenConsultation={handleOpenConsultation} defaultSearchMode={true} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/privacy" 
            element={<PrivacyPage />} 
          />
          <Route 
            path="/terms" 
            element={<TermsPage />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </main>

      {/* 6. Footer (Persistent Across All Pages) */}
      <Footer 
        onReplayIntro={handleReplayIntro} 
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}


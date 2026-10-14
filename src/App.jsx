import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LogoIntroAnimation from './components/LogoIntroAnimation';
import ConsultationModal from './components/ConsultationModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import HeroSection from './components/HeroSection';
import { 
  AboutSection, 
  ServicesSection, 
  SolutionsSection, 
  OurWorkSection,
  TrainingSection, 
  CareersSection, 
  ContactSection, 
  Footer 
} from './components/ContentSections';

import './styles/Homepage.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [isManualReplay, setIsManualReplay] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInquiryType, setConsultationInquiryType] = useState('IT & Digital Services');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Check if user has already seen the intro animation in this session
    const hasSeenIntro = sessionStorage.getItem('kolmag_intro_seen');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

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
        onConsultService={(serviceName) => {
          handleOpenConsultation(selectedService?.type === 'business' ? 'Business & Non-IT Services' : 'IT & Digital Services');
        }}
      />

      {/* 4. Bluehost-Inspired Enterprise Navbar & Header */}
      <Navbar 
        onReplayIntro={handleReplayIntro} 
        onOpenConsultation={handleOpenConsultation}
        onSelectService={handleSelectService}
      />

      {/* 5. Main Website Content Body */}
      <main>
        {/* Home Landing Section */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* About Us */}
        <AboutSection />

        {/* Services (Two-Tab Mega-Layout with Fulfillment Detail Modals) */}
        <ServicesSection 
          onOpenConsultation={handleOpenConsultation}
          onSelectService={handleSelectService}
        />

        {/* Solutions (Customer-Need-Focused) */}
        <SolutionsSection onOpenConsultation={handleOpenConsultation} />

        {/* Our Work (Verified Portfolio) */}
        <OurWorkSection />

        {/* Training & Internships */}
        <TrainingSection onOpenConsultation={handleOpenConsultation} />

        {/* Careers */}
        <CareersSection onOpenConsultation={handleOpenConsultation} />

        {/* Contact */}
        <ContactSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 6. Footer */}
      <Footer 
        onReplayIntro={handleReplayIntro} 
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}

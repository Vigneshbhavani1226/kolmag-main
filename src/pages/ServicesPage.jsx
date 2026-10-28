import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '../components/ContentSections';
import { Code2, ChevronRight } from 'lucide-react';

export default function ServicesPage({ onOpenConsultation, onSelectService }) {
  return (
    <div className="page-view-services">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-badge">
            <Code2 className="w-4 h-4 text-cyan-400" /> Capabilities & Industry Practices
          </div>
          <h1 className="page-banner-title">
            Enterprise Capabilities & <span className="text-gradient-cyan">Industry Practices</span>
          </h1>
          <p className="page-banner-subtitle">
            Explore our synchronized portfolio of 19 global capabilities and 20 dedicated industry sectors engineered for high performance, zero-trust cybersecurity, and enterprise digital reinvention.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Services & Practices</span>
          </div>
        </div>
      </section>

      {/* Services Mega-Section */}
      <ServicesSection 
        onOpenConsultation={onOpenConsultation}
        onSelectService={onSelectService}
      />
    </div>
  );
}

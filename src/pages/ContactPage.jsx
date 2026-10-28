import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContentSections';
import { MessageSquare, ChevronRight } from 'lucide-react';

export default function ContactPage({ onOpenConsultation }) {
  return (
    <div className="page-view-contact">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">
            Connect with Our <span className="text-gradient-cyan">Specialized Teams</span>
          </h1>
          <p className="page-banner-subtitle">
            Choose your specific inquiry pathway below to route directly to our solution architects, corporate operations, or talent coordinators.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}

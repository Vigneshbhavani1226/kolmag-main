import React from 'react';
import { Link } from 'react-router-dom';
import { OurWorkSection } from '../components/ContentSections';
import { CheckCircle, ChevronRight } from 'lucide-react';

export default function OurWorkPage() {
  return (
    <div className="page-view-work">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-badge">
            <CheckCircle className="w-4 h-4 text-cyan-400" /> Verified Engineering Portfolio
          </div>
          <h1 className="page-banner-title">
            Our Work & <span className="text-gradient-cyan">Case Studies</span>
          </h1>
          <p className="page-banner-subtitle">
            Demonstrated technical deployments and outcome-backed case studies across software development, cybersecurity hardening, cloud architectures, and operational workflows.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Our Work</span>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <OurWorkSection />
    </div>
  );
}

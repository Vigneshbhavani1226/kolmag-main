import React from 'react';
import { Link } from 'react-router-dom';
import { SolutionsSection } from '../components/ContentSections';
import { Rocket, ChevronRight } from 'lucide-react';

export default function SolutionsPage({ onOpenConsultation }) {
  return (
    <div className="page-view-solutions">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">
            Problem-Focused <span className="text-gradient-cyan">Business Solutions</span>
          </h1>
          <p className="page-banner-subtitle">
            Tailored architectural frameworks designed to solve specific operational bottlenecks, modernize legacy systems, enhance security, and drive measurable business agility.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Solutions</span>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}

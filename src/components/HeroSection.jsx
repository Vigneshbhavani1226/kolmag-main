import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap 
} from 'lucide-react';

export default function HeroSection({ _onOpenConsultation }) {
  return (
    <section id="home" className="hero-section">
      {/* Dark Gradient Overlay for Maximum Text Contrast & Legibility over Liquid Metal */}
      <div className="hero-video-overlay" aria-hidden="true"></div>

      <div className="container hero-grid">
        {/* Left Column: Hero Narrative & CTAs */}
        <div className="hero-content">
          <h1 className="hero-title">
            We Build What’s Next.{' '}
            <span className="text-gradient-cyan">We Prepare Who Builds It.</span>
          </h1>

          <p className="hero-subtitle">
            KOLMAG CYBER TECHNOLOGIES helps businesses explore modern technology solutions while helping aspiring professionals build practical skills through structured training and internship opportunities.
          </p>

          <div className="hero-cta-group">
            <Link to="/services" className="btn-hero-primary">
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/training-internships" className="btn-hero-secondary">
              Explore Training & Internships <GraduationCap className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Clean, Single Capabilities Diagram */}
        <div className="hero-diagram-showcase">
          <div className="hero-diagram-ambient-glow" aria-hidden="true"></div>

          <div className="hero-diagram-frame">
            <img 
              src="/assets/kolmag-capabilities-diagram.jpg" 
              alt="KOLMAG Cyber Technologies - Cloud Computing, Artificial Intelligence, Software Development, Network Infrastructure, Cybersecurity, Data Analytics" 
              className="hero-diagram-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, Users, CheckCircle2, Building, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div>
          <h1 className="hero-title">
            One Partner. Every Technology. <span className="text-gradient-cyan">Infinite Possibilities.</span>
          </h1>
          <p className="hero-subtitle">
            KOLMAG CYBER TECHNOLOGIES delivers full-spectrum enterprise technology — from custom software engineering, cybersecurity, and AI pipelines to business consulting, technical staffing, and industry-grade talent development.
          </p>
          
          <div className="hero-cta-group">
            <button 
              onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}
              className="btn-hero-primary"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#services" className="btn-hero-secondary">
              Explore Service Catalogue
            </a>
          </div>

          {/* Industries Served & Core Engineering Highlights */}
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 600 }}>
              Industries Served
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <span className="card-tag">Banking & Financial Services</span>
              <span className="card-tag">Healthcare & Biotech</span>
              <span className="card-tag">E-commerce & Retail</span>
              <span className="card-tag">Education & EdTech</span>
              <span className="card-tag">Enterprise Logistics</span>
            </div>
          </div>
        </div>

        {/* Live Operational Capability Card */}
        <div className="hero-card-preview">
          <div className="hero-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: '700' }}>
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> Enterprise Capabilities Matrix
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#00f0ff' }}>
              <span className="status-dot"></span> Active Practice
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            <div className="stat-item" style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '8px' }}>
              <div className="stat-label">IT & Digital Services</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>10 Disciplines</div>
            </div>
            <div className="stat-item" style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '8px' }}>
              <div className="stat-label">Business Solutions</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>9 Disciplines</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Secure DevSecOps & VAPT Testing Frameworks
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI Agent Architectures & Big Data Pipelines
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Executive Recruitment & BPO Support Operations
            </div>
          </div>

          <div style={{ background: 'rgba(0, 240, 255, 0.08)', padding: '0.9rem', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)', fontSize: '0.82rem', color: '#d1dff6' }}>
            💡 <strong>Architecture Advisory:</strong> Have a specific software, cloud, or workforce requirement? Speak with our solution architects today.
          </div>
        </div>
      </div>
    </section>
  );
}

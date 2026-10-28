import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { 
  Code2, 
  Rocket, 
  GraduationCap, 
  Briefcase, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HomePage({ onOpenConsultation }) {
  // Customer-Friendly Focus Sections
  const practiceDivisions = [
    {
      to: '/services',
      badge: 'Engineering & Cloud',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Technology Services',
      desc: 'Full-stack software engineering, modern web and mobile applications, defensive cybersecurity, cloud infrastructure, and AI engineering.',
      cta: 'View Services'
    },
    {
      to: '/solutions',
      badge: 'Architecture & Modernization',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      title: 'Business Solutions',
      desc: 'Customer-focused solution architectures for digital modernization, workflow automation, and scalable business systems.',
      cta: 'Explore Solutions'
    },
    {
      to: '/training-internships',
      badge: 'Practical Skills',
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'Training & Internships',
      desc: 'Hands-on programming laboratories, mentor-led student internships, and capstone project building for aspiring professionals.',
      cta: 'Explore Programs'
    },
    {
      to: '/careers',
      badge: 'Talent & Culture',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      title: 'Careers & Opportunities',
      desc: 'Verified professional employment openings, merit-based hiring process, and talent pool registration for engineers.',
      cta: 'View Careers'
    },
    {
      to: '/contact',
      badge: 'Direct Routing',
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      title: 'Contact & Business Inquiries',
      desc: 'Direct communication pathways to our solutions team, corporate operations, and academic internship coordinators.',
      cta: 'Contact Team'
    }
  ];

  // 4 Core Values: Security & Responsibility, Transparency & Integrity, Agile Execution, Continuous Learning
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: 'Security and Responsibility',
      desc: 'Defensive engineering and confidentiality embedded into every architecture, codebase, and data pipeline from the start.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
      title: 'Transparency and Integrity',
      desc: 'Clear communication, verified capabilities, and dependable milestone delivery with no unsupported claims.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      title: 'Agile Execution',
      desc: 'Iterative, sprint-driven workflows designed for adaptability, rapid feedback loops, and measurable business value.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: 'Continuous Learning',
      desc: 'Ongoing skill growth and technical research in modern cloud, security, and AI frameworks for clients and students.'
    }
  ];

  // Concrete, verifiable partner benefits (no vague "high-altitude" claims)
  const partnerBenefits = [
    {
      title: 'Disciplined Engineering & DevSecOps',
      desc: 'Structured development lifecycles with automated testing, modular architecture, and zero-trust security practices.'
    },
    {
      title: 'Dual Delivery Model',
      desc: 'Direct access to business technology solutions paired with motivated, mentor-guided emerging engineering talent.'
    },
    {
      title: 'Mentor-Guided Practical Skills',
      desc: 'Students and interns train on genuine project workflows, version control standards, and peer code reviews.'
    },
    {
      title: 'Direct Technical Collaboration',
      desc: 'Engage directly with solution leads and engineers for clear communication and transparent milestone tracking.'
    }
  ];

  return (
    <div className="page-view-home">
      {/* 1. Hero Landing Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Customer-Friendly Focus Areas Section */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How We Deliver</span>
            <h2 className="section-title">Explore What We Do</h2>
            <p className="section-subtitle">
              Whether you are an enterprise seeking modern technology solutions or an aspiring engineer looking for hands-on skills training, explore our core areas below.
            </p>
          </div>

          <div className="focus-cards-grid">
            {practiceDivisions.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.to} 
                className="feature-card interactive-hover-card" 
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                    <div className="feature-icon-wrapper">{item.icon}</div>
                    <span className="card-tag" style={{ margin: 0 }}>{item.badge}</span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>

                <div className="card-action-cta">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Guiding Principles</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The fundamental standards that guide our engineering practices, business relationships, and educational mentorship.
            </p>
          </div>

          <div className="grid-4-responsive">
            {coreValues.map((val, idx) => (
              <div key={idx} className="feature-card value-card">
                <div className="feature-icon-wrapper" style={{ marginBottom: '1.1rem' }}>
                  {val.icon}
                </div>
                <h3 className="feature-title" style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>
                  {val.title}
                </h3>
                <p className="feature-desc" style={{ fontSize: '0.88rem' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Partner with KOLMAG? & Company Overview Callout */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="section-badge" style={{ marginBottom: '0.85rem' }}>Proven Value</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Why Partner with KOLMAG?
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1.75rem', maxWidth: '100%' }}>
                We combine practical engineering capability with structured talent development, offering businesses dependable technical delivery and aspiring professionals practical real-world skills.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {partnerBenefits.map((benefit, idx) => (
                  <div key={idx} className="partner-benefit-item">
                    <div className="partner-check-icon">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" style={{ color: '#008CFF' }} />
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '0.98rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {benefit.title}
                      </h4>
                      <p style={{ color: '#D1D5DB', fontSize: '0.86rem', lineHeight: '1.5' }}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-hero-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.4rem' }}>
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
                <button 
                  onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}
                  className="btn-hero-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.4rem' }}
                >
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Overview Card */}
            <div className="company-overview-preview-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <img 
                  src="/assets/kolmag-logo-white.png" 
                  alt="KOLMAG Logo" 
                  style={{ height: '36px', width: 'auto' }}
                />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                    KOLMAG Cyber Technologies
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#008CFF', letterSpacing: '0.04em' }}>
                    Private Limited
                  </span>
                </div>
              </div>

              <p style={{ color: '#D1D5DB', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Dedicated to engineering secure software architectures, cloud infrastructures, and cybersecurity defense—while providing structured, mentor-guided industrial training to equip students with practical industry competence.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div className="overview-stat-box">
                  <span className="stat-label">Engineering Focus</span>
                  <strong style={{ color: '#fff', fontSize: '1rem', display: 'block', marginTop: '0.2rem' }}>Software & Cyber</strong>
                </div>
                <div className="overview-stat-box">
                  <span className="stat-label">Academy Focus</span>
                  <strong style={{ color: '#fff', fontSize: '1rem', display: 'block', marginTop: '0.2rem' }}>Hands-On Labs</strong>
                </div>
              </div>

              <div style={{ background: 'rgba(22, 119, 255, 0.08)', border: '1px solid rgba(22, 119, 255, 0.25)', borderRadius: '8px', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" style={{ color: '#008CFF' }} />
                <span style={{ fontSize: '0.82rem', color: '#D1D5DB' }}>
                  Explore verified project case studies and student training programs across our specialized portals.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

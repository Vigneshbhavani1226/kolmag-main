import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Rocket, 
  Layers, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Globe2, 
  Cpu, 
  Cloud, 
  Users, 
  ChevronRight, 
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';

export default function AboutPage({ onOpenConsultation }) {
  // 4 Core Values
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: 'Security and Responsibility',
      desc: 'Security principles, code confidentiality, and data protection are integrated into every software build and workflow from day one.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
      title: 'Transparency and Integrity',
      desc: 'Honest capability representation, realistic project estimates, clear pricing, and dependable milestone delivery without unsupported claims.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      title: 'Agile Execution',
      desc: 'Iterative, sprint-based delivery that adapts quickly to evolving client requirements while maintaining architectural stability.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: 'Continuous Learning',
      desc: 'Ongoing technical upskilling in modern cloud tools, security standards, and AI frameworks to provide fresh, relevant solutions.'
    }
  ];

  // Core Technology Capabilities
  const capabilities = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Custom Software Development',
      desc: 'Enterprise backends, REST and GraphQL APIs, microservices, and database management using modern stacks.'
    },
    {
      icon: <Globe2 className="w-5 h-5 text-cyan-400" />,
      title: 'Web & Mobile Applications',
      desc: 'High-performance responsive web portals, Progressive Web Apps, and cross-platform mobile apps for iOS and Android.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Cybersecurity & VAPT',
      desc: 'Defensive audits, vulnerability assessments, penetration testing suites, zero-trust reviews, and infrastructure hardening.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Containerized workloads with Docker and Kubernetes, automated CI/CD pipelines, and cloud server configuration.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'AI & Data Engineering',
      desc: 'Machine learning models, automated data extractors, predictive intelligence pipelines, and intelligent workflow assistants.'
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Enterprise Business Support',
      desc: 'Technical staffing solutions, business process optimization, standard operating procedure documentation, and helpdesk support.'
    }
  ];

  // Practical Learning Commitments
  const learningPillars = [
    {
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      title: 'Hands-On Lab Curriculum',
      desc: 'Practical, code-first training covering modern frameworks (React, Node.js, Python, Linux) rather than rote theory.'
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      title: 'Mentor-Led Guidance',
      desc: 'Students learn directly under senior engineers through scheduled code reviews, architectural feedback, and debugging guidance.'
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: 'Real Project Capstones',
      desc: 'Participants build documented, deployable projects on GitHub that showcase genuine problem-solving capabilities.'
    }
  ];

  return (
    <div className="page-view-about">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-badge">
            <Building2 className="w-4 h-4 text-cyan-400" /> About Our Company
          </div>
          <h1 className="page-banner-title">
            Engineering Solutions.{' '}
            <span className="text-gradient-cyan">Cultivating Talent.</span>
          </h1>
          <p className="page-banner-subtitle">
            KOLMAG Cyber Technologies Private Limited delivers secure enterprise technology services while preparing aspiring engineers with practical, real-world skills.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>About Us</span>
          </div>
        </div>
      </section>

      {/* 1. Company Overview */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-badge" style={{ marginBottom: '0.85rem' }}>Company Overview</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Dedicated to Reliable Engineering & Real-World Skills
              </h2>
              <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                <strong>KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED</strong> is a technology services and talent development organization based in Hyderabad, India. We help businesses build, secure, and modernize their digital infrastructure through custom software development, cloud operations, defensive cybersecurity, and AI solutions.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                At the same time, we recognize the critical gap between university academic curricula and industry expectations. Through structured training laboratories and student internships, we provide aspiring engineers with practical coding experience, Git workflows, and mentorship from practicing professionals.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn-hero-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.4rem' }}>
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/training-internships" className="btn-hero-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.4rem' }}>
                  Training Programs <GraduationCap className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="feature-card" style={{ padding: '2rem', border: '1px solid rgba(22, 119, 255, 0.35)', background: 'rgba(12, 16, 24, 0.9)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img 
                  src="/assets/kolmag-logo-white.png" 
                  alt="KOLMAG Logo" 
                  style={{ height: '42px', width: 'auto' }}
                />
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    KOLMAG CYBER TECHNOLOGIES
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#008CFF' }}>Private Limited • Incorporated Entity</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', fontSize: '0.9rem', color: '#D1D5DB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Core Focus:</span>
                  <strong style={{ color: '#fff' }}>Software, Cyber & Training</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Delivery Model:</span>
                  <strong style={{ color: '#fff' }}>Dual Tech & Talent Ecosystem</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Corporate Office:</span>
                  <strong style={{ color: '#fff' }}>Hyderabad, India</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Support Channels:</span>
                  <strong style={{ color: '#008CFF' }}>Email & Direct Phone</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Approach */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Purpose & Direction</span>
            <h2 className="section-title">Mission, Vision & Approach</h2>
            <p className="section-subtitle">
              Clear principles steering our day-to-day client work and our commitment to educational skill enhancement.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="feature-icon-wrapper"><ShieldCheck className="w-5 h-5 text-blue-400" /></div>
                <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Our Mission</h3>
                <p className="feature-desc" style={{ marginTop: '0.75rem', lineHeight: '1.65' }}>
                  To deliver secure, reliable, and scalable technology solutions for modern organizations while providing aspiring technical professionals with hands-on, project-driven competence that bridges the academic gap.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: '#008CFF', fontWeight: 600 }}>
                Dependable Delivery & Practical Learning
              </div>
            </div>

            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="feature-icon-wrapper"><Rocket className="w-5 h-5 text-blue-400" /></div>
                <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Our Vision</h3>
                <p className="feature-desc" style={{ marginTop: '0.75rem', lineHeight: '1.65' }}>
                  To be a recognized technology and talent development partner renowned for disciplined engineering standards, transparent business practices, and an unwavering commitment to genuine capability building.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: '#008CFF', fontWeight: 600 }}>
                Quality Standards & Ethical Engagement
              </div>
            </div>

            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="feature-icon-wrapper"><Layers className="w-5 h-5 text-blue-400" /></div>
                <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Our Approach</h3>
                <p className="feature-desc" style={{ marginTop: '0.75rem', lineHeight: '1.65' }}>
                  A disciplined, lifecycle-based methodology connecting requirements discovery, secure architecture design, iterative sprint development, rigorous test validation, and responsive ongoing support.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: '#008CFF', fontWeight: 600 }}>
                End-to-End Lifecycle Discipline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Guiding Standards</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Every system we engineer and every training cohort we guide is shaped by four fundamental values.
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
                <p className="feature-desc" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Capabilities */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Verified Practice Areas</span>
            <h2 className="section-title">Technology Capabilities</h2>
            <p className="section-subtitle">
              Demonstrated proficiencies spanning modern software engineering, defensive security, cloud systems, and applied automation.
            </p>
          </div>

          <div className="grid-3">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="feature-icon-wrapper" style={{ marginBottom: '0.85rem' }}>{cap.icon}</div>
                  <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{cap.title}</h3>
                  <p className="feature-desc">{cap.desc}</p>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <Link to="/services" className="card-action-cta" style={{ textDecoration: 'none' }}>
                    <span>Learn more</span> <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Commitment to Practical Learning & Professional Development */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Real-World Competence</span>
            <h2 className="section-title">Commitment to Practical Learning & Development</h2>
            <p className="section-subtitle">
              How we nurture aspiring developers into confident, industry-ready professionals through hands-on project execution.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            {learningPillars.map((pillar, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper" style={{ marginBottom: '1rem' }}>{pillar.icon}</div>
                <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{pillar.title}</h3>
                <p className="feature-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="feature-card" style={{ background: 'linear-gradient(135deg, rgba(22, 119, 255, 0.15), rgba(10, 14, 22, 0.9))', border: '1px solid rgba(22, 119, 255, 0.35)', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Interested in Our Practical Training or Student Internships?
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.92rem', maxWidth: '650px', margin: 0 }}>
                Explore curriculum tracks, project expectations, eligibility criteria, and connect directly with our academy leads.
              </p>
            </div>
            <Link to="/training-internships" className="btn-hero-primary" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Explore Training Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Partner with KOLMAG? */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Concrete Customer Benefits</span>
            <h2 className="section-title">Why Partner with KOLMAG?</h2>
            <p className="section-subtitle">
              Measurable, verifiable advantages we bring to enterprise technology engagements.
            </p>
          </div>

          <div className="grid-2">
            <div className="feature-card">
              <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Disciplined Engineering & DevSecOps
              </h3>
              <p className="feature-desc" style={{ marginBottom: '1rem' }}>
                We prioritize secure coding practices, automated regression testing, and modular architectures to eliminate technical debt early.
              </p>
              <div style={{ fontSize: '0.85rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', border: '1px solid rgba(22, 119, 255, 0.2)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                ✓ Clean version control, peer reviews & automated linting
              </div>
            </div>

            <div className="feature-card">
              <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Dual Delivery Synergy
              </h3>
              <p className="feature-desc" style={{ marginBottom: '1rem' }}>
                Our synchronized structure allows businesses to access both senior engineering expertise and dedicated junior engineering pipelines.
              </p>
              <div style={{ fontSize: '0.85rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', border: '1px solid rgba(22, 119, 255, 0.2)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                ✓ Flexible engagement models from project builds to staffing support
              </div>
            </div>

            <div className="feature-card">
              <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Transparent Milestones & Clear SLAs
              </h3>
              <p className="feature-desc" style={{ marginBottom: '1rem' }}>
                Clients work directly with technical project leads with regular sprint demonstrations, transparent progress tracking, and straightforward pricing.
              </p>
              <div style={{ fontSize: '0.85rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', border: '1px solid rgba(22, 119, 255, 0.2)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                ✓ Direct technical communication with no bureaucratic layers
              </div>
            </div>

            <div className="feature-card">
              <h3 className="feature-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Continuous Modernization
              </h3>
              <p className="feature-desc" style={{ marginBottom: '1rem' }}>
                We actively integrate contemporary frameworks—including React, modern cloud-native tools, and verified AI pipelines—keeping your applications ahead of the curve.
              </p>
              <div style={{ fontSize: '0.85rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', border: '1px solid rgba(22, 119, 255, 0.2)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                ✓ Future-ready tech stacks without unnecessary complexity
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              onClick={() => onOpenConsultation && onOpenConsultation('General')}
              className="btn-hero-primary"
            >
              Start a Conversation with Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

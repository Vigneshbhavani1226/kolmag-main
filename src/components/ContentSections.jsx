import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Globe2,
  Users,
  Search,
  ShoppingCart,
  TrendingUp,
  Palette,
  BarChart3,
  Layers,
  Rocket,
  Server,
  FileCheck2,
  Headphones,
  Building2,
  CheckCircle2,
  Send,
  MessageSquare,
  Clock,
  Award,
  BookOpen,
  Sparkles
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();
import { allCapabilities, allIndustries } from '../data/servicesData';

/* ==========================================================================
   2. ABOUT US SECTION
   ========================================================================== */
export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Company Profile</span>
          <h2 className="section-title">About KOLMAG Cyber Technologies</h2>
          <p className="section-subtitle">
            KOLMAG Cyber Technologies Private Limited delivers secure enterprise software, defensive cybersecurity engineering, cloud systems, and specialized business operations support—while fostering industry-ready technical talent.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="feature-card">
            <div className="feature-icon-wrapper"><Shield className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Mission</h3>
            <p className="feature-desc">
              To engineer secure, reliable technology solutions for modern organizations while providing aspiring professionals with practical, project-driven technical competence that bridges the academic gap.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Rocket className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Vision</h3>
            <p className="feature-desc">
              To be a recognized technology and talent development partner renowned for disciplined engineering standards, transparent business practices, and an unwavering commitment to genuine capability building.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Layers className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Business Approach</h3>
            <p className="feature-desc">
              A disciplined, lifecycle-based methodology connecting discovery, secure architecture design, iterative sprint development, rigorous test validation, and continuous operational support.
            </p>
          </div>
        </div>

        {/* Core Values & Why Partner Overview */}
        <div className="grid-2">
          <div className="feature-card" style={{ borderLeft: '3px solid #1677FF' }}>
            <h3 className="feature-title">Core Company Values</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.25rem', color: '#D1D5DB', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" style={{ marginTop: '0.2rem' }} /> 
                <div><strong>Security and Responsibility:</strong> Defensive engineering, data protection, and confidentiality integrated into every build from day one.</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" style={{ marginTop: '0.2rem' }} /> 
                <div><strong>Transparency and Integrity:</strong> Honest capability representation, realistic timelines, and dependable milestone delivery without unsupported claims.</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" style={{ marginTop: '0.2rem' }} /> 
                <div><strong>Agile Execution:</strong> Modular, adaptive delivery cycles tailored to client milestones without operational overhead.</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" style={{ marginTop: '0.2rem' }} /> 
                <div><strong>Continuous Learning:</strong> Dedication to ongoing research in modern cloud, security, and AI frameworks for clients and students alike.</div>
              </li>
            </ul>
          </div>

          <div className="feature-card" style={{ borderLeft: '3px solid #008CFF' }}>
            <h3 className="feature-title">Why Partner with KOLMAG?</h3>
            <p className="feature-desc" style={{ marginBottom: '1.25rem' }}>
              We offer a synchronized portfolio combining deep technical capabilities in software and security with practical business operations support and skilled engineering talent pipelines.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Disciplined SDLC</strong> 
                DevSecOps, automated testing, and clean architecture standards.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Dual Delivery</strong> 
                Full software engineering alongside workforce support.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Practical Mentorship</strong> 
                Emerging talent trained on genuine project workflows.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Direct Communication</strong> 
                Collaborate directly with hands-on technical leads.
              </div>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/about" className="mega-footer-link">
                Read More on Our Dedicated About Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. SERVICES SECTION (Interactive Two-Tab Mega-View)
   ========================================================================== */
export function ServicesSection({ onOpenConsultation, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'capabilities' | 'industries'
  const [searchQuery, setSearchQuery] = useState('');

  const displayedCapabilities = allCapabilities.filter(item => {
    if (!searchQuery) return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayedIndustries = allIndustries.filter(item => {
    if (!searchQuery) return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Enterprise Portfolio</span>
          <h2 className="section-title">Capabilities & Industry Practices</h2>
          <p className="section-subtitle">
            Synchronized technology capabilities and specialized sector practices engineered for high performance, zero-trust security, and scalable digital reinvention.
          </p>
        </div>

        {/* Filter Bar: Tabs & Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', background: '#090d16', padding: '0.35rem', borderRadius: '8px', border: '1px solid rgba(22, 119, 255, 0.25)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'all' ? '#1677FF' : 'transparent',
                color: activeTab === 'all' ? '#ffffff' : '#94a3b8'
              }}
            >
              All Offerings ({allCapabilities.length + allIndustries.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('capabilities')}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'capabilities' ? '#1677FF' : 'transparent',
                color: activeTab === 'capabilities' ? '#ffffff' : '#94a3b8'
              }}
            >
              Capabilities ({allCapabilities.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('industries')}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'industries' ? '#1677FF' : 'transparent',
                color: activeTab === 'industries' ? '#ffffff' : '#94a3b8'
              }}
            >
              Industries ({allIndustries.length})
            </button>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search className="w-4 h-4 text-slate-400" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capability or industry..."
              style={{
                width: '100%',
                padding: '0.55rem 1rem 0.55rem 2.25rem',
                background: '#090d16',
                border: '1px solid rgba(22, 119, 255, 0.25)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Category 1: Capabilities (19 Offerings) */}
        {(activeTab === 'all' || activeTab === 'capabilities') && displayedCapabilities.length > 0 && (
          <div className="services-group" style={{ marginBottom: '3.5rem' }}>
            <div className="services-group-header">
              <div className="services-group-badge">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Capabilities</span>
                <span className="group-count">{displayedCapabilities.length} Offerings</span>
              </div>
              <p className="services-group-desc">
                Enterprise technology services spanning artificial intelligence, cloud modernization, zero-trust cybersecurity, and strategic digital transformation.
              </p>
            </div>

            <div className="grid-3">
              {displayedCapabilities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="feature-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(item);
                    }
                  }}
                >
                  <div>
                    <div className="feature-icon-wrapper">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-desc">{item.desc}</p>
                    {item.tools && item.tools.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.85rem' }}>
                        {item.tools.slice(0, 3).map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.68rem',
                              background: 'rgba(22, 119, 255, 0.12)',
                              color: '#60a5fa',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px',
                              border: '1px solid rgba(22, 119, 255, 0.25)'
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <span className="mega-footer-link" style={{ fontSize: '0.84rem', color: '#008CFF' }}>
                      How We Fulfill This <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Tap for details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Industries (20 Sectors) */}
        {(activeTab === 'all' || activeTab === 'industries') && displayedIndustries.length > 0 && (
          <div className="services-group">
            <div className="services-group-header">
              <div className="services-group-badge">
                <Building2 className="w-5 h-5 text-cyan-400" />
                <span>Industries</span>
                <span className="group-count">{displayedIndustries.length} Sectors</span>
              </div>
              <p className="services-group-desc">
                Dedicated industry verticals customized with regulatory compliance, domain architectures, and sector-specialized solutions.
              </p>
            </div>

            <div className="grid-3">
              {displayedIndustries.map((item, idx) => (
                <div 
                  key={idx} 
                  className="feature-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(item);
                    }
                  }}
                >
                  <div>
                    <div className="feature-icon-wrapper">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <span className="mega-footer-link" style={{ fontSize: '0.84rem', color: '#008CFF' }}>
                      Industry Practice Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Tap for details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            onClick={() => onOpenConsultation && onOpenConsultation('Comprehensive Capabilities & Industry Practices')}
            className="btn-hero-primary"
          >
            Schedule Service Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   4. SOLUTIONS SECTION (Organized Around Customer Problems)
   ========================================================================== */
export function SolutionsSection({ onOpenConsultation }) {
  const solutionsData = [
    {
      tag: 'Modernization',
      title: 'Digital Transformation',
      problem: 'Legacy systems slow down business velocity, incur technical debt, and prevent cloud scalability.',
      approach: 'Phased refactoring, automated data migration, and microservices architecture without business downtime.',
      services: ['Custom Software Development', 'Cloud Migration', 'API Integration', 'DevOps Automation']
    },
    {
      tag: 'Scale & Reliability',
      title: 'Enterprise Technology Solutions',
      problem: 'Disjointed enterprise applications lead to data silos, reporting delays, and workflow friction.',
      approach: 'Integrated enterprise data fabric connecting ERP, CRM, and internal workflows into unified dashboards.',
      services: ['Enterprise Applications', 'Database Optimization', 'Workflow Automation', 'QA Testing']
    },
    {
      tag: 'Intelligence',
      title: 'AI-Powered Business Automation',
      problem: 'Manual data entry, repetitive document processing, and slow customer support inflate operational costs.',
      approach: 'Deploy specialized AI agents, intelligent OCR document extractors, and predictive decision pipelines.',
      services: ['AI & Data Science', 'Autonomous Agents', 'NLP Pipelines', 'Predictive Modeling']
    },
    {
      tag: 'Resilience',
      title: 'Cybersecurity & Risk Management',
      problem: 'Escalating ransomware threats, unpatched vulnerabilities, and strict regulatory compliance requirements.',
      approach: 'Zero-trust network architecture, continuous VAPT security audits, and automated incident response playbooks.',
      services: ['VAPT Security Testing', 'Cloud Hardening', 'Identity & Access Management', 'SOC Advisory']
    },
    {
      tag: 'Performance',
      title: 'Cloud Infrastructure Solutions',
      problem: 'Unoptimized cloud costs, server downtime, and rigid on-premise infrastructure under peak traffic.',
      approach: 'Multi-cloud Kubernetes clusters, automated scaling policies, and low-latency agent hosting environments.',
      services: ['Cloud Architecture', 'DevOps CI/CD', 'Server Monitoring', 'Disaster Recovery']
    },
    {
      tag: 'Efficiency',
      title: 'Business Process Optimization',
      problem: 'Bloated operational overhead, fragmented departmental communication, and inconsistent customer SLAs.',
      approach: 'Process rationalization, SOP standardization, and managed back-office support integration.',
      services: ['Business Consulting', 'BPO Customer Support', 'Administrative Management', 'Operations Scaling']
    },
    {
      tag: 'Agility',
      title: 'Startup & SME Technology Solutions',
      problem: 'Limited engineering bandwidth, tight launch runways, and requirement for production-grade MVPs.',
      approach: 'Rapid MVP prototyping, modular tech stacks, and flexible fractional development engineering teams.',
      services: ['Web & Mobile Development', 'Fractional CTO Advisory', 'Cloud Setup', 'Technical Staffing']
    },
    {
      tag: 'Vertical Alignment',
      title: 'Industry-Specific Solutions',
      problem: 'Standard software fails to meet unique industry regulations in Healthcare, Fintech, Logistics, and Education.',
      approach: 'Compliant, purpose-built digital architectures aligned with HIPAA, PCI-DSS, or educational standards.',
      services: ['Custom Domain Architectures', 'Compliance Validation', 'System Hardening', 'API Integrations']
    }
  ];

  return (
    <section id="solutions" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Solution Architectures</span>
          <h2 className="section-title">Organized Around Your Business Challenges</h2>
          <p className="section-subtitle">
            Rather than a generic list of capabilities, we design end-to-end solutions focused on overcoming specific operational bottlenecks and technology friction.
          </p>
        </div>

        <div className="grid-2">
          {solutionsData.map((sol, idx) => (
            <div key={idx} className="solution-arch-card">
              <div className="sol-arch-header">
                <span className="sol-tag">{sol.tag}</span>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Solution 0{idx + 1}</span>
              </div>

              <h3 className="feature-title" style={{ fontSize: '1.35rem' }}>{sol.title}</h3>

              <div className="sol-problem-box">
                <strong>Problem:</strong> {sol.problem}
              </div>

              <div className="sol-approach-box">
                <strong>Our Approach:</strong> {sol.approach}
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                  Associated Services:
                </span>
                <div className="sol-services-pills">
                  {sol.services.map((item, sIdx) => (
                    <span key={sIdx} className="sol-pill">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}
            className="btn-hero-primary"
          >
            Discuss Custom Architecture With Solution Leads <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   5. OUR WORK SECTION (Portfolio & Capabilities)
   ========================================================================== */
export function OurWorkSection() {
  const projects = [
    {
      category: 'Software Development',
      title: 'Enterprise Workflow & Asset Orchestrator',
      desc: 'Designed a microservices-based operational management system for multi-site industrial inventory tracking and automated approval workflows.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      outcome: 'Reduced document sign-off latency by 68%'
    },
    {
      category: 'Web & Mobile Applications',
      title: 'Cross-Platform Field Services Mobile Platform',
      desc: 'Engineered an offline-first mobile app and management portal for field inspection teams operating in variable connectivity zones.',
      tech: ['React Native', 'TypeScript', 'GraphQL', 'AWS S3'],
      outcome: '100% offline data synchronization reliability'
    },
    {
      category: 'AI & Data Science',
      title: 'Intelligent Real-Time Demand Forecaster',
      desc: 'Constructed an automated machine learning forecasting pipeline analyzing multi-variable seasonal supply shifts and warehouse storage loads.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'Pandas', 'TimescaleDB'],
      outcome: 'Improved inventory allocation precision by 34%'
    },
    {
      category: 'Cybersecurity Projects',
      title: 'Zero-Trust Architecture & Threat Hardening',
      desc: 'Executed end-to-end VAPT penetration audits, privilege access re-architecting, and continuous vulnerability remediation for a regional financial services network.',
      tech: ['OWASP ZAP', 'Burp Suite', 'Wazuh SIEM', 'Kubernetes NetworkPolicies'],
      outcome: 'Resolved 42 critical/high network exposure points'
    },
    {
      category: 'Cloud & DevOps Projects',
      title: 'Multi-Cloud Kubernetes Hosting & CI/CD Mesh',
      desc: 'Migrated legacy containerized workloads to high-availability multi-region cloud clusters with automated blue-green delivery pipelines.',
      tech: ['Terraform', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana'],
      outcome: '99.99% service availability during traffic spikes'
    },
    {
      category: 'Digital Marketing & Creative',
      title: 'B2B Brand Repositioning & Search Funnel',
      desc: 'Revamped the complete brand identity, visual style guide, technical SEO foundation, and conversion-optimized landing pages for a technology consultancy.',
      tech: ['Figma', 'Next.js', 'Semantic SEO', 'Google Analytics 4'],
      outcome: 'Achieved 140% boost in organic technical inquiries'
    },
    {
      category: 'Business Process Projects',
      title: 'Operations Re-engineering & Shared BPO Desk',
      desc: 'Standardized client support tiers, implemented ticket routing intelligence, and provided dedicated administrative coordination for a growing e-commerce merchant.',
      tech: ['Zendesk API', 'SOP Design', 'Process Mapping', 'KPI Telemetry'],
      outcome: 'Average first-response time dropped to under 12 minutes'
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Verified Capabilities</span>
          <h2 className="section-title">Our Work & Project Portfolio</h2>
          <p className="section-subtitle">
            A showcase of genuine engineering deployments and demonstrated capabilities across software, cybersecurity, artificial intelligence, and operational workflows.
          </p>
        </div>

        <div className="grid-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div>
                <span className="project-category-badge">{proj.category}</span>
                <h3 className="feature-title" style={{ fontSize: '1.15rem' }}>{proj.title}</h3>
                <p className="feature-desc">{proj.desc}</p>
                <div className="project-tech-stack">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-outcome">
                <CheckCircle className="w-4 h-4" /> {proj.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   6. TRAINING & INTERNSHIPS SECTION
   ========================================================================== */
export function TrainingSection({ onOpenConsultation }) {
  const technicalTracks = [
    { title: 'Full Stack Web Development', tools: 'React, Node.js, Express, MongoDB/SQL, Git & Modern CSS' },
    { title: 'Python & Java Programming', tools: 'Core & Advanced OOP, Data Structures, Algorithms, Spring Boot & Django' },
    { title: 'AI, Machine Learning & Data Science', tools: 'PyTorch, Scikit-Learn, Pandas, Computer Vision, LLM Foundations' },
    { title: 'Cybersecurity & Ethical Hacking', tools: 'Network Defense, VAPT Methodologies, Linux Administration, SOC Fundamentals' },
    { title: 'Cloud Computing & DevOps', tools: 'AWS/Azure, Docker Containers, Kubernetes Basics, CI/CD with Git' }
  ];

  const professionalTracks = [
    { title: 'Aptitude & Communication Skills', desc: 'Quantitative problem solving, verbal reasoning, email etiquette, and presentation skills.' },
    { title: 'Interview Preparation & Resume Building', desc: 'Technical mock interviews, behavioral rounds, portfolio GitHub curation, and LinkedIn optimization.' },
    { title: 'Student Industrial Internships', desc: 'Hands-on practical stints simulating corporate sprint cycles with structured code reviews.' },
    { title: 'Project-Based Learning', desc: 'Build production-style capstone projects with proper documentation and architectural write-ups.' },
    { title: 'Corporate Training Programs', desc: 'Upskilling cohorts for corporate employees in modern frameworks, cloud tools, and cyber hygiene.' },
    { title: 'Academic Collaboration', desc: 'MoU partnerships with universities and engineering colleges for guest lectures and curriculum alignment.' }
  ];

  return (
    <section id="training" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Training & Professional Internships</h2>
          <p className="section-subtitle">
            Industry-aligned education, practical coding laboratories, and career preparation designed to turn engineering potential into production-grade capability.
          </p>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Technical Specialization Programs
          </h3>
          <div className="grid-3">
            {technicalTracks.map((trk, idx) => (
              <div key={idx} className="feature-card">
                <div>
                  <div className="feature-icon-wrapper"><BookOpen className="w-5 h-5" /></div>
                  <h4 className="feature-title" style={{ fontSize: '1.1rem' }}>{trk.title}</h4>
                  <p className="feature-desc" style={{ marginBottom: '0.85rem' }}>
                    Core curriculum emphasizing hands-on problem solving, architectural patterns, and production coding habits.
                  </p>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                  <strong>Key Technologies:</strong> {trk.tools}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Professional Preparation & Institutional Programs
          </h3>
          <div className="grid-3">
            {professionalTracks.map((trk, idx) => (
              <div key={idx} className="feature-card">
                <div>
                  <div className="feature-icon-wrapper"><Award className="w-5 h-5" /></div>
                  <h4 className="feature-title" style={{ fontSize: '1.1rem' }}>{trk.title}</h4>
                  <p className="feature-desc">{trk.desc}</p>
                </div>
                <button 
                  onClick={() => onOpenConsultation && onOpenConsultation('Training & Internships')}
                  className="mega-footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Apply / Program Inquiry <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="disclaimer-banner">
          ℹ️ <strong>Academic Program Notice:</strong> All training programs focus on industry readiness, hands-on portfolio creation, and skill competence. KOLMAG provides career preparation and mock interviews, but does not guarantee job placements.
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   7. CAREERS SECTION (Recruitment, Life & Opportunities)
   ========================================================================== */
export function CareersSection({ onOpenConsultation }) {
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [resumeData, setResumeData] = useState({ name: '', email: '', role: '', notes: '' });

  const handleResumeSubmit = (e) => {
    e.preventDefault();
    setResumeSubmitted(true);
    setTimeout(() => {
      setResumeSubmitted(false);
      setResumeData({ name: '', email: '', role: '', notes: '' });
    }, 4500);
  };

  const openings = [
    {
      title: 'Junior / Mid Full-Stack Engineer',
      type: 'Full-Time | Hybrid / Hyderabad',
      dept: 'IT & Digital Services',
      desc: 'Build scalable React and Node.js microservices. Experience with TypeScript, PostgreSQL, and Git workflows required.'
    },
    {
      title: 'Cybersecurity Associate (VAPT)',
      type: 'Full-Time | On-Site',
      dept: 'Information Security Practice',
      desc: 'Perform vulnerability scans, assist with web application penetration tests, and draft remediation advisories.'
    },
    {
      title: 'AI / Machine Learning Engineer',
      type: 'Full-Time | Hybrid / Hyderabad',
      dept: 'AI & Data Science Practice',
      desc: 'Deploy custom LLM pipelines, RAG frameworks, predictive inference engines, and automated data processing meshes.'
    },
    {
      title: 'Technical Talent Acquisition Specialist',
      type: 'Full-Time | Hybrid',
      dept: 'HR & Staffing Services',
      desc: 'Sourcing, technical pre-screening, and coordinator for client IT recruitment and candidate engagement.'
    },
    {
      title: 'Graduate Software Intern',
      type: 'Internship (3-6 Months) | Hybrid',
      dept: 'Engineering Division',
      desc: 'Hands-on project work in full-stack web and Python automation under the guidance of senior technical leads.'
    }
  ];

  const cultureValues = [
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: 'Zero-Trust Discipline',
      desc: 'Rigorous security engineering integrated into every commit, automated CI/CD scans, and peer code reviews.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Modern Architecture Stacks',
      desc: 'Build on cloud-native Kubernetes, microservices, PyTorch, React 19, and enterprise-grade infrastructure.'
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: 'Certifications & Mentorship',
      desc: 'Paid sponsorships for cloud, OSCP, and AI certifications with weekly 1-on-1 guidance from principal architects.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: 'Meritocracy & Hybrid Freedom',
      desc: 'High autonomy, flexible hybrid schedules, clear career milestones, and zero tolerance for bureaucracy.'
    }
  ];

  return (
    <section id="careers" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Join KOLMAG</span>
          <h2 className="section-title">Careers at KOLMAG Cyber Technologies</h2>
          <p className="section-subtitle">
            Explore current employment opportunities within our engineering, cybersecurity, AI, and business operations teams.
          </p>
        </div>

        {/* Culture & Employee Value Pillars */}
        <div id="careers-culture" style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.35rem', marginBottom: '1.25rem', textAlign: 'center' }}>
            Life, Culture & Engineering Values
          </h3>
          <div className="career-culture-grid">
            {cultureValues.map((val, idx) => (
              <div key={idx} className="feature-card" style={{ padding: '1.5rem' }}>
                <div className="feature-icon-wrapper" style={{ marginBottom: '1rem' }}>{val.icon}</div>
                <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>{val.title}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions and Hiring Process */}
        <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
          <div id="careers-openings">
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Current Open Positions ({openings.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {openings.map((job, idx) => (
                <div key={idx} className="career-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>{job.title}</h4>
                    <span className="card-tag">{job.dept}</span>
                  </div>
                  <div className="career-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock className="w-3.5 h-3.5 text-cyan-400" /> {job.type}</span>
                  </div>
                  <p className="feature-desc" style={{ marginBottom: '1rem' }}>{job.desc}</p>
                  <button 
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation('Recruitment & Staffing');
                      } else {
                        const el = document.getElementById('careers-apply');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="mega-footer-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Apply for this Role <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div id="careers-process">
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                Our Transparent Recruitment Process
              </h3>
              <div className="feature-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(22, 119, 255, 0.15)', color: '#008CFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Profile & Resume Evaluation</h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Review of technical projects, GitHub/portfolio links, and domain alignment.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(22, 119, 255, 0.15)', color: '#008CFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Technical & Practical Assessment</h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Live coding evaluation, architectural discussion, or role-specific exercise.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(22, 119, 255, 0.15)', color: '#008CFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>3</div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Leadership Dialogue & Offer</h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Culture fit conversation, role expectations, and formal onboarding timeline.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Resume Form */}
            <div id="careers-apply" className="feature-card">
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Submit Your Resume (General Application)
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Don't see an exact match? Submit your details to our talent pool for upcoming IT, cybersecurity, and operations roles.
              </p>

              {resumeSubmitted ? (
                <div style={{ background: 'rgba(22, 119, 255, 0.1)', border: '1px solid #1677FF', borderRadius: '8px', padding: '1.25rem', textAlign: 'center', color: '#fff' }}>
                  <CheckCircle2 className="w-8 h-8 text-blue-400" style={{ margin: '0 auto 0.5rem' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Resume Profile Received</h4>
                  <p style={{ fontSize: '0.84rem', color: '#D1D5DB', marginTop: '0.25rem' }}>
                    Thank you! Your profile has been registered in the KOLMAG Talent Acquisition registry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleResumeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    value={resumeData.name}
                    onChange={(e) => setResumeData({...resumeData, name: e.target.value})}
                    required 
                    style={{ background: 'rgba(10, 14, 22, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    value={resumeData.email}
                    onChange={(e) => setResumeData({...resumeData, email: e.target.value})}
                    required 
                    style={{ background: 'rgba(10, 14, 22, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                  <select 
                    value={resumeData.role}
                    onChange={(e) => setResumeData({...resumeData, role: e.target.value})}
                    required 
                    style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  >
                    <option value="">Select Target Track...</option>
                    <option value="Software Engineering">Software Engineering & Development</option>
                    <option value="Cybersecurity">Cybersecurity & Networking</option>
                    <option value="AI & Data Science">AI, Machine Learning & Data Science</option>
                    <option value="Business & Non-IT">Business Operations / HR / BPO</option>
                    <option value="Internship">Student Internship Program</option>
                  </select>
                  <textarea 
                    rows="2" 
                    placeholder="LinkedIn URL, Portfolio Link, or Summary of Experience *"
                    value={resumeData.notes}
                    onChange={(e) => setResumeData({...resumeData, notes: e.target.value})}
                    required 
                    style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                  />
                  <button type="submit" className="btn-modal-primary" style={{ padding: '0.7rem' }}>
                    Submit Resume Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="disclaimer-banner">
          ⚠️ <strong>Hiring Disclosure:</strong> KOLMAG Cyber Technologies hires strictly based on merit, skills evaluation, and direct interview assessments. We do not charge fees from applicants for interviews or employment.
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   8. CONTACT SECTION (Dedicated Inquiry Paths & Communication Channels)
   ========================================================================== */
export function ContactSection({ onOpenConsultation }) {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', inquiryCategory: 'IT Services Inquiry', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactData({ name: '', email: '', phone: '', inquiryCategory: 'IT Services Inquiry', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Connect With Us</span>
          <h2 className="section-title">Dedicated Business & Technical Inquiries</h2>
          <p className="section-subtitle">
            Choose your specific inquiry channel below to route directly to our solution architects, business operations team, or academy coordinators.
          </p>
        </div>

        {/* 6 Inquiry Pathway Cards */}
        <div id="contact-paths" className="grid-3" style={{ marginBottom: '3.5rem' }}>
          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><Code2 className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>IT Services Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Custom software, cloud architecture, cybersecurity audits & AI pipelines.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Business & Non-IT Services')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><Briefcase className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Non-IT & Operations Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Recruitment, HR workflows, BPO support & business consulting.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Training & Internships')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><GraduationCap className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Training & Internships Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Student internships, technical courses, and university MoUs.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Recruitment & Staffing')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><Users className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Corporate Recruitment Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Hire vetted engineers and lateral technical staffing for enterprise teams.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Business Partnership')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><Building2 className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Enterprise Partnership</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Vendor alliances, joint technology ventures, and ecosystem programs.</p>
          </div>

          <div className="contact-route-card" style={{ background: 'linear-gradient(135deg, rgba(22,119,255,0.25), rgba(0,140,255,0.08))', borderColor: '#1677FF' }} onClick={() => onOpenConsultation && onOpenConsultation('General')}>
            <div style={{ color: '#008CFF', marginBottom: '0.5rem' }}><MessageSquare className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>General Inquiries</h4>
            <p style={{ color: '#D1D5DB', fontSize: '0.82rem' }}>General corporate information, media questions, or administrative requests.</p>
          </div>
        </div>

        {/* Contact Information & Interactive Form */}
        <div className="grid-2">
          <div id="contact-channels" className="feature-card">
            <h3 className="feature-title">Direct Corporate Communication Channels</h3>
            <p className="feature-desc" style={{ marginBottom: '1.75rem' }}>
              Reach our corporate offices or connect directly with our engineering advisory team during standard business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Corporate Email</div>
                  <a href="mailto:contact@kolmagtech.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>contact@kolmagtech.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone Advisory</div>
                  <a href="tel:+916309649554" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>+91 6309649554</a>
                </div>
              </div>

              <div id="contact-office" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" style={{ marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>Registered Office</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.25rem' }}>
                    KOLMAG Cyber Technologies Pvt Ltd
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.55' }}>
                    HNO 9/HIG-A & 10/HIG APHB COLONY, GACHIBOWLI, K.V. RANGAREDDY, SERI LINGAMPALLY, TELANGANA, INDIA, 500032
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact-form" className="feature-card">
            <h3 className="feature-title">Send a Direct Message</h3>

            {formSent ? (
              <div style={{ background: 'rgba(22, 119, 255, 0.1)', border: '1px solid #1677FF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', color: '#fff', marginTop: '1rem' }}>
                <CheckCircle2 className="w-8 h-8 text-blue-400" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Inquiry Received Successfully</h4>
                <p style={{ fontSize: '0.85rem', color: '#D1D5DB', marginTop: '0.35rem' }}>
                  Thank you! We have routed your request to the <strong>{contactData.inquiryCategory}</strong> team. We'll be in touch within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 600 }}>Inquiry Pathway *</label>
                  <select 
                    value={contactData.inquiryCategory}
                    onChange={(e) => setContactData({...contactData, inquiryCategory: e.target.value})}
                    className="modal-select"
                    style={{ marginTop: '0.3rem', width: '100%' }}
                  >
                    <option value="IT Services Inquiry">IT & Digital Services (Software, Cloud, Cyber)</option>
                    <option value="Non-IT Services Inquiry">Business & Non-IT Services (Staffing, BPO, Media)</option>
                    <option value="Training & Internship Inquiry">Training, Internships & Academic Programs</option>
                    <option value="Corporate Recruitment Inquiry">Corporate Recruitment & Lateral Hiring</option>
                    <option value="Business Partnership Inquiry">Enterprise Partnership & Vendor Collaboration</option>
                    <option value="General Corporate Inquiry">General Corporate Inquiries</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Full Name *</label>
                    <input 
                      type="text" 
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                      required 
                      style={{ width: '100%', background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Work Email *</label>
                    <input 
                      type="email" 
                      value={contactData.email}
                      onChange={(e) => setContactData({...contactData, email: e.target.value})}
                      required 
                      style={{ width: '100%', background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    required 
                    style={{ width: '100%', background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Brief Description of Requirements *</label>
                  <textarea 
                    rows="3" 
                    value={contactData.message}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    required 
                    style={{ width: '100%', background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>

                <button type="submit" className="btn-modal-primary" style={{ width: '100%' }}>
                  Submit Routed Inquiry <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   9. FOOTER COMPONENT
   ========================================================================== */
export function Footer({ onOpenConsultation }) {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Professional Pre-Footer Inquiry Message */}
        <div className="footer-pre-banner" style={{ background: 'rgba(0, 24, 56, 0.9)', border: '1px solid rgba(0, 240, 255, 0.25)', borderRadius: '12px', padding: '1.75rem 2rem', marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              Have a Technology Challenge or Training Requirement?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', margin: 0, maxWidth: '680px', lineHeight: '1.6' }}>
              Our engineering leads and academy coordinators are available to collaborate on custom enterprise software, cybersecurity audits, or student internship cohorts.
            </p>
          </div>
          <button 
            onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}
            className="btn-hero-primary" 
            style={{ fontSize: '0.88rem', padding: '0.7rem 1.4rem', whiteSpace: 'nowrap' }}
          >
            Talk to an Expert →
          </button>
        </div>

        {/* 4 Balanced Columns */}
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr 1.15fr 1fr', gap: '2.5rem' }}>
          {/* Column 1: Company Overview & Logo */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '0.85rem' }}>
              <img 
                src="/assets/kolmag-logo-white.png" 
                alt="KOLMAG Cyber Technologies White Logo" 
                className="footer-brand-logo"
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(22, 119, 255, 0.35))' }}
              />
            </Link>
            <p style={{ color: '#D1D5DB', lineHeight: '1.65', fontSize: '0.88rem', maxWidth: '320px', marginBottom: '1.25rem' }}>
              <strong>KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED</strong>. Delivering secure software engineering, modern cloud architectures, defensive cybersecurity, and practical talent development.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#008CFF', fontSize: '0.82rem', fontWeight: 600 }}>
              <span className="status-dot"></span> Active Technology & Talent Ecosystem
            </div>
          </div>

          {/* Column 2: Services & Solutions */}
          <div>
            <h4 className="footer-heading">Services & Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/services">Software & App Development</Link></li>
              <li><Link to="/services">Web & Mobile Platforms</Link></li>
              <li><Link to="/services">Cybersecurity & VAPT</Link></li>
              <li><Link to="/services">Cloud & DevOps Systems</Link></li>
              <li><Link to="/services">AI & Data Engineering</Link></li>
              <li><Link to="/solutions">Digital Transformation</Link></li>
              <li><Link to="/solutions">Enterprise Modernization</Link></li>
            </ul>
          </div>

          {/* Column 3: Training, Internships & Careers */}
          <div>
            <h4 className="footer-heading">Training & Careers</h4>
            <ul className="footer-links">
              <li><Link to="/training-internships">Technical Specialization Tracks</Link></li>
              <li><Link to="/training-internships">Student Industrial Internships</Link></li>
              <li><Link to="/training-internships#apply">Apply for Training / Internship</Link></li>
              <li><Link to="/training-internships#faq">Internship & Training FAQs</Link></li>
              <li><Link to="/careers">Careers at KOLMAG</Link></li>
              <li><Link to="/careers#openings">Current Job Openings</Link></li>
              <li><Link to="/careers#apply">Submit Resume Profile</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information & Useful Links */}
          <div>
            <h4 className="footer-heading">Company & Connect</h4>
            <ul className="footer-links" style={{ marginBottom: '1.25rem' }}>
              <li><Link to="/about">About Our Company</Link></li>
              <li><Link to="/contact">Contact & Inquiries</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>

            <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.6' }}>
              <div style={{ color: '#fff', fontWeight: 600, marginBottom: '0.2rem' }}>Corporate Office</div>
              <div style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                HNO 9/HIG-A & 10/HIG APHB COLONY, GACHIBOWLI, K.V. RANGAREDDY, SERI LINGAMPALLY, TELANGANA, INDIA, 500032
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="mailto:contact@kolmagtech.com" style={{ color: '#008CFF', textDecoration: 'none' }}>
                  contact@kolmagtech.com
                </a>
              </div>
              <div style={{ marginTop: '0.35rem' }}>
                <a 
                  href="tel:+916309649554" 
                  style={{ color: '#008CFF', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Phone className="w-3.5 h-3.5" /> +91 6309649554
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', marginTop: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.84rem', color: '#94a3b8' }}>
          <div>© {CURRENT_YEAR} KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link>
            <Link to="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Use</Link>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

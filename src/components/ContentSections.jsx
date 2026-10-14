import React, { useState } from 'react';
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
  Play,
  Globe2,
  Users,
  Search,
  ShoppingCart,
  TrendingUp,
  Palette,
  BarChart3,
  Layers,
  Rocket,
  Lock,
  Server,
  FileCheck2,
  Headphones,
  Building2,
  CheckCircle2,
  Send,
  MessageSquare,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';

/* ==========================================================================
   2. ABOUT US SECTION
   ========================================================================== */
export function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: '#001430' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Company Profile</span>
          <h2 className="section-title">About KOLMAG Cyber Technologies</h2>
          <p className="section-subtitle">
            KOLMAG Cyber Technologies Private Limited delivers secure, scalable enterprise software, cybersecurity engineering, artificial intelligence, and specialized business support services—while fostering industry-ready technical talent.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="feature-card">
            <div className="feature-icon-wrapper"><Shield className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Mission</h3>
            <p className="feature-desc">
              To engineer secure, intelligent, and future-ready technology ecosystems for global enterprises while bridging the divide between academic learning and high-value industry capability.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Rocket className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Vision</h3>
            <p className="feature-desc">
              To be a premier technology and enterprise solutions partner recognized for zero-trust engineering discipline, scalable cloud-native architectures, and ethical workforce delivery.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Layers className="w-5 h-5" /></div>
            <h3 className="feature-title">Our Business Approach</h3>
            <p className="feature-desc">
              A disciplined, lifecycle-based methodology connecting discovery, architecture, security verification, iterative development, and continuous support across IT and business operations.
            </p>
          </div>
        </div>

        {/* Company Values & Leadership Overview */}
        <div className="grid-2">
          <div className="feature-card" style={{ borderLeft: '3px solid #00f0ff' }}>
            <h3 className="feature-title">Core Company Values</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> <strong>Security-First Engineering:</strong> Security integrated into the code, infrastructure, and workflows from day one.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> <strong>Transparency & Integrity:</strong> Honest capability representation and dependable milestone delivery.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> <strong>Agile Execution:</strong> Modular, scalable architectures tailored to both enterprise scale and startup agility.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> <strong>Continuous Learning:</strong> Continuous research in AI, cloud-native meshes, and modern organizational systems.
              </li>
            </ul>
          </div>

          <div className="feature-card" style={{ borderLeft: '3px solid #0056b3' }}>
            <h3 className="feature-title">Why Partner with KOLMAG?</h3>
            <p className="feature-desc" style={{ marginBottom: '1rem' }}>
              We offer a synchronized portfolio combining deep technical capabilities in software and security with practical business operations support and skilled engineering talent pipelines.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff' }}>Disciplined SDLC:</strong> DevSecOps and automated test validations.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff' }}>Dual Delivery:</strong> IT engineering plus business operations.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff' }}>Talent Academy:</strong> Continuous training of high-aptitude engineers.
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem', borderRadius: '6px' }}>
                <strong style={{ color: '#fff' }}>Transparent SLA:</strong> Direct communication with technical leads.
              </div>
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
  const itServicesData = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Software & Application Development',
      desc: 'Full-stack enterprise application engineering, microservices architectures, REST & GraphQL APIs, and custom workflow platforms.'
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: 'Website & Mobile App Development',
      desc: 'High-performance responsive web portals, Progressive Web Apps (PWA), cross-platform iOS & Android mobile applications built for high engagement.'
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'AI, Machine Learning & Data Science',
      desc: 'Predictive intelligence models, custom LLM agent deployments, natural language processing (NLP), computer vision, and scalable data pipeline engineering.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Cybersecurity & Information Security',
      desc: 'Vulnerability assessment & penetration testing (VAPT), cloud infrastructure hardening, zero-trust network audits, and SOC advisory.'
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: 'Cloud, Hosting & DevOps',
      desc: 'Bluehost-grade cloud architecture, Kubernetes container orchestration, CI/CD automated deployment meshes, and 24/7 cloud server management.'
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Networking & IT Infrastructure',
      desc: 'Enterprise network topology design, VPN & secure tunnel configuration, firewall policies, server virtualization, and disaster recovery planning.'
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Enterprise Software & Business Applications',
      desc: 'Custom ERP and CRM platforms, supply chain automation tools, inventory management engines, and legacy system interoperability.'
    },
    {
      icon: <FileCheck2 className="w-5 h-5" />,
      title: 'Software Testing & Quality Assurance',
      desc: 'Automated regression test suites, unit and integration testing frameworks, load and stress testing, and DevSecOps security code audits.'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Digital Marketing & SEO',
      desc: 'Technical SEO optimization, search visibility engineering, content distribution architectures, and conversion rate optimization (CRO).'
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: 'IT Consulting & Technical Support',
      desc: 'Strategic technology roadmapping, digital architecture reviews, vendor evaluations, and tiered technical helpdesk support services.'
    }
  ];

  const businessServicesData = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Recruitment & Staffing',
      desc: 'End-to-end technical recruiting, lateral hiring, executive search, contract staffing, and pre-screened talent placement across engineering domains.'
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'HR & Organizational Support',
      desc: 'Human resources policy formulation, onboarding process management, employee lifecycle administration, and organizational compliance advisory.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Business Consulting & Operations',
      desc: 'Operational workflow restructuring, business model optimization, standard operating procedure (SOP) documentation, and growth scaling.'
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: 'Customer Support & BPO',
      desc: 'Multi-channel customer service outsourcing (email, chat, voice), technical helpdesks, and back-office transaction processing.'
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Finance & Administrative Support',
      desc: 'Billing reconciliation, documentation auditing, operational bookkeeping coordination, and general administrative services.'
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Creative Design, Media & Branding',
      desc: 'Corporate visual identity, UI/UX wireframing and prototyping, brand style guides, marketing collateral, and motion media production.'
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'E-commerce & Digital Commerce',
      desc: 'Online store setup, product catalog onboarding, payment gateway integration, and checkout experience optimization.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: 'Procurement & Vendor Coordination',
      desc: 'IT hardware and cloud vendor vetting, RFQ evaluation, software licensing management, and supplier contract coordination.'
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Market Research & Data Services',
      desc: 'Industry competitor intelligence, consumer surveys, secondary data aggregation, and structured data cleansing for strategic planning.'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Service Catalogue</span>
          <h2 className="section-title">Comprehensive IT & Business Capabilities</h2>
          <p className="section-subtitle">
            Explore our synchronized service offerings across technology engineering and core organizational business operations.
          </p>
        </div>

        {/* Category 1: IT & Digital Services (10 Offerings) */}
        <div className="services-group">
          <div className="services-group-header">
            <div className="services-group-badge">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>IT & Digital Services</span>
              <span className="group-count">10 Offerings</span>
            </div>
            <p className="services-group-desc">
              Enterprise software development, cloud infrastructure, AI intelligence, and defensive cybersecurity operations.
            </p>
          </div>

          <div className="grid-3">
            {itServicesData.map((srv, idx) => (
              <div 
                key={idx} 
                className="feature-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (onSelectService) {
                    onSelectService({ ...srv, type: 'it' });
                  }
                }}
              >
                <div>
                  <div className="feature-icon-wrapper">{srv.icon}</div>
                  <h3 className="feature-title">{srv.title}</h3>
                  <p className="feature-desc">{srv.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span className="mega-footer-link" style={{ fontSize: '0.84rem', color: '#00f0ff' }}>
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

        {/* Category 2: Business & Non-IT Services (9 Offerings) */}
        <div className="services-group">
          <div className="services-group-header">
            <div className="services-group-badge">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Business & Non-IT Services</span>
              <span className="group-count">9 Offerings</span>
            </div>
            <p className="services-group-desc">
              Corporate talent acquisition, HR lifecycle, managed BPO desks, brand design, and operational growth advisory.
            </p>
          </div>

          <div className="grid-3">
            {businessServicesData.map((srv, idx) => (
              <div 
                key={idx} 
                className="feature-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (onSelectService) {
                    onSelectService({ ...srv, type: 'business' });
                  }
                }}
              >
                <div>
                  <div className="feature-icon-wrapper">{srv.icon}</div>
                  <h3 className="feature-title">{srv.title}</h3>
                  <p className="feature-desc">{srv.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span className="mega-footer-link" style={{ fontSize: '0.84rem', color: '#00f0ff' }}>
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

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            onClick={() => onOpenConsultation && onOpenConsultation('Comprehensive IT & Business Services')}
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
    <section id="solutions" className="section-padding" style={{ background: '#00122e' }}>
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
    <section id="training" className="section-padding" style={{ background: '#001430' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Talent Development Academy</span>
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
                <div style={{ fontSize: '0.78rem', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
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
   7. CAREERS SECTION (Recruitment & Employment Opportunities)
   ========================================================================== */
export function CareersSection({ onOpenConsultation }) {
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [resumeData, setResumeData] = useState({ name: '', email: '', role: '', notes: '' });

  const handleResumeSubmit = (e) => {
    e.preventDefault();
    setResumeSubmitted(true);
    setTimeout(() => {
      alert('Thank you! Your resume profile has been submitted to KOLMAG Talent Acquisition.');
      setResumeSubmitted(false);
      setResumeData({ name: '', email: '', role: '', notes: '' });
    }, 600);
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

  return (
    <section id="careers" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Join KOLMAG</span>
          <h2 className="section-title">Careers at KOLMAG Cyber Technologies</h2>
          <p className="section-subtitle">
            Explore current employment opportunities within our engineering, cybersecurity, and business operations teams.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Current Open Positions
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
                    onClick={() => onOpenConsultation && onOpenConsultation('Recruitment & Staffing')}
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
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Our Transparent Recruitment Process
            </h3>
            <div className="feature-card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,240,255,0.15)', color: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Profile & Resume Evaluation</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Review of technical projects, GitHub/portfolio links, and domain alignment.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,240,255,0.15)', color: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Technical & Practical Assessment</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Live coding evaluation, architectural discussion, or role-specific exercise.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,240,255,0.15)', color: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>3</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Leadership Dialogue & Offer</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Culture fit conversation, role expectations, and formal onboarding timeline.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Resume Form */}
            <div className="feature-card">
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Submit Your Resume (General Application)
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Don't see a match above? Submit your details to our talent pool for upcoming IT and non-IT roles.
              </p>
              <form onSubmit={handleResumeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={resumeData.name}
                  onChange={(e) => setResumeData({...resumeData, name: e.target.value})}
                  required 
                  style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={resumeData.email}
                  onChange={(e) => setResumeData({...resumeData, email: e.target.value})}
                  required 
                  style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                />
                <select 
                  value={resumeData.role}
                  onChange={(e) => setResumeData({...resumeData, role: e.target.value})}
                  required 
                  style={{ background: '#001838', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                >
                  <option value="">Select Target Track...</option>
                  <option value="Software Engineering">Software Engineering & Development</option>
                  <option value="Cybersecurity">Cybersecurity & Networking</option>
                  <option value="AI & Data Science">AI & Data Science</option>
                  <option value="Business & Non-IT">Business Operations / HR / BPO</option>
                  <option value="Internship">Student Internship Program</option>
                </select>
                <textarea 
                  rows="2" 
                  placeholder="LinkedIn URL, Portfolio Link, or Summary of Experience..."
                  value={resumeData.notes}
                  onChange={(e) => setResumeData({...resumeData, notes: e.target.value})}
                  required 
                  style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.65rem 0.85rem', borderRadius: '6px', fontSize: '0.88rem' }}
                />
                <button type="submit" className="btn-modal-primary" style={{ padding: '0.7rem' }}>
                  Submit Resume Application
                </button>
              </form>
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
   8. CONTACT SECTION (Dedicated Inquiry Paths)
   ========================================================================== */
export function ContactSection({ onOpenConsultation }) {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', inquiryCategory: 'IT Services Inquiry', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      alert(`Inquiry received! We have routed your request to the ${contactData.inquiryCategory} department.`);
      setFormSent(false);
      setContactData({ name: '', email: '', phone: '', inquiryCategory: 'IT Services Inquiry', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#00122e' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Connect With Us</span>
          <h2 className="section-title">Dedicated Business & Technical Inquiries</h2>
          <p className="section-subtitle">
            Choose your specific inquiry channel below to route directly to our solution architects, business operations team, or academy coordinators.
          </p>
        </div>

        {/* 5 Inquiry Pathway Cards */}
        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><Code2 className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>IT Services Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Custom software, cloud architecture, cybersecurity audits & AI pipelines.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Business & Non-IT Services')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><Briefcase className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Non-IT & Operations Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Recruitment, HR workflows, BPO support & business consulting.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Training & Internships')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><GraduationCap className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Training & Internships Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Student internships, technical courses, and university MoUs.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Recruitment & Staffing')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><Users className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Corporate Recruitment Inquiry</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Hire vetted engineers and lateral technical staffing for enterprise teams.</p>
          </div>

          <div className="contact-route-card" onClick={() => onOpenConsultation && onOpenConsultation('Business Partnership')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><Building2 className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Enterprise Partnership</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Vendor alliances, joint technology ventures, and ecosystem programs.</p>
          </div>

          <div className="contact-route-card" style={{ background: 'linear-gradient(135deg, rgba(0,86,179,0.3), rgba(0,240,255,0.1))', borderColor: '#00f0ff' }} onClick={() => onOpenConsultation && onOpenConsultation('General')}>
            <div style={{ color: '#00f0ff', marginBottom: '0.5rem' }}><MessageSquare className="w-5 h-5" /></div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>General Inquiries</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.82rem' }}>General corporate information, media questions, or administrative requests.</p>
          </div>
        </div>

        {/* Contact Information & Interactive Form */}
        <div className="grid-2">
          <div className="feature-card">
            <h3 className="feature-title">Direct Corporate Communication Channels</h3>
            <p className="feature-desc" style={{ marginBottom: '1.75rem' }}>
              Reach our corporate offices or connect via instant messaging channels during standard business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Corporate Email</div>
                  <a href="mailto:contact@kolmagtech.com" style={{ color: '#fff', textDecoration: 'none' }}>contact@kolmagtech.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Phone Advisory</div>
                  <a href="tel:+91800565624" style={{ color: '#fff', textDecoration: 'none' }}>+91 (800) KOLMAG-TECH</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>WhatsApp Direct Support</div>
                  <a 
                    href="https://api.whatsapp.com/send?phone=91800565624&text=Hello%20KOLMAG%20Team,%20I%20have%20an%20inquiry%20regarding%20your%20services." 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: '#00f0ff', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Registered Office</div>
                  <span>KOLMAG Cyber Technologies Pvt Ltd, Tech Park Plaza, Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Send a Direct Message</h3>
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Inquiry Pathway *</label>
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
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  value={contactData.name}
                  onChange={(e) => setContactData({...contactData, name: e.target.value})}
                  required 
                  style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                />
                <input 
                  type="email" 
                  placeholder="Work Email *" 
                  value={contactData.email}
                  onChange={(e) => setContactData({...contactData, email: e.target.value})}
                  required 
                  style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
                />
              </div>

              <input 
                type="tel" 
                placeholder="Phone / WhatsApp Number *" 
                value={contactData.phone}
                onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                required 
                style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
              />

              <textarea 
                rows="3" 
                placeholder="Brief description of requirements or questions..." 
                value={contactData.message}
                onChange={(e) => setContactData({...contactData, message: e.target.value})}
                required 
                style={{ background: 'rgba(0,24,56,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.75rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem' }}
              />

              <button type="submit" className="btn-modal-primary" style={{ width: '100%' }}>
                Submit Routed Inquiry <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   9. FOOTER COMPONENT
   ========================================================================== */
export function Footer({ onReplayIntro, onOpenConsultation }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img 
              src="/assets/kolmag-logo-white.png" 
              alt="KOLMAG Cyber Technologies White Logo" 
              className="footer-brand-logo"
              style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 12px rgba(255,255,255,0.6))' }}
            />
            <p style={{ marginTop: '0.5rem', maxWidth: '340px', lineHeight: '1.6', fontSize: '0.88rem' }}>
              <strong>KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED</strong>. Secure software engineering, enterprise cybersecurity, artificial intelligence, and specialized business operations support.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <button 
                onClick={() => onOpenConsultation && onOpenConsultation('IT & Digital Services')}
                className="btn-modal-primary" 
                style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
              >
                Talk to an Expert →
              </button>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services & Solutions</h4>
            <ul className="footer-links">
              <li><a href="#services">IT & Digital Services</a></li>
              <li><a href="#services">Business & Non-IT Services</a></li>
              <li><a href="#solutions">Digital Transformation</a></li>
              <li><a href="#solutions">Cybersecurity & Risk</a></li>
              <li><a href="#solutions">AI-Powered Automation</a></li>
              <li><a href="#work">Demonstrated Capabilities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Programs & Careers</h4>
            <ul className="footer-links">
              <li><a href="#training">Technical Specialization</a></li>
              <li><a href="#training">Student Internships</a></li>
              <li><a href="#training">Academic Collaboration</a></li>
              <li><a href="#careers">Current Job Openings</a></li>
              <li><a href="#careers">Submit Your Resume</a></li>
              <li><a href="#contact">Inquiry Channels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Controls & Notice</h4>
            {onReplayIntro && (
              <button 
                onClick={onReplayIntro} 
                className="btn-hero-secondary"
                style={{ fontSize: '0.8rem', padding: '0.5rem 0.85rem', width: '100%', marginBottom: '1rem', justifyContent: 'center' }}
              >
                <Play className="w-3.5 h-3.5 text-cyan-400" /> Replay Brand Intro
              </button>
            )}
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Unverified services and capabilities are presented as proposed solution offerings until confirmed.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</div>
          <div>Secure Engineering • AI-Driven Solutions • Enterprise Technology Services</div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TrainingPage.css';
import { 
  GraduationCap, 
  ChevronRight, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  ChevronDown, 
  Send, 
  ExternalLink, 
  Laptop,
  Sparkles,
  Terminal,
  GitBranch,
  Layers,
  Award,
  Building2,
  Users,
  Zap,
  CheckCircle,
  FileCheck2,
  ArrowDown,
  X
} from 'lucide-react';

export default function TrainingPage({ onOpenConsultation }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedDurationMode, setSelectedDurationMode] = useState('all'); // 'all', 'training', 'internship'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTrack, setExpandedTrack] = useState(null);
  const [showApplyPopup, setShowApplyPopup] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const applySection = document.getElementById('apply');
      const applyOffset = applySection ? applySection.offsetTop - 350 : 99999;

      // Show when scrolling downwards past the hero banner (> 250px) and before the apply section
      if (!isDismissed) {
        if (currentScrollY > 250 && currentScrollY < applyOffset) {
          setShowApplyPopup(true);
        } else {
          setShowApplyPopup(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleScrollToApply = (e) => {
    e.preventDefault();
    const applyEl = document.getElementById('apply');
    if (applyEl) {
      applyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const EMAIL_RECIPIENT = "Contact@kolmagtech.com";
  const EMAIL_SUBJECT = "Application for Internship / Training - KOLMAG Cyber Technologies";
  const EMAIL_BODY = `Dear KOLMAG Admissions Team,

I am writing to express my strong interest in applying for the Training / Internship program at KOLMAG Cyber Technologies.

Applicant Details:
- Full Name: 
- Contact Phone Number: 
- Current College / University: 
- Degree, Branch & Graduation Year: 
- Target Track (Full-Stack / Python Backend / Cybersecurity / AI-ML / Cloud DevOps): 
- Preferred Program Format (8-12 Weeks Skill Training / 3-6 Months Industrial Internship): 

I have attached my updated resume (PDF) with this email for your technical review. Looking forward to hearing from you regarding batch schedules and onboarding.

Best regards,
[Your Name]`;

  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_RECIPIENT)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

  // Dynamic Ticker Stats
  const tickerStats = [
    { label: "Alumni Trained", value: "500+" },
    { label: "Completion Rate", value: "98%" },
    { label: "Hiring Partners", value: "40+" },
    { label: "Senior Mentorship", value: "1:1 Live" },
    { label: "Production Repositories", value: "100%" },
    { label: "Intern Rating", value: "4.9 / 5" },
    { label: "Capstone Defense Rate", value: "95%+" },
    { label: "Weekly Code Reviews", value: "Every Sprint" }
  ];

  // Partner Companies
  const partnerRow1 = [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "Google", domain: "google.com" },
    { name: "Cisco", domain: "cisco.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Capgemini", domain: "capgemini.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Oracle", domain: "oracle.com" }
  ];

  const partnerRow2 = [
    { name: "HPE", domain: "hpe.com" },
    { name: "HCLTech", domain: "hcltech.com" },
    { name: "Tech Mahindra", domain: "techmahindra.com" },
    { name: "Wipro", domain: "wipro.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Intel", domain: "intel.com" },
    { name: "Quick Heal", domain: "quickheal.com" },
    { name: "Subex", domain: "subex.com" },
    { name: "Dell", domain: "dell.com" },
    { name: "Adobe", domain: "adobe.com" }
  ];

  // Comprehensive Track Data
  const trainingPrograms = [
    {
      id: 'fullstack',
      category: 'fullstack',
      title: 'Full-Stack Web Development',
      badge: 'Core Track',
      duration: '8–12 Wks (Training) / 3–6 Mos (Internship)',
      type: 'both',
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      tech: ['React 19', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git'],
      prereq: 'Basic programming concepts in JavaScript, C, or Python; understanding of HTML/CSS logic.',
      projectTitle: 'Multi-Tenant Enterprise Collaboration & Project SaaS',
      projectDesc: 'Architect a production-grade multi-tenant platform with WebSocket real-time updates, role-based access control (RBAC), PostgreSQL indexing, and automated Dockerized deployment.',
      githubWorkflows: [
        'Feature branch branching strategy (feature/*, fix/*)',
        'Pull request reviews with automated ESLint and prettier CI',
        'Relational schema migrations & database seeds',
        'End-to-end API integration tests with Postman/Jest'
      ],
      outcomes: [
        'Modular React component hierarchies & custom state hooks',
        'Secure RESTful and microservice API architectures',
        'Database modeling, foreign key constraints & indexing',
        'Version control discipline, PR creation & peer reviews'
      ]
    },
    {
      id: 'python-backend',
      category: 'python',
      title: 'Python & Backend Engineering',
      badge: 'Backend Track',
      duration: '8–12 Wks (Training) / 3–6 Mos (Internship)',
      type: 'both',
      icon: <Laptop className="w-5 h-5 text-blue-500" />,
      tech: ['Python 3.12', 'FastAPI', 'Django REST', 'PostgreSQL', 'Redis Caching', 'Celery Queues', 'Docker', 'Pytest'],
      prereq: 'Foundational programming logic, OOP principles, and basic database awareness.',
      projectTitle: 'High-Throughput Distributed Microservice & Asynchronous Task Engine',
      projectDesc: 'Design an asynchronous REST API service handling high concurrency, Redis token-bucket rate limiting, background worker tasks with Celery, and automated OpenAPI documentation.',
      githubWorkflows: [
        'Flake8 & Black automated code formatting pre-commit hooks',
        'Pytest unit and integration test coverage thresholds',
        'Docker Compose multi-container service orchestration',
        'Automated database connection pooling & migration scripts'
      ],
      outcomes: [
        'Asynchronous Python paradigms with ASGI frameworks',
        'Database query optimization, indices & ORM modeling',
        'Caching patterns with Redis for sub-millisecond responses',
        'Clean architecture separation (routes, controllers, models)'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'security',
      title: 'Cybersecurity & Defensive Networking',
      badge: 'Defensive Security',
      duration: '8–12 Wks (Training) / 3–6 Mos (Internship)',
      type: 'both',
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      tech: ['Linux Hardening', 'TCP/IP Protocols', 'OWASP Top 10', 'Burp Suite Pro', 'Nmap', 'Wireshark', 'Metasploit', 'Bash Scripting'],
      prereq: 'Basic understanding of computer networking, operating systems, and command-line familiarity.',
      projectTitle: 'Enterprise Web Application Vulnerability Audit & Defense Matrix',
      projectDesc: 'Conduct structured web application security audits on simulated staging environments, map threat vectors to MITRE ATT&CK, execute proof-of-concept exploits, and write executive remediation reports.',
      githubWorkflows: [
        'Automated SAST & DAST scans integrated into GitHub Actions',
        'Secrets detection (TruffleHog / GitGuardian pre-commit checks)',
        'Server configuration auditing scripts in Bash',
        'Secure code review checklists for pull request gatekeeping'
      ],
      outcomes: [
        'OWASP Top 10 vulnerability discovery and exploitation mitigation',
        'Linux server bastion hardening and SSH security baselines',
        'Network packet inspection and intrusion pattern recognition',
        'Actionable executive & technical vulnerability reporting'
      ]
    },
    {
      id: 'aiml',
      category: 'aiml',
      title: 'AI, Machine Learning & Data Science',
      badge: 'Applied Intelligence',
      duration: '8–12 Wks (Training) / 3–6 Mos (Internship)',
      type: 'both',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      tech: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'PyTorch Foundations', 'ChromaDB', 'FastAPI Inference', 'Docker', 'Jupyter'],
      prereq: 'Introductory Python scripting and fundamentals of basic statistics/mathematics.',
      projectTitle: 'Predictive Fraud Engine & RAG Enterprise Knowledge Bot',
      projectDesc: 'Build an end-to-end machine learning pipeline that preprocesses real-world financial records, evaluates classification models, and provides real-time vector embeddings search via FastAPI.',
      githubWorkflows: [
        'Data version control and reproducibility scripts',
        'Model training performance regression tests',
        'Containerized model inference endpoint deployment',
        'Documented Jupyter exploratory data notebooks'
      ],
      outcomes: [
        'Exploratory data analysis, feature engineering & cleaning',
        'Supervised & unsupervised algorithm evaluation metrics',
        'Vector embeddings and retrieval-augmented generation (RAG)',
        'Packaging ML models for high-speed inference microservices'
      ]
    },
    {
      id: 'cloud-devops',
      category: 'cloud',
      title: 'Cloud Infrastructure & DevOps Foundations',
      badge: 'Cloud Systems',
      duration: '6–8 Wks (Training) / 3 Mos (Internship)',
      type: 'both',
      icon: <Cloud className="w-5 h-5 text-blue-500" />,
      tech: ['Docker Containers', 'Kubernetes (K8s)', 'GitHub Actions CI/CD', 'Terraform IaC', 'Linux CLI', 'Cloud VMs', 'Nginx Reverse Proxy'],
      prereq: 'Linux shell comfort and basic comprehension of client-server application hosting.',
      projectTitle: 'Automated GitOps CI/CD Deployment with Kubernetes Orchestration',
      projectDesc: 'Write infrastructure as code (IaC) using Terraform, construct automated GitHub Actions pipelines that build and scan Docker containers, and deploy to auto-scaling Kubernetes clusters with Nginx ingress.',
      githubWorkflows: [
        'GitOps repository with automated manifest sync',
        'Multi-stage Docker builds minimizing image vulnerabilities',
        'Trivy container security scanning in CI stages',
        'Zero-downtime rolling update deployment scripts'
      ],
      outcomes: [
        'Multi-stage Dockerfile creation and layer caching',
        'Automated CI/CD workflows testing, packaging & publishing',
        'Kubernetes pods, services, ingress & ConfigMap management',
        'Infrastructure automation with declarative configuration'
      ]
    }
  ];

  // 4-Step Immersion Framework
  const immersionSteps = [
    {
      step: '01',
      title: 'Live Problem Brief',
      timeline: 'Sprint 01',
      icon: <FileCheck2 className="w-5 h-5 text-blue-500" />,
      desc: 'Receive enterprise-modeled project briefs with real user stories, acceptance criteria, wireframes, and architectural boundary constraints.'
    },
    {
      step: '02',
      title: 'Agile Sprint Execution',
      timeline: 'Sprints 02–05',
      icon: <GitBranch className="w-5 h-5 text-blue-500" />,
      desc: 'Work in 2-week sprint cycles with small squads. Create feature branches, attend weekly sprint planning, and manage task boards.'
    },
    {
      step: '03',
      title: 'Code Review & CI/CD',
      timeline: 'Continuous',
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
      desc: 'Submit Pull Requests with automated linting and security scans. Receive line-by-line feedback from senior software and security leads.'
    },
    {
      step: '04',
      title: 'Demo Day & Portfolio',
      timeline: 'Final Sprint',
      icon: <Award className="w-5 h-5 text-blue-500" />,
      desc: 'Present your deployed architecture to technical leads, defend design decisions, and graduate with a verified production GitHub repository.'
    }
  ];

  const faqs = [
    {
      q: 'Who is eligible to enroll in KOLMAG training and internship programs?',
      a: 'Students currently pursuing B.Tech, B.E., B.Sc, BCA, MCA, or Diploma in Computer Science, IT, Electronics, or allied engineering branches, as well as recent graduates seeking practical, deployable engineering skills, are welcome to apply.'
    },
    {
      q: 'How are KOLMAG internships structured?',
      a: 'Internships are practical and project-driven, typically lasting 3 to 6 months. Interns work in simulated corporate sprints with Git pull requests, weekly mentor code reviews, architectural documentation, and a final capstone demonstration.'
    },
    {
      q: 'Is prior commercial software experience required?',
      a: 'No prior industry work experience is required. However, applicants should possess foundational programming logic and an eagerness to commit time to hands-on coding and lab exercises.'
    },
    {
      q: 'What is the difference between the 8-12 Wk Skill Training and the 3-6 Mo Industrial Internship?',
      a: 'The 8–12 Week Skill Training focuses on structured curriculum delivery, hands-on lab exercises, and foundational skill mastery. The 3–6 Month Industrial Internship places greater emphasis on independent sprint execution, collaborative team repos, and enterprise capstone builds under mentor supervision.'
    },
    {
      q: 'Does KOLMAG guarantee job placement or stipends?',
      a: 'KOLMAG emphasizes realistic competence, industry-standard portfolio creation, and technical interview preparation. We do not make unsupported claims of guaranteed job placements or stipends unless explicitly agreed in confirmed corporate cohorts. Our goal is to make you truly competent so your skills speak for themselves.'
    },
    {
      q: 'How can students apply for internships or training programs?',
      a: 'Simply click the "Apply Now" button to open Google Mail with our pre-formatted application template, attach your updated resume (PDF), specify your track and degree details, and submit directly to Contact@kolmagtech.com.'
    }
  ];

  // Filtered tracks based on tab and category
  const filteredTracks = trainingPrograms.filter(trk => {
    const matchesCategory = selectedCategory === 'all' || trk.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="page-view-training" style={{ color: '#ffffff' }}>
      
      {/* ===================================================================
          1. HERO SECTION
          =================================================================== */}
      <section className="training-hero">
        <div className="training-hero-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

          <h1 className="page-banner-title" style={{ fontSize: 'clamp(2.3rem, 5vw, 3.6rem)', maxWidth: '900px', margin: '0 auto 1.25rem' }}>
            Practical Skills. Hands-On Projects.{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #008CFF 50%, #1677FF 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 25px rgba(22, 119, 255, 0.35)'
            }}>
              Real Engineering.
            </span>
          </h1>

          <p className="page-banner-subtitle" style={{ margin: '0 auto', fontSize: '1.12rem', maxWidth: '780px' }}>
            Industry-aligned coding tracks, mentor-led student internships, and practical capstone projects designed to bridge the gap between academic theory and real-world technology delivery.
          </p>
        </div>

        {/* Infinite Stats Marquee Ticker (Left to Right) */}
        <div style={{ marginTop: '3.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(5, 5, 5, 0.5)', backdropFilter: 'blur(8px)' }}>
          <div className="marquee-wrapper">
            <div className="marquee-track-ltr">
              {[...tickerStats, ...tickerStats].map((item, idx) => (
                <div key={idx} className="marquee-stat-pill">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ALUMNI SPOTLIGHT & HIRING PARTNERS (Infinite Marquee)
          =================================================================== */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              🏢 OUR GRADUATES WORK AT TOP TECH COMPANIES
            </span>
            <h2 className="section-title">Preferred by 20+ Global Tech Leaders & Enterprises</h2>
            <p className="section-subtitle">
              Our interns master production-standard code quality, CI/CD discipline, and scalable architectures trusted by leading global software organizations.
            </p>
          </div>

          {/* Row 1: Right to Left Marquee */}
          <div className="marquee-wrapper" style={{ marginBottom: '1.25rem' }}>
            <div className="marquee-track-rtl">
              {[...partnerRow1, ...partnerRow1].map((partner, idx) => (
                <div key={idx} className="partner-card">
                  <img 
                    src={`https://logo.clearbit.com/${partner.domain}`} 
                    alt={partner.name} 
                    className="partner-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'inline-block';
                      }
                    }}
                  />
                  <span className="partner-card-text" style={{ display: 'none' }}>
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right Marquee */}
          <div className="marquee-wrapper">
            <div className="marquee-track-ltr">
              {[...partnerRow2, ...partnerRow2].map((partner, idx) => (
                <div key={idx} className="partner-card">
                  <img 
                    src={`https://logo.clearbit.com/${partner.domain}`} 
                    alt={partner.name} 
                    className="partner-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'inline-block';
                      }
                    }}
                  />
                  <span className="partner-card-text" style={{ display: 'none' }}>
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. TRACK SELECTOR (Interactive Tabs & Category Filters)
          =================================================================== */}
      <section id="tracks" className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              Specialization Tracks
            </span>
            <h2 className="section-title">Industry-Aligned Engineering Programs</h2>
            <p className="section-subtitle">
              Choose your specialization and program format. Every track includes real git branch management, peer code reviews, and a deployed capstone project.
            </p>
          </div>

          {/* Duration Mode Split View Toggle */}
          <div className="track-mode-toggle">
            <button 
              className={`track-mode-btn ${selectedDurationMode === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedDurationMode('all')}
            >
              <Layers className="w-4 h-4" />
              <span>All Formats</span>
            </button>
            <button 
              className={`track-mode-btn ${selectedDurationMode === 'training' ? 'active' : ''}`}
              onClick={() => setSelectedDurationMode('training')}
            >
              <BookOpen className="w-4 h-4" />
              <span>8–12 Wk Skill Training</span>
            </button>
            <button 
              className={`track-mode-btn ${selectedDurationMode === 'internship' ? 'active' : ''}`}
              onClick={() => setSelectedDurationMode('internship')}
            >
              <Laptop className="w-4 h-4" />
              <span>3–6 Mo Industrial Internship</span>
            </button>
          </div>

          {/* Interactive Card Category Filter Bar */}
          <div className="category-filter-bar">
            <button 
              className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Domains
            </button>
            <button 
              className={`category-filter-btn ${selectedCategory === 'fullstack' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('fullstack')}
            >
              Full-Stack Web
            </button>
            <button 
              className={`category-filter-btn ${selectedCategory === 'python' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('python')}
            >
              Python & Backend
            </button>
            <button 
              className={`category-filter-btn ${selectedCategory === 'security' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('security')}
            >
              Cybersecurity & VAPT
            </button>
            <button 
              className={`category-filter-btn ${selectedCategory === 'aiml' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('aiml')}
            >
              AI / ML & Data Science
            </button>
            <button 
              className={`category-filter-btn ${selectedCategory === 'cloud' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('cloud')}
            >
              Cloud & DevOps
            </button>
          </div>

          {/* ===================================================================
              4. CURRICULUM & CAPSTONE SHOWCASE (Expandable Cards)
              =================================================================== */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.75rem' }}>
            {filteredTracks.map((trk) => (
              <div key={trk.id} className="showcase-card">
                  <div>
                    {/* Top Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div className="feature-icon-wrapper" style={{ margin: 0, background: 'rgba(22, 119, 255, 0.1)', color: '#008CFF', border: '1px solid rgba(22, 119, 255, 0.25)' }}>
                        {trk.icon}
                      </div>
                      <span className="badge-tag-neon">{trk.badge}</span>
                    </div>

                    <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.45rem' }}>
                      {trk.title}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#008CFF', fontSize: '0.84rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{trk.duration}</span>
                    </div>

                    {/* Stack Badges */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                        Stack & Core Technologies:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {trk.tech.map((t, idx) => (
                          <span key={idx} className="tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Prerequisite Tags */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem' }}>
                      <span style={{ color: '#94a3b8', fontSize: '0.76rem', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                        Prerequisites:
                      </span>
                      <span style={{ color: '#D1D5DB', fontSize: '0.86rem', lineHeight: '1.5' }}>
                        {trk.prereq}
                      </span>
                    </div>

                    {/* Capstone Project Spec Box */}
                    <div className="capstone-spec-box" style={{ margin: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#008CFF', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        <Terminal className="w-4 h-4" />
                        <span>Capstone Project Spec:</span>
                      </div>
                      <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.92rem', marginBottom: '0.3rem' }}>
                        {trk.projectTitle}
                      </strong>
                      <p style={{ color: '#D1D5DB', fontSize: '0.85rem', lineHeight: '1.55', margin: 0 }}>
                        {trk.projectDesc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
      </section>

      {/* ===================================================================
          5. INTERNSHIP IMMERSION FRAMEWORK (4-Step Process Pipeline)
          =================================================================== */}
      <section className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              Execution Lifecycle
            </span>
            <h2 className="section-title">Internship Immersion Framework</h2>
            <p className="section-subtitle">
              How our students transition from theoretical academics to shipping production-standard software in collaborative agile teams.
            </p>
          </div>

          <div className="immersion-pipeline">
            {immersionSteps.map((step, idx) => (
              <div key={idx} className="pipeline-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className="pipeline-step-badge">{step.step}</div>
                  <span style={{ fontSize: '0.72rem', color: '#008CFF', background: 'rgba(22, 119, 255, 0.08)', padding: '0.2rem 0.55rem', borderRadius: '4px', fontWeight: 700 }}>
                    {step.timeline}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>

                <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Core Immersion Guarantees */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            <div style={{ background: 'rgba(12, 16, 24, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <GitBranch className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Simulated Sprint Standups</strong>
                <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Weekly retrospectives and sprint review cadences</span>
              </div>
            </div>

            <div style={{ background: 'rgba(12, 16, 24, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <Terminal className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Line-by-Line Code Reviews</strong>
                <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Senior engineering guidance on all pull requests</span>
              </div>
            </div>

            <div style={{ background: 'rgba(12, 16, 24, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <Award className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Verified Capstone Credentials</strong>
                <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Authentic project completion certificate & repo proof</span>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ===================================================================
          6. APPLY FOR TRAINING OR INTERNSHIP
          =================================================================== */}
      <section id="apply" className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
        <div id="apply-form"></div>
        <div className="container" style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Apply for Training or Internship
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Ready to take the next step? Submit your application directly to <span style={{ color: '#008CFF', fontWeight: 600 }}>Contact@kolmagtech.com</span>. Click below to launch Google Mail with our application template and attach your resume.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a 
              href={GMAIL_COMPOSE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-blue-primary"
              style={{ padding: '0.9rem 2.8rem', fontSize: '1.05rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
          =================================================================== */}
      <section id="faq" className="section-padding" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              Clear Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about eligibility, program structure, code reviews, and real outcomes.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="faq-accordion-item"
                  style={{ background: 'rgba(12, 16, 24, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'all 0.25s ease' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none', color: '#fff', textAlign: 'left', fontSize: '1rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#D1D5DB', fontSize: '0.92rem', lineHeight: '1.65', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.85rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. ACADEMIC PROGRAM TRANSPARENCY NOTICE
          =================================================================== */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="disclaimer-banner">
            ℹ️ <strong>Academic Program Transparency:</strong> All KOLMAG training and internship tracks focus on verifiable skill acquisition, hands-on portfolio creation, and practical industry competence. We do not make unsupported guarantees of employment, job placement, or stipends. Student internships are dedicated educational learning opportunities and are managed separately from regular employment vacancies.
          </div>
        </div>
      </section>

      {/* Floating "For apply" Scroll Popup showing downwards */}
      {showApplyPopup && (
        <aside 
          className="floating-apply-popup"
          role="complementary"
          aria-label="Application quick access"
        >
          <div 
            className="floating-apply-pill"
            onClick={handleScrollToApply}
            title="Click to scroll down to application section"
          >
            <div className="floating-apply-icon-glow">
              <Sparkles className="w-4 h-4 text-blue-500" />
            </div>
            <div className="floating-apply-content">
              <span className="floating-apply-label">For apply</span>
              <span className="floating-apply-sub">Scroll Down to Apply</span>
            </div>
            <div className="floating-apply-arrow-btn">
              <ArrowDown className="w-4 h-4 text-blue-500 floating-arrow-bounce" />
            </div>
          </div>
          <button 
            type="button"
            className="floating-apply-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
              setShowApplyPopup(false);
            }}
            title="Dismiss notification"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

    </div>
  );
}

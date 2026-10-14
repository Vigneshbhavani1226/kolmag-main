import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Code2, 
  Headphones, 
  PhoneCall, 
  Play,
  Briefcase,
  Users,
  Search,
  ShoppingCart,
  TrendingUp,
  Palette,
  BarChart3,
  Layers,
  Rocket,
  CheckCircle2,
  FileCheck2,
  Building2,
  Globe2,
  Lock,
  Server
} from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar({ onReplayIntro, onOpenConsultation, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'solutions', 'work', 'training', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // TAB A: IT & DIGITAL SERVICES (10 categories)
  const itServices = [
    {
      icon: <Code2 className="w-4 h-4" />,
      title: 'Software & Application Development',
      desc: 'Custom enterprise software, microservices & scalable backends.',
      href: '#services-it'
    },
    {
      icon: <Globe2 className="w-4 h-4" />,
      title: 'Website & Mobile App Development',
      desc: 'High-performance web applications, iOS & Android platforms.',
      href: '#services-it'
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      title: 'AI, Machine Learning & Data Science',
      desc: 'Predictive intelligence, custom LLM agents & data engineering.',
      href: '#services-it'
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: 'Cybersecurity & Information Security',
      desc: 'VAPT security testing, zero-trust audits & SOC defense.',
      href: '#services-it'
    },
    {
      icon: <Cloud className="w-4 h-4" />,
      title: 'Cloud, Hosting & DevOps',
      desc: 'Agent hosting, multi-cloud Kubernetes & automated CI/CD pipelines.',
      href: '#services-it'
    },
    {
      icon: <Server className="w-4 h-4" />,
      title: 'Networking & IT Infrastructure',
      desc: 'Server hardening, hybrid networks & enterprise cloud architecture.',
      href: '#services-it'
    },
    {
      icon: <Building2 className="w-4 h-4" />,
      title: 'Enterprise Software & Business Apps',
      desc: 'ERP, CRM, workflow automation & system integrations.',
      href: '#services-it'
    },
    {
      icon: <FileCheck2 className="w-4 h-4" />,
      title: 'Software Testing & Quality Assurance',
      desc: 'Automated test suites, security scans & QA validation.',
      href: '#services-it'
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: 'Digital Marketing & SEO',
      desc: 'Search optimization, analytics tracking & enterprise brand visibility.',
      href: '#services-it'
    },
    {
      icon: <Headphones className="w-4 h-4" />,
      title: 'IT Consulting & Technical Support',
      desc: '24/7 technical advisory, SLA support & infrastructure audits.',
      href: '#services-it'
    }
  ];

  // TAB B: BUSINESS & NON-IT SERVICES (9 categories)
  const businessServices = [
    {
      icon: <Users className="w-4 h-4" />,
      title: 'Recruitment & Staffing',
      desc: 'Executive talent search, technical recruiting & workforce staffing.',
      href: '#services-business'
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: 'HR & Organizational Support',
      desc: 'HR policy design, onboarding workflows & compliance support.',
      href: '#services-business'
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: 'Business Consulting & Operations',
      desc: 'Process rationalization, operating model design & performance scale.',
      href: '#services-business'
    },
    {
      icon: <Headphones className="w-4 h-4" />,
      title: 'Customer Support & BPO',
      desc: 'Multi-tier customer operations, helpdesk & back-office support.',
      href: '#services-business'
    },
    {
      icon: <Layers className="w-4 h-4" />,
      title: 'Finance & Administrative Support',
      desc: 'Operational accounting assistance, records management & admin support.',
      href: '#services-business'
    },
    {
      icon: <Palette className="w-4 h-4" />,
      title: 'Creative Design, Media & Branding',
      desc: 'Corporate visual identity, UX/UI design & brand marketing collateral.',
      href: '#services-business'
    },
    {
      icon: <ShoppingCart className="w-4 h-4" />,
      title: 'E-commerce & Digital Commerce',
      desc: 'Marketplace setups, catalog management & checkout flow design.',
      href: '#services-business'
    },
    {
      icon: <CheckCircle2 className="w-4 h-4" />,
      title: 'Procurement & Vendor Coordination',
      desc: 'Vendor vetting, hardware/software procurement & contract coordination.',
      href: '#services-business'
    },
    {
      icon: <Search className="w-4 h-4" />,
      title: 'Market Research & Data Services',
      desc: 'Competitive intelligence, surveys & secondary market analysis.',
      href: '#services-business'
    }
  ];

  // SOLUTIONS: Organized around customer needs
  const solutionsList = [
    {
      icon: <Rocket className="w-4 h-4" />,
      title: 'Digital Transformation',
      desc: 'Legacy system modernization, cloud migration & digital workflows.',
      href: '#solutions'
    },
    {
      icon: <Building2 className="w-4 h-4" />,
      title: 'Enterprise Technology Solutions',
      desc: 'Scalable CRM, ERP, and API gateways for enterprise resilience.',
      href: '#solutions'
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      title: 'AI-Powered Business Automation',
      desc: 'Autonomous AI agents, document parsing & predictive workflows.',
      href: '#solutions'
    },
    {
      icon: <Lock className="w-4 h-4" />,
      title: 'Cybersecurity & Risk Management',
      desc: 'Zero-trust architecture, compliance auditing & vulnerability response.',
      href: '#solutions'
    },
    {
      icon: <Cloud className="w-4 h-4" />,
      title: 'Cloud Infrastructure Solutions',
      desc: 'High-availability agent hosting, Kubernetes & DevOps automation.',
      href: '#solutions'
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: 'Business Process Optimization',
      desc: 'Operational re-engineering, BPO support & overhead minimization.',
      href: '#solutions'
    },
    {
      icon: <Layers className="w-4 h-4" />,
      title: 'Startup & SME Technology',
      desc: 'Agile MVP engineering, cost-optimized cloud & growth roadmaps.',
      href: '#solutions'
    },
    {
      icon: <Globe2 className="w-4 h-4" />,
      title: 'Industry-Specific Solutions',
      desc: 'Targeted architectures for Healthcare, Fintech, Education & Logistics.',
      href: '#solutions'
    }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleExpertClick = (e) => {
    e.preventDefault();
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      {/* Main Horizontal Navbar (Exact Bluehost #001838 Background & Poppins Font) */}
      <nav 
        className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container navbar-container">
          {/* Logo & Brand: Highlighted Logo with Hidden Name that reveals on Hover */}
          <a 
            href="#home" 
            className="navbar-brand-link" 
            onClick={() => handleNavClick('home')}
            aria-label="KOLMAG Cyber Technologies Homepage"
            title="KOLMAG Cyber Technologies"
          >
            <div className="navbar-logo-badge">
              <img 
                src="/assets/kolmag-logo-white.png" 
                alt="KOLMAG Cyber Technologies White Logo" 
                className="navbar-logo-img"
              />
            </div>
            <div className="brand-copy-text">
              <span className="brand-main-title">
                KOLMAG <span className="bracket-accent">&gt;</span>
              </span>
              <span className="brand-sub-title">CYBER TECHNOLOGIES</span>
            </div>
          </a>

          {/* Desktop Horizontal Navigation Menu (Exact Entities Required) */}
          <ul className="desktop-nav-menu" role="menubar">
            {/* 1. Home */}
            <li className="nav-item" role="none">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
                role="menuitem"
              >
                Home
              </a>
            </li>

            {/* 2. About Us */}
            <li className="nav-item" role="none">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
                role="menuitem"
              >
                About Us
              </a>
            </li>

            {/* 3. Services (Two-Tab Mega-Menu) */}
            <li 
              className={`nav-item ${servicesDropdownOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              role="none"
            >
              <a 
                href="#services" 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Services <ChevronDown className="dropdown-icon" />
              </a>

              {/* Unified Services Mega-Menu (Combined IT & Business Offerings) */}
              <div className="mega-dropdown-menu services-mega-menu" role="menu">
                <div className="services-mega-combined-grid">
                  {/* Category 1: IT & Digital Services */}
                  <div className="mega-service-category-col">
                    <div className="mega-category-header">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>IT & Digital Services</span>
                      <span className="mega-count-badge">10</span>
                    </div>
                    <div className="mega-category-list">
                      {itServices.map((srv, idx) => (
                        <div 
                          key={idx} 
                          className="offering-card"
                          onClick={() => {
                            if (onSelectService) {
                              onSelectService({ ...srv, type: 'it' });
                            }
                            setServicesDropdownOpen(false);
                          }}
                          role="menuitem"
                          tabIndex={0}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="offering-icon-box">{srv.icon}</div>
                          <div>
                            <div className="offering-title">{srv.title}</div>
                            <div className="offering-desc">{srv.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Business & Non-IT Services */}
                  <div className="mega-service-category-col">
                    <div className="mega-category-header">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>Business & Non-IT Services</span>
                      <span className="mega-count-badge">9</span>
                    </div>
                    <div className="mega-category-list">
                      {businessServices.map((srv, idx) => (
                        <div 
                          key={idx} 
                          className="offering-card"
                          onClick={() => {
                            if (onSelectService) {
                              onSelectService({ ...srv, type: 'business' });
                            }
                            setServicesDropdownOpen(false);
                          }}
                          role="menuitem"
                          tabIndex={0}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="offering-icon-box">{srv.icon}</div>
                          <div>
                            <div className="offering-title">{srv.title}</div>
                            <div className="offering-desc">{srv.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mega-dropdown-footer">
                  <span>Explore complete portfolio and specialized fulfillment models across all 19 capabilities.</span>
                  <a href="#services" className="mega-footer-link" onClick={() => handleNavClick('services')}>
                    View All Services <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </li>

            {/* 4. Solutions (Customer-Problem-Focused) */}
            <li 
              className={`nav-item ${solutionsDropdownOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
              role="none"
            >
              <a 
                href="#solutions" 
                className={`nav-link ${activeSection === 'solutions' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSolutionsDropdownOpen(!solutionsDropdownOpen);
                }}
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Solutions <ChevronDown className="dropdown-icon" />
              </a>

              {/* Solutions Mega-Menu */}
              <div className="mega-dropdown-menu solutions-mega-menu" role="menu">
                <div className="dropdown-header">
                  Customer-Need-Focused Solution Architectures
                </div>
                <div className="solutions-mega-grid">
                  {solutionsList.map((sol, idx) => (
                    <a 
                      key={idx} 
                      href={sol.href} 
                      className="offering-card"
                      onClick={() => handleNavClick('solutions')}
                      role="menuitem"
                    >
                      <div className="offering-icon-box">{sol.icon}</div>
                      <div>
                        <div className="offering-title">{sol.title}</div>
                        <div className="offering-desc">{sol.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mega-dropdown-footer">
                  <span>Need tailored architecture for your organization?</span>
                  <button 
                    onClick={handleExpertClick} 
                    className="mega-footer-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Discuss Solution Architecture <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </li>

            {/* 5. Our Work */}
            <li className="nav-item" role="none">
              <a 
                href="#work" 
                className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
                onClick={() => handleNavClick('work')}
                role="menuitem"
              >
                Our Work
              </a>
            </li>

            {/* 6. Training & Internships */}
            <li className="nav-item" role="none">
              <a 
                href="#training" 
                className={`nav-link ${activeSection === 'training' ? 'active' : ''}`}
                onClick={() => handleNavClick('training')}
                role="menuitem"
              >
                Training & Internships
              </a>
            </li>

            {/* 7. Careers */}
            <li className="nav-item" role="none">
              <a 
                href="#careers" 
                className={`nav-link ${activeSection === 'careers' ? 'active' : ''}`}
                onClick={() => handleNavClick('careers')}
                role="menuitem"
              >
                Careers
              </a>
            </li>

            {/* 8. Contact */}
            <li className="nav-item" role="none">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
                role="menuitem"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* 9. Far Right Action CTA: Talk to an Expert */}
          <div className="navbar-actions">
            <button 
              onClick={handleExpertClick}
              className="btn-get-started"
              title="Schedule consultation with an expert"
            >
              Talk to an Expert <ArrowRight className="cta-icon" />
            </button>

            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="mobile-drawer-header">
              <div className="navbar-brand-link">
                <div className="navbar-logo-badge">
                  <img 
                    src="/assets/kolmag-logo-white.png" 
                    alt="KOLMAG White Logo" 
                    className="mobile-drawer-logo"
                  />
                </div>
                <div className="brand-copy-text">
                  <span className="brand-main-title" style={{ fontSize: '1.1rem' }}>
                    KOLMAG <span className="bracket-accent">&gt;</span>
                  </span>
                  <span className="brand-sub-title" style={{ fontSize: '0.6rem' }}>CYBER TECHNOLOGIES</span>
                </div>
              </div>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <a 
                  href="#home" 
                  className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About Us
                </a>
              </li>

              {/* Mobile Services Accordion */}
              <li>
                <button 
                  className="mobile-nav-link mobile-accordion-toggle"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mobile-sub-menu">
                    <div style={{ color: '#00f0ff', fontSize: '0.78rem', fontWeight: 700, padding: '0.4rem 0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      IT & Digital Services (10)
                    </div>
                    {itServices.map((srv, idx) => (
                      <div 
                        key={idx} 
                        className="mobile-sub-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          if (onSelectService) {
                            onSelectService({ ...srv, type: 'it' });
                          }
                          setMobileMenuOpen(false);
                        }}
                      >
                        {srv.icon} {srv.title}
                      </div>
                    ))}
                    <div style={{ color: '#00f0ff', fontSize: '0.78rem', fontWeight: 700, padding: '0.75rem 0.65rem 0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Business & Non-IT Services (9)
                    </div>
                    {businessServices.map((srv, idx) => (
                      <div 
                        key={idx} 
                        className="mobile-sub-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          if (onSelectService) {
                            onSelectService({ ...srv, type: 'business' });
                          }
                          setMobileMenuOpen(false);
                        }}
                      >
                        {srv.icon} {srv.title}
                      </div>
                    ))}
                    <a href="#services" className="mobile-sub-link" style={{ color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }} onClick={() => handleNavClick('services')}>
                      View All 19 Services →
                    </a>
                  </div>
                )}
              </li>

              {/* Mobile Solutions Accordion */}
              <li>
                <button 
                  className="mobile-nav-link mobile-accordion-toggle"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="mobile-sub-menu">
                    {solutionsList.slice(0, 6).map((sol, idx) => (
                      <a key={idx} href={sol.href} className="mobile-sub-link" onClick={() => handleNavClick('solutions')}>
                        {sol.icon} {sol.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <a 
                  href="#work" 
                  className={`mobile-nav-link ${activeSection === 'work' ? 'active' : ''}`}
                  onClick={() => handleNavClick('work')}
                >
                  Our Work
                </a>
              </li>

              <li>
                <a 
                  href="#training" 
                  className={`mobile-nav-link ${activeSection === 'training' ? 'active' : ''}`}
                  onClick={() => handleNavClick('training')}
                >
                  Training & Internships
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  className={`mobile-nav-link ${activeSection === 'careers' ? 'active' : ''}`}
                  onClick={() => handleNavClick('careers')}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-drawer-footer">
            <button 
              onClick={handleExpertClick}
              className="mobile-cta-btn"
            >
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

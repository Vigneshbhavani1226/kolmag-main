import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { 
  capabilitiesCol1, 
  capabilitiesCol2, 
  industriesCol1, 
  industriesCol2, 
  servicesMap 
} from '../data/servicesData';
import '../styles/Navbar.css';

export default function Navbar({ _onReplayIntro, onOpenConsultation, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Close dropdowns when route changes (adjusting state during render)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click on any capability or industry item
  const handleServiceItemClick = (name, type) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    
    const found = servicesMap[name.toLowerCase().trim()];
    const serviceObj = found || {
      title: name,
      desc: `KOLMAG's specialized ${name} practice delivers high-performance architecture, digital reinvention, and enterprise fulfillment.`,
      type: type || 'capability'
    };

    if (onSelectService) {
      onSelectService(serviceObj);
    } else {
      navigate('/services');
    }
  };

  const handleExpertClick = (e) => {
    if (e) e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (onOpenConsultation) {
      onOpenConsultation('IT & Digital Services');
    } else {
      navigate('/contact');
    }
  };

  return (
    <header className="header-wrapper">
      {/* Main Horizontal Navbar */}
      <nav 
        className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container navbar-container">
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="navbar-brand-link" 
            aria-label="KOLMAG Cyber Technologies Homepage"
            title="KOLMAG Cyber Technologies"
            onClick={() => setMobileMenuOpen(false)}
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
          </Link>

          {/* Desktop Navigation: ONLY Services has a dropdown list per user instruction */}
          <ul className="desktop-nav-menu" role="menubar">
            {/* 1. Services - THE ONLY DROPDOWN MENU */}
            <li 
              className={`nav-item ${servicesDropdownOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              role="none"
            >
              <Link 
                to="/services" 
                className={`nav-link ${currentPath === '/services' ? 'active' : ''}`}
                onClick={() => setServicesDropdownOpen(false)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Services <ChevronDown className="dropdown-icon" />
              </Link>

              {/* Accenture-Style Full-Breadth Services Mega Menu matching user reference screenshot */}
              <div className="mega-dropdown-menu services-mega-menu" role="menu">
                <div className="accenture-dropdown-container">
                  {/* Top Headline: Services > */}
                  <div className="accenture-dropdown-header">
                    <Link 
                      to="/services" 
                      className="accenture-dropdown-title-link"
                      onClick={() => setServicesDropdownOpen(false)}
                      title="View all Services & Industries"
                    >
                      <span className="accenture-dropdown-title">Services</span>
                      <span className="accenture-chevron-box" aria-hidden="true">
                        <ChevronRight className="w-5 h-5 stroke-[2.8]" />
                      </span>
                    </Link>
                  </div>

                  {/* Main Grid: Capabilities (2 sub-columns) & Industries (2 sub-columns) */}
                  <div className="accenture-mega-grid">
                    {/* Column 1: Capabilities */}
                    <div className="accenture-mega-section">
                      <h3 className="accenture-column-heading">Capabilities</h3>
                      <div className="accenture-subcolumns">
                        <div className="accenture-subcolumn">
                          {capabilitiesCol1.map((item, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              className="accenture-link-btn"
                              onClick={() => handleServiceItemClick(item, 'capability')}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        <div className="accenture-subcolumn">
                          {capabilitiesCol2.map((item, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              className="accenture-link-btn"
                              onClick={() => handleServiceItemClick(item, 'capability')}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Industries */}
                    <div className="accenture-mega-section">
                      <h3 className="accenture-column-heading">Industries</h3>
                      <div className="accenture-subcolumns">
                        <div className="accenture-subcolumn">
                          {industriesCol1.map((item, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              className="accenture-link-btn"
                              onClick={() => handleServiceItemClick(item, 'industry')}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        <div className="accenture-subcolumn">
                          {industriesCol2.map((item, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              className="accenture-link-btn"
                              onClick={() => handleServiceItemClick(item, 'industry')}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-bar footer */}
                  <div className="accenture-dropdown-footer">
                    <span className="accenture-footer-text">
                      Delivering synchronized engineering, zero-trust cybersecurity, and cloud transformation across 19 capabilities and 20 industry verticals.
                    </span>
                    <Link 
                      to="/services" 
                      className="accenture-footer-cta" 
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All Services Catalog <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* 2. Solutions - Clean Direct Nav Link (No Dropdown) */}
            <li className="nav-item" role="none">
              <Link 
                to="/solutions" 
                className={`nav-link ${currentPath === '/solutions' ? 'active' : ''}`}
                role="menuitem"
              >
                Solutions
              </Link>
            </li>



            {/* 4. Training & Internships - Clean Direct Nav Link (No Dropdown) */}
            <li className="nav-item" role="none">
              <Link 
                to="/training-internships" 
                className={`nav-link ${currentPath === '/training-internships' ? 'active' : ''}`}
                role="menuitem"
              >
                Training & Internships
              </Link>
            </li>

            {/* 5. Careers - Clean Direct Nav Link (No Dropdown) */}
            <li className="nav-item" role="none">
              <Link 
                to="/careers" 
                className={`nav-link ${currentPath === '/careers' ? 'active' : ''}`}
                role="menuitem"
              >
                Careers
              </Link>
            </li>

            {/* 6. Contact - Clean Direct Nav Link (No Dropdown) */}
            <li className="nav-item" role="none">
              <Link 
                to="/contact" 
                className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}
                role="menuitem"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Far Right Action CTA: Talk to an Expert */}
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
              <Link 
                to="/" 
                className="navbar-brand-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
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
              </Link>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav List: ONLY Services has accordion per user instruction */}
            <ul className="mobile-nav-list">
              {/* Mobile Services Accordion */}
              <li>
                <button 
                  className={`mobile-nav-link mobile-accordion-toggle ${currentPath === '/services' ? 'active' : ''}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mobile-sub-menu">
                    <div style={{ color: '#008CFF', fontSize: '0.8rem', fontWeight: 800, padding: '0.5rem 0.65rem 0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Capabilities
                    </div>
                    {[...capabilitiesCol1, ...capabilitiesCol2].map((item, idx) => (
                      <button 
                        key={idx} 
                        type="button"
                        className="mobile-sub-link" 
                        style={{ cursor: 'pointer', textAlign: 'left', background: 'none', border: 'none', width: '100%' }}
                        onClick={() => handleServiceItemClick(item, 'capability')}
                      >
                        {item}
                      </button>
                    ))}

                    <div style={{ color: '#008CFF', fontSize: '0.8rem', fontWeight: 800, padding: '0.85rem 0.65rem 0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Industries
                    </div>
                    {[...industriesCol1, ...industriesCol2].map((item, idx) => (
                      <button 
                        key={idx} 
                        type="button"
                        className="mobile-sub-link" 
                        style={{ cursor: 'pointer', textAlign: 'left', background: 'none', border: 'none', width: '100%' }}
                        onClick={() => handleServiceItemClick(item, 'industry')}
                      >
                        {item}
                      </button>
                    ))}

                    <Link 
                      to="/services" 
                      className="mobile-sub-link" 
                      style={{ color: '#ffffff', fontWeight: 700, marginTop: '0.65rem', borderTop: '1px solid rgba(22, 119, 255, 0.2)', paddingTop: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>View All Services & Catalog</span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </li>

              {/* Mobile Solutions (Direct Link) */}
              <li>
                <Link 
                  to="/solutions" 
                  className={`mobile-nav-link ${currentPath === '/solutions' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
              </li>



              {/* Mobile Training & Internships (Direct Link) */}
              <li>
                <Link 
                  to="/training-internships" 
                  className={`mobile-nav-link ${currentPath === '/training-internships' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Training & Internships
                </Link>
              </li>

              {/* Mobile Careers (Direct Link) */}
              <li>
                <Link 
                  to="/careers" 
                  className={`mobile-nav-link ${currentPath === '/careers' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>

              {/* Mobile Contact (Direct Link) */}
              <li>
                <Link 
                  to="/contact" 
                  className={`mobile-nav-link ${currentPath === '/contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
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

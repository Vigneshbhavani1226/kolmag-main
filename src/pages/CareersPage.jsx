import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/CareersPage.css';
import { 
  Search,
  Briefcase, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Award, 
  ArrowRight, 
  ArrowDown,
  ArrowUpRight,
  Send, 
  MapPin, 
  GraduationCap,
  Users,
  Terminal,
  Zap,
  TrendingUp,
  UploadCloud,
  FileText,
  X,
  Sparkles,
  ChevronDown,
  Layers,
  Building2,
  HeartHandshake,
  Check,
  Filter,
  RefreshCw,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export default function CareersPage({ onOpenConsultation, defaultSearchMode = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPractice, setSelectedPractice] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExpFilter, setSelectedExpFilter] = useState('all');

  // Job Listing Expand & Application State
  const [selectedRole, setSelectedRole] = useState(null);
  const [talentSubmitted, setTalentSubmitted] = useState(false);

  // Form State
  const [talentFormData, setTalentFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '',
    noticePeriod: '',
    domain: '',
    portfolioUrl: '',
    resumeFile: null,
    notes: ''
  });

  // Verified Job Openings Database
  const verifiedOpenings = [
    {
      id: 'fullstack-eng',
      title: 'Full-Stack Software Engineer (Mid-Level)',
      practice: 'technology',
      dept: 'Technology & Software Engineering',
      location: 'Hybrid / Hyderabad',
      locCategory: 'hyderabad',
      type: 'Full-Time Employment',
      exp: '2–4 Years Experience',
      expCategory: 'mid',
      desc: 'Architect and develop scalable React and Node.js microservices with clean code, automated tests, and robust API endpoints.',
      tags: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      eligibility: [
        'Bachelor’s or Master’s in Computer Science, IT, or equivalent practical experience.',
        '2–4 years building production web applications using React, Node.js, and TypeScript.',
        'Strong grasp of relational databases (PostgreSQL/MySQL) and RESTful API architectures.',
        'Comfortable with Git workflows, automated testing frameworks, and Docker containers.'
      ],
      responsibilities: [
        'Design, write, and deploy resilient frontend and backend services for enterprise clients.',
        'Participate in architecture design reviews and sprint planning.',
        'Maintain high code standards through automated testing and collaborative peer reviews.',
        'Investigate and resolve performance bottlenecks across the stack.'
      ]
    },
    {
      id: 'cyber-analyst',
      title: 'Cybersecurity Analyst / Associate (VAPT)',
      practice: 'cybersecurity',
      dept: 'Cybersecurity & VAPT',
      location: 'On-Site / Hyderabad',
      locCategory: 'hyderabad',
      type: 'Full-Time Employment',
      exp: '1–3 Years Experience',
      expCategory: 'early',
      desc: 'Conduct structured web application vulnerability assessments, penetration tests, and guide remediation for client applications.',
      tags: ['OWASP Top 10', 'Burp Suite', 'Nmap', 'Penetration Testing', 'Linux'],
      eligibility: [
        'Degree in Computer Science, Information Security, or relevant certifications (CEH, OSCP, eJPT).',
        '1–3 years hands-on experience in vulnerability assessment and penetration testing (VAPT).',
        'Proficiency with tools such as OWASP ZAP, Burp Suite, Nmap, and Linux command-line utilities.',
        'Solid understanding of OWASP Top 10 web vulnerabilities and network defense protocols.'
      ],
      responsibilities: [
        'Perform authorized web application and API penetration testing suites.',
        'Compile actionable security vulnerability reports with clear remediation steps.',
        'Collaborate with developers to explain vulnerability impact and verify applied fixes.',
        'Assist in evaluating cloud infrastructure posture against security benchmarks.'
      ]
    },
    {
      id: 'ai-ml-eng',
      title: 'AI & Machine Learning Engineer',
      practice: 'ai',
      dept: 'AI & Analytics',
      location: 'Hybrid / Hyderabad',
      locCategory: 'hyderabad',
      type: 'Full-Time Employment',
      exp: '2–4 Years Experience',
      expCategory: 'mid',
      desc: 'Develop and deploy predictive machine learning pipelines, custom NLP extractors, and intelligent automation workflows.',
      tags: ['Python', 'PyTorch', 'FastAPI', 'NLP', 'RAG & Agents'],
      eligibility: [
        'Strong background in Computer Science, Data Science, Applied Mathematics, or related field.',
        '2–4 years writing production Python using Pandas, NumPy, Scikit-Learn, or PyTorch.',
        'Experience building and deploying machine learning models via REST APIs (FastAPI/Flask).',
        'Familiarity with retrieval-augmented generation (RAG) and LLM agent integration is a plus.'
      ],
      responsibilities: [
        'Design end-to-end data processing pipelines and feature engineering workflows.',
        'Train, evaluate, and fine-tune models tailored to customer business problems.',
        'Containerize and deploy inference services with Docker on cloud servers.',
        'Collaborate with software engineers to integrate AI models seamlessly into applications.'
      ]
    },
    {
      id: 'tech-recruiter',
      title: 'Technical Talent Acquisition Specialist',
      practice: 'operations',
      dept: 'Digital Operations & Strategy',
      location: 'Hybrid / Hyderabad',
      locCategory: 'hyderabad',
      type: 'Full-Time Employment',
      exp: '1–3 Years Experience',
      expCategory: 'early',
      desc: 'Lead end-to-end talent sourcing, candidate screening, and technical interview coordination for internal teams and enterprise clients.',
      tags: ['IT Recruitment', 'Talent Sourcing', 'Candidate Screening', 'Coordination'],
      eligibility: [
        'Degree in Human Resources, Business, Communications, or relevant experience.',
        '1–3 years in IT recruitment, technical sourcing, and candidate relationship management.',
        'Familiarity with software engineering terminology and technology roles.',
        'Strong interpersonal communication, screening, and organizational coordination skills.'
      ],
      responsibilities: [
        'Source qualified software, cloud, and cybersecurity candidates across hiring channels.',
        'Conduct initial phone screens to assess background, communication, and role alignment.',
        'Coordinate technical assessment rounds and manage the candidate onboarding lifecycle.',
        'Maintain candidate databases and nurture long-term technical talent relationships.'
      ]
    }
  ];

  // Practice Domains Data
  const practiceDomains = [
    {
      id: 'technology',
      title: 'Technology & Software Engineering',
      badge: 'Core Practice',
      icon: <Terminal className="w-6 h-6" />,
      desc: 'Build scalable cloud-native applications, modern React/Node systems, and robust microservices.',
      tags: ['React.js', 'Node.js', 'TypeScript', 'Docker', 'PostgreSQL'],
      actionLabel: 'Explore Technology'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & VAPT',
      badge: 'Defensive Security',
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: 'Leverage modern security frameworks and zero-trust strategies to protect enterprise infrastructure.',
      tags: ['OWASP Top 10', 'Burp Suite', 'Network Pen Testing', 'Cloud Audits'],
      actionLabel: 'Explore Cybersecurity'
    },
    {
      id: 'ai',
      title: 'AI & Analytics',
      badge: 'Innovation Hub',
      icon: <Cpu className="w-6 h-6" />,
      desc: 'Bring innovative machine learning models, predictive pipelines, and automated intelligence to life.',
      tags: ['Python', 'PyTorch', 'FastAPI', 'NLP', 'Model Deployments'],
      actionLabel: 'Explore AI & Analytics'
    },
    {
      id: 'operations',
      title: 'Digital Operations & Strategy',
      badge: 'Agile & Scale',
      icon: <Layers className="w-6 h-6" />,
      desc: 'Elevate business workflows with smart insights, automation, and structured technical operations.',
      tags: ['Talent Sourcing', 'Sprint Delivery', 'Automation', 'Process Optimization'],
      actionLabel: 'Explore Digital Operations'
    }
  ];

  // Culture & Well-Being Pillars
  const culturePillars = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Continuous Growth & Learning',
      desc: 'Technical certifications & research support, sponsored exam vouchers, internal tech symposiums, and mentor-led engineering circles.',
      perks: ['100% Exam Voucher Sponsorship', 'Internal Hackathons & Demos', 'Custom Skill Growth Maps']
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Flexible Hybrid Work & Autonomy',
      desc: 'Modern hybrid policies balancing high-collaboration team days with focused remote deep-work time and asynchronous communication.',
      perks: ['Flexible Core Hours', 'Home Office Stipend Guidance', 'Outcome-Focused Autonomy']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Financial Rewards & Recognition',
      desc: 'Competitive compensation benchmarks, milestone project bonuses, and transparent merit-based appraisal cycles.',
      perks: ['Performance-Based Milestone Bonuses', 'Semi-Annual Merit Reviews', 'Spot Innovation Awards']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'High-Ownership Meritocracy Culture',
      desc: 'Direct influence on client architecture, zero red tape, and an environment where good ideas win regardless of seniority.',
      perks: ['Direct Practice Lead Mentorship', 'Flat Engineering Hierarchy', 'Open Technical RFCs']
    }
  ];

  // Check URL params or default search mode on mount
  useEffect(() => {
    if (defaultSearchMode || location.pathname.includes('/jobsearch')) {
      const searchHub = document.getElementById('job-search-hub');
      if (searchHub) {
        searchHub.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [defaultSearchMode, location.pathname]);

  // Filtering Logic
  const filteredJobs = verifiedOpenings.filter((job) => {
    const matchesKeyword = !searchTerm.trim() || (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const matchesPractice = selectedPractice === 'all' || job.practice === selectedPractice;
    const matchesLocation = selectedLocation === 'all' || job.locCategory === selectedLocation;
    const matchesExp = selectedExpFilter === 'all' || job.expCategory === selectedExpFilter;

    return matchesKeyword && matchesPractice && matchesLocation && matchesExp;
  });

  // Search Action Handler
  const handleExecuteSearch = (e) => {
    if (e) e.preventDefault();
    const searchHub = document.getElementById('job-search-hub');
    if (searchHub) {
      searchHub.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePracticeCardClick = (practiceId) => {
    setSelectedPractice(practiceId);
    const searchHub = document.getElementById('job-search-hub');
    if (searchHub) {
      searchHub.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForJob = (jobTitle) => {
    setTalentFormData(prev => ({ ...prev, domain: jobTitle }));
    const applySection = document.getElementById('apply-form-section');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setTalentFormData({ ...talentFormData, resumeFile: e.target.files[0] });
    }
  };

  const handleRemoveFile = () => {
    setTalentFormData({ ...talentFormData, resumeFile: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTalentSubmit = (e) => {
    e.preventDefault();
    setTalentSubmitted(true);
    setTimeout(() => {
      setTalentSubmitted(false);
      setTalentFormData({
        name: '',
        email: '',
        phone: '',
        experienceYears: '',
        noticePeriod: '',
        domain: '',
        portfolioUrl: '',
        resumeFile: null,
        notes: ''
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 6000);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedPractice('all');
    setSelectedLocation('all');
    setSelectedExpFilter('all');
  };

  return (
    <div className="careers-portal-root">

      {/* ============================================================ */}
      {/* 1. HERO & INLINE SEARCH REDIRECT BANNER SECTION              */}
      {/* ============================================================ */}
      <section className="accenture-careers-hero">
        <div className="hero-ambient-mesh" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <h1 className="hero-main-headline">
            Belong. Grow. Thrive.{' '}
            <span className="text-gradient-reinvent">Reinvent with Us.</span>
          </h1>

          <p className="hero-main-subheadline">
            Join a high-performance team driving meaningful technology, security, and digital transformation for our clients and the industry.
          </p>

          {/* Prominent Inline Job Search Widget */}
          <div className="job-search-widget-wrapper">
            <form onSubmit={handleExecuteSearch} className="job-search-bar">
              
              {/* Keyword Field */}
              <div className="search-field-segment">
                <Search className="w-5 h-5 search-field-icon" />
                <input 
                  type="text"
                  placeholder="Search by role, skill, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input-field"
                  aria-label="Search by role, skill, or technology"
                />
                {searchTerm && (
                  <button 
                    type="button" 
                    onClick={() => setSearchTerm('')} 
                    style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0 4px' }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Practice Area Dropdown */}
              <div className="search-field-segment">
                <Filter className="w-4 h-4 search-field-icon" />
                <select 
                  value={selectedPractice}
                  onChange={(e) => setSelectedPractice(e.target.value)}
                  className="search-select-field"
                  aria-label="Filter by Practice Area"
                >
                  <option value="all">All Practice Areas</option>
                  <option value="technology">Technology & Software</option>
                  <option value="cybersecurity">Cybersecurity & VAPT</option>
                  <option value="ai">AI & Analytics</option>
                  <option value="operations">Digital Operations</option>
                </select>
              </div>

              {/* Location Selector */}
              <div className="search-field-segment">
                <MapPin className="w-4 h-4 search-field-icon" />
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="search-select-field"
                  aria-label="Filter by Location"
                >
                  <option value="all">All Locations</option>
                  <option value="hyderabad">Hyderabad (Hybrid / On-Site)</option>
                  <option value="remote">Remote / Flexible</option>
                </select>
              </div>

              {/* Primary Search CTA */}
              <button type="submit" className="btn-search-primary">
                <span>Explore Talent Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

            {/* Quick Suggestions / Trending Tags */}
            <div className="search-trending-pills">
              <span>Popular searches:</span>
              <button type="button" onClick={() => { setSearchTerm('React'); handleExecuteSearch(); }} className="trending-pill-tag">
                Full-Stack React
              </button>
              <button type="button" onClick={() => { setSearchTerm('VAPT'); handleExecuteSearch(); }} className="trending-pill-tag">
                Cybersecurity VAPT
              </button>
              <button type="button" onClick={() => { setSearchTerm('Machine Learning'); handleExecuteSearch(); }} className="trending-pill-tag">
                AI / ML Python
              </button>
              <button type="button" onClick={() => { setSearchTerm('Docker'); handleExecuteSearch(); }} className="trending-pill-tag">
                Cloud & DevOps
              </button>
              <button type="button" onClick={() => { setSearchTerm('Recruiter'); handleExecuteSearch(); }} className="trending-pill-tag">
                Technical Staffing
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 2. "WHATEVER YOU WANT TO DO" — CAREER PRACTICE DOMAINS        */}
      {/* ============================================================ */}
      <section id="practice-areas" className="practice-domains-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              WHATEVER YOU WANT TO DO
            </span>
            <h2 className="section-title">Explore Our Career Practice Areas</h2>
            <p className="section-subtitle">
              Whether you build enterprise software, safeguard digital frontiers, train neural models, or orchestrate technical operations, find your home here.
            </p>
          </div>

          <div className="practice-grid-cards">
            {practiceDomains.map((domain) => (
              <div 
                key={domain.id} 
                className="practice-domain-card"
                onClick={() => handlePracticeCardClick(domain.id)}
              >
                <div className="practice-card-icon-box">
                  {domain.icon}
                </div>
                <div className="practice-card-badge">{domain.badge}</div>
                <h3 className="practice-card-title">{domain.title}</h3>
                <p className="practice-card-desc">{domain.desc}</p>
                
                <div className="practice-tech-tags">
                  {domain.tags.map((t, idx) => (
                    <span key={idx} className="tech-tag-chip">{t}</span>
                  ))}
                </div>

                <button 
                  type="button" 
                  className="practice-card-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePracticeCardClick(domain.id);
                  }}
                >
                  <span>{domain.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 3. "WHEREVER YOU ARE IN YOUR CAREER" — EXPERIENCE PATHWAYS   */}
      {/* ============================================================ */}
      <section className="career-pathways-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.4)', color: '#008CFF' }}>
              WHEREVER YOU ARE IN YOUR CAREER
            </span>
            <h2 className="section-title">Designed for Every Stage of Growth</h2>
            <p className="section-subtitle">
              Tailored pathways providing the right mentorship, challenge, and technical autonomy for your current experience horizon.
            </p>
          </div>

          <div className="pathways-grid">
            
            {/* Pathway 1: Students & Interns */}
            <div className="pathway-segment-block">
              <div className="pathway-icon-circle">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="pathway-stage-badge">Emerging Talent</div>
              <h3 className="pathway-title">Students & Interns</h3>
              <p className="pathway-desc">
                Launch your career with structured technical internships, live codebase pull requests, and real capstone engineering under industry mentors.
              </p>
              <Link to="/training-internships" className="btn-pathway-action">
                <span>Go to Training & Internships</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pathway 2: Early Career Professionals */}
            <div className="pathway-segment-block">
              <div className="pathway-icon-circle">
                <Zap className="w-6 h-6" />
              </div>
              <div className="pathway-stage-badge">1–3 Years Experience</div>
              <h3 className="pathway-title">Early Career Professionals</h3>
              <p className="pathway-desc">
                Bring your passion and code to solve complex real-world engineering challenges, refactor microservices, and master defensive security best practices.
              </p>
              <button 
                type="button" 
                onClick={() => { setSelectedExpFilter('early'); handleScrollTo('job-search-hub'); }}
                className="btn-pathway-action"
              >
                <span>View Early Career Roles</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pathway 3: Experienced Professionals */}
            <div className="pathway-segment-block">
              <div className="pathway-icon-circle">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="pathway-stage-badge">Mid / Senior / Lead</div>
              <h3 className="pathway-title">Experienced Professionals</h3>
              <p className="pathway-desc">
                Take ownership of architectures, mentor team members, lead high-impact technical practices, and establish modern engineering standards.
              </p>
              <button 
                type="button" 
                onClick={() => { setSelectedExpFilter('mid'); handleScrollTo('job-search-hub'); }}
                className="btn-pathway-action"
              >
                <span>Explore Senior & Lead Roles</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pathway 4: Career Rebooters / Returnees */}
            <div className="pathway-segment-block">
              <div className="pathway-icon-circle">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="pathway-stage-badge">Inclusive Returnship</div>
              <h3 className="pathway-title">Career Rebooters & Returnees</h3>
              <p className="pathway-desc">
                Specialized pathways for professionals returning from career breaks with structured ramp-up, upskilling modules, and dedicated support.
              </p>
              <button 
                type="button" 
                onClick={() => {
                  setTalentFormData(prev => ({ ...prev, domain: 'Career Returnee / Rebooter Track' }));
                  handleScrollTo('apply-form-section');
                }}
                className="btn-pathway-action"
              >
                <span>Join Returnee Registry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 4. "YOU BELONG HERE" — CULTURE & WELL-BEING / BENEFITS BRIEF  */}
      {/* ============================================================ */}
      <section className="belonging-culture-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF' }}>
              YOU BELONG HERE
            </span>
            <h2 className="section-title">Life, Culture & Employee Well-Being</h2>
            <p className="section-subtitle">
              We empower our engineers with high trust, intellectual freedom, financial meritocracy, and dedicated personal growth support.
            </p>
          </div>

          <div className="culture-pillars-grid">
            {culturePillars.map((pillar, idx) => (
              <div key={idx} className="culture-pillar-card">
                <div className="pillar-icon-glow">
                  {pillar.icon}
                </div>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-desc">{pillar.desc}</p>
                
                <ul className="pillar-perks-list">
                  {pillar.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="pillar-perk-item">
                      <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 5. CURRENT HIRING STATUS & ENGINEERING TALENT NETWORK         */}
      {/* ============================================================ */}
      <section id="job-search-hub" className="talent-registry-section">
        <div className="container">
          
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
            <span className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.4)', color: '#008CFF' }}>
              CURRENT HIRING STATUS
            </span>
            <h2 className="section-title">Engineering Talent Registry & Future Cohorts</h2>
            <p className="section-subtitle">
              We currently do not have immediate active openings. We welcome driven professionals to register in our talent database for upcoming enterprise engagements.
            </p>
          </div>

          {/* Hiring Status Transparent Callout Card */}
          <div className="hiring-status-card">
            <h3 className="hiring-status-title">
              No Immediate Openings at Present
            </h3>

            <p className="hiring-status-desc">
              All regular software engineering, defensive cybersecurity, and operations positions are currently at full capacity. However, our technical leadership regularly reviews profiles in our Engineering Talent Registry as new enterprise contracts and specialized project cohorts open up.
            </p>

            <div className="status-perks-row">
              <div className="status-perk-box">
                <div className="status-perk-icon">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="status-perk-title">Priority Consideration</div>
                  <div className="status-perk-text">
                    Registered candidates are reviewed and interviewed first before roles are posted externally.
                  </div>
                </div>
              </div>

              <div className="status-perk-box">
                <div className="status-perk-icon">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="status-perk-title">Direct Engineering Review</div>
                  <div className="status-perk-text">
                    Profiles and GitHub repositories are assessed directly by practice leads, not automated screeners.
                  </div>
                </div>
              </div>

              <div className="status-perk-box">
                <div className="status-perk-icon">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="status-perk-title">Student Internships Active</div>
                  <div className="status-perk-text">
                    Academic internship batches and training tracks operate separately and accept applicants.
                  </div>
                </div>
              </div>
            </div>

            <div className="status-actions-bar">
              <button 
                type="button" 
                onClick={() => handleScrollTo('apply-form-section')} 
                className="btn-registry-primary"
              >
                <span>Register in Talent Network Below</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link to="/training-internships" className="btn-internship-alt">
                <span>Looking for Internships? Explore Training Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Practice Scout Cards */}
          <div className="scout-grid-header">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              Practice Areas We Regularly Scout For
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Select a domain below to pre-fill your expression of interest in the talent form:
            </p>
          </div>

          <div className="scout-cards-grid">
            {[
              {
                badge: 'Software Engineering',
                title: 'Full-Stack Software Engineer',
                skills: 'React.js, Node.js, TypeScript, PostgreSQL, REST APIs, Docker'
              },
              {
                badge: 'Defensive Security',
                title: 'Cybersecurity Analyst (VAPT)',
                skills: 'Web App Pentesting, OWASP Top 10, Burp Suite, Network Audits'
              },
              {
                badge: 'AI & Data Science',
                title: 'AI & Machine Learning Engineer',
                skills: 'Python, PyTorch, Model Deployments, RAG, Intelligent Automation'
              },
              {
                badge: 'Digital Operations',
                title: 'Technical Talent Acquisition & Operations',
                skills: 'IT Talent Sourcing, Candidate Screening, Agile Sprint Coordination'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="scout-card"
                onClick={() => {
                  setTalentFormData(prev => ({ ...prev, domain: item.title }));
                  handleScrollTo('apply-form-section');
                }}
              >
                <div className="scout-card-badge">{item.badge}</div>
                <h4 className="scout-card-title">{item.title}</h4>
                <p className="scout-card-skills">{item.skills}</p>
                <div className="scout-card-btn">
                  <span>Express Interest</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 6. GENERAL APPLICATION / TALENT REGISTRY FORM                */}
      {/* ============================================================ */}
      <section id="apply-form-section" className="section-padding" style={{ background: '#000000' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="careers-form-container">
            <div className="careers-form-header">
              <div className="section-badge" style={{ borderColor: 'rgba(22, 119, 255, 0.35)', color: '#008CFF', marginBottom: '0.85rem' }}>
                TALENT NETWORK REGISTRY
              </div>
              <h2 className="careers-form-title">
                Register with the Engineering Talent Registry
              </h2>
              <div style={{ fontSize: '0.86rem', color: '#008CFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                Direct to KOLMAG Technical Talent Acquisition
              </div>
              <p className="careers-form-lead">
                While our current cohorts are at full capacity, our technical leadership continuously reviews registered talent for upcoming enterprise engagements and specialized project cohorts. Submit your profile below to receive priority consideration.
              </p>
            </div>

            {talentSubmitted ? (
              <div style={{ background: 'rgba(22, 119, 255, 0.08)', border: '1px solid #1677FF', borderRadius: '12px', padding: '2.5rem', textAlign: 'center', color: '#fff' }}>
                <CheckCircle2 className="w-12 h-12 text-blue-500" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.65rem' }}>Professional Application Received</h3>
                <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: '1.65', maxWidth: '600px', margin: '0 auto' }}>
                  Thank you, <strong>{talentFormData.name}</strong>. Your expression of interest for <strong>{talentFormData.domain}</strong> has been logged in our engineering talent registry. Our technical recruiting team will review your qualifications and connect with you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTalentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Full Name & Professional Email */}
                <div className="form-grid-2">
                  <div className="form-group-item">
                    <label className="careers-label">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={talentFormData.name}
                      onChange={(e) => setTalentFormData({...talentFormData, name: e.target.value})}
                      className="careers-input"
                    />
                  </div>

                  <div className="form-group-item">
                    <label className="careers-label">
                      Professional Email *
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={talentFormData.email}
                      onChange={(e) => setTalentFormData({...talentFormData, email: e.target.value})}
                      className="careers-input"
                    />
                  </div>
                </div>

                {/* Phone & Years of Experience */}
                <div className="form-grid-2">
                  <div className="form-group-item">
                    <label className="careers-label">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      value={talentFormData.phone}
                      onChange={(e) => setTalentFormData({...talentFormData, phone: e.target.value})}
                      className="careers-input"
                    />
                  </div>

                  <div className="form-group-item">
                    <label className="careers-label">
                      Years of Experience *
                    </label>
                    <select 
                      value={talentFormData.experienceYears}
                      onChange={(e) => setTalentFormData({...talentFormData, experienceYears: e.target.value})}
                      className="careers-select"
                      required
                    >
                      <option value=""></option>
                      <option value="0-1 Yr">0–1 Yr</option>
                      <option value="1-3 Yrs">1–3 Yrs</option>
                      <option value="3-5 Yrs">3–5 Yrs</option>
                      <option value="5+ Yrs">5+ Yrs</option>
                    </select>
                  </div>
                </div>

                {/* Notice Period & Target Role */}
                <div className="form-grid-2">
                  <div className="form-group-item">
                    <label className="careers-label">
                      Notice Period *
                    </label>
                    <select 
                      value={talentFormData.noticePeriod}
                      onChange={(e) => setTalentFormData({...talentFormData, noticePeriod: e.target.value})}
                      className="careers-select"
                      required
                    >
                      <option value=""></option>
                      <option value="Immediate">Immediate</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60 Days">60 Days</option>
                    </select>
                  </div>

                  <div className="form-group-item">
                    <label className="careers-label">
                      Target Role or Practice Area *
                    </label>
                    <select 
                      value={talentFormData.domain}
                      onChange={(e) => setTalentFormData({...talentFormData, domain: e.target.value})}
                      className="careers-select"
                      required
                    >
                      <option value=""></option>
                      <option value="Full-Stack Software Engineer (Mid-Level)">Full-Stack Software Engineer (Mid-Level)</option>
                      <option value="Cybersecurity Analyst / Associate (VAPT)">Cybersecurity Analyst / Associate (VAPT)</option>
                      <option value="AI & Machine Learning Engineer">AI & Machine Learning Engineer</option>
                      <option value="Technical Talent Acquisition Specialist">Technical Talent Acquisition Specialist</option>
                      <option value="Cloud / DevOps Engineer">Cloud / DevOps Engineer</option>
                      <option value="Career Returnee / Rebooter Track">Career Returnee / Rebooter Track</option>
                      <option value="General Engineering Talent Registry">General Engineering Talent Registry</option>
                    </select>
                  </div>
                </div>

                {/* LinkedIn URL or Portfolio Link */}
                <div className="form-group-item">
                  <label className="careers-label">
                    LinkedIn URL or Portfolio Link *
                  </label>
                  <input 
                    type="url" 
                    required 
                    value={talentFormData.portfolioUrl}
                    onChange={(e) => setTalentFormData({...talentFormData, portfolioUrl: e.target.value})}
                    className="careers-input"
                  />
                </div>

                {/* Resume Upload (.pdf, .docx) */}
                <div className="form-group-item">
                  <label className="careers-label">
                    Resume Upload * <span style={{ color: '#94a3b8', fontWeight: 400 }}>(.pdf, .docx — Max 10MB)</span>
                  </label>

                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    required={!talentFormData.resumeFile}
                  />

                  {talentFormData.resumeFile ? (
                    <div className="file-selected-box">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <FileText className="w-5 h-5 text-blue-500" />
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                            {talentFormData.resumeFile.name}
                          </div>
                          <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                            {(talentFormData.resumeFile.size / 1024 / 1024).toFixed(2)} MB • Ready for submission
                          </div>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onClick={handleRemoveFile}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.35rem' }}
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="file-upload-zone"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <UploadCloud className="w-8 h-8 text-blue-500" />
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>
                        Click to browse or drag & drop your resume
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        Supported formats: PDF or DOCX (up to 10MB)
                      </div>
                    </div>
                  )}
                </div>

                {/* Brief Summary of Skills or Note to Hiring Lead */}
                <div className="form-group-item">
                  <label className="careers-label">
                    Brief Summary of Skills or Note to Hiring Lead
                  </label>
                  <textarea 
                    rows="3" 
                    value={talentFormData.notes}
                    onChange={(e) => setTalentFormData({...talentFormData, notes: e.target.value})}
                    className="careers-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-submit-career-form">
                  <span>Register in Engineering Talent Network</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Legal / Policy Disclaimer */}
          <div className="disclaimer-banner" style={{ marginTop: '2.5rem' }}>
            ℹ️ <strong>Merit-Based Recruitment Policy:</strong> KOLMAG Cyber Technologies recruits strictly on merit, demonstrated technical competence, and practical interview assessments. We never charge fees from applicants for interviews, tests, or employment.
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 7. GLOBAL STATS / FOOTER TRUST STRIP                         */}
      {/* ============================================================ */}
      <section className="global-stats-trust-strip">
        <div className="container">
          
          <div className="stats-grid-4">
            <div className="stat-metric-card">
              <span className="stat-metric-number">500+</span>
              <span className="stat-metric-label">Engineers & Candidates Mentored</span>
            </div>
            <div className="stat-metric-card">
              <span className="stat-metric-number">98%</span>
              <span className="stat-metric-label">Client & Capstone Delivery Defense Rate</span>
            </div>
            <div className="stat-metric-card">
              <span className="stat-metric-number">40+</span>
              <span className="stat-metric-label">Hiring & Enterprise Tech Partners</span>
            </div>
            <div className="stat-metric-card">
              <span className="stat-metric-number">Zero-Trust</span>
              <span className="stat-metric-label">Defensive Architecture Baseline</span>
            </div>
          </div>

          {/* Quick Footer Anchors */}
          <div className="quick-anchors-row">
            <Link to="/about" className="quick-anchor-link">About KOLMAG</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <Link to="/services" className="quick-anchor-link">Technology Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <Link to="/training-internships" className="quick-anchor-link">Training & Internships</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <button type="button" onClick={() => handleScrollTo('job-search-hub')} className="quick-anchor-link">Job Search Hub</button>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <Link to="/privacy" className="quick-anchor-link">Privacy Policy</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <button 
              type="button" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="quick-anchor-link" 
              style={{ color: '#008CFF' }}
            >
              Back to Top ↑
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

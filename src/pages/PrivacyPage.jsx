import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="page-view-legal">
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-badge">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> Legal Documentation
          </div>
          <h1 className="page-banner-title">
            Privacy <span className="text-gradient-cyan">Policy</span>
          </h1>
          <p className="page-banner-subtitle">
            KOLMAG Cyber Technologies Private Limited is committed to protecting your privacy and handling personal and organizational data responsibly.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Privacy Policy</span>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="feature-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', color: '#D1D5DB', lineHeight: '1.7' }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <p>
                When you interact with our website, submit consultation inquiries, apply for training or internship programs, or submit your resume, we collect information you voluntarily provide such as your full name, email address, telephone number, current educational status, and professional links (e.g. LinkedIn or GitHub).
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. How We Use Your Information</h2>
              <p>
                We use the information we collect strictly to:
              </p>
              <ul style={{ marginLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Respond to business, software, and cybersecurity inquiries.</li>
                <li>Coordinate enrollment and communications for training and student internship tracks.</li>
                <li>Evaluate candidates for active employment openings or talent registry pools.</li>
                <li>Maintain communication regarding schedules, technical scopes, and deliverables.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Data Protection & Confidentiality</h2>
              <p>
                We maintain appropriate administrative and technical safeguards to protect collected data against unauthorized access, loss, or disclosure. We do not sell, rent, or lease personal information to third parties.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Contact for Privacy Inquiries</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to update or delete your details from our records, please reach out to our corporate office at{' '}
                <a href="mailto:contact@kolmagtech.com" style={{ color: '#008CFF' }}>contact@kolmagtech.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck2, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="page-view-legal">
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-badge">
            <FileCheck2 className="w-4 h-4 text-cyan-400" /> Terms of Engagement
          </div>
          <h1 className="page-banner-title">
            Terms of <span className="text-gradient-cyan">Use</span>
          </h1>
          <p className="page-banner-subtitle">
            Terms and conditions governing the use of the KOLMAG CYBER TECHNOLOGIES website and communication channels.
          </p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span style={{ color: '#fff' }}>Terms of Use</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="feature-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', color: '#D1D5DB', lineHeight: '1.7' }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
              <p>
                By accessing and utilizing the KOLMAG Cyber Technologies website or submitting inquiries through our portals, you agree to comply with and be bound by these Terms of Use and our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. Use of Materials & Intellectual Property</h2>
              <p>
                All text, graphics, logos, icons, diagrams, and written content published on this website are the proprietary property of KOLMAG CYBER TECHNOLOGIES PRIVATE LIMITED and are protected under applicable intellectual property laws. Unauthorized reproduction or commercial redistribution without prior written consent is prohibited.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Service Engagements & Statements of Work</h2>
              <p>
                Descriptions of software engineering, cloud architecture, cybersecurity audits, and business solutions provided on this website are for informational purposes. Formal commercial engagements are governed exclusively by executed Statements of Work (SOW), Master Services Agreements (MSA), and formal Non-Disclosure Agreements (NDA).
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Academic Programs & Internships</h2>
              <p>
                Student training programs and internships are dedicated educational tracks focused on practical skill acquisition. Participation does not constitute an offer of permanent employment or an unsupported guarantee of placement.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>5. Inquiries & Legal Notices</h2>
              <p>
                For official legal notices or contractual inquiries, please contact our registered office in Hyderabad, India or email{' '}
                <a href="mailto:contact@kolmagtech.com" style={{ color: '#008CFF' }}>contact@kolmagtech.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

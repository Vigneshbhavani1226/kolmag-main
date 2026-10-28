import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import '../styles/ServiceDetailModal.css';

export default function ServiceDetailModal({ service, isOpen, onClose, onConsultService }) {
  if (!isOpen || !service) return null;

  // Default fulfillment workflow if custom detail is not yet provided
  const fulfillmentSteps = service.fulfillmentSteps || [
    {
      step: '01',
      title: 'Discovery & Requirement Analysis',
      desc: 'Our domain leads review your existing architecture or business workflow, define clear technical/operational milestones, and produce a formal Scope of Work (SOW).'
    },
    {
      step: '02',
      title: 'Solution Design & Architecture',
      desc: 'We map out the system architecture, security checkpoints, compliance requirements, and integration touchpoints tailored to your enterprise infrastructure.'
    },
    {
      step: '03',
      title: 'Iterative Execution & Quality Testing',
      desc: 'Execution governed by sprint milestones, continuous DevSecOps/QA validation, and frequent stakeholder demonstrations to ensure zero drift from requirements.'
    },
    {
      step: '04',
      title: 'Deployment, SLA Support & Handover',
      desc: 'Seamless production rollout followed by comprehensive documentation, knowledge transfer, and dedicated 24/7 post-delivery maintenance and SLA monitoring.'
    }
  ];

  const deliverables = service.deliverables || [
    'Production-grade implementation with full source code & IP ownership',
    'Comprehensive technical & operational documentation',
    'Security audit & quality assurance compliance reports',
    'Post-launch warranty, ongoing monitoring & support SLA'
  ];

  const tools = service.tools || ['Modern Standards', 'Cloud-Native Architecture', 'Enterprise Security Protocols', 'Agile Telemetry'];

  return (
    <div 
      className="service-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="service-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="service-modal-close" 
          onClick={onClose}
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="service-modal-header">
          <div className="service-badge-pill">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> 
            {service.type === 'industry' ? 'Industry Vertical Practice' : service.type === 'capability' ? 'Enterprise Capability' : service.type === 'business' ? 'Business & Non-IT Service' : 'Technology & Digital Service'}
          </div>
          <h2 id="service-modal-title" className="service-modal-title">
            {service.title}
          </h2>
          <p className="service-modal-desc">
            {service.desc}
          </p>
        </div>

        {/* How KOLMAG Fulfills this Service */}
        <div className="service-fulfillment-section">
          <h3 className="section-subheading">
            <Layers className="w-4 h-4 text-cyan-400" /> How KOLMAG Fulfills This Service
          </h3>
          <p className="fulfillment-intro">
            We follow a structured 4-phase execution framework designed to guarantee predictable timelines, strict security compliance, and measurable business impact:
          </p>

          <div className="fulfillment-steps-grid">
            {fulfillmentSteps.map((item, idx) => (
              <div key={idx} className="fulfillment-step-card">
                <div className="step-num-badge">{item.step}</div>
                <div>
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <div className="service-meta-grid">
          <div className="meta-card">
            <h4 className="meta-card-title">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Deliverables
            </h4>
            <ul className="meta-list">
              {deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          <div className="meta-card">
            <h4 className="meta-card-title">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Standards & Frameworks
            </h4>
            <div className="tools-pills-wrap">
              {tools.map((t, i) => (
                <span key={i} className="tool-pill">{t}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.85rem' }}>
              Every delivery is backed by non-disclosure agreements (NDAs) and transparent milestone tracking.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="service-modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Back to Services
          </button>
          <button 
            className="btn-consult-service"
            onClick={() => {
              onClose();
              if (onConsultService) onConsultService(service.title);
            }}
          >
            Talk to an Expert About {service.title} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Sparkles, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';
import '../styles/ConsultationModal.css';

export default function ConsultationModal({ isOpen, onClose, initialInquiryType = 'IT' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: initialInquiryType,
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: 'IT',
      requirements: ''
    });
    onClose();
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-badge">
              <CheckCircle2 className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="success-title">Consultation Request Received</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <strong>{formData.inquiryType}</strong> has been routed to our dedicated enterprise solutions team. We will review your requirements and respond within 1 business day.
            </p>
            <div className="success-meta-box">
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Company:</strong> {formData.company || 'Not Specified'}</div>
              <div><strong>Department:</strong> {formData.inquiryType} Team</div>
            </div>
            <button className="btn-modal-primary" onClick={handleReset}>
              Close & Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="modal-eyebrow">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" /> KOLMAG Enterprise Advisory
              </span>
              <h2 id="modal-headline" className="modal-title">
                Talk to an Expert
              </h2>
              <p className="modal-subtitle">
                Schedule a consultation with our technology architects and business solution leads. We'll connect you directly with the right department.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <div className="input-with-icon">
                    <User className="input-icon" />
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Business Email *</label>
                  <div className="input-with-icon">
                    <Mail className="input-icon" />
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="input-with-icon">
                    <Phone className="input-icon" />
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organization</label>
                  <div className="input-with-icon">
                    <Building className="input-icon" />
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="inquiryType">Inquiry Classification *</label>
                <select 
                  id="inquiryType"
                  name="inquiryType" 
                  value={formData.inquiryType} 
                  onChange={handleChange}
                  className="modal-select"
                  required
                >
                  <option value="IT & Digital Services">IT & Digital Services (Software, Cloud, Cyber, AI)</option>
                  <option value="Business & Non-IT Services">Business & Non-IT Services (Staffing, Operations, BPO, Media)</option>
                  <option value="Training & Internships">Training, Internships & Academic Programs</option>
                  <option value="Recruitment & Staffing">Recruitment & Staffing Inquiries</option>
                  <option value="Business Partnership">Enterprise Partnership & Vendor Collaboration</option>
                </select>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="requirements">Brief Description of Requirements *</label>
                <div className="input-with-icon" style={{ alignItems: 'flex-start' }}>
                  <MessageSquare className="input-icon" style={{ marginTop: '0.85rem' }} />
                  <textarea 
                    id="requirements"
                    name="requirements" 
                    value={formData.requirements} 
                    onChange={handleChange} 
                    rows="3" 
                    required 
                  />
                </div>
              </div>

              <div className="modal-form-footer">
                <div className="security-notice">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Confidential NDA protected • Direct routing to department leads</span>
                </div>
                <button type="submit" className="btn-modal-primary" disabled={loading}>
                  {loading ? 'Routing Request...' : (
                    <>Submit Consultation Request <Send className="w-4 h-4 ml-1" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

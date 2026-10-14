import React, { useEffect, useState } from 'react';
import '../styles/LogoIntroAnimation.css';

export default function LogoIntroAnimation({ onComplete, isManualReplay = false }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !isManualReplay) {
      if (onComplete) onComplete();
      return;
    }

    // Auto complete after 1.8 seconds (crisp, restrained duration like Accenture)
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 1800);

    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2400);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, isManualReplay]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <div 
      className={`logo-intro-overlay ${fadingOut ? 'fade-out' : ''}`}
      role="dialog"
      aria-label="KOLMAG Cyber Technologies Accenture-Style Logo Intro Animation"
    >
      <div className="intro-grid-bg" />
      <div className="cyan-streak" />

      <div className="logo-intro-container">
        {/* White Company Logo with Ambient Highlight & Sheen */}
        <div className="intro-logo-wrapper">
          <img 
            src="/assets/kolmag-logo-white.png" 
            alt="KOLMAG Cyber Technologies White Logo" 
            className="intro-logo-img"
          />
          {/* Luminous Highlight Beam Sweep over White Logo */}
          <div className="logo-highlight-sheen" />
        </div>

        {/* Brand Name in Pure White with Accenture '>' Accent Highlight */}
        <div className="intro-brand-name-box">
          <div className="intro-brand-title">
            KOLMAG <span className="accent-bracket">&gt;</span>
          </div>
          <div className="intro-brand-subtitle">
            CYBER TECHNOLOGIES
          </div>
          <div className="intro-line-divider" />
        </div>
      </div>

      <button 
        className="skip-intro-btn" 
        onClick={handleSkip} 
        aria-label="Skip introduction animation"
      >
        Skip [ESC]
      </button>
    </div>
  );
}

import React, { useState } from 'react';

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0); // Default is index 0 active

  const faqData = [
    {
      q: 'What is the Armory platform?',
      a: 'Armory is a specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      q: 'Who is this template designed for?',
      a: 'This platform is engineered for developer teams, product architects, and operations managers looking to deploy secure, autonomous workflows integrated with primary SaaS tools and database clusters.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      q: 'Does Armory provide pre-built agents?',
      a: 'Yes, we provide several boilerplate nodes and agent templates for common automation scenarios, including email auto-responders, DB sync schedulers, and customer support triage systems.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M12 2v4M8 5h8"></path>
          <circle cx="8" cy="16" r="1"></circle>
          <circle cx="16" cy="16" r="1"></circle>
        </svg>
      )
    },
    {
      q: 'How does it differ from a standard chatbot?',
      a: 'Unlike static chatbots, Armory agents operate autonomously. They can evaluate conditional branching, run custom Javascript modules, interface with vector databases, and trigger external API actions without human input.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      q: 'Can I use my own custom domain?',
      a: 'Absolutely. All deployed agent endpoints and triggers can be mapped to your own custom domains with automatically provisioned SSL certificates.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      q: 'Is there a limit to how many agents I can build?',
      a: 'Our Pro plan includes up to 5 active agent workflows running concurrently. For higher limits or custom private clusters, please refer to our Enterprise tier.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M12 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm0 0a5 5 0 1 0-5 5 5 5 0 0 0 5-5z"></path>
        </svg>
      )
    }
  ];

  const handleToggle = (idx) => {
    setActiveIdx(activeIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" style={styles.section}>
      <div className="container faq-container-layout">
        {/* Left Column - Intro details */}
        <div className="faq-left-col">
          <div className="badge badge-dark" style={styles.badge}>\\\\\\ FAQ</div>
          <h2 style={styles.title}>Common inquiries</h2>
          <p style={styles.subtitle}>
            Everything you need to know about deploying, scaling, and securing your neural agents with Armory. Can't find an answer?
          </p>
          <a href="#pricing" style={styles.contactBtn}>
            <img src="/assets/svgs/cog-8-tooth.svg" alt="Contact" style={styles.contactIcon} />
            Contact Us
          </a>
        </div>

        {/* Right Column - Accordions */}
        <div style={styles.rightCol}>
          <div className="faq-accordion-wrapper">
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                className={`faq-accordion-item ${activeIdx === idx ? 'active' : ''}`}
                style={activeIdx === idx ? styles.activeItem : styles.item}
              >
                <div 
                  className="faq-accordion-header" 
                  onClick={() => handleToggle(idx)}
                  style={styles.header}
                >
                  <div style={styles.headerTextGroup}>
                    <span style={styles.faqIcon}>{item.icon}</span>
                    <span style={styles.questionText}>{item.q}</span>
                  </div>
                  <span className="faq-accordion-icon" style={styles.accordionIcon}>
                    {activeIdx === idx ? '×' : '+'}
                  </span>
                </div>
                
                {/* Accordion Body */}
                <div 
                  className="faq-accordion-content"
                  style={{
                    maxHeight: activeIdx === idx ? '200px' : '0',
                    opacity: activeIdx === idx ? 1 : 0
                  }}
                >
                  <div className="faq-accordion-content-inner">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--bg-light)',
    color: 'var(--text-dark)',
    padding: '100px 0',
    borderBottom: '1px solid rgba(23, 43, 54, 0.05)',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: '64px',
    alignItems: 'start',
  },
  leftCol: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'sticky',
    top: '120px',
  },
  badge: {
    color: 'var(--color-oceanic-noir)',
    borderColor: 'rgba(23, 43, 54, 0.2)',
  },
  title: {
    fontSize: '44px',
    fontWeight: '800',
    color: 'var(--color-oceanic-noir)',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--text-muted-dark)',
    marginBottom: '32px',
  },
  contactBtn: {
    backgroundColor: 'var(--color-oceanic-noir)',
    color: 'var(--color-arctic-powder)',
    border: '1px solid var(--color-oceanic-noir)',
    padding: '12px 24px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  },
  contactIcon: {
    width: '16px',
    height: '16px',
    filter: 'invert(1)',
  },
  rightCol: {
    width: '100%',
  },
  item: {
    backgroundColor: 'rgba(23, 43, 54, 0.02)',
    border: '1px solid rgba(23, 43, 54, 0.06)',
  },
  activeItem: {
    backgroundColor: 'rgba(23, 43, 54, 0.02)',
    border: '1px solid var(--color-nocturnal-expedition)',
  },
  header: {
    color: 'var(--color-oceanic-noir)',
  },
  headerTextGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  faqIcon: {
    fontSize: '16px',
  },
  questionText: {
    fontWeight: '600',
    fontSize: '15px',
  },
  accordionIcon: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-nocturnal-expedition)',
  },
};

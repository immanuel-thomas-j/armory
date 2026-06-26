import React from 'react';

export default function Integrations() {
  const tools = [
    { 
      name: 'Anthropic Claude', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M4.5 16.5c-1.5-1.25-2.5-3-2.5-5 0-4.42 4.48-8 10-8s10 3.58 10 8c0 2-1 3.75-2.5 5"/>
          <path d="M7.5 19.5c-1-1-1.5-2.25-1.5-3.5 0-3 3-5.5 6-5.5s6 2.5 6 5.5c0 1.25-.5 2.5-1.5 3.5"/>
        </svg>
      ), 
      desc: 'State-of-the-art reasoning' 
    },
    { 
      name: 'AWS Cloud', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ), 
      desc: 'Secure cloud hosting infrastructure' 
    },
    { 
      name: 'Microsoft Office', 
      logo: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
          <rect x="2" y="2" width="9" height="9"/>
          <rect x="13" y="2" width="9" height="9"/>
          <rect x="2" y="13" width="9" height="9"/>
          <rect x="13" y="13" width="9" height="9"/>
        </svg>
      ), 
      desc: 'Enterprise document sync' 
    },
    { 
      name: 'Bolt Finance', 
      logo: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ), 
      desc: 'Automated billing accounting' 
    },
    { 
      name: 'Slack Messaging', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ), 
      desc: 'Real-time conversational interface' 
    },
    { 
      name: 'Framer Canvas', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}>
          <path d="M5 2h14v6H5zM5 8h7v6H5zM12 14h7v8l-7-6z"/>
        </svg>
      ), 
      desc: 'Interactive visual design tools' 
    },
    { 
      name: 'Kubernetes Nodes', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
          <line x1="12" y1="22" x2="12" y2="12"/>
          <line x1="12" y1="12" x2="22" y2="8.5"/>
          <line x1="12" y1="12" x2="2" y2="8.5"/>
        </svg>
      ), 
      desc: 'Automated container scaling' 
    },
    { 
      name: 'Linear Tracker', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16l4-4-4-4"/>
          <path d="M8 12h8"/>
        </svg>
      ), 
      desc: 'Engineered project coordination' 
    },
    { 
      name: 'GitHub Repos', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      desc: 'Version controlled deployments' 
    },
    { 
      name: 'Vercel Edge', 
      logo: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
          <polygon points="12 2 2 22 22 22"/>
        </svg>
      ), 
      desc: 'Global serverless edge nodes' 
    },
    { 
      name: 'OpenAI GPT-4', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ), 
      desc: 'Advanced natural language agent' 
    },
    { 
      name: 'Pinecone Vector', 
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M12 2L3 9h18L12 2zM12 7l-7 6h14l-7-6zM12 12v10M9 22h6"/>
        </svg>
      ), 
      desc: 'Long-term retrieval indexing' 
    }
  ];

  return (
    <section id="integrations" style={styles.section}>
      <div className="container">
        {/* Intro */}
        <div style={styles.header}>
          <div className="font-mono" style={styles.category}>\\\\\\ INTEGRATIONS</div>
          <h2 style={styles.title}>
            Armory bridges the gap between your data and your tools.
          </h2>
          <p style={styles.subtitle}>
            Deploy agents that live where you work, from Slack to GitHub and beyond. Connect core apps in seconds.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid-4" style={styles.grid}>
          {tools.map((tool, idx) => (
            <div key={idx} className="card-premium" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconBox}>{tool.logo}</div>
                <h3 style={styles.cardTitle}>{tool.name}</h3>
              </div>
              <p style={styles.cardDesc}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--bg-dark)',
    padding: '100px 0',
    position: 'relative',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
  },
  header: {
    maxWidth: '840px',
    margin: '0 auto 60px auto',
    textAlign: 'center',
  },
  category: {
    fontSize: '11px',
    color: 'var(--color-forsythia)',
    letterSpacing: '0.2em',
    marginBottom: '20px',
  },
  title: {
    fontSize: '44px',
    lineHeight: '1.2',
    color: 'var(--color-arctic-powder)',
    marginBottom: '24px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
  },
  grid: {
    marginTop: '40px',
  },
  card: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '140px',
    padding: '24px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px',
  },
  iconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
  },
  cardDesc: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  }
};

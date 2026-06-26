import React from 'react';

export default function InteractiveCanvas() {
  const cards = [
    {
      title: 'Infinite Visual Canvas',
      desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Autonomous Execution',
      desc: 'Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: 'End-to-End Encryption',
      desc: 'Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: 'Production-Ready Stack',
      desc: 'Connect core business platforms and internal services through secure, ready integrations that scale with your volume.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="canvas" style={styles.section}>
      <div className="container">
        {/* Intro */}
        <div style={styles.header}>
          <div className="badge" style={{ color: 'var(--color-forsythia)', borderColor: 'rgba(255, 200, 1, 0.3)' }}>
            Workflow Editor
          </div>
          <h2 style={styles.title}>Orchestrate complex logic visually</h2>
          <p style={styles.subtitle}>
            Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic.
          </p>
        </div>

        {/* Node Editor Visual Canvas Container */}
        <div className="canvas-container-layout">
          {/* Sidebar */}
          <div className="canvas-sidebar">
            <div style={styles.sidebarHeader}>
              <div style={styles.activeTab}>AI AGENT</div>
              <div style={styles.inactiveTab}>AI CHAT</div>
            </div>
            
            <div style={styles.sidebarSection}>
              <div style={styles.sectionLabel}>Stack</div>
              <div style={styles.stackGrid}>
                <div style={styles.stackItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M12 2v4M8 5h8"></path></svg>
                </div>
                <div style={styles.stackItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}><polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9"></polygon></svg>
                </div>
                <div style={styles.stackItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}><path d="M12 2v20M2 12h20"></path></svg>
                </div>
                <div style={styles.stackItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>
                </div>
                <div style={styles.stackItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'block'}}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div style={styles.stackItem}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{display: 'block'}}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
            </div>

            <div style={styles.sidebarFooter}>
              <div style={styles.autoBadge}>AUTO</div>
            </div>
          </div>

          {/* Grid Canvas */}
          <div className="canvas-area">
            {/* Grid Line Dotted Overlay */}
            <div style={styles.canvasGrid}></div>

            {/* Connecting SVG lines with glowing paths */}
            <svg style={styles.canvasSvg}>
              {/* Top Path */}
              <path d="M 50 80 L 750 80" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
              <path d="M 50 80 L 750 80" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />

              {/* Branch Down */}
              <path d="M 330 80 L 330 180 L 600 180" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
              <path d="M 330 80 L 330 180 L 600 180" fill="none" stroke="var(--color-deep-saffron)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal-slow" />
            </svg>

            {/* Node elements on top of paths */}
            <div style={styles.nodesContainer}>
              {/* Row 1 - Main Chain */}
              <div style={styles.row}>
                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email Trigger
                  </span>
                  <span style={styles.nodeDetails}>(IMAP)</span>
                </div>

                <div style={styles.linkBadge}>1 item</div>

                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    Edit Fields
                  </span>
                  <span style={styles.nodeDetails}>Manual</span>
                </div>

                <div style={styles.linkBadge}>1 item</div>

                <div style={{...styles.node, borderColor: 'var(--color-forsythia)'}}>
                  <div style={{...styles.nodeDot, backgroundColor: 'var(--color-forsythia)'}}></div>
                  <span style={{...styles.nodeType, color: 'var(--color-forsythia)'}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    AI Agent
                  </span>
                  <span style={styles.nodeDetails}>Tools Agent</span>
                </div>

                <div style={styles.linkBadge}>1 item</div>

                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>&lt;/&gt; Code</span>
                  <span style={styles.nodeDetails}>Javascript</span>
                </div>
              </div>

              {/* Row 2 - Branch Chain */}
              <div style={{...styles.row, marginTop: '50px', paddingLeft: '320px'}}>
                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Telegram
                  </span>
                  <span style={styles.nodeDetails}>sendAndWait</span>
                </div>

                <div style={styles.linkBadge}>-</div>

                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    If Condition
                  </span>
                  <span style={styles.nodeDetails}>Branching</span>
                </div>

                <div style={styles.linkBadge}>1 item</div>

                <div style={styles.node}>
                  <div style={styles.nodeDot}></div>
                  <span style={styles.nodeType}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Email
                  </span>
                  <span style={styles.nodeDetails}>SMTP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Columns */}
        <div className="grid-4" style={styles.grid}>
          {cards.map((card, idx) => (
            <div key={idx} className="card-premium" style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.cardIcon}>{card.icon}</span>
                <h3 style={styles.cardTitle}>{card.title}</h3>
              </div>
              <p style={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for animated signal paths */}
      <style dangerouslySetInnerHTML={{__html: `
        .flowing-signal {
          stroke-dashoffset: 100;
          animation: flow 5s linear infinite;
        }
        .flowing-signal-slow {
          stroke-dashoffset: 100;
          animation: flow 8s linear infinite;
        }
        @keyframes flow {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}} />
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
    maxWidth: '800px',
    margin: '0 auto 60px auto',
    textAlign: 'center',
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
  canvasContainer: {
    width: '100%',
    height: '420px',
    backgroundColor: 'rgba(23, 43, 54, 0.9)',
    borderRadius: '12px',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    marginBottom: '80px',
  },
  sidebar: {
    backgroundColor: 'var(--bg-dark)',
    borderRight: '1px solid rgba(241, 246, 244, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '1px solid rgba(241, 246, 244, 0.08)',
  },
  activeTab: {
    padding: '14px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '700',
    fontFamily: 'var(--font-mono)',
    borderBottom: '2px solid var(--color-forsythia)',
    color: 'var(--color-forsythia)',
  },
  inactiveTab: {
    padding: '14px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    cursor: 'pointer',
  },
  sidebarSection: {
    padding: '24px',
    flexGrow: 1,
  },
  sectionLabel: {
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  stackGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
  },
  stackItem: {
    aspectRatio: '1',
    backgroundColor: 'rgba(23, 43, 54, 0.5)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',
  },
  sidebarFooter: {
    padding: '24px',
    borderTop: '1px solid rgba(241, 246, 244, 0.08)',
  },
  autoBadge: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    border: '1px dashed rgba(241, 246, 244, 0.2)',
    padding: '6px',
    textAlign: 'center',
    borderRadius: '2px',
    color: 'var(--text-muted)',
  },
  canvas: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  canvasGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(rgba(241, 246, 244, 0.04) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    pointerEvents: 'none',
  },
  canvasSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  nodesContainer: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '40px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  node: {
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: '140px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    position: 'relative',
  },
  nodeDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-nocturnal-expedition)',
    top: '50%',
    left: '-5px',
    transform: 'translateY(-50%)',
    border: '1px solid var(--color-oceanic-noir)',
  },
  nodeType: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
    marginBottom: '2px',
  },
  nodeDetails: {
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
  },
  linkBadge: {
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    padding: '4px 8px',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
  },
  grid: {
    marginTop: '40px',
  },
  card: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  cardIcon: {
    fontSize: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
};

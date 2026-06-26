import React from 'react';

export default function InteractiveCanvas() {
  const cards = [
    {
      title: 'Infinite Visual Canvas',
      desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.',
      icon: (
        <img 
          src="/assets/svgs/cube-16-solid.svg" 
          alt="Canvas" 
          style={{
            width: '20px', 
            height: '20px', 
            display: 'block',
            filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'
          }} 
        />
      )
    },
    {
      title: 'Autonomous Execution',
      desc: 'Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.',
      icon: (
        <img 
          src="/assets/svgs/cog-8-tooth.svg" 
          alt="Execution" 
          style={{
            width: '20px', 
            height: '20px', 
            display: 'block',
            filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'
          }} 
        />
      )
    },
    {
      title: 'End-to-End Encryption',
      desc: 'Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.',
      icon: (
        <img 
          src="/assets/svgs/link-solid.svg" 
          alt="Encryption" 
          style={{
            width: '20px', 
            height: '20px', 
            display: 'block',
            filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'
          }} 
        />
      )
    },
    {
      title: 'Production-Ready Stack',
      desc: 'Connect core business platforms and internal services through secure, ready integrations that scale with your volume.',
      icon: (
        <img 
          src="/assets/svgs/arrow-path.svg" 
          alt="Stack" 
          style={{
            width: '20px', 
            height: '20px', 
            display: 'block',
            filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'
          }} 
        />
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
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Stack 1" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                </div>
                <div style={styles.stackItem}>
                  <img src="/assets/svgs/arrow-trending-up.svg" alt="Stack 2" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                </div>
                <div style={styles.stackItem}>
                  <img src="/assets/svgs/cog-8-tooth.svg" alt="Stack 3" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                </div>
                <div style={styles.stackItem}>
                  <img src="/assets/svgs/link-solid.svg" alt="Stack 4" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                </div>
                <div style={styles.stackItem}>
                  <img src="/assets/svgs/search.svg" alt="Stack 5" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                </div>
                <div style={styles.stackItem}>
                  <img src="/assets/svgs/arrow-path.svg" alt="Stack 6" style={{width: '12px', height: '12px', filter: 'invert(1)'}} />
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

            {/* Node elements on top of paths */}
            <div style={styles.nodesContainer}>
              {/* Connecting SVG lines — gap-only segments to avoid bleed-through on semi-transparent cards */}
              <svg style={styles.canvasSvg}>
                {/* Row 1 gap segments: EmailTrigger→EditFields, EditFields→AIAgent, AIAgent→Code */}
                <path d="M 200 70 L 268 70" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 200 70 L 268 70" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />

                <path d="M 428 70 L 496 70" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 428 70 L 496 70" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />

                <path d="M 656 70 L 724 70" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 656 70 L 724 70" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />

                {/* Branch Down — routes around cards: EditFields output → gap center → vertical → horizontal → Telegram input */}
                <path d="M 428 70 L 462 70 L 462 150 L 248 150 L 248 230 L 268 230" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 428 70 L 462 70 L 462 150 L 248 150 L 248 230 L 268 230" fill="none" stroke="var(--color-deep-saffron)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal-slow" />

                {/* Row 2 gap segments: Telegram→IfCondition, IfCondition→SendEmail */}
                <path d="M 428 230 L 496 230" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 428 230 L 496 230" fill="none" stroke="var(--color-mystic-mint)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />

                <path d="M 656 230 L 724 230" fill="none" stroke="rgba(241, 246, 244, 0.1)" strokeWidth="2" />
                <path d="M 656 230 L 724 230" fill="none" stroke="var(--color-mystic-mint)" strokeWidth="2" strokeDasharray="10 15" className="flowing-signal" />
              </svg>

              {/* Row 1 - Main Chain */}
              <div style={styles.nodeEmailTrigger}>
                <div style={styles.nodeDot}></div>
                <div style={styles.nodeDotRight}></div>
                <span style={styles.nodeType}>
                  <img src="/assets/svgs/link.svg" alt="Email" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(1)'}} />
                  Email Trigger
                </span>
                <span style={styles.nodeDetails}>(IMAP)</span>
              </div>

              <div style={styles.badge1}>1 item</div>

              <div style={styles.nodeEditFields}>
                <div style={styles.nodeDot}></div>
                <div style={styles.nodeDotRight}></div>
                <span style={styles.nodeType}>
                  <img src="/assets/svgs/cog-8-tooth.svg" alt="Edit" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(1)'}} />
                  Edit Fields
                </span>
                <span style={styles.nodeDetails}>Manual</span>
              </div>

              <div style={styles.badge2}>1 item</div>

              <div style={styles.nodeAiAgent}>
                <div style={{...styles.nodeDot, backgroundColor: 'var(--color-forsythia)'}}></div>
                <div style={{...styles.nodeDotRight, backgroundColor: 'var(--color-forsythia)'}}></div>
                <span style={{...styles.nodeType, color: 'var(--color-forsythia)'}}>
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Agent" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'}} />
                  AI Agent
                </span>
                <span style={styles.nodeDetails}>Tools Agent</span>
              </div>

              <div style={styles.badge3}>1 item</div>

              <div style={styles.nodeCode}>
                <div style={styles.nodeDot}></div>
                <span style={styles.nodeType}>&lt;/&gt; Code</span>
                <span style={styles.nodeDetails}>Javascript</span>
              </div>

              {/* Row 2 - Branch Chain */}
              <div style={styles.nodeTelegram}>
                <div style={styles.nodeDot}></div>
                <div style={styles.nodeDotRight}></div>
                <span style={styles.nodeType}>
                  <img src="/assets/svgs/link-solid.svg" alt="Telegram" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(1)'}} />
                  Telegram
                </span>
                <span style={styles.nodeDetails}>sendAndWait</span>
              </div>

              <div style={styles.badge4}>-</div>

              <div style={styles.nodeIfCondition}>
                <div style={styles.nodeDot}></div>
                <div style={styles.nodeDotRight}></div>
                <span style={styles.nodeType}>
                  <img src="/assets/svgs/search.svg" alt="If" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(1)'}} />
                  If Condition
                </span>
                <span style={styles.nodeDetails}>Branching</span>
              </div>

              <div style={styles.badge5}>1 item</div>

              <div style={styles.nodeSendEmail}>
                <div style={styles.nodeDot}></div>
                <span style={styles.nodeType}>
                  <img src="/assets/svgs/arrow-trending-up.svg" alt="Send" style={{width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle', filter: 'invert(1)'}} />
                  Send Email
                </span>
                <span style={styles.nodeDetails}>SMTP</span>
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
    zIndex: 3,
    width: '900px',
    height: '320px',
    margin: '0 auto',
  },
  nodeEmailTrigger: {
    position: 'absolute',
    left: '40px',
    top: '40px',
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeEditFields: {
    position: 'absolute',
    left: '268px',
    top: '40px',
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeAiAgent: {
    position: 'absolute',
    left: '496px',
    top: '40px',
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '2px solid var(--color-forsythia)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(255, 200, 1, 0.05)',
  },
  nodeCode: {
    position: 'absolute',
    left: '724px',
    top: '40px',
    width: '136px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeTelegram: {
    position: 'absolute',
    left: '268px',
    top: '200px',
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeIfCondition: {
    position: 'absolute',
    left: '496px',
    top: '200px',
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeSendEmail: {
    position: 'absolute',
    left: '724px',
    top: '200px',
    width: '136px',
    height: '60px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
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
  nodeDotRight: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-nocturnal-expedition)',
    top: '50%',
    right: '-5px',
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
  badge1: {
    position: 'absolute',
    left: '212px',
    top: '56px',
    width: '44px',
    height: '28px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge2: {
    position: 'absolute',
    left: '440px',
    top: '56px',
    width: '44px',
    height: '28px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge3: {
    position: 'absolute',
    left: '668px',
    top: '56px',
    width: '44px',
    height: '28px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge4: {
    position: 'absolute',
    left: '440px',
    top: '216px',
    width: '44px',
    height: '28px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge5: {
    position: 'absolute',
    left: '668px',
    top: '216px',
    width: '44px',
    height: '28px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    background: 'rgba(23, 43, 54, 0.8)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '100px',
    color: 'var(--text-muted)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

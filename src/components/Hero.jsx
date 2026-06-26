import React from 'react';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  const clientLogos = [
    { name: 'aetna', color: 'var(--color-deep-saffron)' },
    { name: 'cigna', color: 'var(--color-forsythia)' },
    { name: 'Anthem', color: 'var(--color-mystic-mint)' },
    { name: 'CVS pharmacy', color: 'var(--color-deep-saffron)' },
    { name: 'Vertex Labs', color: 'var(--color-forsythia)' },
    { name: 'FlowState AI', color: 'var(--color-mystic-mint)' },
    { name: 'Neural Sync', color: 'var(--color-forsythia)' },
    { name: 'Sentinel Ops', color: 'var(--color-deep-saffron)' }
  ];

  // Duplicate the logos array to ensure a seamless infinite scroll loop
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="hero" style={styles.heroSection}>
      {/* 3D WebGL Constellation backdrop */}
      <ThreeBackground />

      {/* Background Glow Halo */}
      <div style={styles.glowSpot}></div>

      {/* Decorative Grid Background */}
      <div style={styles.gridBg}></div>

      <div className="container" style={styles.container}>
        <div className="hero-grid-layout">
          {/* Left Column - Content */}
          <div style={styles.contentCol}>
            <div className="badge animate-fade-in-up" style={{ color: 'var(--color-forsythia)', borderColor: 'rgba(255, 200, 1, 0.3)' }}>
              // NEXT-GEN AI AUTOMATION
            </div>
            <h1 className="text-gradient-mint hero-title animate-fade-in-up delay-1">
              Power your <br />
              <span className="text-gradient-gold">future</span> with AI
            </h1>
            <p style={styles.subtitle} className="animate-fade-in-up delay-2">
              Deploy custom enterprise agents and automate complex workflows.
              Scale your intelligence with Armory today.
            </p>
            <div style={styles.ctaGroup} className="animate-fade-in-up delay-3">
              <a href="#pricing" style={styles.primaryBtn} className="btn btn-primary">
                <img src="/assets/svgs/cube-16-solid.svg" alt="Build" style={styles.btnIcon} />
                Build A Workflow
              </a>
              <a href="#solutions" style={styles.secondaryBtn} className="btn btn-secondary">
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right Column - Terminal Console */}
          <div className="hero-feature-col animate-fade-in-up delay-4">
            <div className="card-premium" style={styles.terminalCard}>
              <div style={styles.terminalHeader}>
                <div style={styles.windowControls}>
                  <span style={{...styles.windowDot, backgroundColor: 'var(--color-deep-saffron)'}}></span>
                  <span style={{...styles.windowDot, backgroundColor: 'var(--color-forsythia)'}}></span>
                  <span style={{...styles.windowDot, backgroundColor: 'var(--color-mystic-mint)'}}></span>
                </div>
                <div style={styles.terminalTitle}>armory_orchestrator.sh</div>
              </div>
              <div style={styles.terminalBody}>
                <div style={styles.logLine}><span style={{color: 'var(--color-forsythia)'}}>[BOOT]</span> loading core model engine v4.2...</div>
                <div style={styles.logLine}><span style={{color: 'var(--color-mystic-mint)'}}>[OK]</span> active clusters secure on port 8080</div>
                <div style={styles.logLine}><span style={{color: 'var(--color-deep-saffron)'}}>[SYNC]</span> cataloging enterprise resources...</div>
                <div style={styles.logLine}><span style={{color: 'var(--color-forsythia)'}}>[OK]</span> 14 data endpoints indexed (200ms)</div>
                <div style={styles.logLine}><span style={{color: 'var(--color-arctic-powder)', opacity: 0.5}}>&gt; armory --deploy --env=production</span></div>
                <div style={{...styles.logLine, ...styles.activeLine}}><span style={{color: 'var(--color-forsythia)'}}>[LIVE]</span> monitoring accuracy: 99.98%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div style={styles.logoSection}>
          <p style={styles.logoTitle}>TRUSTED BY WORLD-CLASS ENTERPRISES</p>
          <div className="marquee-container" style={styles.marqueeContainer}>
            <div className="marquee-content" style={styles.marqueeContent}>
              {marqueeLogos.map((logo, idx) => (
                <div key={idx} style={styles.logoCard}>
                  <span style={{...styles.logoDot, backgroundColor: logo.color}}></span>
                  <span style={styles.logoName}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    backgroundColor: 'var(--bg-dark)',
    paddingTop: '160px',
    paddingBottom: '80px',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
  },
  gridBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(rgba(241, 246, 244, 0.03) 1px, transparent 1px), radial-gradient(rgba(241, 246, 244, 0.02) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 20px 20px',
    zIndex: 1,
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '64px',
    alignItems: 'center',
    marginBottom: '80px',
  },
  contentCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '64px',
    lineHeight: '1.1',
    color: 'var(--color-arctic-powder)',
    marginBottom: '24px',
    fontWeight: '800',
    letterSpacing: '-0.03em',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
    marginBottom: '40px',
    maxWidth: '540px',
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '600',
    padding: '16px 32px',
    borderRadius: '100px',
  },
  btnIcon: {
    width: '18px',
    height: '18px',
  },
  secondaryBtn: {
    padding: '16px 32px',
    borderRadius: '100px',
    fontWeight: '600',
  },
  glowSpot: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(17, 76, 90, 0.2) 0%, transparent 70%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  featureCol: {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  terminalCard: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: 'rgba(23, 43, 54, 0.85)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    textAlign: 'left',
  },
  terminalHeader: {
    backgroundColor: 'rgba(241, 246, 244, 0.03)',
    borderBottom: '1px solid rgba(241, 246, 244, 0.08)',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  windowControls: {
    display: 'flex',
    gap: '6px',
  },
  windowDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  terminalTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text-muted)',
    flexGrow: 1,
    textAlign: 'center',
    marginRight: '24px',
  },
  terminalBody: {
    padding: '24px',
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    lineHeight: '1.7',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  logLine: {
    color: 'var(--color-arctic-powder)',
    wordBreak: 'break-all',
  },
  activeLine: {
    borderLeft: '2px solid var(--color-forsythia)',
    paddingLeft: '8px',
  },
  logoSection: {
    borderTop: '1px solid rgba(241, 246, 244, 0.05)',
    paddingTop: '40px',
  },
  logoTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'rgba(241, 246, 244, 0.4)',
    letterSpacing: '0.25em',
    marginBottom: '28px',
    textAlign: 'center',
  },
  marqueeContainer: {
    width: '100%',
  },
  marqueeContent: {
    display: 'flex',
    alignItems: 'center',
  },
  logoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 24px',
    background: 'rgba(35, 62, 77, 0.15)',
    border: '1px solid rgba(241, 246, 244, 0.05)',
    borderRadius: '4px',
    minWidth: '180px',
  },
  logoDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  logoName: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '700',
    fontSize: '15px',
    color: 'rgba(241, 246, 244, 0.8)',
    letterSpacing: '-0.02em',
  }
};

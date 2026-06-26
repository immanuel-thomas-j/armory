import React from 'react';
import ThreeBackground from './ThreeBackground';
import heroPng from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      {/* 3D WebGL Constellation backdrop */}
      <ThreeBackground />

      {/* 3D Grid Image Backdrop Overlay */}
      <div style={styles.heroPngBg}></div>

      {/* Background Glow Halo */}
      <div style={styles.glowSpot}></div>

      {/* Decorative Grid Background */}
      <div style={styles.gridBg}></div>

      <div className="container" style={styles.container}>
        <div className="hero-grid-layout">
          {/* Left Column - Content */}
          <div style={styles.contentCol}>
            <div className="hero-badge animate-fade-in-up" style={styles.heroBadge}>
              <span style={styles.badgeDot}></span>
              <span>\\\\\\ OPERATIONAL NEURAL RUNTIME</span>
            </div>
            <h1 className="hero-title animate-fade-in-up delay-1">
              Autonomous AI <br />
              <span className="text-gradient-gold">Orchestration</span> <br />
              for Enterprise
            </h1>
            <p style={styles.subtitle} className="animate-fade-in-up delay-2">
              Orchestrate complex business logic, securely connect vector datastores, and deploy autonomous stateful agents in milliseconds. Zero external dependencies.
            </p>
            <div style={styles.ctaGroup} className="animate-fade-in-up delay-3">
              {/* Custom Split-Block CTA Button */}
              <a href="#pricing" className="btn-split">
                <div className="btn-split-icon-wrapper">
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Build" className="btn-split-icon" style={{ filter: 'invert(1)' }} />
                </div>
                <div className="btn-split-text-wrapper">
                  <span>Build A Workflow</span>
                </div>
              </a>
              <a href="#solutions" className="btn-hero-outline">
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right Column - Vertical Status Cards & Logos */}
          <div className="hero-feature-col animate-fade-in-up delay-4" style={styles.rightCol}>
            <div style={styles.cardsStack}>
              {[
                {
                  title: 'Agent Engine Runtime',
                  desc: 'Stateful execution paths with auto-retry.',
                  icon: '/assets/svgs/cube-16-solid.svg',
                  badge: 'ACTIVE'
                },
                {
                  title: 'Private Cluster Mesh',
                  desc: 'End-to-end telemetry and isolated network nodes.',
                  icon: '/assets/svgs/cog-8-tooth.svg',
                  badge: 'SECURE'
                },
                {
                  title: 'Multi-Vector Sync',
                  desc: 'Context injection across distributed datastores.',
                  icon: '/assets/svgs/arrow-path.svg',
                  badge: 'SYNCED'
                },
                {
                  title: 'Performance Telemetry',
                  desc: 'Sub-millisecond latencies for model endpoints.',
                  icon: '/assets/svgs/arrow-trending-up.svg',
                  badge: '99.9% UPTIME'
                }
              ].map((card, idx) => (
                <div key={idx} className="hero-tech-card">
                  <div className="hero-card-icon-box">
                    <img src={card.icon} alt={card.title} className="hero-card-icon" />
                  </div>
                  <div style={styles.cardInfo}>
                    <div style={styles.cardHeaderRow}>
                      <h3 className="hero-card-title">{card.title}</h3>
                      <span className="hero-card-badge">{card.badge}</span>
                    </div>
                    <p className="hero-card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal row of client logos */}
            <div style={styles.logoRow}>
              <div style={styles.logoRowTitle}>TRUSTED BY LEADING TEAMS</div>
              <div style={styles.logoContainer}>
                {/* aetna */}
                <div style={styles.logoItem}>
                  <img src="/assets/svgs/link-solid.svg" alt="aetna" style={{ width: '16px', height: '16px', filter: 'invert(1)' }} />
                  <span style={styles.logoText}>aetna</span>
                </div>
                {/* cigna */}
                <div style={styles.logoItem}>
                  <img src="/assets/svgs/cog-8-tooth.svg" alt="cigna" style={{ width: '16px', height: '16px', filter: 'invert(1)' }} />
                  <span style={styles.logoText}>cigna</span>
                </div>
                {/* Anthem */}
                <div style={styles.logoItem}>
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Anthem" style={{ width: '16px', height: '16px', filter: 'invert(1)' }} />
                  <span style={styles.logoText}>Anthem</span>
                </div>
              </div>
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
    paddingBottom: '100px',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
  },
  heroPngBg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${heroPng})`,
    opacity: 0.55,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: 1,
    pointerEvents: 'none',
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
  contentCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 14px',
    borderRadius: '100px',
    backgroundColor: 'rgba(255, 200, 1, 0.08)',
    border: '1px solid rgba(255, 200, 1, 0.2)',
    color: 'var(--color-forsythia)',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    marginBottom: '28px',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-forsythia)',
    boxShadow: '0 0 8px var(--color-forsythia)',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
    marginBottom: '40px',
    maxWidth: '540px',
    textAlign: 'left',
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
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
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'flex-start',
    width: '100%',
    zIndex: 2,
  },
  cardsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
  cardInfo: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoRow: {
    width: '100%',
    paddingTop: '8px',
  },
  logoRowTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'rgba(241, 246, 244, 0.4)',
    letterSpacing: '0.15em',
    marginBottom: '16px',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  logoContainer: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '700',
    fontSize: '15px',
    color: 'rgba(241, 246, 244, 0.8)',
  }
};

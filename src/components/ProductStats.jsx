import React, { useState, useEffect } from 'react';

export default function ProductStats() {
  const [activeSlaIdx, setActiveSlaIdx] = useState(2); // Default active bar
  const [coreSystems, setCoreSystems] = useState(12);
  const [tokenVal, setTokenVal] = useState(264);

  // SLA Bar data
  const slaData = [
    { label: 'Mon', value: 85, percent: '98.5%' },
    { label: 'Tue', value: 65, percent: '96.5%' },
    { label: 'Wed', value: 92, percent: '99.2%' },
    { label: 'Thu', value: 78, percent: '97.8%' },
    { label: 'Fri', value: 88, percent: '98.8%' },
    { label: 'Sat', value: 99, percent: '99.9%' },
    { label: 'Sun', value: 50, percent: '95.0%' }
  ];

  // Animate core systems and tokens on load
  useEffect(() => {
    const systemsInterval = setInterval(() => {
      setCoreSystems(prev => {
        const diff = Math.random() > 0.5 ? 1 : -1;
        const next = prev + diff;
        return next >= 8 && next <= 18 ? next : prev;
      });
    }, 4000);

    const tokenInterval = setInterval(() => {
      setTokenVal(prev => {
        const diff = Math.floor(Math.random() * 5) - 2;
        const next = prev + diff;
        return next >= 240 && next <= 360 ? next : prev;
      });
    }, 3000);

    return () => {
      clearInterval(systemsInterval);
      clearInterval(tokenInterval);
    };
  }, []);

  // Compute gauge dashoffsets
  // radius = 60, circumference = 2 * pi * 60 = 377
  const systemLoadPercent = 75; // 75% system load
  const systemLoadOffset = 377 - (377 * systemLoadPercent) / 100;

  // semi-circle radius = 90, circumference = pi * 90 = 283
  const tokenPercent = (tokenVal / 400) * 100;
  const tokenOffset = 283 - (283 * tokenPercent) / 100;

  return (
    <section id="stats" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header} className="scroll-reveal">
          <div className="font-mono" style={styles.category}>\\\\\\ PRODUCT STATISTICS</div>
          <h2 style={styles.title}>Optimized for performance</h2>
          <p style={styles.subtitle}>
            Monitor every neural pulse in real-time. Armory provides deep telemetry into agent accuracy, server latency, and token efficiency.
          </p>
        </div>

        {/* Telemetry Widgets Grid */}
        <div className="grid-3 scroll-reveal" style={styles.grid}>
          {/* Card 1: System Load */}
          <div className="card-premium" style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardIcon}>
                <img src="/assets/svgs/cog-8-tooth.svg" alt="System" style={{width: '24px', height: '24px', display: 'block', filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'}} />
              </span>
              <div>
                <h3 style={styles.cardTitle}>System Load</h3>
                <p style={styles.cardDesc}>Active neural processing</p>
              </div>
            </div>

            {/* Gauge */}
            <div className="gauge-container" style={styles.gaugeContainer}>
              <svg className="gauge-svg">
                <defs>
                  <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-forsythia)" />
                    <stop offset="100%" stopColor="var(--color-deep-saffron)" />
                  </linearGradient>
                </defs>
                <circle className="gauge-bg" cx="80" cy="80" r="60" />
                <circle 
                  className="gauge-fill" 
                  cx="80" 
                  cy="80" 
                  r="60" 
                  style={{ strokeDashoffset: systemLoadOffset, stroke: 'url(#gauge-grad)' }}
                />
              </svg>
              <div className="gauge-center-text">
                <div style={styles.gaugeNum}>{coreSystems}</div>
                <div style={styles.gaugeSubText}>Core Systems</div>
              </div>
            </div>

            {/* Stats row */}
            <div style={styles.statsRow}>
              <div style={styles.statCol}>
                <span style={styles.statVal}>99%</span>
                <span style={styles.statLbl}>CACHE</span>
              </div>
              <div style={styles.statCol}>
                <span style={styles.statVal}>6M</span>
                <span style={styles.statLbl}>UPTIME</span>
              </div>
            </div>
          </div>

          {/* Card 2: SLA Response */}
          <div className="card-premium" style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardIcon}>
                <img src="/assets/svgs/chart-pie.svg" alt="SLA" style={{width: '24px', height: '24px', display: 'block', filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'}} />
              </span>
              <div>
                <h3 style={styles.cardTitle}>SLA Response</h3>
                <p style={styles.cardDesc}>Global uptime monitoring</p>
              </div>
            </div>

            {/* Bar Chart Container */}
            <div style={styles.chartWrapper}>
              {/* Dynamic SLA tooltip dot */}
              <div 
                className="sla-bar-active-dot"
                style={{
                  left: `${(activeSlaIdx * 14.2) + 7.1}%`,
                  bottom: `${slaData[activeSlaIdx].value * 1.4}px`,
                }}
              />
              <div 
                style={{
                  ...styles.slaTooltip,
                  left: `${(activeSlaIdx * 14.2) + 7.1}%`,
                  bottom: `${(slaData[activeSlaIdx].value * 1.4) + 16}px`,
                }}
              >
                SLA {slaData[activeSlaIdx].percent}
              </div>

              <div className="sla-bar-container" style={styles.slaBarContainer}>
                {slaData.map((data, idx) => (
                  <div 
                    key={idx} 
                    className="sla-bar-wrapper" 
                    onMouseEnter={() => setActiveSlaIdx(idx)}
                    style={styles.slaBarWrapper}
                  >
                    <div 
                      className={`sla-bar ${idx === activeSlaIdx ? 'active' : ''}`}
                      style={{ height: `${data.value}%`, width: '16px' }}
                    />
                    <span style={styles.barLabel}>{data.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={styles.statsRow}>
              <div style={styles.statCol}>
                <span style={styles.statVal}>98.7%</span>
                <span style={styles.statLbl}>AVERAGE</span>
              </div>
              <div style={styles.statCol}>
                <span style={styles.statVal}>99.99%</span>
                <span style={styles.statLbl}>SLA GOAL</span>
              </div>
            </div>
          </div>

          {/* Card 3: Token Usage */}
          <div className="card-premium" style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardIcon}>
                <img src="/assets/svgs/cube-16-solid.svg" alt="Token" style={{width: '24px', height: '24px', display: 'block', filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'}} />
              </span>
              <div>
                <h3 style={styles.cardTitle}>Token Usage</h3>
                <p style={styles.cardDesc}>Monthly volume throughput</p>
              </div>
            </div>

            {/* Semi-circular dial */}
            <div className="semi-dial-container" style={styles.semiDialContainer}>
              <svg className="semi-dial-svg">
                <defs>
                  <linearGradient id="dial-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-mystic-mint)" />
                    <stop offset="100%" stopColor="var(--color-nocturnal-expedition)" />
                  </linearGradient>
                </defs>
                <circle 
                  className="semi-dial-bg" 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  strokeDasharray="283 283" 
                  strokeDashoffset="0"
                />
                <circle 
                  className="semi-dial-fill" 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  style={{ strokeDashoffset: tokenOffset, stroke: 'url(#dial-grad)' }}
                />
              </svg>
              <div className="semi-dial-center-text">
                <div style={styles.gaugeNum}>{tokenVal}M</div>
                <div style={styles.gaugeSubText}>Tokens / mo</div>
              </div>
            </div>

            {/* Stats row */}
            <div style={styles.statsRow}>
              <div style={styles.statCol}>
                <span style={styles.statVal}>152</span>
                <span style={styles.statLbl}>TOTAL QUERIES</span>
              </div>
              <div style={styles.statCol}>
                <span style={styles.statVal}>115</span>
                <span style={styles.statLbl}>ACTIVE NODES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Vector Wide Widget */}
        <div className="card-premium" style={styles.growthCard}>
          <div style={styles.growthHeader}>
            <div>
              <div style={styles.cardHeader}>
                <span style={styles.cardIcon}>
                  <img src="/assets/svgs/arrow-trending-up.svg" alt="Growth" style={{width: '24px', height: '24px', display: 'block', filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'}} />
                </span>
                <div>
                  <h3 style={styles.cardTitle}>Growth Vector</h3>
                  <p style={styles.cardDesc}>Efficiency gains over 30 days</p>
                </div>
              </div>
            </div>
            <div style={styles.growthRates}>
              <div style={styles.growthRateCol}>
                <span style={{...styles.statVal, color: 'var(--color-forsythia)', fontSize: '28px'}}>82%</span>
                <span style={styles.statLbl}>NET GROWTH</span>
              </div>
              <div style={styles.growthRateCol}>
                <span style={{...styles.statVal, fontSize: '28px'}}>99.98%</span>
                <span style={styles.statLbl}>RELIABILITY RATE</span>
              </div>
            </div>
          </div>

          {/* Smooth line graph SVG */}
          <div className="growth-svg-container" style={styles.growthSvgContainer}>
            <svg viewBox="0 0 1000 120" style={{ width: '100%', height: '100%' }}>
              {/* Grid guide lines */}
              <line x1="0" y1="20" x2="1000" y2="20" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="1" />
              <line x1="0" y1="60" x2="1000" y2="60" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="1" />
              <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="1" />

              {/* Shaded Area underneath the path */}
              <path 
                d="M 0 120 L 0 100 Q 150 90 250 110 T 500 60 T 750 40 T 1000 20 L 1000 120 Z" 
                fill="url(#growth-gradient)" 
                opacity="0.1" 
              />
              
              {/* Line path */}
              <path 
                className="growth-path"
                d="M 0 100 Q 150 90 250 110 T 500 60 T 750 40 T 1000 20" 
                fill="none" 
                stroke="var(--color-forsythia)" 
                strokeWidth="3" 
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-forsythia)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div style={styles.growthFooter}>
            <p style={styles.growthFooterText}>Optimizing neural weights for output.</p>
            <a href="#pricing" style={styles.demoBtn}>Request Demo</a>
          </div>
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
    maxWidth: '800px',
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
    marginBottom: '40px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '360px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textAlign: 'left',
  },
  cardIcon: {
    fontSize: '24px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
    marginBottom: '4px',
  },
  cardDesc: {
    fontSize: '13px',
    color: 'var(--text-muted)',
  },
  gaugeContainer: {
    margin: '24px auto',
  },
  gaugeNum: {
    fontFamily: 'var(--font-mono)',
    fontSize: '28px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
    lineHeight: '1.1',
  },
  gaugeSubText: {
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    marginTop: '4px',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '1px solid rgba(241, 246, 244, 0.06)',
    paddingTop: '20px',
    marginTop: '16px',
  },
  statCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statVal: {
    fontFamily: 'var(--font-mono)',
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
  },
  statLbl: {
    fontSize: '9px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
    marginTop: '2px',
  },
  chartWrapper: {
    position: 'relative',
    height: '160px',
    margin: '24px 0 12px 0',
  },
  slaTooltip: {
    position: 'absolute',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(23, 43, 54, 0.95)',
    border: '1px solid var(--color-deep-saffron)',
    color: 'var(--color-deep-saffron)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 11,
    transition: 'left 0.2s cubic-bezier(0.16, 1, 0.3, 1), bottom 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  slaBarContainer: {
    height: '100%',
  },
  slaBarWrapper: {
    cursor: 'pointer',
  },
  barLabel: {
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    marginTop: '8px',
  },
  semiDialContainer: {
    margin: '32px auto 8px auto',
  },
  growthCard: {
    width: '100%',
    padding: '40px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  growthHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
  },
  growthRates: {
    display: 'flex',
    gap: '40px',
  },
  growthRateCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  growthSvgContainer: {
    margin: '12px 0',
  },
  growthFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(241, 246, 244, 0.06)',
    paddingTop: '24px',
    flexWrap: 'wrap',
    gap: '16px',
  },
  growthFooterText: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    fontStyle: 'italic',
  },
  demoBtn: {
    backgroundColor: 'transparent',
    color: 'var(--color-arctic-powder)',
    border: '1px solid rgba(241, 246, 244, 0.2)',
    padding: '10px 24px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '13px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }
};

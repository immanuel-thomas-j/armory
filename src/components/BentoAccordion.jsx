import React, { useState, useEffect, useRef } from 'react';

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(1); // Default is 1 (ANALYSIS)
  const [isMobile, setIsMobile] = useState(false);
  const accordionRefs = useRef([]);

  const tabs = [
    {
      id: 'discovery',
      label: 'DISCOVERY',
      icon: (
        <img 
          src="/assets/svgs/search.svg" 
          alt="Discovery" 
          style={{
            width: '14px', 
            height: '14px', 
            display: 'inline-block', 
            verticalAlign: 'middle',
            filter: 'invert(1)'
          }} 
        />
      ),
      title: 'Automatic resource discovery',
      desc: 'Discover and scan data endpoints, schemas, and API documentation automatically to catalog your enterprise resources.',
      badge: 'CRAWLER ACTIVE',
      visual: (
        <div style={styles.mockCrawler}>
          <div style={styles.crawlerHeader}>
            <span style={styles.dot}></span>
            <span style={styles.dot}></span>
            <span style={styles.dot}></span>
            <div style={styles.crawlerTitle}>crawler_log.txt</div>
          </div>
          <div style={styles.crawlerContent}>
            <div style={styles.codeLine}><span style={{color: 'var(--color-forsythia)'}}>[SCANNING]</span> database_schema_v2.sql</div>
            <div style={styles.codeLine}><span style={{color: 'var(--color-deep-saffron)'}}>[FOUND]</span> 14 endpoints indexed</div>
            <div style={styles.codeLine}><span style={{color: 'var(--color-mystic-mint)'}}>[OK]</span> data_catalog_sync complete (200ms)</div>
          </div>
        </div>
      )
    },
    {
      id: 'analysis',
      label: 'ANALYSIS',
      icon: (
        <img 
          src="/assets/svgs/chart-pie.svg" 
          alt="Analysis" 
          style={{
            width: '14px', 
            height: '14px', 
            display: 'inline-block', 
            verticalAlign: 'middle',
            filter: 'invert(1)'
          }} 
        />
      ),
      title: 'Evaluate agent performance with surgical precision.',
      desc: 'Get real-time scoring on accuracy, safety, and contextual relevance.',
      subdesc: 'Quantify every interaction for total quality.',
      btnLabel: 'SCORE METRICS',
      visual: (
        <div style={styles.scoreCard}>
          <div style={styles.searchBar}>
            <div style={styles.searchDot}></div>
            <div style={styles.searchLine}></div>
            <div style={styles.searchCircle}></div>
          </div>
          <div style={styles.scoreHeader}>
            <div style={styles.scoreTitle}>Your score</div>
            <div style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i} 
                  src="/assets/svgs/cube-16-solid.svg" 
                  alt="Star" 
                  style={{
                    width: '12px', 
                    height: '12px', 
                    display: 'inline-block', 
                    marginRight: '4px',
                    filter: 'invert(82%) sepia(61%) saturate(2461%) hue-rotate(359deg) brightness(102%) contrast(105%)'
                  }} 
                />
              ))}
            </div>
          </div>
          <div style={styles.scoreGrid}>
            <div style={styles.scoreGridBox}>
              <div style={styles.boxVal}>9/10</div>
              <div style={styles.boxLbl}>Accuracy</div>
            </div>
            <div style={styles.scoreGridBox}>
              <div style={styles.boxVal}>8/10</div>
              <div style={styles.boxLbl}>Context</div>
            </div>
            <div style={{...styles.scoreGridBox, backgroundColor: 'var(--color-arctic-powder)', color: 'var(--color-oceanic-noir)'}}>
              <div style={styles.boxVal}>100%</div>
              <div style={styles.boxLbl}>Safety</div>
            </div>
            <div style={styles.scoreGridBox}>
              <div style={styles.boxVal}>8.5</div>
              <div style={styles.boxLbl}>Latency</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'training',
      label: 'TRAINING',
      icon: (
        <img 
          src="/assets/svgs/arrow-trending-up.svg" 
          alt="Training" 
          style={{
            width: '14px', 
            height: '14px', 
            display: 'inline-block', 
            verticalAlign: 'middle',
            filter: 'invert(1)'
          }} 
        />
      ),
      title: 'Continuous training adapters',
      desc: 'Train custom models and adapters on validated agent interaction datasets to continuously improve accuracy.',
      badge: 'FINE-TUNING ENGINE',
      visual: (
        <div style={styles.matrixContainer}>
          <div style={styles.matrixRow}>
            <div style={styles.matrixItemActive}>W_01</div>
            <div style={styles.matrixItem}>W_02</div>
            <div style={styles.matrixItem}>W_03</div>
          </div>
          <div style={styles.matrixRow}>
            <div style={styles.matrixItem}>W_04</div>
            <div style={styles.matrixItemActive}>W_05</div>
            <div style={styles.matrixItem}>W_06</div>
          </div>
          <div style={styles.matrixRow}>
            <div style={styles.matrixItem}>W_07</div>
            <div style={styles.matrixItem}>W_08</div>
            <div style={styles.matrixItemActive}>W_09</div>
          </div>
        </div>
      )
    },
    {
      id: 'deploy',
      label: 'DEPLOY',
      icon: (
        <img 
          src="/assets/svgs/link-solid.svg" 
          alt="Deploy" 
          style={{
            width: '14px', 
            height: '14px', 
            display: 'inline-block', 
            verticalAlign: 'middle',
            filter: 'invert(1)'
          }} 
        />
      ),
      title: 'One-click cluster deployment',
      desc: 'Package and deploy your agent containers to scalable edge environments or integrate directly into messaging clients.',
      badge: 'KUBERNETES DEPLOY',
      visual: (
        <div style={styles.mockTerminal}>
          <div style={styles.terminalHeader}>
            <div style={styles.terminalDot}></div>
            <div style={styles.terminalText}>bash - deploy_agent.sh</div>
          </div>
          <div style={styles.terminalContent}>
            <div>$ helm upgrade --install armory-agent ./chart</div>
            <div style={{color: 'var(--color-mystic-mint)'}}>Deploying container image v1.0.4...</div>
            <div>[PODS] agent-7f89b (Running)</div>
            <div style={{color: 'var(--color-forsythia)'}}>Ingress mapped: https://agent.armory.ai</div>
          </div>
        </div>
      )
    }
  ];

  // Context Lock check on resize
  useEffect(() => {
    const checkViewport = () => {
      const isMobileViewport = window.innerWidth < 768;
      setIsMobile(isMobileViewport);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  return (
    <section id="features" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header} className="scroll-reveal">
          <div className="font-mono" style={styles.category}>\\\\\\ PRODUCT FEATURES</div>
          <h2 style={styles.title}>Engineered for autonomy</h2>
          <p style={styles.subtitle}>
            Go beyond simple chat interfaces. Armory provides the underlying architecture to build, test, and scale enterprise-grade agents.
          </p>
        </div>

        {/* Desktop Bento Tabs View */}
        {!isMobile && (
          <div className="scroll-reveal">
            <div className="bento-tabs-header">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  className={`bento-tab-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span style={styles.tabIcon}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Bento Panel with 350ms Transition */}
            <div className="bento-content-box">
              <div className="bento-visual-panel" style={styles.visualPanel}>
                {tabs[activeIndex].visual}
              </div>
              <div className="bento-text-panel" style={styles.textPanel}>
                {tabs[activeIndex].badge && (
                  <div className="font-mono" style={styles.panelBadge}>
                    // {tabs[activeIndex].badge}
                  </div>
                )}
                <h3 style={styles.panelTitle}>{tabs[activeIndex].title}</h3>
                <p style={styles.panelDesc}>{tabs[activeIndex].desc}</p>
                {tabs[activeIndex].subdesc && (
                  <p style={styles.panelSubdesc}>{tabs[activeIndex].subdesc}</p>
                )}
                {tabs[activeIndex].btnLabel && (
                  <button style={styles.panelBtn}>{tabs[activeIndex].btnLabel}</button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Accordion View with Context Lock State Persistence */}
        {isMobile && (
          <div className="accordion-wrapper">
            {tabs.map((tab, idx) => (
              <div 
                key={tab.id}
                className={`accordion-item ${activeIndex === idx ? 'active' : ''}`}
                ref={el => accordionRefs.current[idx] = el}
              >
                <div 
                  className="accordion-header"
                  onClick={() => setActiveIndex(idx)}
                >
                  <div style={styles.accHeaderTitle}>
                    <span style={styles.tabIcon}>{tab.icon}</span>
                    {tab.label}
                  </div>
                  <span className="accordion-icon" style={styles.accordionIcon}>
                    ▼
                  </span>
                </div>
                
                {/* Expandable Content Container */}
                <div 
                  className="accordion-content"
                  style={{
                    maxHeight: activeIndex === idx ? '800px' : '0',
                    opacity: activeIndex === idx ? 1 : 0
                  }}
                >
                  <div className="accordion-content-inner" style={styles.accInner}>
                    {/* Visual Panel Mock */}
                    <div style={styles.accVisualBox}>
                      {tab.visual}
                    </div>
                    {/* Text Details */}
                    <div style={styles.accTextDetails}>
                      <h4 style={styles.accTitle}>{tab.title}</h4>
                      <p style={styles.accDesc}>{tab.desc}</p>
                      {tab.btnLabel && (
                        <button style={{...styles.panelBtn, width: '100%', marginTop: '16px'}}>
                          {tab.btnLabel}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
  tabIcon: {
    marginRight: '8px',
  },
  visualPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  panelBadge: {
    fontSize: '11px',
    color: 'var(--color-forsythia)',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  panelTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
    marginBottom: '20px',
    lineHeight: '1.3',
  },
  panelDesc: {
    fontSize: '15px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  panelSubdesc: {
    fontSize: '13px',
    color: 'rgba(241, 246, 244, 0.4)',
    fontStyle: 'italic',
    marginBottom: '24px',
  },
  panelBtn: {
    backgroundColor: 'var(--color-arctic-powder)',
    color: 'var(--color-oceanic-noir)',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    alignSelf: 'flex-start',
    transition: 'opacity 0.2s ease',
  },
  
  // Custom Visual Mocks for Bento tabs
  mockCrawler: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: 'var(--bg-dark)',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  crawlerHeader: {
    backgroundColor: 'rgba(241, 246, 244, 0.03)',
    borderBottom: '1px solid rgba(241, 246, 244, 0.08)',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(241, 246, 244, 0.2)',
  },
  crawlerTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text-muted)',
    marginLeft: '12px',
  },
  crawlerContent: {
    padding: '20px 24px',
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'left',
  },
  codeLine: {
    lineHeight: '1.5',
  },

  scoreCard: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.12)',
    borderRadius: '6px',
    padding: '24px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  searchBar: {
    backgroundColor: 'var(--bg-dark)',
    border: '1px solid rgba(241, 246, 244, 0.06)',
    borderRadius: '4px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  searchDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-forsythia)',
  },
  searchLine: {
    flexGrow: 1,
    height: '2px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
  },
  searchCircle: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '1.5px solid var(--text-muted)',
  },
  scoreHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  scoreTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
  },
  stars: {
    color: 'var(--color-forsythia)',
    fontSize: '14px',
    letterSpacing: '2px',
  },
  scoreGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  scoreGridBox: {
    backgroundColor: 'rgba(23, 43, 54, 0.4)',
    border: '1px solid rgba(241, 246, 244, 0.06)',
    padding: '16px',
    borderRadius: '4px',
    textAlign: 'center',
  },
  boxVal: {
    fontFamily: 'var(--font-mono)',
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  boxLbl: {
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    color: 'inherit',
    opacity: 0.6,
  },

  matrixContainer: {
    width: '100%',
    maxWidth: '240px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  matrixRow: {
    display: 'flex',
    gap: '12px',
  },
  matrixItem: {
    flex: '1',
    aspectRatio: '1',
    backgroundColor: 'rgba(17, 76, 90, 0.3)',
    border: '1px solid rgba(241, 246, 244, 0.06)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text-muted)',
  },
  matrixItemActive: {
    flex: '1',
    aspectRatio: '1',
    backgroundColor: 'var(--color-nocturnal-expedition)',
    border: '1px solid var(--color-forsythia)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: '700',
    color: 'var(--color-forsythia)',
    boxShadow: '0 0 15px rgba(255, 200, 1, 0.1)',
  },

  mockTerminal: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: 'var(--bg-dark)',
    borderRadius: '6px',
    overflow: 'hidden',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  terminalHeader: {
    backgroundColor: 'rgba(241, 246, 244, 0.03)',
    borderBottom: '1px solid rgba(241, 246, 244, 0.08)',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  terminalDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-deep-saffron)',
  },
  terminalText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text-muted)',
  },
  terminalContent: {
    padding: '16px 20px',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  // Mobile Accordion items styles
  accHeaderTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  accordionIcon: {
    fontSize: '12px',
  },
  accInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  accVisualBox: {
    padding: '24px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    border: '1px solid rgba(241, 246, 244, 0.05)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accTextDetails: {
    textAlign: 'left',
  },
  accTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
    marginBottom: '12px',
  },
  accDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  }
};

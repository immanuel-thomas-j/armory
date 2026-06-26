import React, { useState } from 'react';

export default function NeuralEngines() {
  const [activeEngineId, setActiveEngineId] = useState('gpt4');

  const engines = [
    {
      id: 'gpt4',
      name: 'GPT-4o',
      tagline: 'Deep Reasoning & Logic',
      color: 'var(--color-forsythia)',
      accentBg: 'rgba(255, 200, 1, 0.08)',
      accentBorder: 'rgba(255, 200, 1, 0.2)',
      inputNode: 'SQL Schema',
      outputNode: 'Reasoning Agent',
      logs: [
        'INITIALIZING CONNECTION TO GPT-4O CORE...',
        'SCHEMA BOUND: pgsql://prod-db.armory.internal:5432/main',
        'INJECTING AGENT WORKFLOW & DIRECTIVES...',
        'STATUS: Connection Live. Latency: 142ms. Hit Rate: 94%'
      ]
    },
    {
      id: 'claude3',
      name: 'Claude 3.5',
      tagline: 'Analytical Coding & Structured Data',
      color: 'var(--color-deep-saffron)',
      accentBg: 'rgba(255, 153, 50, 0.08)',
      accentBorder: 'rgba(255, 153, 50, 0.2)',
      inputNode: 'PDF Forms',
      outputNode: 'Structured Extraction',
      logs: [
        'INITIALIZING CONNECTION TO CLAUDE 3.5 SONNET...',
        'INPUT: file://shares/legal/compliance_q3.pdf',
        'COMPILATION: Extracting tabular clusters...',
        'STATUS: Connection Live. Latency: 220ms. Extraction: 100%'
      ]
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      tagline: 'Real-time Search & Synthesis',
      color: 'var(--color-mystic-mint)',
      accentBg: 'rgba(217, 232, 226, 0.08)',
      accentBorder: 'rgba(217, 232, 226, 0.2)',
      inputNode: 'API Stream',
      outputNode: 'Web Cited Reports',
      logs: [
        'INITIALIZING CONNECTION TO PERPLEXITY SONAR...',
        'QUERY: "armory ai competitor model pricing"',
        'SOURCES: Spawning web scraper workers (14 concurrent)...',
        'STATUS: Connection Live. Latency: 490ms. Sources Cited: 8'
      ]
    }
  ];

  const activeEngine = engines.find(e => e.id === activeEngineId) || engines[0];

  const features = [
    {
      title: 'Enterprise Encryption',
      desc: 'All training runs and agent workflows are shielded by end-to-end data encryption and strict network isolation.',
      icon: '/assets/svgs/arrow-path.svg'
    },
    {
      title: 'Low-Latency Cache',
      desc: 'Our neural caching layer reduces LLM response latency by up to 80% while dramatically lowering API token cost.',
      icon: '/assets/svgs/arrow-trending-up.svg'
    },
    {
      title: 'Vector Databases',
      desc: 'Connect seamlessly to Pinecone, pgvector, or Milvus to store and retrieve contextual embeddings in microseconds.',
      icon: '/assets/svgs/chart-pie.svg'
    },
    {
      title: 'Custom Fine-Tuning',
      desc: 'Bespoke adapter weights fine-tuned on your organization schema, processes, and historical automation runs.',
      icon: '/assets/svgs/cog-8-tooth.svg'
    }
  ];

  return (
    <section id="engines" style={styles.section}>
      <div className="container">
        {/* Intro */}
        <div style={styles.header} className="animate-fade-in-up">
          <div style={styles.engineCapsule}>
            <div style={styles.engineCircle}><img src="/assets/svgs/search.svg" alt="Search" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/cube-16-solid.svg" alt="Cube" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/link-solid.svg" alt="Link" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/cog-8-tooth.svg" alt="Cog" style={styles.capsuleIcon} /></div>
          </div>

          <h2 style={styles.title}>
            Connect to the world's <br />
            most powerful <span className="text-gradient-gold">neural engines</span>
          </h2>
          <p style={styles.desc}>
            Bridge your private databases and custom schemas with GPT-4, Claude 3, and Perplexity without writing pipeline boilerplate.
          </p>
        </div>

        {/* Dashboard widget */}
        <div className="engine-dashboard-container animate-fade-in-up delay-1">
          {/* Left Panel: Selector */}
          <div className="engine-selector-panel">
            <h4 style={styles.panelHeading}>Select active engine</h4>
            <div className="engine-buttons-list">
              {engines.map((eng) => {
                const isActive = eng.id === activeEngineId;
                return (
                  <button
                    key={eng.id}
                    onClick={() => setActiveEngineId(eng.id)}
                    className={`engine-selector-btn ${isActive ? 'active' : ''}`}
                    style={{
                      borderColor: isActive ? eng.color : 'rgba(241, 246, 244, 0.08)',
                      '--accent-color': eng.color
                    }}
                  >
                    <div className="engine-btn-meta">
                      <span className="engine-btn-dot" style={{ backgroundColor: eng.color, color: eng.color }}></span>
                      <span className="engine-btn-name">{eng.name}</span>
                    </div>
                    <span className="engine-btn-tagline">{eng.tagline}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Visualization & Terminal logs */}
          <div className="engine-visual-panel">
            {/* Visual Pipeline */}
            <div className="pipeline-nodes-container" style={{ '--accent-color': activeEngine.color }}>
              {/* Left Node: Source */}
              <div className="pipeline-node">
                <div className="node-icon-box">
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Source Node" className="node-icon" />
                </div>
                <span className="node-label">Data Source</span>
                <span className="node-sublabel">{activeEngine.inputNode}</span>
              </div>

              {/* Connector Path 1 */}
              <div className="pipeline-connection">
                <div 
                  className="pipeline-line" 
                  style={{
                    background: `linear-gradient(90deg, rgba(241,246,244,0.1) 0%, ${activeEngine.color} 50%, rgba(241,246,244,0.1) 100%)`
                  }}
                >
                  <div 
                    className="pipeline-particle" 
                    style={{
                      boxShadow: `0 0 12px 2px ${activeEngine.color}`,
                      backgroundColor: activeEngine.color
                    }}
                  ></div>
                </div>
              </div>

              {/* Middle Core Node */}
              <div className="pipeline-node core-node" style={{ borderColor: activeEngine.color }}>
                <div 
                  className="node-icon-box core-icon-box"
                  style={{ 
                    backgroundColor: activeEngine.accentBg,
                    boxShadow: `0 0 20px 0 ${activeEngine.accentBorder}`
                  }}
                >
                  <img src="/assets/svgs/cog-8-tooth.svg" alt="Core Model Node" className="node-icon pulsing" />
                </div>
                <span className="node-label font-mono" style={{ color: activeEngine.color }}>{activeEngine.name}</span>
                <span className="node-sublabel">Core Engine</span>
              </div>

              {/* Connector Path 2 */}
              <div className="pipeline-connection">
                <div 
                  className="pipeline-line"
                  style={{
                    background: `linear-gradient(90deg, rgba(241,246,244,0.1) 0%, ${activeEngine.color} 50%, rgba(241,246,244,0.1) 100%)`
                  }}
                >
                  <div 
                    className="pipeline-particle delayed" 
                    style={{
                      boxShadow: `0 0 12px 2px ${activeEngine.color}`,
                      backgroundColor: activeEngine.color
                    }}
                  ></div>
                </div>
              </div>

              {/* Right Node: Output */}
              <div className="pipeline-node">
                <div className="node-icon-box">
                  <img src="/assets/svgs/link-solid.svg" alt="Output Node" className="node-icon" />
                </div>
                <span className="node-label">Agent Output</span>
                <span className="node-sublabel">{activeEngine.outputNode}</span>
              </div>
            </div>

            {/* Live Terminal Log */}
            <div className="terminal-console">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="term-dot-red"></span>
                  <span className="term-dot-yellow"></span>
                  <span className="term-dot-green"></span>
                </div>
                <span className="terminal-title">neural_engine_telemetry.log</span>
              </div>
              <div className="terminal-body font-mono">
                {activeEngine.logs.map((logLine, index) => (
                  <div key={index} className="terminal-line" style={{ animationDelay: `${index * 120}ms` }}>
                    <span className="term-prompt">&gt;</span> {logLine}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid-4" style={styles.grid}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`card-premium animate-fade-in-up delay-${idx + 2}`} 
              style={styles.card}
            >
              <div style={styles.iconCircle}>
                <img src={feature.icon} alt={feature.title} style={styles.icon} />
              </div>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDesc}>{feature.desc}</p>
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
    maxWidth: '880px',
    margin: '0 auto 60px auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  engineCapsule: {
    display: 'inline-flex',
    backgroundColor: 'rgba(23, 43, 54, 0.4)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    borderRadius: '100px',
    padding: '6px 10px',
    gap: '8px',
    marginBottom: '32px',
  },
  engineCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capsuleIcon: {
    width: '14px',
    height: '14px',
    filter: 'invert(1)',
  },
  title: {
    fontSize: '44px',
    lineHeight: '1.2',
    color: 'var(--color-arctic-powder)',
    marginBottom: '24px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  desc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
    maxWidth: '600px',
  },
  panelHeading: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    marginBottom: '8px',
  },
  grid: {
    marginTop: '40px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    border: '1px solid rgba(241, 246, 244, 0.1)',
  },
  icon: {
    width: '20px',
    height: '20px',
    filter: 'invert(98%) sepia(4%) saturate(366%) hue-rotate(99deg) brightness(107%) contrast(93%)', // Matches white
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  }
};


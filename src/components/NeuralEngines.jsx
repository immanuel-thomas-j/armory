import React from 'react';

export default function NeuralEngines() {
  const engines = [
    { 
      name: 'GPT-4', 
      logo: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="9"></line>
          <line x1="9" y1="13" x2="15" y2="13"></line>
          <line x1="9" y1="17" x2="15" y2="17"></line>
        </svg>
      )
    },
    { 
      name: 'Claude 3', 
      logo: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    { 
      name: 'Perplexity', 
      logo: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    { 
      name: 'Gemini 1.5', 
      logo: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  const features = [
    {
      title: 'Enterprise Encryption',
      desc: 'All training runs and agent workflows are shielded by end-to-end data encryption and strict network isolation.',
      icon: '/assets/svgs/arrow-path.svg' // We use provided SVGs
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
        <div style={styles.header}>
          <div className="font-mono" style={styles.category}>\\\\\\ INTEGRATIONS</div>
          <h2 style={styles.title}>Integrate with the world's most powerful neural engines.</h2>
          <p style={styles.subtitle}>
            Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. 
            Build agents that <span style={{ color: 'var(--color-forsythia)', fontWeight: 600 }}>don't just process, they understand</span>.
          </p>
          <p style={styles.desc}>
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
          </p>
        </div>

        {/* Engine Badges */}
        <div style={styles.badgeRow}>
          {engines.map((engine, idx) => (
            <div key={idx} style={styles.engineBadge}>
              <span style={styles.engineLogo}>{engine.logo}</span>
              <span style={styles.engineName}>{engine.name}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid-4" style={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className="card-premium" style={styles.card}>
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
    color: 'rgba(241, 246, 244, 0.9)',
    marginBottom: '20px',
  },
  desc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
  },
  badgeRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
    marginBottom: '80px',
  },
  engineBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 24px',
    background: 'rgba(23, 43, 54, 0.5)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    borderRadius: '100px',
  },
  engineLogo: {
    fontSize: '14px',
  },
  engineName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--color-arctic-powder)',
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

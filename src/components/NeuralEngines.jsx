import React from 'react';

export default function NeuralEngines() {

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
          {/* Circular badges capsule badge */}
          <div style={styles.engineCapsule}>
            <div style={styles.engineCircle}><img src="/assets/svgs/search.svg" alt="Search" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/cube-16-solid.svg" alt="Cube" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/link-solid.svg" alt="Link" style={styles.capsuleIcon} /></div>
            <div style={styles.engineCircle}><img src="/assets/svgs/cog-8-tooth.svg" alt="Cog" style={styles.capsuleIcon} /></div>
          </div>

          <h2 style={styles.title}>
            Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that <span style={{ color: 'var(--text-muted)', fontWeight: 'inherit' }}>don't just process, they</span> understand.
          </h2>
          <p style={styles.desc}>
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
          </p>
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
    maxWidth: '600px',
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

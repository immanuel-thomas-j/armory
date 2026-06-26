import React from 'react';

export default function Integrations() {
  const tools = [
    { 
      name: 'Anthropic Claude', 
      logo: '/assets/svgs/cube-16-solid.svg', 
      desc: 'State-of-the-art reasoning' 
    },
    { 
      name: 'AWS Cloud', 
      logo: '/assets/svgs/cog-8-tooth.svg', 
      desc: 'Secure cloud hosting infrastructure' 
    },
    { 
      name: 'Microsoft Office', 
      logo: '/assets/svgs/link.svg', 
      desc: 'Enterprise document sync' 
    },
    { 
      name: 'Bolt Finance', 
      logo: '/assets/svgs/arrow-trending-up.svg', 
      desc: 'Automated billing accounting' 
    },
    { 
      name: 'Slack Messaging', 
      logo: '/assets/svgs/link-solid.svg', 
      desc: 'Real-time conversational interface' 
    },
    { 
      name: 'Framer Canvas', 
      logo: '/assets/svgs/cube-16-solid.svg', 
      desc: 'Interactive visual design tools' 
    },
    { 
      name: 'Kubernetes Nodes', 
      logo: '/assets/svgs/cube-16-solid.svg', 
      desc: 'Automated container scaling' 
    },
    { 
      name: 'Linear Tracker', 
      logo: '/assets/svgs/arrow-path.svg', 
      desc: 'Engineered project coordination' 
    },
    { 
      name: 'GitHub Repos', 
      logo: '/assets/svgs/link-solid.svg', 
      desc: 'Version controlled deployments' 
    },
    { 
      name: 'Vercel Edge', 
      logo: '/assets/svgs/arrow-trending-up.svg', 
      desc: 'Global serverless edge nodes' 
    },
    { 
      name: 'OpenAI GPT-4', 
      logo: '/assets/svgs/cog-8-tooth.svg', 
      desc: 'Advanced natural language agent' 
    },
    { 
      name: 'Pinecone Vector', 
      logo: '/assets/svgs/chart-pie.svg', 
      desc: 'Long-term retrieval indexing' 
    }
  ];

  return (
    <section id="integrations" style={styles.section}>
      <div className="container">
        {/* Intro */}
        <div style={styles.header} className="scroll-reveal">
          <div className="font-mono" style={styles.category}>\\\\\\ INTEGRATIONS</div>
          <h2 style={styles.title}>
            Armory bridges the gap between your data and your tools.
          </h2>
          <p style={styles.subtitle}>
            Deploy agents that live where you work, from Slack to GitHub and beyond. Connect core apps in seconds.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid-4 scroll-reveal" style={styles.grid}>
          {tools.map((tool, idx) => (
            <div key={idx} className="card-premium" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconBox}>
                  <img src={tool.logo} alt={tool.name} style={{width: '18px', height: '18px', filter: 'invert(1)'}} />
                </div>
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

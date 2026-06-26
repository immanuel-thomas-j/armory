import React from 'react';

export default function CaseStudies() {
  const projects = [
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-nocturnal-expedition)">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"/>
          </svg>
          <span style={{ textTransform: 'lowercase' }}>cigna</span>
        </span>
      ),
      year: '//2026',
      title: 'Cigna Smart Health Systems',
      desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
      bgStyle: { backgroundColor: 'var(--color-arctic-powder)' }
    },
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span style={{ textTransform: 'lowercase' }}>aetna</span>
        </span>
      ),
      year: '//2026',
      title: 'Aetna Health Data Ecosystem',
      desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
      bgStyle: { 
        backgroundImage: 'linear-gradient(to right, var(--color-oceanic-noir), var(--color-nocturnal-expedition))', 
        color: 'var(--color-arctic-powder)',
        borderRadius: '4px'
      }
    },
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-deep-saffron)">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Anthem</span>
        </span>
      ),
      year: '//2026',
      title: 'Anthem Neural Care Network',
      desc: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent.",
      bgStyle: { backgroundColor: 'var(--color-arctic-powder)' }
    }
  ];

  return (
    <section id="solutions" style={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div style={styles.header}>
          <div className="badge badge-dark" style={styles.badge}>\\\\\\ CASE STUDIES</div>
          <h2 style={styles.title}>Proven neural solutions</h2>
          <p style={styles.subtitle}>
            We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
          </p>
        </div>

        {/* Projects Table List */}
        <div style={styles.table}>
          {projects.map((project, idx) => (
            <div key={idx} style={styles.row} className="case-study-row">
              {/* Logo Column */}
              <div style={styles.logoCol}>
                <div style={{...styles.logoWrapper, ...project.bgStyle}}>
                  {project.logo}
                </div>
              </div>

              {/* Year Column */}
              <div style={styles.yearCol}>
                <span style={styles.year}>{project.year}</span>
              </div>

              {/* Content Column */}
              <div style={styles.contentCol}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.desc}</p>
              </div>

              {/* Link Column */}
              <div style={styles.linkCol}>
                <div style={styles.arrowIcon}>
                  <img src="/assets/svgs/chevron-right.svg" alt="Details" style={styles.chevron} />
                  <img src="/assets/svgs/chevron-right.svg" alt="Details" style={{...styles.chevron, marginLeft: '-4px'}} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div style={styles.actionRow}>
          <button style={styles.moreBtn}>
            <img src="/assets/svgs/cog-8-tooth.svg" alt="More" style={styles.moreIcon} />
            More Projects
          </button>
        </div>
      </div>

      {/* Adding inline CSS for row hover effects since it's a light-themed section with custom styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .case-study-row {
          transition: background-color var(--transition-fast);
        }
        .case-study-row:hover {
          background-color: rgba(23, 43, 54, 0.03);
        }
      `}} />
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--bg-light)',
    color: 'var(--text-dark)',
    padding: '100px 0',
    borderBottom: '1px solid rgba(23, 43, 54, 0.05)',
  },
  header: {
    maxWidth: '800px',
    marginBottom: '60px',
  },
  badge: {
    color: 'var(--color-oceanic-noir)',
    borderColor: 'rgba(23, 43, 54, 0.2)',
  },
  title: {
    fontSize: '44px',
    fontWeight: '800',
    color: 'var(--color-oceanic-noir)',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'var(--text-muted-dark)',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid rgba(23, 43, 54, 0.1)',
    marginBottom: '48px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px 0',
    borderBottom: '1px solid rgba(23, 43, 54, 0.1)',
    flexWrap: 'wrap',
    gap: '24px',
  },
  logoCol: {
    flex: '0 0 240px',
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    width: '100%',
    padding: '24px',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '18px',
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: '1px solid rgba(23, 43, 54, 0.1)',
    color: 'var(--text-dark)',
  },
  yearCol: {
    flex: '0 0 80px',
  },
  year: {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--text-muted-dark)',
  },
  contentCol: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--color-oceanic-noir)',
  },
  projectDesc: {
    fontSize: '15px',
    color: 'var(--text-muted-dark)',
    lineHeight: '1.6',
  },
  linkCol: {
    flex: '0 0 60px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  arrowIcon: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
  chevron: {
    width: '18px',
    height: '18px',
    filter: 'invert(15%) sepia(23%) saturate(928%) hue-rotate(159deg) brightness(97%) contrast(92%)', // dark teal/blue
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  moreBtn: {
    backgroundColor: 'var(--color-oceanic-noir)',
    color: 'var(--color-arctic-powder)',
    border: '1px solid var(--color-oceanic-noir)',
    padding: '12px 24px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'opacity 0.2s ease',
  },
  moreIcon: {
    width: '16px',
    height: '16px',
    filter: 'invert(1)',
  }
};

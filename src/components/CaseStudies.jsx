import React from 'react';

export default function CaseStudies() {
  const projects = [
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img src="/assets/svgs/cog-8-tooth.svg" alt="cigna" style={{ width: '18px', height: '18px' }} />
          <span style={{ textTransform: 'lowercase' }}>cigna</span>
        </span>
      ),
      logoClass: 'cigna-logo',
      year: '//2026',
      title: 'Cigna Smart Health Systems',
      desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.'
    },
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img src="/assets/svgs/link-solid.svg" alt="aetna" style={{ width: '18px', height: '18px' }} />
          <span style={{ textTransform: 'lowercase' }}>aetna</span>
        </span>
      ),
      logoClass: 'aetna-logo',
      year: '//2026',
      title: 'Aetna Health Data Ecosystem',
      desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights."
    },
    {
      logo: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img src="/assets/svgs/cube-16-solid.svg" alt="Anthem" style={{ width: '18px', height: '18px' }} />
          <span>Anthem</span>
        </span>
      ),
      logoClass: 'anthem-logo',
      year: '//2026',
      title: 'Anthem Neural Care Network',
      desc: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent."
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
        <div className="case-study-table">
          {projects.map((project, idx) => (
            <div key={idx} className="case-study-row">
              {/* Logo Column */}
              <div className="case-study-logo-cell">
                <div className={`case-study-logo-wrapper ${project.logoClass}`}>
                  {project.logo}
                </div>
              </div>

              {/* Year Column */}
              <div className="case-study-cell" style={{ color: 'var(--text-muted-dark)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                <span>{project.year}</span>
              </div>

              {/* Content Column */}
              <div className="case-study-cell" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.desc}</p>
              </div>

              {/* Link Column */}
              <div className="case-study-cell case-study-chevron-cell">
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
          <button style={styles.moreBtn} className="btn-more-projects">
            <img src="/assets/svgs/cog-8-tooth.svg" alt="More" style={styles.moreIcon} />
            More Projects
          </button>
        </div>
      </div>
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

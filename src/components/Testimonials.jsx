import React from 'react';

export default function Testimonials() {
  const renderStars = () => (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-oceanic-noir)" stroke="none" style={{display: 'block'}}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  );

  const reviews = [
    {
      company: 'Vertex Labs',
      title: 'Infrastructure that finally scales',
      comment: "The reliability of Armory is unmatched. We've migrated our entire neural pipeline to their edge nodes with zero downtime for our users."
    },
    {
      company: 'FlowState AI',
      title: 'Saved us months of R&D',
      comment: 'Instead of building our own agent logic from scratch, we used Armory. We went from a prototype to a global production launch in weeks.'
    },
    {
      company: 'Neural Sync',
      title: 'Precision in every inference',
      comment: 'The observability tools allow us to monitor agent accuracy in real-time. It has become a vital part of our model evaluation workflow.'
    },
    {
      company: 'Sentinel Ops',
      title: 'Enterprise-grade by default',
      comment: 'The node-based builder is a game changer for our team. Even our non-technical stakeholders can now help map out complex agent behaviors.'
    }
  ];

  return (
    <section id="testimonials" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <div className="badge badge-dark" style={styles.badge}>\\\\\\ TESTIMONIALS</div>
          <h2 style={styles.title}>Trusted by the pioneers</h2>
          <p style={styles.subtitle}>
            From high-growth startups to enterprise research labs, Armory is the chosen infrastructure for teams building the next era of AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-4" style={styles.grid}>
          {reviews.map((review, idx) => (
            <div key={idx} style={styles.card} className="testimonial-card">
              {/* Vertical Label */}
              <div className="vertical-label">
                {review.company}
              </div>

              {/* Card content */}
              <div style={styles.cardBody}>
                {renderStars()}
                <h3 style={styles.cardTitle}>{review.title}</h3>
                <div className="font-mono" style={styles.commentLabel}>Comment</div>
                <p style={styles.commentText}>"{review.comment}"</p>
              </div>
            </div>
          ))}
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
  grid: {
    marginTop: '40px',
  },
  card: {
    backgroundColor: 'rgba(23, 43, 54, 0.03)',
    border: '1px solid rgba(23, 43, 54, 0.06)',
    borderRadius: '6px',
    position: 'relative',
    paddingLeft: '56px', /* Leave space for vertical rotated label */
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
  },
  cardBody: {
    padding: '40px 24px 40px 20px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  stars: {
    fontSize: '13px',
    color: 'var(--color-oceanic-noir)',
    letterSpacing: '2px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-oceanic-noir)',
    lineHeight: '1.3',
    marginBottom: '24px',
  },
  commentLabel: {
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(23, 43, 54, 0.4)',
    marginBottom: '8px',
  },
  commentText: {
    fontSize: '14px',
    color: 'var(--text-muted-dark)',
    lineHeight: '1.5',
    fontStyle: 'italic',
  }
};

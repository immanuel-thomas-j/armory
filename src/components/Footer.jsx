import React from 'react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        {/* Top Section - Subscription */}
        <div style={styles.topSection}>
          <div style={styles.subscriptionIntro}>
            <span style={styles.subBadge}>Newsletter</span>
            <h2 style={styles.subTitle}>AI Systems</h2>
            <p style={styles.subText}>Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.</p>
          </div>
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className="footer-input-wrapper" style={styles.inputWrapper}>
              <input className="footer-input" type="email" placeholder="jane@framer.com" style={styles.input} required />
              <button className="footer-submit-btn" type="submit" style={styles.subscribeBtn}>
                <img src="/assets/svgs/arrow-path.svg" alt="Subscribe" style={styles.btnIcon} />
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Middle Section - Links & Logo */}
        <div style={styles.midSection}>
          <div style={styles.logoCol}>
            <div style={styles.logo}>
              <img src="/assets/svgs/cube-16-solid.svg" alt="Armory Logo" style={styles.logoIcon} />
              <span style={styles.logoText}>armory</span>
            </div>
            <p style={styles.logoDesc}>Advanced enterprise-grade AI data automation.</p>
          </div>

          <div style={styles.linksGrid}>
            <div style={styles.linkCol}>
              <h4 style={styles.colTitle}>Quick Links</h4>
              <button style={styles.link} onClick={() => scrollToSection('hero')}>Home</button>
              <button style={styles.link} onClick={() => scrollToSection('pricing')}>Pricing</button>
              <button style={styles.link} onClick={() => scrollToSection('solutions')}>Projects</button>
              <button style={styles.link} onClick={() => scrollToSection('features')}>Articles</button>
            </div>
            <div style={styles.linkCol}>
              <h4 style={styles.colTitle}>Company</h4>
              <button style={styles.link} onClick={() => scrollToSection('testimonials')}>About Us</button>
              <button style={styles.link} onClick={() => scrollToSection('faq')}>Contact Us</button>
              <button style={styles.link} onClick={() => scrollToSection('pricing')}>Book A Call</button>
              <span style={styles.linkDisabled}>More Templates</span>
            </div>
            <div style={styles.linkCol}>
              <h4 style={styles.colTitle}>Policies</h4>
              <span style={styles.linkDisabled}>Terms & Conditions</span>
              <span style={styles.linkDisabled}>Privacy Policy</span>
              <div style={styles.socials}>
                <a href="#" style={styles.socialIcon} aria-label="Twitter">
                  <img src="/assets/svgs/link.svg" alt="Twitter" style={{width: '14px', height: '14px', filter: 'invert(1)'}} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="LinkedIn">
                  <img src="/assets/svgs/link-solid.svg" alt="LinkedIn" style={{width: '14px', height: '14px', filter: 'invert(1)'}} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="YouTube">
                  <img src="/assets/svgs/link.svg" alt="YouTube" style={{width: '14px', height: '14px', filter: 'invert(1)'}} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Instagram">
                  <img src="/assets/svgs/link-solid.svg" alt="Instagram" style={{width: '14px', height: '14px', filter: 'invert(1)'}} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Bottom Section - Copyright */}
        <div style={styles.bottomSection}>
          <p style={styles.copyright}>© 2026 Armory AI. All rights reserved.</p>
        </div>

        {/* Massive Branded Footer Text */}
        <div style={styles.massiveText}>
          armory
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-dark)',
    borderTop: '1px solid rgba(241, 246, 244, 0.05)',
    paddingTop: '80px',
    paddingBottom: '40px',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px',
  },
  subscriptionIntro: {
    maxWidth: '480px',
  },
  subBadge: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    textTransform: 'uppercase',
    color: 'var(--color-forsythia)',
    letterSpacing: '0.15em',
    display: 'block',
    marginBottom: '12px',
  },
  subTitle: {
    fontSize: '32px',
    color: 'var(--color-arctic-powder)',
    marginBottom: '12px',
    fontWeight: '700',
  },
  subText: {
    fontSize: '15px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  form: {
    flexGrow: 1,
    maxWidth: '480px',
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    backgroundColor: 'rgba(23, 43, 54, 0.4)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    borderRadius: '100px',
    padding: '4px',
    gap: '8px',
  },
  input: {
    flexGrow: 1,
    background: 'none',
    border: 'none',
    color: 'var(--color-arctic-powder)',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
    width: '50%',
  },
  subscribeBtn: {
    backgroundColor: 'var(--color-arctic-powder)',
    color: 'var(--color-oceanic-noir)',
    border: 'none',
    borderRadius: '100px',
    padding: '0 20px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'opacity 0.2s ease',
  },
  btnIcon: {
    width: '14px',
    height: '14px',
  },
  midSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '60px',
    marginBottom: '60px',
  },
  logoCol: {
    maxWidth: '280px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  logoIcon: {
    width: '24px',
    height: '24px',
    filter: 'invert(1)',
  },
  logoText: {
    fontWeight: '700',
    fontSize: '22px',
    color: 'var(--color-arctic-powder)',
    letterSpacing: '-0.02em',
  },
  logoDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  },
  linksGrid: {
    display: 'flex',
    gap: '80px',
    flexWrap: 'wrap',
  },
  linkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colTitle: {
    fontSize: '12px',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    color: 'var(--color-arctic-powder)',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  link: {
    background: 'none',
    border: 'none',
    textAlign: 'left',
    color: 'var(--text-muted)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    fontFamily: 'var(--font-sans)',
  },
  linkDisabled: {
    color: 'rgba(241, 246, 244, 0.3)',
    fontSize: '14px',
  },
  socials: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    color: 'var(--color-arctic-powder)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    marginBottom: '32px',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  copyright: {
    fontSize: '13px',
    color: 'rgba(241, 246, 244, 0.4)',
  },
  massiveText: {
    fontSize: '18vw',
    fontWeight: '900',
    fontFamily: 'var(--font-sans)',
    textAlign: 'center',
    lineHeight: '0.8',
    color: 'rgba(241, 246, 244, 0.02)',
    letterSpacing: '-0.05em',
    pointerEvents: 'none',
    userSelect: 'none',
    textTransform: 'lowercase',
    marginTop: '20px',
    marginBottom: '-40px',
  }
};

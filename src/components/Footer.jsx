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
            <div style={styles.inputWrapper}>
              <input type="email" placeholder="jane@framer.com" style={styles.input} required />
              <button type="submit" style={styles.subscribeBtn}>
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialIcon} aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialIcon} aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{display: 'block'}}>
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.026 0 12 0 12s0 3.974.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.863.508 9.388.508 9.388.508s7.525 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.974 24 12 24 12s0-3.974-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display: 'block'}}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
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
    filter: 'invert(1)',
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
    justifycontent: 'center',
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

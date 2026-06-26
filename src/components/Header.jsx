import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/svgs/cube-16-solid.svg" alt="Armory Logo" style={styles.logoIcon} />
            <span style={styles.logoText}>armory</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav-links" style={styles.desktopNav}>
            <button style={styles.desktopNavLink} onClick={() => scrollToSection('solutions')}>Solutions</button>
            <button style={styles.desktopNavLink} onClick={() => scrollToSection('stats')}>Telemetry</button>
            <button style={styles.desktopNavLink} onClick={() => scrollToSection('features')}>Features</button>
            <button style={styles.desktopNavLink} onClick={() => scrollToSection('pricing')}>Pricing</button>
            <button style={styles.desktopNavLink} onClick={() => scrollToSection('faq')}>FAQ</button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="desktop-cta-wrapper" style={styles.desktopCtaWrapper}>
            <button style={styles.desktopCtaBtn} onClick={() => scrollToSection('pricing')}>Get Started</button>
          </div>

          <button className="mobile-menu-btn" style={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
            <span style={styles.menuLine}></span>
            <span style={{...styles.menuLine, width: '16px'}}></span>
          </button>
        </div>
      </header>

      {/* Full screen drawer menu */}
      <div style={{...styles.drawer, transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'}}>
        <div style={styles.drawerHeader}>
          <div style={styles.logo}>
            <img src="/assets/svgs/cube-16-solid.svg" alt="Armory Logo" style={styles.logoIcon} />
            <span style={styles.logoText}>armory</span>
          </div>
          <button style={styles.closeBtn} onClick={toggleMenu} aria-label="Close Menu">
            <img src="/assets/svgs/x-mark.svg" alt="Close" style={styles.closeIcon} />
          </button>
        </div>
        
        <nav style={styles.navLinks}>
          <button style={styles.navLink} onClick={() => scrollToSection('hero')}>Home</button>
          <button style={styles.navLink} onClick={() => scrollToSection('solutions')}>Solutions</button>
          <button style={styles.navLink} onClick={() => scrollToSection('stats')}>Product Stats</button>
          <button style={styles.navLink} onClick={() => scrollToSection('features')}>Product Features</button>
          <button style={styles.navLink} onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          <button style={styles.navLink} onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button style={styles.navLink} onClick={() => scrollToSection('faq')}>FAQ</button>
        </nav>

        <div style={styles.drawerFooter}>
          <button style={styles.ctaBtn} onClick={() => scrollToSection('pricing')}>Get Started</button>
        </div>
      </div>
      {isMenuOpen && <div style={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    backgroundColor: 'rgba(23, 43, 54, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  headerContainer: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  logoIcon: {
    width: '20px',
    height: '20px',
    filter: 'invert(1)',
  },
  logoText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '700',
    fontSize: '20px',
    color: 'var(--color-arctic-powder)',
    letterSpacing: '-0.02em',
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
    padding: '8px',
  },
  menuLine: {
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: 'var(--color-arctic-powder)',
    borderRadius: '1px',
    transition: 'all 0.2s ease',
  },
  drawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '320px',
    backgroundColor: 'var(--color-oceanic-noir)',
    borderLeft: '1px solid rgba(241, 246, 244, 0.1)',
    zIndex: 1002,
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 32px',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '60px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
    filter: 'invert(98%) sepia(4%) saturate(366%) hue-rotate(99deg) brightness(107%) contrast(93%)',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    flexGrow: 1,
  },
  navLink: {
    background: 'none',
    border: 'none',
    textAlign: 'left',
    color: 'var(--text-light)',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '4px 0',
    transition: 'color 0.2s ease',
    fontFamily: 'var(--font-sans)',
  },
  drawerFooter: {
    marginTop: 'auto',
  },
  ctaBtn: {
    width: '100%',
    backgroundColor: 'var(--color-arctic-powder)',
    color: 'var(--color-oceanic-noir)',
    border: 'none',
    padding: '14px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 1001,
  },
  desktopNav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  desktopNavLink: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'color var(--transition-fast)',
  },
  desktopCtaWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  desktopCtaBtn: {
    backgroundColor: 'var(--color-forsythia)',
    color: 'var(--color-oceanic-noir)',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity var(--transition-fast), transform var(--transition-fast)',
  }
};

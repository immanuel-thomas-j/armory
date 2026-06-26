import React, { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="demo-player" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.playerWrapper}>
          <video
            ref={videoRef}
            src="/assets/video/demo.mp4"
            style={styles.video}
            controls={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            muted
            loop
          />
          
          {/* Overlay when not playing */}
          {!isPlaying && (
            <div style={styles.overlay} onClick={handlePlayClick}>
              {/* Blur backdrop overlay */}
              <div style={styles.overlayBg}></div>
              
              <div style={styles.overlayContent}>
                {/* Watch Time Badge */}
                <div style={styles.watchTimeBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-arctic-powder)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '2px', display: 'block'}}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={styles.watchText}>2 Minutes Watch</span>
                </div>

                {/* Massive Branded Play Button */}
                <div style={styles.playLogoContainer}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-arctic-powder)', display: 'block' }}>
                    <path d="M8 5L2 12L8 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Interactive Play Button with Crop Brackets */}
                <div style={styles.playBtnContainer} className="play-btn-bracket-container">
                  <span className="bracket-tl"></span>
                  <span className="bracket-tr"></span>
                  <span className="bracket-bl"></span>
                  <span className="bracket-br"></span>
                  <button style={styles.playBtn} onClick={handlePlayClick}>
                    PLAY VIDEO
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--bg-dark)',
    paddingBottom: '100px',
    position: 'relative',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  playerWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '960px',
    aspectRatio: '16/9',
    backgroundColor: 'var(--bg-dark)',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(241, 246, 244, 0.1)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
  },
  overlayBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(23, 43, 54, 0.4)',
    backdropFilter: 'blur(8px)',
    transition: 'opacity 0.3s ease',
  },
  overlayContent: {
    position: 'relative',
    zIndex: 11,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: '40px',
  },
  watchTimeBadge: {
    position: 'absolute',
    top: '32px',
    right: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(23, 43, 54, 0.6)',
    padding: '8px 16px',
    borderRadius: '100px',
    border: '1px solid rgba(241, 246, 244, 0.1)',
  },
  watchIcon: {
    width: '12px',
    height: '12px',
    filter: 'invert(1)',
  },
  watchText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--color-arctic-powder)',
    letterSpacing: '0.05em',
  },
  playLogoContainer: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    border: '1px solid rgba(241, 246, 244, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  playLogo: {
    width: '40px',
    height: '40px',
    filter: 'invert(98%) sepia(4%) saturate(366%) hue-rotate(99deg) brightness(107%) contrast(93%)',
  },
  playBtnContainer: {
    position: 'relative',
    padding: '2px',
  },
  playBtn: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: 'var(--color-arctic-powder)',
    border: 'none',
    padding: '14px 36px',
    cursor: 'pointer',
    outline: 'none',
  }
};

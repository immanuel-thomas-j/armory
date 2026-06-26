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
                  <img src="/assets/svgs/chevron-right.svg" alt="Play Icon" style={styles.watchIcon} />
                  <span style={styles.watchText}>2 Minutes Watch</span>
                </div>

                {/* Massive Branded Play Button */}
                <div style={styles.playLogoContainer}>
                  <img src="/assets/svgs/cube-16-solid.svg" alt="Play Brand" style={styles.playLogo} />
                </div>

                {/* Interactive Play Button */}
                <button style={styles.playBtn} onClick={handlePlayClick}>
                  PLAY VIDEO
                </button>
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
  playBtn: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    fontWeight: '600',
    backgroundColor: 'var(--color-arctic-powder)',
    color: 'var(--color-oceanic-noir)',
    border: '1px solid var(--color-arctic-powder)',
    padding: '12px 32px',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
  }
};

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Radio, Volume2, VolumeX, Maximize2, TrendingUp, Activity, Wifi } from 'lucide-react';
import styles from './LiveStream.module.scss';

const VIDEO_ID = '9M93_6S9TaQ';

// Stats that animate on enter
const stats = [
  { label: 'Live Viewers', value: '12,847', icon: Activity, color: '#00F5A0' },
  { label: 'Signals Today', value: '47', icon: TrendingUp, color: '#3A86FF' },
  { label: 'Uptime', value: '99.9%', icon: Wifi, color: '#FFD700' },
];

// Animated counter
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseInt(end.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numeric)) return;
    let start = 0;
    const step = numeric / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) {
        clearInterval(timer);
        setCount(numeric);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const formatted = end.includes(',')
    ? count.toLocaleString()
    : end.includes('%')
    ? count + '%'
    : String(count);

  return <span ref={ref}>{isInView ? formatted : '0'}</span>;
};

const LiveStream = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);
  // iframeReady: stays true once section enters view — iframe is never unloaded
  const [iframeReady, setIframeReady] = useState(false);
  const isInView = useInView(sectionRef, { once: false, margin: '-15%' });

  // Only mount the YouTube iframe (and load its ~800 KB of JS) when the
  // section is actually in the viewport for the first time.
  useEffect(() => {
    if (isInView && !iframeReady) setIframeReady(true);
  }, [isInView, iframeReady]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  // Build embed URL
  const embedSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1`;

  const toggleMute = () => {
    // Post message to iframe to toggle mute/unmute
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (muted) {
      iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    } else {
      iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
    }
    setMuted((m) => !m);
  };

  return (
    <section ref={sectionRef} className={styles.section} id="livestream">
      {/* Decorative scanline overlay */}
      <div className={styles.scanlines} aria-hidden="true" />

      {/* Ambient glow beams */}
      <div className={styles.beamLeft} aria-hidden="true" />
      <div className={styles.beamRight} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Live badge */}
          <motion.div
            className={styles.liveBadge}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={styles.liveDot} />
            <Radio size={14} />
            <span>LIVE 24/7</span>
          </motion.div>

          <h2 className={styles.title}>
            Watch the Market <span className={styles.gradient}>Live</span>
          </h2>
          <p className={styles.subtitle}>
            Real-time market analysis streaming 24/7. Learn from live trades, pattern recognition, and zone identification as they happen.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className={styles.layout}>
          {/* Video wrapper */}
          <motion.div
            className={styles.videoOuter}
            style={{ y, scale }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glowing border frame */}
            <div className={styles.videoFrame}>
              {/* Top bar */}
              <div className={styles.videoTopBar}>
                <div className={styles.windowDots}>
                  <span style={{ background: '#FF6B6B' }} />
                  <span style={{ background: '#FFD700' }} />
                  <span style={{ background: '#00F5A0' }} />
                </div>
                <motion.div
                  className={styles.liveIndicator}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className={styles.liveDotSmall} />
                  LIVE
                </motion.div>
                <div className={styles.videoControls}>
                  <motion.button
                    className={styles.controlBtn}
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1, color: '#00D4FF' }}
                    whileTap={{ scale: 0.9 }}
                    title={muted ? 'Unmute' : 'Mute'}
                  >
                    {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </motion.button>
                </div>
              </div>

              {/* Iframe — only mounted once section enters viewport */}
              <div className={styles.videoInner}>
                {(!loaded || !iframeReady) && (
                  <div className={styles.skeleton}>
                    <motion.div
                      className={styles.skeletonShimmer}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className={styles.skeletonLogo}>
                      <Radio size={32} />
                      <span>Connecting to live stream…</span>
                    </div>
                  </div>
                )}
                {iframeReady && (
                  <iframe
                    ref={iframeRef}
                    src={embedSrc}
                    title="4Color System Live Trading Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.iframe}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Corner accents */}
              <span className={`${styles.corner} ${styles.tl}`} />
              <span className={`${styles.corner} ${styles.tr}`} />
              <span className={`${styles.corner} ${styles.bl}`} />
              <span className={`${styles.corner} ${styles.br}`} />
            </div>

            {/* Mute notice */}
            <AnimatePresence>
              {muted && loaded && (
                <motion.div
                  className={styles.muteNotice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <VolumeX size={14} />
                  <span>Auto-playing muted — click <strong><VolumeX size={12} /></strong> to unmute</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Side panel */}
          <motion.div
            className={styles.sidePanel}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stats */}
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 16px 48px ${stat.color}22`,
                    borderColor: `${stat.color}44`,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className={styles.statIcon} style={{ color: stat.color }}>
                    <stat.icon size={20} />
                  </div>
                  <div className={styles.statValue} style={{ color: stat.color }}>
                    <Counter end={stat.value} />
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>What you'll see live:</h3>
              <ul className={styles.infoList}>
                {[
                  'Real-time 4-color zone mapping',
                  'FVG identification & validation',
                  'Orderflow & Delta analysis',
                  'Stress Test confirmation signals',
                  'Live education & Q&A',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.08 * i + 0.3 }}
                  >
                    <span className={styles.bulletDot} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Pulse CTA */}
            <motion.a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.watchCta}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Radio size={16} />
              Watch on YouTube
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;

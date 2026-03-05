import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import styles from './ChartShowcase.module.scss';
import { useToast } from '../Toast/Toast';

const ChartShowcase = () => {
  const { showToast } = useToast();
  const handleDemoClick = (e) => {
    e.preventDefault();
    showToast('Đây là bản demo, chức năng này chưa hoạt động', 'info');
  };

  const containerRef = useRef(null);
  const svgRef       = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y       = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // ── Real Binance OHLCV data ────────────────────────────────────────────
  const [apiCandles, setApiCandles] = useState(null);
  const [isLive, setIsLive]         = useState(false);
  const [livePrice, setLivePrice]   = useState(null);
  const [activeTab, setActiveTab]   = useState('1H');
  const [hoverCandle, setHoverCandle] = useState(null); // { idx, x, y, candle }
  const [pinnedCandle, setPinnedCandle] = useState(null);

  // 3D tilt state
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const INTERVALS = { '1H': '1h', '4H': '4h', '1D': '1d', '1W': '1w' };

  const fetchData = useCallback((tab) => {
    const interval = INTERVALS[tab] || '1h';
    fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=35`)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        setApiCandles(data.map((k) => ({
          open:   parseFloat(k[1]),
          high:   parseFloat(k[2]),
          low:    parseFloat(k[3]),
          close:  parseFloat(k[4]),
          volume: parseFloat(k[5]),
          isGreen: parseFloat(k[4]) >= parseFloat(k[1]),
        })));
        setLivePrice(parseFloat(data[data.length - 1][4]));
        setIsLive(true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => { fetchData(activeTab); }, [activeTab, fetchData]);

  // Live price tick (once on mount)
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    ws.onmessage = (e) => { try { setLivePrice(parseFloat(JSON.parse(e.data).p)); } catch {} };
    ws.onerror = () => {};
    return () => ws.close();
  }, []);

  // ── Fallback static data ──────────────────────────────────────────────
  const staticCandles = useMemo(() => {
    const data = [];
    let base = 68000;
    for (let i = 0; i < 35; i++) {
      const trend = Math.sin(i * 0.2) * 3;
      const change = (((i * 7 + 13) % 11) / 11 - 0.45) * 800 + trend;
      const open = base;
      const close = base + change;
      const high = Math.max(open, close) + ((i * 3 + 5) % 7) * 60;
      const low  = Math.min(open, close) - ((i * 5 + 2) % 5) * 40;
      data.push({ open, high, low, close, volume: 1e6 + ((i * 17) % 8) * 5e5, isGreen: close > open });
      base = close;
    }
    return data;
  }, []);

  const candlesticks = apiCandles ?? staticCandles;

  // ── SVG layout ────────────────────────────────────────────────────────
  const SVG_W = 950, SVG_H = 550, PAD_X = 60, PAD_Y = 50, VOL_H = 60;
  const chartH = SVG_H - PAD_Y - VOL_H - 20;

  const mapped = useMemo(() => {
    const candleW = (SVG_W - PAD_X * 2) / Math.max(candlesticks.length, 1);
    const prices  = candlesticks.flatMap((c) => [c.high, c.low]);
    const minP = Math.min(...prices);
    const maxP = Math.max(...prices);
    const range = maxP - minP || 1;
    const py = (p) => PAD_Y + ((maxP - p) / range) * chartH;
    const maxVol = Math.max(...candlesticks.map((c) => c.volume));

    return candlesticks.map((c, i) => {
      const cx = PAD_X + i * candleW + candleW / 2;
      const bodyTop    = py(Math.max(c.open, c.close));
      const bodyBottom = py(Math.min(c.open, c.close));
      return {
        ...c, cx, candleW: candleW * 0.65,
        bodyX: cx - (candleW * 0.65) / 2,
        bodyY: bodyTop,
        bodyH: Math.max(bodyBottom - bodyTop, 1.5),
        highY: py(c.high), lowY: py(c.low),
        volH: (c.volume / maxVol) * VOL_H,
        priceLabel: `$${c.close >= 1000 ? (c.close / 1000).toFixed(1) + 'K' : c.close.toFixed(0)}`,
      };
    });
  }, [candlesticks]);

  // MA line
  const maLine = useMemo(() => {
    const p = 5;
    return mapped
      .filter((_, i) => i >= p - 1)
      .map((c, i) => {
        const avg = mapped.slice(i, i + p).reduce((s, x) => s + x.close, 0) / p;
        const prices = mapped.flatMap((x) => [x.high, x.low]);
        const minP = Math.min(...prices), maxP = Math.max(...prices), range = maxP - minP || 1;
        const y = PAD_Y + ((maxP - avg) / range) * chartH;
        return `${i === 0 ? 'M' : 'L'}${c.cx},${y}`;
      })
      .join(' ');
  }, [mapped, chartH]);

  const displayPrice = livePrice ?? candlesticks[candlesticks.length - 1]?.close ?? 0;
  const firstPrice   = candlesticks[0]?.open ?? 1;
  const pct          = (((displayPrice - firstPrice) / firstPrice) * 100).toFixed(2);
  const isPosChange  = parseFloat(pct) >= 0;

  // ── 3D mouse tilt ────────────────────────────────────────────────────
  const handleSvgMouseMove = (e) => {
    if (!svgRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const rx =  ((e.clientY - r.top  - r.height / 2) / r.height) * -6;
    const ry =  ((e.clientX - r.left - r.width  / 2) / r.width)  *  6;
    setTilt({ rx, ry });
  };
  const handleSvgMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    if (!pinnedCandle) setHoverCandle(null);
  };

  const handleCandleEnter = (i) => {
    if (!pinnedCandle) setHoverCandle({ idx: i, m: mapped[i] });
  };
  const handleCandleClick = (i) => {
    setPinnedCandle((prev) => (prev?.idx === i ? null : { idx: i, m: mapped[i] }));
    setHoverCandle(null);
  };

  const activeInfo = pinnedCandle ?? hoverCandle;

  // 4 Color zones
  const zones = [
    { color: '#3A86FF', label: 'Resistance Zone', y: 80 },
    { color: '#00F5A0', label: 'Bullish Zone',     y: 180 },
    { color: '#FFD700', label: 'Neutral Zone',     y: 280 },
    { color: '#FF6B6B', label: 'Support Zone',     y: 380 },
  ];

  return (
    <section id="charts" className={styles.showcase} ref={containerRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Live Trading Charts</span>
          <h2 className={styles.title}>
            See the <span className={`${styles.gradient} notranslate`}>4Color System</span> in Action
          </h2>
          <p className={styles.subtitle}>
            Watch how our color-coded zones help identify high-probability trading setups in real-time market conditions.
          </p>
        </motion.div>

        <motion.div className={styles.chartWrapper} style={{ y, opacity }}>
          <div className={styles.chartHeader}>
            <div className={styles.chartInfo}>
              <span className={`${styles.symbol} notranslate`}>BTC/USD</span>
              <motion.span
                className={`${styles.price} notranslate`}
                key={Math.round(displayPrice / 10)}
                initial={{ y: -4, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                ${displayPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </motion.span>
              <span className={`${styles.change} notranslate`}
                style={{ color: isPosChange ? '#00F5A0' : '#FF6B6B' }}>
                {isPosChange ? '+' : ''}{pct}%
              </span>
              {isLive && (
                <motion.span className={styles.livePill}
                  animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  ● LIVE
                </motion.span>
              )}
            </div>
            <div className={styles.chartTabs}>
              {['1H', '4H', '1D', '1W'].map((t) => (
                <button
                  key={t}
                  className={`${styles.tab} ${activeTab === t ? styles.active : ''} notranslate`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Chart Container */}
          <motion.div
            className={styles.chartContainer}
            animate={{
              rotateX: tilt.rx,
              rotateY: tilt.ry,
              transformPerspective: 1400,
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 28 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg
              ref={svgRef}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className={styles.chartSvg}
              preserveAspectRatio="xMidYMid meet"
              onMouseMove={handleSvgMouseMove}
              onMouseLeave={handleSvgMouseLeave}
            >
              <defs>
                <linearGradient id="showcaseLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="50%" stopColor="#3A86FF" />
                  <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>
                <linearGradient id="showcaseAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3A86FF" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#3A86FF" stopOpacity="0" />
                </linearGradient>
                <filter id="showcaseGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="candleHoverGlow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Zone backgrounds */}
              {zones.map((zone, i) => (
                <g key={i}>
                  <motion.rect x="50" y={zone.y} width="880" height="90"
                    fill={zone.color} opacity="0.06" rx="8"
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                    style={{ transformOrigin: 'left' }} />
                  <motion.text x="65" y={zone.y + 25} fill={zone.color}
                    fontSize="11" fontWeight="600" opacity="0.8"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.8 }}
                    viewport={{ once: false }} transition={{ delay: 0.5 + i * 0.1 }}>
                    {zone.label.toUpperCase()}
                  </motion.text>
                </g>
              ))}

              {/* Grid lines */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line key={i} x1="50" y1={80 + i * 80} x2="930" y2={80 + i * 80}
                  stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}

              {/* Volume bars */}
              {mapped.map((c, i) => (
                <motion.rect key={i}
                  x={c.bodyX} y={SVG_H - c.volH - 8} width={c.candleW} height={c.volH}
                  fill={c.isGreen ? 'rgba(0,245,160,0.25)' : 'rgba(255,107,107,0.25)'}
                  rx="2"
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + i * 0.015, duration: 0.3 }}
                  style={{ transformOrigin: 'bottom' }} />
              ))}

              {/* Candlesticks */}
              {mapped.map((c, i) => {
                const isActive = activeInfo?.idx === i;
                const isPinned = pinnedCandle?.idx === i;
                const color    = c.isGreen ? '#00F5A0' : '#FF6B6B';
                const dim      = activeInfo && !isActive ? 0.25 : 1;
                return (
                  <motion.g key={i}
                    filter={isActive ? 'url(#candleHoverGlow)' : undefined}
                    animate={{ opacity: dim }}
                    transition={{ duration: 0.12 }}
                    onMouseEnter={() => handleCandleEnter(i)}
                    onMouseLeave={() => { if (!pinnedCandle) setHoverCandle(null); }}
                    onClick={() => handleCandleClick(i)}
                    style={{ cursor: 'crosshair' }}
                  >
                    {/* Hover highlight */}
                    {isActive && (
                      <rect x={c.bodyX - 3} y={c.highY - 4}
                        width={c.candleW + 6} height={c.lowY - c.highY + 8}
                        fill={color} fillOpacity={isPinned ? 0.12 : 0.07} rx={3} />
                    )}
                    {/* Wick */}
                    <motion.line x1={c.cx} y1={c.highY} x2={c.cx} y2={c.lowY}
                      stroke={color} strokeWidth={isActive ? '2' : '1.5'}
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + i * 0.02, duration: 0.4 }}
                      style={{ transformOrigin: `${c.cx}px ${c.bodY}px` }} />
                    {/* Body */}
                    <motion.rect x={c.bodyX} y={c.bodyY} width={c.candleW} height={c.bodyH}
                      fill={c.isGreen ? color : 'transparent'}
                      stroke={color} strokeWidth={c.isGreen ? 0 : isActive ? '1.5' : '1'}
                      fillOpacity={c.isGreen ? (isActive ? 1 : 0.85) : 0}
                      rx="2"
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + i * 0.02, duration: 0.4 }}
                      style={{ transformOrigin: `${c.cx}px ${c.bodyY}px` }} />
                  </motion.g>
                );
              })}

              {/* MA line */}
              <motion.path d={maLine} fill="none" stroke="url(#showcaseLineGradient)"
                strokeWidth="2.5" strokeLinecap="round" filter="url(#showcaseGlow)"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: false }} transition={{ delay: 1, duration: 2, ease: 'easeInOut' }} />

              {/* Crosshair for active candle */}
              <AnimatePresence>
                {activeInfo && (
                  <motion.line key="cross"
                    x1={activeInfo.m.cx} y1={PAD_Y}
                    x2={activeInfo.m.cx} y2={SVG_H - VOL_H - 10}
                    stroke={pinnedCandle ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}
                    strokeWidth="1" strokeDasharray="4 4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                )}
              </AnimatePresence>

              {/* OHLCV Tooltip inline */}
              <AnimatePresence>
                {activeInfo && (() => {
                  const m = activeInfo.m;
                  const color = m.isGreen ? '#00F5A0' : '#FF6B6B';
                  const fmt = (n) => n >= 1000 ? `$${(n/1000).toFixed(1)}K` : `$${n.toFixed(1)}`;
                  const tx = m.cx + 145 > SVG_W - 40 ? m.cx - 155 : m.cx + 14;
                  const ty = Math.max(PAD_Y + 4, Math.min(m.bodyY - 30, SVG_H - 155));
                  return (
                    <motion.g key={activeInfo.idx}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      style={{ transformOrigin: `${tx}px ${ty}px` }}>
                      <rect x={tx - 2} y={ty - 2} width={148} height={118}
                        fill="rgba(11,19,43,0.95)" rx="8"
                        stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
                      <rect x={tx - 2} y={ty - 2} width={148} height={4}
                        fill={color} rx="4" />
                      {[
                        ['Open',   fmt(m.open),   color],
                        ['High',   fmt(m.high),   '#00F5A0'],
                        ['Low',    fmt(m.low),    '#FF6B6B'],
                        ['Close',  fmt(m.close),  color],
                        ['Vol',    `${(m.volume/1e6).toFixed(1)}M`, '#aaa'],
                      ].map(([label, val, c], ri) => (
                        <g key={ri}>
                          <text x={tx + 8}  y={ty + 22 + ri * 19} fill="rgba(255,255,255,0.4)"
                            fontSize="10" fontWeight="600">{label}</text>
                          <text x={tx + 140} y={ty + 22 + ri * 19} fill={c}
                            fontSize="10" fontWeight="700" textAnchor="end">{val}</text>
                        </g>
                      ))}
                      {pinnedCandle && (
                        <text x={tx + 74} y={ty + 112} fill="rgba(255,255,255,0.3)"
                          fontSize="8" textAnchor="middle">Click to unpin</text>
                      )}
                    </motion.g>
                  );
                })()}
              </AnimatePresence>

              {/* Price labels right axis */}
              {[0, 1, 2, 3, 4].map((i) => {
                const prices = mapped.flatMap((c) => [c.high, c.low]);
                const minP = Math.min(...prices), maxP = Math.max(...prices);
                const p = maxP - (i / 4) * (maxP - minP);
                const yPos = PAD_Y + (i / 4) * chartH;
                return (
                  <text key={i} x="940" y={yPos + 4}
                    fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">
                    {p >= 1000 ? `$${(p/1000).toFixed(1)}K` : `$${p.toFixed(0)}`}
                  </text>
                );
              })}

              {/* Live price line */}
              {mapped.length > 0 && (() => {
                const prices = mapped.flatMap((c) => [c.high, c.low]);
                const minP = Math.min(...prices), maxP = Math.max(...prices);
                const range = maxP - minP || 1;
                const priceY = PAD_Y + ((maxP - displayPrice) / range) * chartH;
                return (
                  <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} transition={{ delay: 1.5 }}>
                    <line x1="50" y1={priceY} x2="890" y2={priceY}
                      stroke="#3A86FF" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                    <rect x="860" y={priceY - 10} width="68" height="20" fill="#3A86FF" rx="4" />
                    <text x="894" y={priceY + 4} fill="#0B132B"
                      fontSize="10" fontWeight="700" textAnchor="middle">
                      {displayPrice >= 1000 ? `$${(displayPrice/1000).toFixed(1)}K` : `$${displayPrice.toFixed(0)}`}
                    </text>
                  </motion.g>
                );
              })()}
            </svg>
          </motion.div>

          {/* Zone Legend */}
          <div className={styles.legend}>
            {zones.map((zone, i) => (
              <motion.div key={i} className={styles.legendItem}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ delay: 0.8 + i * 0.1 }}>
                <span className={styles.legendDot} style={{ background: zone.color }} />
                <span className={styles.legendLabel}>{zone.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChartShowcase;

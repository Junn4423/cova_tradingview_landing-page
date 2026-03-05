import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { TrendingUp, Activity, BarChart2, Layers, Wifi, WifiOff } from 'lucide-react';
import styles from './HeroRightChart.module.scss';

// ─── Seeded pseudo-random for static fallback ─────────────────────────────
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildStaticCandles(count = 32) {
  const rng = seeded(42);
  const candles = [];
  let price = 68200;
  for (let i = 0; i < count; i++) {
    const trend = Math.sin((i / count) * Math.PI * 2) * 1.5;
    const change = (rng() - 0.44 + trend * 0.05) * 900;
    const open  = price;
    const close = price + change;
    const wick  = rng() * 380;
    const high  = Math.max(open, close) + wick;
    const low   = Math.min(open, close) - rng() * 280;
    const volume = 800 + rng() * 3200;
    candles.push({ open, close, high, low, volume, bullish: close >= open });
    price = close;
  }
  return candles;
}

// ─── Map candles to SVG coords ────────────────────────────────────────────
function mapCandles(candles, W, H, padX = 32, padY = 40) {
  const prices = candles.flatMap((c) => [c.high, c.low]);
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const range = maxP - minP || 1;
  const candleW = (W - padX * 2) / candles.length;

  const py = (p) => padY + ((maxP - p) / range) * (H - padY * 2);

  return candles.map((c, i) => {
    const cx = padX + i * candleW + candleW / 2;
    const bodyTop    = py(Math.max(c.open, c.close));
    const bodyBottom = py(Math.min(c.open, c.close));
    const bodyH = Math.max(bodyBottom - bodyTop, 1.5);
    return {
      ...c,
      cx,
      candleW: candleW * 0.6,
      bodyX:   cx - (candleW * 0.6) / 2,
      bodyY:   bodyTop,
      bodyH,
      highY:   py(c.high),
      lowY:    py(c.low),
    };
  });
}

function buildLinePath(mapped) {
  return mapped
    .map((c, i) => `${i === 0 ? 'M' : 'L'}${c.cx.toFixed(1)},${((c.bodyY + c.bodyH / 2)).toFixed(1)}`)
    .join(' ');
}
function buildAreaPath(mapped, H) {
  const line = buildLinePath(mapped);
  const last  = mapped[mapped.length - 1];
  const first = mapped[0];
  return `${line} L${last.cx},${H} L${first.cx},${H} Z`;
}

// ─── Floating info badge ──────────────────────────────────────────────────
const InfoBadge = ({ label, value, sub, color, delay, x, y }) => (
  <motion.div
    className={styles.badge}
    style={{ left: x, top: y, '--accent': color }}
    initial={{ opacity: 0, y: 20, scale: 0.85 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.06, y: -4 }}
  >
    <span className={styles.badgeDot} style={{ background: color }} />
    <div className={styles.badgeInner}>
      <span className={styles.badgeLabel}>{label}</span>
      <span className={styles.badgeValue} style={{ color }}>{value}</span>
      {sub && <span className={styles.badgeSub}>{sub}</span>}
    </div>
  </motion.div>
);

// ─── 3D OHLCV Tooltip ────────────────────────────────────────────────────
const CandleTooltip = ({ candle, x, y, W, H, pinned }) => {
  if (!candle) return null;
  const color = candle.bullish ? '#00F5A0' : '#FF6B6B';
  // Keep tooltip inside chart bounds
  const tipX = x + 140 > W ? x - 150 : x + 14;
  const tipY = Math.max(4, Math.min(y - 60, H - 140));
  const fmt = (n) => n >= 1000 ? `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}` : `$${n.toFixed(2)}`;
  return (
    <motion.foreignObject
      x={tipX}
      y={tipY}
      width={136}
      height={132}
      style={{ overflow: 'visible', pointerEvents: 'none' }}
      initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`${styles.candleTooltip} ${pinned ? styles.pinned : ''}`}
           style={{ '--color': color, perspective: '600px' }}>
        <div className={styles.tooltipHeader}>
          <span className={styles.tooltipType} style={{ color }}>
            {candle.bullish ? '▲ Bullish' : '▼ Bearish'}
          </span>
          {pinned && <span className={styles.tooltipPin}>📌</span>}
        </div>
        <div className={styles.tooltipRow}><span>O</span><span style={{ color }}>{fmt(candle.open)}</span></div>
        <div className={styles.tooltipRow}><span>H</span><span style={{ color: '#00F5A0' }}>{fmt(candle.high)}</span></div>
        <div className={styles.tooltipRow}><span>L</span><span style={{ color: '#FF6B6B' }}>{fmt(candle.low)}</span></div>
        <div className={styles.tooltipRow}><span>C</span><span style={{ color }}>{fmt(candle.close)}</span></div>
        <div className={styles.tooltipRow}><span>Vol</span><span style={{ color: '#aaa' }}>{(candle.volume / 1e6).toFixed(1)}M</span></div>
      </div>
    </motion.foreignObject>
  );
};

const W = 580;
const H = 340;
const STATIC_CANDLES = buildStaticCandles(28);

const HeroRightChart = () => {
  const containerRef = useRef(null);
  const wsRef        = useRef(null);

  const [rawCandles, setRawCandles] = useState(STATIC_CANDLES);
  const [livePrice,  setLivePrice]  = useState(null);
  const [isLive,     setIsLive]     = useState(false);
  const [hoverIdx,   setHoverIdx]   = useState(null);
  const [pinnedIdx,  setPinnedIdx]  = useState(null);
  const [mounted,    setMounted]    = useState(false);
  const [activeTab,  setActiveTab]  = useState('4H');

  const INTERVALS = { '15m': '15m', '1H': '1h', '4H': '4h', '1D': '1d', '1W': '1w' };

  // ── Fetch real Binance OHLCV ──────────────────────────────────────────
  const fetchCandles = useCallback((interval = '4h') => {
    fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=32`)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        setRawCandles(
          data.map((k) => ({
            open:    parseFloat(k[1]),
            high:    parseFloat(k[2]),
            low:     parseFloat(k[3]),
            close:   parseFloat(k[4]),
            volume:  parseFloat(k[5]),
            bullish: parseFloat(k[4]) >= parseFloat(k[1]),
          }))
        );
        setIsLive(true);
        setLivePrice(parseFloat(data[data.length - 1][4]));
      })
      .catch(() => {/* keep static fallback */});
  }, []);

  // ── Live price via Binance WebSocket ─────────────────────────────────
  useEffect(() => {
    setMounted(true);
    fetchCandles(INTERVALS[activeTab] || '4h');

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    wsRef.current = ws;
    ws.onmessage = (e) => {
      try { setLivePrice(parseFloat(JSON.parse(e.data).p)); } catch {}
    };
    ws.onerror = () => {};
    return () => { ws.close(); };
  }, []);                    // mount once

  useEffect(() => {
    fetchCandles(INTERVALS[activeTab] || '4h');
  }, [activeTab, fetchCandles]);

  // ── 3-D tilt on mouse move ────────────────────────────────────────────
  const mouseX  = useMotionValue(W / 2);
  const mouseY  = useMotionValue(H / 2);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(springY, [0, H], [8, -8]);
  const rotateY = useTransform(springX, [0, W], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const handleMouseLeave = () => {
    mouseX.set(W / 2);
    mouseY.set(H / 2);
    setHoverIdx(null);
  };

  const handleCandleClick = (i) => {
    setPinnedIdx((prev) => (prev === i ? null : i));
  };

  const mapped   = useMemo(() => mapCandles(rawCandles, W, H), [rawCandles]);
  const linePath = useMemo(() => buildLinePath(mapped), [mapped]);
  const areaPath = useMemo(() => buildAreaPath(mapped, H), [mapped]);

  const activeIdx       = pinnedIdx !== null ? pinnedIdx : hoverIdx;
  const activeCandle    = activeIdx !== null ? mapped[activeIdx] : null;
  const activeCandleCX  = activeCandle?.cx ?? null;

  const displayLast     = livePrice ?? rawCandles[rawCandles.length - 1]?.close;
  const firstPrice      = rawCandles[0]?.open ?? 0;
  const pctChange       = displayLast && firstPrice
    ? (((displayLast - firstPrice) / firstPrice) * 100).toFixed(2)
    : '0.00';
  const isPositive      = parseFloat(pctChange) >= 0;
  const lastCandle      = mapped[mapped.length - 1];

  if (!mounted) return null;

  return (
    <motion.div
      ref={containerRef}
      className={styles.wrapper}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 60, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />

      {/* Card */}
      <div className={styles.card}>
        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div className={styles.ticker}>
            <div className={styles.tickerIcon}><BarChart2 size={16} /></div>
            <div>
              <span className={`${styles.tickerSymbol} notranslate`}>BTC / USD</span>
              <span className={styles.exchange}>Binance · Perpetual</span>
            </div>
          </div>
          <div className={styles.priceBlock}>
            <motion.span
              className={`${styles.price} notranslate`}
              key={Math.round(displayLast / 10)}   // re-animate on significant change
              initial={{ y: -6, opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              ${displayLast?.toLocaleString('en-US', { maximumFractionDigits: 0 }) ?? '—'}
            </motion.span>
            <span className={styles.change} style={{ color: isPositive ? '#00F5A0' : '#FF6B6B' }}>
              {isPositive ? '+' : ''}{pctChange}%
            </span>
          </div>
          <div className={styles.liveChip}>
            <motion.span
              className={styles.liveDot}
              style={{ background: isLive ? '#00F5A0' : '#FFD700' }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
            {isLive ? (
              <><Wifi size={11} style={{ marginRight: 3 }} />LIVE</>
            ) : (
              <><WifiOff size={11} style={{ marginRight: 3 }} />DEMO</>
            )}
          </div>
        </div>

        {/* Timeframe tabs */}
        <div className={styles.tabs}>
          {['15m', '1H', '4H', '1D', '1W'].map((t) => (
            <span
              key={t}
              className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''} notranslate`}
              onClick={() => setActiveTab(t)}
              style={{ cursor: 'pointer' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* SVG Chart */}
        <div className={styles.chartArea}>
          <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#3A86FF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3A86FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#00D4FF" />
                <stop offset="50%"  stopColor="#3A86FF" />
                <stop offset="100%" stopColor="#7B2CBF" />
              </linearGradient>
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="candleGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="candlePinGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <clipPath id="chartClip"><rect x="0" y="0" width={W} height={H} /></clipPath>
            </defs>

            {/* Grid lines */}
            {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
              <line key={i} x1={32} x2={W - 32} y1={H * t} y2={H * t}
                stroke="rgba(255,255,255,0.04)" strokeWidth={1} strokeDasharray="4 6" />
            ))}

            {/* 4-Color Zone Backgrounds */}
            {[
              { y: 40,  h: 65,  color: '#3A86FF' },
              { y: 105, h: 65,  color: '#00F5A0' },
              { y: 170, h: 65,  color: '#FFD700' },
              { y: 235, h: 65,  color: '#FF6B6B' },
            ].map((z, i) => (
              <rect key={i} x={32} y={z.y} width={W - 64} height={z.h}
                fill={z.color} fillOpacity={0.04} rx={4} />
            ))}

            {/* Area fill */}
            <motion.path d={areaPath} fill="url(#heroAreaGrad)" clipPath="url(#chartClip)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} />

            {/* Price line */}
            <motion.path d={linePath} fill="none" stroke="url(#heroLineGrad)" strokeWidth={2.5}
              strokeLinecap="round" strokeLinejoin="round" filter="url(#lineGlow)" clipPath="url(#chartClip)"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />

            {/* Candlesticks */}
            {mapped.map((c, i) => {
              const isHovered = hoverIdx === i;
              const isPinned  = pinnedIdx === i;
              const isActive  = isHovered || isPinned;
              const color     = c.bullish ? '#00F5A0' : '#FF6B6B';
              const dimAlpha  = activeIdx !== null && !isActive ? 0.25 : 1;
              const scaleY    = isActive ? 1.08 : 1;
              return (
                <motion.g
                  key={i}
                  filter={isPinned ? 'url(#candlePinGlow)' : isHovered ? 'url(#candleGlow)' : undefined}
                  animate={{ opacity: dimAlpha, scaleY, originY: c.bodyY + c.bodyH }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => { if (pinnedIdx === null) setHoverIdx(i); }}
                  onMouseLeave={() => { if (pinnedIdx === null) setHoverIdx(null); }}
                  onClick={() => handleCandleClick(i)}
                  style={{ cursor: 'crosshair' }}
                >
                  {/* Hover / pin highlight area */}
                  {isActive && (
                    <rect x={c.bodyX - 4} y={c.highY - 4}
                      width={c.candleW + 8} height={c.lowY - c.highY + 8}
                      fill={color} fillOpacity={isPinned ? 0.12 : 0.07}
                      rx={3} />
                  )}
                  {/* Wick */}
                  <line x1={c.cx} y1={c.highY} x2={c.cx} y2={c.lowY}
                    stroke={color} strokeWidth={isActive ? 1.5 : 1} strokeOpacity={0.7} />
                  {/* Body */}
                  <rect x={c.bodyX} y={c.bodyY} width={c.candleW} height={c.bodyH}
                    rx={1.5}
                    fill={c.bullish ? color : 'transparent'}
                    stroke={color}
                    strokeWidth={c.bullish ? 0 : isActive ? 1.5 : 1}
                    fillOpacity={c.bullish ? (isActive ? 1 : 0.85) : 0} />
                </motion.g>
              );
            })}

            {/* Crosshair */}
            <AnimatePresence>
              {activeCandleCX !== null && (
                <motion.line key="cross"
                  x1={activeCandleCX} y1={40} x2={activeCandleCX} y2={H - 20}
                  stroke={pinnedIdx !== null ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={pinnedIdx !== null ? 1.5 : 1} strokeDasharray="4 4"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
              )}
            </AnimatePresence>

            {/* OHLCV Tooltip */}
            <AnimatePresence>
              {activeCandle && (
                <CandleTooltip
                  key={activeIdx}
                  candle={activeCandle}
                  x={activeCandle.cx}
                  y={activeCandle.bodyY}
                  W={W} H={H}
                  pinned={pinnedIdx !== null}
                />
              )}
            </AnimatePresence>

            {/* Live price marker */}
            <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}>
              <line x1={32} x2={W - 32}
                y1={lastCandle.bodyY + lastCandle.bodyH / 2}
                y2={lastCandle.bodyY + lastCandle.bodyH / 2}
                stroke={isPositive ? '#00F5A0' : '#FF6B6B'}
                strokeWidth={1} strokeDasharray="5 5" strokeOpacity={0.5} />
              <motion.circle cx={lastCandle.cx} cy={lastCandle.bodyY + lastCandle.bodyH / 2}
                r={4} fill={isPositive ? '#00F5A0' : '#FF6B6B'}
                animate={{ r: [4, 7, 4], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }} />
            </motion.g>
          </svg>
        </div>

        {/* Bottom metrics row */}
        <div className={styles.metrics}>
          {[
            { icon: TrendingUp, label: 'Volume 24h',    value: isLive ? 'Live' : '$4.82B', color: '#3A86FF' },
            { icon: Activity,   label: 'Open Interest', value: '$31.4B',                   color: '#00D4FF' },
            { icon: Layers,     label: 'Funding Rate',  value: '0.012%',                    color: '#00F5A0' },
          ].map(({ icon: Icon, label, value, color }, i) => (
            <motion.div key={i} className={styles.metric}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}>
              <Icon size={14} style={{ color }} />
              <span className={styles.metricLabel}>{label}</span>
              <span className={`${styles.metricValue} notranslate`} style={{ color }}>{value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating zone badges */}
      <InfoBadge label="Blue Zone"  value="+18.4%"  sub="Bullish pressure" color="#3A86FF" delay={1.4} x="calc(100% - 10px)" y="22%" />
      <InfoBadge label="Green Zone" value="Buy"      sub="Accumulation"     color="#00F5A0" delay={1.6} x="-20px"             y="55%" />
      <InfoBadge label="Gold Zone"  value="Neutral"  sub="Consolidation"    color="#FFD700" delay={1.8} x="calc(100% - 10px)" y="70%" />
    </motion.div>
  );
};

export default HeroRightChart;

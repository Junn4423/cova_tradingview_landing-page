import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { TrendingUp } from 'lucide-react';
import styles from './Hero.module.scss';

const HeroChart = () => {
  // Generate candlestick data
  const candlesticks = useMemo(() => {
    const data = [];
    let basePrice = 100;
    
    for (let i = 0; i < 20; i++) {
      const change = (Math.random() - 0.45) * 8;
      const open = basePrice;
      const close = basePrice + change;
      const high = Math.max(open, close) + Math.random() * 4;
      const low = Math.min(open, close) - Math.random() * 4;
      
      data.push({
        x: i * 28 + 30,
        open,
        close,
        high,
        low,
        isGreen: close > open,
      });
      
      basePrice = close;
    }
    return data;
  }, []);

  // Generate line chart points
  const linePoints = useMemo(() => {
    return candlesticks.map((c, i) => ({
      x: c.x,
      y: 300 - ((c.close - 70) * 4),
    }));
  }, [candlesticks]);

  const linePath = linePoints.map((p, i) => 
    (i === 0 ? 'M' : 'L') + `${p.x},${p.y}`
  ).join(' ');

  // 4 Color zone backgrounds
  const zones = [
    { color: '#3A86FF', opacity: 0.08, y: 50, height: 60 },
    { color: '#00F5A0', opacity: 0.08, y: 110, height: 60 },
    { color: '#FFD700', opacity: 0.08, y: 170, height: 60 },
    { color: '#FF6B6B', opacity: 0.08, y: 230, height: 70 },
  ];

  return (
    <motion.div 
      className={styles.chartContainer}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        viewBox="0 0 600 350"
        className={styles.chartSvg}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#3A86FF" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </linearGradient>
          
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3A86FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3A86FF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="greenCandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00F5A0" />
            <stop offset="100%" stopColor="#00C77B" />
          </linearGradient>

          <linearGradient id="redCandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF4757" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background zones */}
        {zones.map((zone, i) => (
          <motion.rect
            key={i}
            x="20"
            y={zone.y}
            width="560"
            height={zone.height}
            fill={zone.color}
            opacity={zone.opacity}
            rx="8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: zone.opacity, scaleX: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
          />
        ))}

        {/* Grid lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.line
            key={i}
            x1="20"
            y1={50 + i * 50}
            x2="580"
            y2={50 + i * 50}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.05 }}
          />
        ))}

        {/* Area fill under line */}
        <motion.path
          d={`${linePath} L${linePoints[linePoints.length - 1].x},320 L${linePoints[0].x},320 Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />

        {/* Candlesticks */}
        {candlesticks.map((candle, i) => {
          const bodyTop = 300 - (Math.max(candle.open, candle.close) - 70) * 4;
          const bodyBottom = 300 - (Math.min(candle.open, candle.close) - 70) * 4;
          const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
          const wickTop = 300 - (candle.high - 70) * 4;
          const wickBottom = 300 - (candle.low - 70) * 4;

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
              style={{ transformOrigin: `${candle.x}px ${bodyTop}px` }}
            >
              {/* Wick */}
              <line
                x1={candle.x}
                y1={wickTop}
                x2={candle.x}
                y2={wickBottom}
                stroke={candle.isGreen ? '#00F5A0' : '#FF6B6B'}
                strokeWidth="1.5"
              />
              {/* Body */}
              <rect
                x={candle.x - 8}
                y={bodyTop}
                width="16"
                height={bodyHeight}
                fill={candle.isGreen ? 'url(#greenCandle)' : 'url(#redCandle)'}
                rx="2"
              />
            </motion.g>
          );
        })}

        {/* Main line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Animated dot on line */}
        <motion.circle
          cx={linePoints[linePoints.length - 1].x}
          cy={linePoints[linePoints.length - 1].y}
          r="8"
          fill="#3A86FF"
          filter="url(#glowStrong)"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{
            delay: 2.5,
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx={linePoints[linePoints.length - 1].x}
          cy={linePoints[linePoints.length - 1].y}
          r="4"
          fill="#fff"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, duration: 0.3 }}
        />

        {/* Price labels */}
        {['$156', '$142', '$128', '$114', '$100'].map((price, i) => (
          <motion.text
            key={i}
            x="590"
            y={70 + i * 50}
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            textAnchor="end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            {price}
          </motion.text>
        ))}

        {/* 4Color Zone Labels */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <text x="35" y="85" fill="#3A86FF" fontSize="10" fontWeight="600">ZONE 1</text>
          <text x="35" y="145" fill="#00F5A0" fontSize="10" fontWeight="600">ZONE 2</text>
          <text x="35" y="205" fill="#FFD700" fontSize="10" fontWeight="600">ZONE 3</text>
          <text x="35" y="265" fill="#FF6B6B" fontSize="10" fontWeight="600">ZONE 4</text>
        </motion.g>
      </svg>

      {/* Floating elements */}
      <motion.div
        className={styles.floatingBadge}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
      >
        <span className={styles.badgeIcon}><TrendingUp size={18} /></span>
        <div>
          <span className={styles.badgeValue}>+12.4%</span>
          <span className={styles.badgeLabel}>Today's Gain</span>
        </div>
      </motion.div>

      <motion.div
        className={styles.floatingAlert}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <span className={styles.alertDot} />
        <span>Zone 2 Signal Detected</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroChart;

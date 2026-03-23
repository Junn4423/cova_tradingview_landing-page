import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, ExternalLink, Check, X, Info, ZoomIn, FileText, Download, Image, Send } from 'lucide-react';
import styles from './Education.module.scss';
import { use3DTilt, useRipple, injectRippleKeyframe } from '../../utils/animations';

const pdfResources = [
  { name: 'How These Charts Work Across ETFs', file: '/docs/How These Charts Work Across ETFs.pdf', color: '#3A86FF' },
  { name: '4-Color Liquidity Sequence Cheat Sheet', file: '/docs/4-Color Liquidity Sequence Cheat Sheet.pdf', color: '#00F5A0' },
  { name: '4-Color Market Observation Framework', file: '/docs/4-Color Market Observation Framework.pdf', color: '#3A86FF' },
  { name: 'How AD Helps Confirm', file: '/docs/How AD Helps Confirm.pdf', color: '#7B2CBF' },
  { name: 'Liquidity Battles', file: '/docs/Liquidity Battles.pdf', color: '#FF9F1C' },
  { name: 'The Liquidity Engine', file: '/docs/The Liquidity Engine.pdf', color: '#00D4FF' },
  { name: 'When Price Moves Sideways', file: '/docs/When Price Moves Sideways.pdf', color: '#FFD700' },
  { name: 'Market Behavior Report', file: '/docs/Market Behavior Report HIMS.pdf', color: '#FF6B6B' },
  { name: 'Chart Patterns — What They Really Represent', file: '/docs/Chart Patterns, What They Really Represent in the Market.pdf', color: '#3A86FF' },
  { name: 'Why Liquidity Forms Around S/R', file: '/docs/Why Liquidity Forms Around Support and Resistance.pdf', color: '#00F5A0' },
  { name: 'Why Upgrade to 4-Color', file: '/docs/Why Upgrade.pdf', color: '#7B2CBF' },
  { name: 'Pro & Elite Upgrade — Official Announcement', file: '/docs/Pro Elite Upgrade Official Announcement.pdf', color: '#FFD700' },
  { name: 'Stop Memorizing 20+ Candle Patterns', file: '/docs/STOP_MEMORIZING_20_CANDLE_PATTERNS.pdf', color: '#FF6B6B' },
  { name: 'The 3-Candle Engine', file: '/docs/THE 3-CANDLE ENGINE.pdf', color: '#FF9F1C' },
];

const infographics = [
  { name: 'How Liquidity Gets Created', src: '/images/How Liquidity Gets Created.png' },
  { name: 'Where Liquidity Comes From', src: '/images/Where Liquidity Comes From.png' },
  { name: 'The Simple Rule', src: '/images/The Simple Rule.png' },
  { name: 'The Real Rule', src: '/images/The Real Rule.png' },
  { name: 'The Real Mechanics', src: '/images/The Real Mechanics.png' },
  { name: 'Simple Rule for 4-Color Framework', src: '/images/Simple Rule for the 4-Color Framework.png' },
  { name: 'AD Divergence', src: '/images/2. Accumulation  Distribution Divergence.png' },
  { name: 'AD Rule', src: '/images/AD Rule.png' },
  { name: 'How AD Helps Confirm', src: '/images/How AD Helps Confirm.png' },
  { name: 'In 4-Color System', src: '/images/In 4-Color System.png' },
  { name: 'In the 4-Color Framework', src: '/images/In the 4-Color framework.png' },
  { name: 'What This Looks Like On The Chart', src: '/images/What This Look Like On The Chart.png' },
  { name: 'What This Looks Like in 4-Color', src: '/images/What This Looks Like in the 4-Color System.png' },
  { name: 'Why Price Sweeps Both Sides', src: '/images/Why Price Often Sweeps Both Sides.png' },
  { name: 'Sideways Range Structure', src: '/images/Sideways Range Structure.png' },
  { name: 'When Price Moves Sideways', src: '/images/When Price Moves Sideways.png' },
];

import { useEffect, useState } from 'react';

const modules = [
  {
    title: 'Foundations of 4Color System',
    description: 'Learn to read who controls the market using 4-Color Candle Logic. Stop random guessing — understand context before you trade.',
    level: 'Beginner',
    imgUrl: '/images/Lite-Education-Chart.jpg',
    tag: 'Start Here',
    tagColor: '#00F5A0',
  },
  {
    title: 'Understanding FVG (Fair Value Gap)',
    description: 'Discover how Fair Value Gaps represent imbalances in the market ecosystem. Learn the flow from retail to smart money to institutions.',
    level: 'Intermediate',
    imgUrl: '/images/FVG.jpg',
    tag: 'Core Concept',
    tagColor: '#3A86FF',
  },
  {
    title: 'Dynamic FVG Logic & Orderflow',
    description: 'Deep dive into how orderflow and delta analysis confirm whether a move has real pressure behind it — or is just a trap.',
    level: 'Advanced',
    imgUrl: '/images/Bitcoin.jpg',
    tag: 'Pro Level',
    tagColor: '#7B2CBF',
  },

  {
    title: 'Metals & Commodities Analysis',
    description: 'Apply 4-Color zone logic to Gold, Silver and commodity markets. Understand how macro liquidity flows affect metal pricing.',
    level: 'Intermediate',
    imgUrl: '/images/Metal.jpg',
    tag: 'Asset Class',
    tagColor: '#FFD700',
  },
  {
    title: 'Stock Market Structure',
    description: 'Read institutional order flow in equities. Learn how to identify accumulation and distribution phases in stock markets using the 4-Color framework.',
    level: 'Advanced',
    imgUrl: '/images/Stock.jpg',
    tag: 'Equities',
    tagColor: '#FF6B6B',
  },
  {
    title: 'The 3-Candle Engine',
    description: 'Forget 20+ candle names. Master the only 3 behaviors that matter: Compression, Rejection, and Expansion — the sequence behind every trap and every real move.',
    level: 'Beginner',
    imgUrl: '/images/3Candle-behaviors.jpg',
    tag: 'Essential',
    tagColor: '#FF6B6B',
  },
];

const tiers = [
  {
    name: 'Lite',
    question: "What's going on?",
    subtitle: 'Market Context',
    color: '#00F5A0',
    bg: 'rgba(0,245,160,0.07)',
    border: 'rgba(0,245,160,0.25)',
    badge: 'FREE — Public',
    badgeBg: 'rgba(0,245,160,0.15)',
    badgeColor: '#00F5A0',
    included: [
      'Shows who controls price using 4-Color Candle Logic',
      'Helps traders stop random guessing',
      'Prevents emotional trades',
      'Real-time market state reading',
    ],
    excluded: [
      'No imbalance logic',
      'No FVG validation',
      'No timing signals',
      'No BUY/SELL signals — observation only',
    ],
    analogy: 'Watching store traffic and shelf movement before making business decisions.',
    cta: 'Access Lite — Free',
    ctaLink: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/',
    ctaExternal: true,
  },
  {
    name: 'Pro',
    question: 'Is this pressure real?',
    subtitle: 'Pressure Confirmation',
    color: '#3A86FF',
    bg: 'rgba(58,134,255,0.07)',
    border: 'rgba(58,134,255,0.25)',
    badge: 'Coming Soon',
    badgeBg: 'rgba(255,215,0,0.12)',
    badgeColor: '#FFD700',
    included: [
      'All Lite features',
      'Buying vs Selling pressure metrics',
      'Absorption detection',
      'Liquidity imbalance signals',
    ],
    excluded: [
      'No FVG imbalance tracking yet',
      'No timing signals yet',
    ],
    analogy: 'Checking supplier stability and customer demand before ordering inventory.',
    cta: 'Join Pro Waitlist',
    ctaLink: 'https://form.jotform.com/260806377022050',
    ctaExternal: true,
  },
  {
    name: 'Elite',
    question: 'Is this the right moment?',
    subtitle: 'Execution Context',
    color: '#FF9F1C',
    bg: 'rgba(255,159,28,0.07)',
    border: 'rgba(255,159,28,0.25)',
    badge: 'Coming Soon',
    badgeBg: 'rgba(255,215,0,0.12)',
    badgeColor: '#FFD700',
    included: [
      'All Pro features',
      'Fair Value Gap (FVG) imbalance detection',
      'FVG Lifecycle tracking',
      'Trap vs takeover identification',
      'FVG Lifecycle Logic (CFE)',
      'When control actually shifts',
    ],
    excluded: [],
    analogy: 'You know exactly when wholesalers stop dumping inventory and buyers start paying higher prices.',
    cta: 'Apply for Elite',
    ctaLink: 'https://form.jotform.com/260806560917057',
    ctaExternal: true,
  },
  {
    name: 'Hubs',
    question: 'Multi-asset dashboard?',
    subtitle: 'FX Terminal Hub',
    color: '#7B2CBF',
    bg: 'rgba(123,44,191,0.07)',
    border: 'rgba(123,44,191,0.25)',
    badge: 'Research in Progress',
    badgeBg: 'rgba(255,215,0,0.12)',
    badgeColor: '#FFD700',
    included: [
      'All Elite features',
      'FX Terminal Hub multi-pair dashboard',
      'Forex & crypto asset coverage',
      'Advanced orderflow analytics',
      'Dedicated onboarding support',
    ],
    excluded: [],
    analogy: 'A full operations control room — monitoring all markets simultaneously with real-time 4-Color logic.',
    cta: 'Request Hubs Access',
    ctaLink: 'https://form.jotform.com/260806911516052',
    ctaExternal: true,
  },
];

const ModuleCard = ({ mod, index, onImageClick }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.025, glare: 0.1 });
  const { createRipple, Ripples } = useRipple();
  return (
    <motion.div
      className={styles.moduleCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={createRipple}
    >
      <div style={tilt.shineStyle} />
      <Ripples />
      <div
        className={styles.moduleImage}
        onClick={(e) => { e.stopPropagation(); onImageClick(mod.imgUrl, mod.title); }}
        style={{ cursor: 'zoom-in' }}
        title="Click to enlarge"
      >
        <img src={mod.imgUrl} alt={mod.title} loading="lazy" />
        <span className={styles.zoomHint}><ZoomIn size={16} /></span>
        <span className={styles.moduleTag} style={{ background: mod.tagColor + '22', color: mod.tagColor, border: `1px solid ${mod.tagColor}44` }}>
          {mod.tag}
        </span>
        <span className={styles.moduleLevel}>{mod.level}</span>
      </div>
      <div className={styles.moduleContent}>
        <h3 className={styles.moduleTitle}>{mod.title}</h3>
        <p className={styles.moduleDesc}>{mod.description}</p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=${encodeURIComponent('Education Inquiry – ' + mod.title)}&body=${encodeURIComponent(`Hi 4Color System Team,\n\nI am interested in the "${mod.title}" module (${mod.level}).\n\nPlease send me more details about this self-study content.\n\nThank you!`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moduleBtn}
        >
          <BookOpen size={15} />
          <span>Self-Study Module</span>
        </a>
      </div>
    </motion.div>
  );
};

const AccessFormModal = ({ formKey, onClose }) => {
  const form = accessForms[formKey];
  const { showToast } = useToast();
  const [data, setData] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleChange = (id, value) => setData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitting(true);

    // Build mailto with structured form data
    const lines = form.fields.map((f) => `${f.label}: ${data[f.id] || '(not provided)'}`);
    lines.push(`Acknowledgment: ${form.checkbox}`);
    const subject = encodeURIComponent(`${form.title} — 4Color System`);
    const body = encodeURIComponent(`${form.title}\n${'—'.repeat(30)}\n\n${lines.join('\n')}\n\n---\nSubmitted from 4colorsystem.com`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setSubmitting(false);
      showToast('Access request opened in Gmail — please send the email to complete.', 'success');
      onClose();
    }, 600);
  };

  return (
    <motion.div
      className={styles.formOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.formModal}
        style={{ borderColor: form.color + '40' }}
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.formClose} onClick={onClose} aria-label="Close form">
          <X size={20} />
        </button>

        <div className={styles.formHeader}>
          <div className={styles.formBadge} style={{ background: form.color + '18', color: form.color, borderColor: form.color + '35' }}>
            {formKey} Access
          </div>
          <h3 className={styles.formTitle}>{form.title}</h3>
          <p className={styles.formDesc}>{form.description}</p>
          <p className={styles.formNote}>{form.note}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formBody}>
          {form.fields.map((field) => (
            <div key={field.id} className={styles.formField}>
              <label className={styles.formLabel} htmlFor={`af-${field.id}`}>
                {field.label}
                {field.required && <span className={styles.formRequired}>*</span>}
              </label>
              {field.type === 'select' ? (
                <select
                  id={`af-${field.id}`}
                  className={styles.formInput}
                  required={field.required}
                  value={data[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                >
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>{opt || '— Select —'}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={`af-${field.id}`}
                  type={field.type}
                  className={styles.formInput}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={data[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              )}
            </div>
          ))}

          <label className={styles.formCheckbox}>
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>{form.checkbox}</span>
          </label>

          <div className={styles.formTerms}>
            This is not a mailing list. You will only be contacted when {formKey} becomes available.
            No ads. No spam. TradingView username is required for access validation.
            Access is granted based on submission quality, not order.
          </div>

          <button
            type="submit"
            className={styles.formSubmit}
            style={{ background: form.color + '20', borderColor: form.color + '40', color: form.color }}
            disabled={!agreed || submitting}
          >
            {submitting ? 'Submitting…' : (<><Send size={16} /> {form.submit}</>)}
          </button>

          <p className={styles.formDisclaimer}>Submitting this form does not guarantee access.</p>
        </form>
      </motion.div>
    </motion.div>
  );
};

const TierCard = ({ tier, index }) => {
  const tilt = use3DTilt({ maxTilt: 7, scale: 1.02, glare: 0.08 });
  return (
    <motion.div
      className={styles.tierCard}
      style={{ background: tier.bg, borderColor: tier.border, ...tilt.style }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.shineStyle} />
      <div className={styles.tierHeader}>
        <div className={styles.tierBadge} style={{ background: tier.badgeBg, color: tier.badgeColor }}>
          {tier.badge}
        </div>
        <h3 className={styles.tierName} style={{ color: tier.color }}>{tier.name}</h3>
        <div className={styles.tierSubtitle}>{tier.subtitle}</div>
        <div className={styles.tierQuestion} style={{ borderLeftColor: tier.color }}>"{tier.question}"</div>
      </div>
      <div className={styles.tierFeatures}>
        {tier.included.map((item, i) => (
          <div key={i} className={styles.tierFeature}>
            <Check size={14} color={tier.color} style={{ flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
        {tier.excluded.map((item, i) => (
          <div key={i} className={`${styles.tierFeature} ${styles.excluded}`}>
            <X size={14} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={styles.tierAnalogy}>
        <Info size={14} color={tier.color} style={{ flexShrink: 0, marginTop: 2 }} />
        <span><em>{tier.analogy}</em></span>
      </div>
      {tier.ctaExternal ? (
        <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer"
          className={styles.tierCta}
          style={{ background: tier.color + '18', borderColor: tier.border, color: tier.color }}>
          {tier.cta} <ExternalLink size={14} />
        </a>
      ) : (
        <button className={styles.tierCta}
          style={{ background: tier.color + '18', borderColor: tier.border, color: tier.color }}
          onClick={() => { window.location.href = tier.ctaLink; }}>
          {tier.cta} <ChevronRight size={14} />
        </button>
      )}
    </motion.div>
  );
};

const Education = () => {
  useEffect(() => { injectRippleKeyframe(); }, []);

  const [lightbox, setLightbox] = useState(null); // { src, title }

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Self-Paced Trading Education</span>
          <h2 className={styles.title}>
            Learn to Trade at{' '}
            <span className={styles.gradient}>Your Own Pace</span>
          </h2>
          <p className={styles.subtitle}>
            6 structured modules designed for independent learners. No live classes, no scheduled sessions —
            study when you are ready, at the depth you choose.
          </p>
        </motion.div>

        <div className={styles.modulesGrid}>
          {modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} index={i} onImageClick={(src, title) => setLightbox({ src, title })} />
          ))}
        </div>

        {/* Featured Resource — "How These Charts Work Across ETFs" */}
        <motion.div
          className={styles.featuredSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.featuredBadge}>CFE Education</div>
          <h3 className={styles.featuredTitle}>
            How These Charts Work Across{' '}
            <span className={styles.gradient}>ETFs, FX, Futures, and Metals</span>
          </h3>
          <p className={styles.featuredSubtitle}>One Logic, Different Environments</p>

          <div className={styles.featuredIntro}>
            <p>
              The CFE framework (4-Color + FVG Execution Logic™) is <strong>market-agnostic</strong> — but
              the data quality and behavior profile of each asset class changes how clean your reads will be.
            </p>
            <div className={styles.featuredTagline}>
              <span>Same logic.</span>
              <span>Different friction.</span>
            </div>
            <p className={styles.featuredWarning}>
              If you treat all markets identically, you'll misread pressure.
            </p>
          </div>

          {/* Cross-Market Comparison Table */}
          <div className={styles.comparisonTableWrap}>
            <h4 className={styles.comparisonHeading}>
              <span className={styles.comparisonIcon}></span>
              Cross-Market Comparison
            </h4>
            <div className={styles.tableScroll}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>ETFs</th>
                    <th>FX (Spot)</th>
                    <th>Futures</th>
                    <th>Metals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Centralized volume</td>
                    <td><span className={styles.statusBad}>✗</span> No (proxy)</td>
                    <td><span className={styles.statusBad}>✗</span> No (decentralized)</td>
                    <td><span className={styles.statusGood}>✓</span> Yes</td>
                    <td><span className={styles.statusWarn}>△</span> Mixed</td>
                  </tr>
                  <tr>
                    <td>Delta reliability</td>
                    <td><span className={styles.statusWarn}>△</span> Moderate</td>
                    <td><span className={styles.statusBad}>✗</span> Weak</td>
                    <td><span className={styles.statusGood}>✓</span> Strong</td>
                    <td><span className={styles.statusWarn}>△</span> Depends on feed</td>
                  </tr>
                  <tr>
                    <td>AD reliability</td>
                    <td><span className={styles.statusGood}>✓</span> Good</td>
                    <td><span className={styles.statusWarn}>△</span> Moderate</td>
                    <td><span className={styles.statusGood}>✓</span> Strong</td>
                    <td><span className={styles.statusGood}>✓</span> Good</td>
                  </tr>
                  <tr>
                    <td>FVG clarity</td>
                    <td><span className={styles.statusGood}>✓</span> Good</td>
                    <td><span className={styles.statusWarn}>△</span> Can be noisy</td>
                    <td><span className={styles.statusGood}>✓</span> Very clean</td>
                    <td><span className={styles.statusGood}>✓</span> Clean</td>
                  </tr>
                  <tr>
                    <td>Trap visibility</td>
                    <td><span className={styles.statusWarn}>△</span> Moderate</td>
                    <td><span className={styles.statusBad}>✗</span> Harder</td>
                    <td><span className={styles.statusGood}>✓</span> High</td>
                    <td><span className={styles.statusGood}>✓</span> High</td>
                  </tr>
                  <tr>
                    <td>Session behavior</td>
                    <td>Equity hours</td>
                    <td>24h</td>
                    <td>Session-driven</td>
                    <td>24h (reacts to COMEX)</td>
                  </tr>
                  <tr>
                    <td>Spread / slippage</td>
                    <td>Low</td>
                    <td>Very low</td>
                    <td>Low–moderate</td>
                    <td>Moderate</td>
                  </tr>
                  <tr>
                    <td>Best CFE usage</td>
                    <td>Phase + context</td>
                    <td>Structure + patience</td>
                    <td>Full model</td>
                    <td>Full model with awareness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <motion.a
            href="/docs/How These Charts Work Across ETFs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.featuredCta}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            <span>Read Full Guide (PDF)</span>
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.tierSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.tierHeading}>Understand Each Tool</h3>
          <p className={styles.tierSubheading}>
            The 4-Color System comes in tiers — each building on the previous, unlocking deeper market context.
          </p>
          <div className={styles.tiersGrid}>
            {tiers.map((tier, i) => (
              <TierCard key={i} tier={tier} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Resources / Downloads — TASK 17 */}
        <motion.div
          className={styles.resourcesSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.tierHeading}>Resources &amp; Downloads</h3>
          <p className={styles.tierSubheading}>
            Free PDF guides, cheat sheets, and infographics from the 4-Color System™ knowledge base.
          </p>

          {/* PDF Downloads */}
          <div className={styles.pdfGrid}>
            {pdfResources.map((pdf, i) => (
              <motion.a
                key={i}
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfCard}
                style={{ borderColor: pdf.color + '30' }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className={styles.pdfIcon} style={{ color: pdf.color, background: pdf.color + '12' }}>
                  <FileText size={20} />
                </div>
                <span className={styles.pdfName}>{pdf.name}</span>
                <Download size={14} className={styles.pdfDownload} />
              </motion.a>
            ))}
          </div>

          {/* Infographics */}
          <h4 className={styles.resourceSubtitle}>Infographics &amp; Diagrams</h4>
          <div className={styles.infographicGrid}>
            {infographics.map((img, i) => (
              <motion.div
                key={i}
                className={styles.infographicCard}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                onClick={() => setLightbox({ src: img.src, title: img.name })}
              >
                <img src={img.src} alt={img.name} loading="lazy" />
                <div className={styles.infographicOverlay}>
                  <ZoomIn size={18} />
                  <span>{img.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.title}
              className={styles.lightboxImage}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              aria-label="Close image"
            >
              <X size={22} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;

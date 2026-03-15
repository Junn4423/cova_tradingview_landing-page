import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import styles from './Testimonials.module.scss';
import { use3DTilt, useCountUp } from '../../utils/animations';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Full-Time Day Trader',
    location: 'Singapore',
    initials: 'MC',
    avatarColor: '#3A86FF',
    rating: 5,
    text: 'The 4Color System completely transformed my trading. I went from randomly guessing entries to consistently profitable trades. The zone identification is incredibly accurate.',
    profit: '+247%',
    profitCount: { end: 247, decimals: 0, prefix: '+', suffix: '%' },
    period: 'Annual Return',
  },
  {
    name: 'Sarah Williams',
    role: 'Forex Trader',
    location: 'London, UK',
    initials: 'SW',
    avatarColor: '#00F5A0',
    rating: 5,
    text: 'As someone who struggled with technical analysis for years, this system finally made everything click. The color zones make it so easy to identify high-probability setups.',
    profit: '+$42K',
    profitCount: { end: 42, decimals: 0, prefix: '+$', suffix: 'K' },
    period: 'First Year',
  },
  {
    name: 'David Rodriguez',
    role: 'Swing Trader',
    location: 'New York, USA',
    initials: 'DR',
    avatarColor: '#FFD700',
    rating: 5,
    text: 'I\'ve tried countless trading systems before. The 4Color methodology is the only one that consistently delivers results. The education content is world-class.',
    profit: '94.2%',
    profitCount: { end: 94.2, decimals: 1, prefix: '', suffix: '%' },
    period: 'Win Rate',
  },
  {
    name: 'Emma Thompson',
    role: 'Crypto Trader',
    location: 'Toronto, Canada',
    initials: 'ET',
    avatarColor: '#7B2CBF',
    rating: 5,
    text: 'Started with zero trading experience. Within 6 months, I quit my job to trade full-time. The community support and mentorship are absolutely invaluable.',
    profit: '+$85K',
    profitCount: { end: 85, decimals: 0, prefix: '+$', suffix: 'K' },
    period: 'Monthly Avg',
  },
  {
    name: 'James Liu',
    role: 'Options Trader',
    location: 'Hong Kong',
    initials: 'JL',
    avatarColor: '#FF6B6B',
    rating: 5,
    text: 'The risk management principles taught here saved my account multiple times. Now I approach every trade with confidence and a clear plan.',
    profit: '+312%',
    profitCount: { end: 312, decimals: 0, prefix: '+', suffix: '%' },
    period: '18 Months',
  },
  {
    name: 'Anna Kowalski',
    role: 'Part-Time Trader',
    location: 'Warsaw, Poland',
    initials: 'AK',
    avatarColor: '#00D4FF',
    rating: 5,
    text: 'I only have 2 hours per day to trade. The 4Color System helps me quickly identify the best setups without spending hours on analysis. Life-changing!',
    profit: '+$28K',
    profitCount: { end: 28, decimals: 0, prefix: '+$', suffix: 'K' },
    period: 'Side Income',
  },
];

const TestimonialCard = ({ testimonial, variants }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.025, glare: 0.1 });
  const { ref: profitRef, display: profitDisplay } = useCountUp(testimonial.profitCount ?? { end: 0 });
  return (
    <motion.div
      className={styles.card}
      variants={variants}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.shineStyle} />
      <div className={styles.cardHeader}>
        <div
          className={styles.avatar}
          style={{
            background: `${testimonial.avatarColor}22`,
            border: `1.5px solid ${testimonial.avatarColor}55`,
            color: testimonial.avatarColor,
          }}
        >
          {testimonial.initials ? (
            <span className={styles.avatarInitials}>{testimonial.initials}</span>
          ) : (
            <User size={22} />
          )}
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{testimonial.name}</h4>
          <p className={styles.role}>{testimonial.role}</p>
          <p className={styles.location}>{testimonial.location}</p>
        </div>
        <div className={styles.profitBadge}>
          <span ref={profitRef} className={styles.profitValue}>
            {testimonial.profitCount ? profitDisplay : testimonial.profit}
          </span>
          <span className={styles.profitPeriod}>{testimonial.period}</span>
        </div>
      </div>
      <div className={styles.rating}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
      <div className={styles.quoteWrapper}>
        <Quote size={24} className={styles.quoteIcon} />
        <p className={styles.quote}>{testimonial.text}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Success Stories</span>
          <h2 className={styles.title}>
            Trusted by <span className={styles.gradient}>50,000+ Traders</span>
          </h2>
          <p className={styles.subtitle}>
            Real results from real traders who transformed their financial future with the <span className="notranslate">4Color System</span>.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

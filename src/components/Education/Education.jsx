import { motion } from 'framer-motion';
import { BookOpen, Video, Users, Award, ChevronRight, Play, BarChart2, TrendingUp, Shield } from 'lucide-react';
import styles from './Education.module.scss';
import { use3DTilt, useRipple, injectRippleKeyframe, useCountUp } from '../../utils/animations';
import { useToast } from '../Toast/Toast';
import { useEffect } from 'react';

const COURSE_ICONS = { BarChart2, TrendingUp, Shield };

const courses = [
  {
    title: 'Foundations of 4Color Trading',
    description: 'Master the basics of color zone identification and market structure analysis.',
    duration: '8 hours',
    lessons: 24,
    level: 'Beginner',
    image: 'BarChart2',
    imgUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    title: 'Advanced Zone Strategies',
    description: 'Learn professional techniques for zone confluence and multi-timeframe analysis.',
    duration: '12 hours',
    lessons: 36,
    level: 'Intermediate',
    image: 'TrendingUp',
    imgUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80',
  },
  {
    title: 'Risk Management Mastery',
    description: 'Protect your capital with proven position sizing and stop-loss strategies.',
    duration: '6 hours',
    lessons: 18,
    level: 'All Levels',
    image: 'Shield',
    imgUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&q=80',
  },
];

const stats = [
  { icon: BookOpen, value: '150+', countEnd: 150, suffix: '+',  decimals: 0, label: 'Video Lessons' },
  { icon: Users,    value: '50K+', countEnd: 50,  suffix: 'K+', decimals: 0, label: 'Active Students' },
  { icon: Video,    value: '100+', countEnd: 100, suffix: '+',  decimals: 0, label: 'Hours of Content' },
  { icon: Award,    value: '4.9',  countEnd: 4.9, suffix: '',   decimals: 1, label: 'Average Rating' },
];

const CourseCard = ({ course, variants, onDemoClick }) => {
  const tilt = use3DTilt({ maxTilt: 9, scale: 1.025, glare: 0.12 });
  const { createRipple, Ripples } = useRipple();
  return (
    <motion.div
      className={styles.courseCard}
      variants={variants}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={createRipple}
    >
      <div style={tilt.shineStyle} />
      <Ripples />
      <div className={styles.courseImage}>
        {course.imgUrl && (
          <img
            src={course.imgUrl}
            alt={course.title}
            className={styles.courseImg}
            loading="lazy"
          />
        )}
        <span className={styles.courseIconWrap}>
          {(() => { const Icon = COURSE_ICONS[course.image]; return Icon ? <Icon size={28} /> : null; })()}
        </span>
        <div className={styles.playButton} onClick={onDemoClick} style={{ cursor: 'pointer' }}>
          <Play size={16} fill="currentColor" />
        </div>
      </div>
      <div className={styles.courseContent}>
        <div className={styles.courseMeta}>
          <span className={styles.courseLevel}>{course.level}</span>
          <span className={styles.courseDuration}>{course.duration}</span>
        </div>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDescription}>{course.description}</p>
        <div className={styles.courseLessons}>
          <BookOpen size={16} />
          <span>{course.lessons} Lessons</span>
        </div>
      </div>
    </motion.div>
  );
};

const StatCountItem = ({ stat, index }) => {
  const { ref, display } = useCountUp({ end: stat.countEnd, decimals: stat.decimals, suffix: stat.suffix });
  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.3 + index * 0.1 }}
    >
      <div className={styles.statIcon}>
        <stat.icon size={22} />
      </div>
      <div className={styles.statContent}>
        <span ref={ref} className={styles.statValue}>{display}</span>
        <span className={styles.statLabel}>{stat.label}</span>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { showToast } = useToast();
  useEffect(() => { injectRippleKeyframe(); }, []);

  const handleDemoClick = (e) => {
    e.preventDefault();
    showToast('Đây là bản demo, chức năng này chưa hoạt động', 'info');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Content */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.label}>Education Hub</span>
            <h2 className={styles.title}>
              Learn to Trade Like a{' '}
              <span className={styles.gradient}>Professional</span>
            </h2>
            <p className={styles.subtitle}>
              Our comprehensive education program takes you from complete beginner to confident 
              trader. Learn at your own pace with video lessons, live workshops, and a supportive community.
            </p>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <StatCountItem key={index} stat={stat} index={index} />
              ))}
            </div>

            <motion.a
              href="#cta"
              className={styles.cta}
              onClick={handleDemoClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore All Courses</span>
              <ChevronRight size={20} />
            </motion.a>
          </motion.div>

          {/* Right - Course Cards */}
          <motion.div
            className={styles.courses}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} variants={itemVariants} onDemoClick={handleDemoClick} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

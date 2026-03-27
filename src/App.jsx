import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Education from './components/Education/Education';
// Testimonials removed per client request (Ticket V2 — TASK 8)
import FinalCTA from './components/FinalCTA/FinalCTA';
import FixExecutionLogic from './components/FixExecutionLogic/FixExecutionLogic';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Legal from './components/Legal/Legal';
import Footer from './components/Footer/Footer';
// ThreeBackground pulls in the entire Three.js bundle — lazy load it so it
// never blocks the initial page paint
const ThreeBackground = lazy(() => import('./components/ThreeBackground/ThreeBackground'));
import MouseSpotlight from './components/MouseSpotlight/MouseSpotlight';
import { ToastProvider } from './components/Toast/Toast';
import CustomCursor from './components/CustomCursor/CustomCursor';
import GoogleTranslateWidget from './utils/GoogleTranslateWidget';
import './styles/globals.scss';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Disable motion-heavy orb animations on touch/mobile devices
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 768px)').matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 768px)');
    const h = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);
  return (
    <ToastProvider>
    <div className="app">
      {/* Scroll Progress */}
      <motion.div id="scroll-progress" style={{ scaleX }} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Mouse Spotlight */}
      <MouseSpotlight />

      {/* Google Translate Progress Bar */}
      <GoogleTranslateWidget />

      {/* Three.js 3D Scene — loaded after initial paint (lazy chunk) */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Background Orbs — CSS-only on mobile, framer-motion on desktop */}
      <div className="background-orbs">
        {isMobile ? (
          // Static orbs on mobile — no JS animation overhead
          <>
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="orb orb-4" />
          </>
        ) : (
          <>
            <motion.div
              className="orb orb-1"
              animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="orb orb-2"
              animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="orb orb-3"
              animate={{ y: [0, -30, 0], scale: [1, 0.95, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="orb orb-4"
              animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        )}
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        <div className="section-divider" />

        {/* Features Section */}
        <Features />
        <div className="section-divider" />

        {/* How It Works Section */}
        <HowItWorks />
        <div className="section-divider" />

        {/* Education Section */}
        <Education />
        <div className="section-divider" />

        {/* Testimonials removed — client: "Trust by 50,000: Bỏ, ko cần tới" */}

        {/* Final CTA / Pricing Section */}
        <FinalCTA />
        <div className="section-divider" />

        {/* Fix Your Execution Logic — images moved from Hero */}
        <FixExecutionLogic />
        <div className="section-divider" />

        {/* FAQ Section */}
        <FAQ />
        <div className="section-divider" />

        {/* Contact Section */}
        <Contact />
        <div className="section-divider" />

        {/* Legal Terms Section */}
        <Legal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </ToastProvider>
  );
}

export default App;

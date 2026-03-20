import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import styles from './Navbar.module.scss';


const navLinks = [
  { label: 'Products',  href: '#cta' },
  { label: 'Education', href: '#education' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contact',   href: '#contact' },
];

// 6 languages — added Vietnamese per client V2 request
const languages = [
  { code: 'en',    name: 'English',          flag: '🇺🇸' },
  { code: 'vi',    name: 'Tiếng Việt',       flag: '🇻🇳' },
  { code: 'zh-CN', name: 'Mandarin (中文)',   flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Cantonese (粵語)', flag: '🇭🇰' },
  { code: 'ar',    name: 'العربية',          flag: '🇸🇦' },
  { code: 'es',    name: 'Español',          flag: '🇪🇸' },
];

const Navbar = () => {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen]     = useState(false);
  const [currentLang, setCurrentLang]       = useState(languages[0]);
  const langDropdownRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on click outside
  useEffect(() => {
    if (!langMenuOpen) return;
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langMenuOpen]);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setLangMenuOpen(false);
    window.__triggerGoogleTranslate?.(lang.code);
    // RTL support: set dir attribute on <html> for Arabic
    document.documentElement.dir = lang.code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.code;
  };



  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.a 
          href="#" 
          className={styles.logo}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={styles.logoIcon}>
            <img
              src="/images/logo-cfe.jpg"
              alt="4Color System™ — CFE"
              className={styles.logoImg}
              height={36}
            />
          </div>
          <span className={`${styles.logoText} notranslate`}>4Color System™</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className={styles.navActions}>
          {/* Language Dropdown */}
          <div className={styles.langDropdown} ref={langDropdownRef}>
            <motion.button
              className={styles.langButton}
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe size={18} />
              <span className="notranslate">{currentLang.flag} {currentLang.name}</span>
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${langMenuOpen ? styles.open : ''}`}
              />
            </motion.button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  className={styles.langMenu}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`${styles.langOption} ${currentLang.code === lang.code ? styles.active : ''}`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <span className={styles.flag}>{lang.flag}</span>
                      <span className="notranslate">{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Access Lite — Free
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div className={styles.mobileLangSection}>
              <span className={styles.mobileLangLabel}>Language</span>
              <div className={styles.mobileLangOptions}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.mobileLangBtn} ${currentLang.code === lang.code ? styles.active : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <span className="notranslate">{lang.flag} {lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.mobileCta}>
              <motion.button
                className={styles.mobileCtaBtn}
                onClick={() => { window.location.href = '#cta'; setMobileMenuOpen(false); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Free
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

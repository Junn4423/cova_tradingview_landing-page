/**
 * GoogleTranslateWidget — Hidden mount point + smart progress-bar
 *
 * Progress bar:
 *   Uses a MutationObserver to detect when Google Translate has *actually*
 *   finished mutating the DOM, then snaps to 100% and fades out.
 *   Stays at ~88% until real completion — never lies to the user.
 *
 * Caching:
 *   After first successful translation, subsequent switches skip the bar.
 *   Language preference persisted to localStorage (restored on next visit).
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── CSS overrides ─────────────────────────────────────────────────────────────
const STYLE_ID = '__gt_overrides__';
const OVERRIDES = `
  .goog-te-banner-frame,
  .goog-te-banner-frame.skiptranslate,
  iframe.goog-te-banner-frame { display: none !important; }
  body { top: 0 !important; }
  #goog-gt-tt, #goog-gt-tt *,
  .goog-te-balloon-frame, .goog-tooltip,
  .goog-tooltip:hover { display: none !important; }
  .goog-text-highlight { background: none !important; box-shadow: none !important; }
  .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
  .VIpgJd-ZVi9od-aZ2wEe-OiiCO,
  .VIpgJd-ZVi9od-ORHb { display: none !important; }
  #google_translate_element { display: none !important; }
`;

function injectStyleOnce() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = OVERRIDES;
  document.head.appendChild(s);
}

// ── Cookie helpers ────────────────────────────────────────────────────────────
function clearGoogTransCookie() {
  const past = new Date(0).toUTCString();
  const base = `googtrans=; expires=${past}; path=/`;
  document.cookie = base;
  document.cookie = `${base}; domain=${location.hostname}`;
  document.cookie = `${base}; domain=.${location.hostname}`;
}

// ── localStorage cache ────────────────────────────────────────────────────────
const CACHE_KEY = '__gt_loaded_langs__';
const PREF_KEY  = '__gt_lang_pref__';

function getLoadedLangs() {
  try { return new Set(JSON.parse(localStorage.getItem(CACHE_KEY) || '[]')); }
  catch { return new Set(); }
}
function markLangLoaded(code) {
  try {
    const set = getLoadedLangs();
    set.add(code);
    localStorage.setItem(CACHE_KEY, JSON.stringify([...set]));
  } catch {}
}
export function saveLangPref(code) {
  try { localStorage.setItem(PREF_KEY, code); } catch {}
}
export function loadLangPref() {
  try { return localStorage.getItem(PREF_KEY) || 'en'; } catch { return 'en'; }
}

// ── DOM mutation detector ─────────────────────────────────────────────────────
/**
 * Watches document.body for DOM mutations.
 * Calls `onDone` once mutations have settled for `quietMs` milliseconds
 * OR after `maxMs` milliseconds (safety fallback).
 * Returns a cleanup/cancel function.
 */
function watchForTranslationDone(onDone, quietMs = 700, maxMs = 9000) {
  let quietTimer = null;
  let safetyTimer = null;
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    clearTimeout(quietTimer);
    clearTimeout(safetyTimer);
    observer.disconnect();
    onDone();
  };

  const reset = () => {
    clearTimeout(quietTimer);
    quietTimer = setTimeout(finish, quietMs);
  };

  const observer = new MutationObserver(reset);

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: false,
  });

  // Start a settle timer right away (handles the case GT mutates immediately)
  reset();

  // Hard safety fallback
  safetyTimer = setTimeout(finish, maxMs);

  return () => {
    done = true;
    clearTimeout(quietTimer);
    clearTimeout(safetyTimer);
    observer.disconnect();
  };
}

// ── Core trigger ──────────────────────────────────────────────────────────────
function restoreToEnglish() {
  clearGoogTransCookie();

  // Method 1: try clicking the "Show original" / close button inside the
  //           hidden Google Translate banner iframe
  const tryBannerBtn = () => {
    const iframes = document.querySelectorAll(
      'iframe.skiptranslate, .goog-te-banner-frame'
    );
    for (const fr of iframes) {
      try {
        const doc = fr.contentDocument || fr.contentWindow?.document;
        if (!doc) continue;
        // The last <a> / button in Google's banner is the "Restore" link
        const links = doc.querySelectorAll('a[href], button');
        if (links.length) {
          links[links.length - 1].click();
          return true;
        }
      } catch (_) { /* cross-origin – expected */ }
    }
    return false;
  };

  // Method 2: reset the combo select to '' (original language sentinel)
  const tryCombo = () => {
    const select = document.querySelector('select.goog-te-combo');
    if (!select) return false;
    select.value = '';
    ['input', 'change'].forEach((t) =>
      select.dispatchEvent(new Event(t, { bubbles: true }))
    );
    return true;
  };

  // Try immediately, then after short wait (GT may not be ready yet)
  if (!tryBannerBtn()) {
    setTimeout(() => {
      if (!tryBannerBtn()) tryCombo();
    }, 200);
  }
}

function triggerGoogleTranslate(langCode) {
  const isEnglish = !langCode || langCode === 'en';

  if (isEnglish) {
    restoreToEnglish();
    return;
  }

  let tries = 0;
  const attempt = () => {
    const select = document.querySelector('select.goog-te-combo');
    if (!select) {
      if (tries++ < 30) setTimeout(attempt, 400);
      return;
    }
    select.value = langCode;
    select.dispatchEvent(new Event('input',  { bubbles: true }));
    select.dispatchEvent(new Event('change', { bubbles: true }));
  };
  attempt();
}

if (typeof window !== 'undefined') {
  window.__triggerGoogleTranslate = triggerGoogleTranslate;
}

// ── Progress Bar ──────────────────────────────────────────────────────────────
const progressBarStyles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    zIndex: 99999,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    background: 'linear-gradient(90deg, #3A86FF 0%, #00D4FF 50%, #00F5A0 100%)',
    boxShadow: '0 0 12px rgba(0, 212, 255, 0.8)',
    transformOrigin: 'left center',
    width: '100%',
  },
};

/**
 * phase:
 *   'idle'       — not visible
 *   'loading'    — animate 0% → 88% (slow)
 *   'completing' — jump to 100% then exit
 */
const TranslationProgressBar = ({ phase }) => {
  const visible = phase === 'loading' || phase === 'completing';
  return (
    <AnimatePresence>
      {visible && (
        <div style={progressBarStyles.wrapper}>
          <motion.div
            style={progressBarStyles.bar}
            initial={{ scaleX: 0 }}
            animate={phase === 'loading' ? { scaleX: 0.88 } : { scaleX: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
            transition={
              phase === 'loading'
                ? { duration: 3.8, ease: [0.08, 0.5, 0.6, 0.95] }
                : { duration: 0.3, ease: 'easeOut' }
            }
          />
        </div>
      )}
    </AnimatePresence>
  );
};

// ── Main component ─────────────────────────────────────────────────────────────
const GoogleTranslateWidget = () => {
  // 'idle' | 'loading' | 'completing'
  const [phase, setPhase] = useState('idle');
  const cleanupRef = useRef(null);

  const startTranslation = useCallback((langCode) => {
    saveLangPref(langCode);
    const isEnglish = !langCode || langCode === 'en';
    const cacheCode = isEnglish ? 'en' : langCode;
    const alreadyCached = getLoadedLangs().has(cacheCode);

    // Fire actual Google Translate
    triggerGoogleTranslate(langCode);

    if (alreadyCached) {
      // Flash complete instantly — user doesn't need to wait
      setPhase('completing');
      setTimeout(() => setPhase('idle'), 450);
      return;
    }

    // Show loading bar, then watch DOM for completion
    setPhase('loading');
    cleanupRef.current?.();

    cleanupRef.current = watchForTranslationDone(() => {
      markLangLoaded(cacheCode);
      setPhase('completing');
      setTimeout(() => setPhase('idle'), 650);
    });
  }, []);

  useEffect(() => {
    injectStyleOnce();
    window.__triggerGoogleTranslate = startTranslation;

    // Restore previous language preference on first load
    const saved = loadLangPref();
    if (saved && saved !== 'en') {
      setTimeout(() => startTranslation(saved), 1400);
    }

    return () => {
      cleanupRef.current?.();
    };
  }, [startTranslation]);

  return (
    <>
      <div id="google_translate_element" aria-hidden="true" />
      <TranslationProgressBar phase={phase} />
    </>
  );
};

export default GoogleTranslateWidget;
export { triggerGoogleTranslate };

# 4Color System — Master the Market

> A high-performance, multi-language trading education landing page built with React 18 and Vite 5.

---

## Live Preview

Open `http://localhost:5173` after running the dev server (see [Getting Started](#getting-started)).

---

## Features

- 3D animated background powered by Three.js (lazy-loaded, never blocks FCP)
- Smooth scroll-driven animations with Framer Motion
- Custom cursor and mouse spotlight effect
- Scroll progress indicator
- Multi-language support — 12 languages out of the box
- Fully responsive — desktop, tablet, and mobile
- CSS Modules with SASS for scoped, maintainable styles
- Cookie consent banner (GDPR-aware)
- In-app feedback widget
- Toast notification system
- Google Translate integration with custom UI
- Obfuscated production build (Terser minification, hashed class names, no source maps)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| 3D graphics | Three.js + @react-three/fiber + @react-three/drei |
| Animation | Framer Motion |
| Styling | SASS + CSS Modules |
| Internationalisation | i18next + react-i18next |
| Icons | Lucide React |
| Minification | Terser |

---

## Supported Languages

English, Vietnamese, Spanish, French, German, Portuguese, Chinese, Japanese, Korean, Indonesian, Thai, Russian.

---

## Project Structure

```
src/
  App.jsx                  # Root component, scroll progress, layout
  main.jsx                 # React entry point
  styles/
    globals.scss           # Global base styles
  i18n/
    i18n.config.js         # i18next setup
    locales/               # Translation JSON files (en, vi, es, fr, de, pt, zh, ja, ko, id, th, ru)
  components/
    Navbar/                # Top navigation bar
    Hero/                  # Hero section with parallax chart
    Features/              # Product feature highlights
    HowItWorks/            # Step-by-step explainer
    Education/             # Education / course section
    FixExecutionLogic/     # FVG execution logic section
    ChartShowcase/         # Interactive chart demonstrations
    AboutUs/               # About the team
    FAQ/                   # Frequently asked questions
    FinalCTA/              # Final call-to-action
    Contact/               # Contact form
    LiveStream/            # Live stream embed section
    Legal/                 # Terms / privacy content
    Footer/                # Site footer
    ThreeBackground/       # Lazy-loaded Three.js canvas
    MouseSpotlight/        # Radial spotlight that follows the cursor
    CustomCursor/          # Custom animated cursor
    CookieBanner/          # GDPR cookie consent
    FeedbackWidget/        # Floating feedback form
    Toast/                 # Toast notification context + UI
  utils/
    animations.jsx         # Shared Framer Motion variants
    GoogleTranslateWidget.jsx
public/
  images/                  # Static images and logos
  docs/                    # Downloadable documents
```

---

## Getting Started

For a complete step-by-step setup guide (English and Vietnamese), see [SETUP_GUIDE.md](SETUP_GUIDE.md).

### Quick Start

**Prerequisites:** Git, Node.js 18+

```bash
# 1. Clone the repository
git clone <REPOSITORY_URL> trading
cd trading

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server at `http://localhost:5173` |
| `npm run build` | Build optimised production bundle into `dist/` |
| `npm run preview` | Serve the production build locally for verification |

---

## Production Build Notes

- JS is minified and obfuscated with Terser
- CSS class names are replaced with short base64 hashes
- Source maps are disabled — no source structure is exposed
- Three.js is code-split into a separate lazy chunk

To build for production:

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, Nginx, etc.).

---

## Adding a New Language

1. Create a new translation file in `src/i18n/locales/`, e.g. `ar.json`.
2. Copy the structure from `en.json` and translate the values.
3. Register it in `src/i18n/i18n.config.js`:

```js
import ar from './locales/ar.json';

const resources = {
  // ...existing languages
  ar: { translation: ar },
};
```

---

## Browser Support

Modern evergreen browsers: Chrome, Firefox, Safari, Edge (latest two major versions).
Three.js WebGL features require hardware acceleration to be enabled.

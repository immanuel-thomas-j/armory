# Armory AI — Advanced Enterprise AI Agent Orchestration Platform

Armory is a premium, high-converting landing page showcasing a state-of-the-art SaaS platform for building, executing, and scaling custom enterprise AI agents. Engineered with hardware-accelerated transitions, Three.js WebGL effects, and strict state isolation, the platform meets the highest standards of responsive design, performance, and SEO hygiene.

Live Deployment: `[Insert Deployment Link here]`  
Demo Video: `[Insert Demo Link here]`

---

## 🚀 Core Features & Architectural Highlights

### 1. Matrix-Driven Pricing & Performance-Isolated Currency Switcher
*   **Dynamic Matrix Logic**: Pricing tiers (Starter, Pro, Enterprise) calculate rates dynamically at runtime from a multi-dimensional configuration matrix factoring in base rates, currency exchange multipliers (USD, EUR, INR), regional tariffs, and a flat 20% annual discount.
*   **State Isolation Guardrail**: Changes to currency or billing cycle **never trigger a parent component re-render or layout reflow**. Price updates are strictly isolated to localized DOM text nodes using React `useRef` hooks, passing Chrome DevTools strict performance tracking.

### 2. Bento-Grid-to-Accordion Transition with State Persistence
*   **Fluid Layout Adaptability**: Responsive layout that renders as a modern, structured Bento Grid on desktop viewports and programmatically refactors into a touch-optimized accordion list on mobile viewports (<768px).
*   **Index Context Lock**: Automatically preserves user interaction states. If a user is viewing a specific bento node on desktop and resizes to mobile, the active index is maintained and smoothly expands the corresponding accordion drawer.
*   **Zero Banned Dependencies**: Built entirely from scratch using native CSS and custom React hooks. No pre-built component libraries (like Shadcn, Radix, Tailwind UI) or Framer Motion were installed.

### 3. SEO & Performance Loading Sequence
*   **Complete SEO Headers**: Configured with proper Title tags, Open Graph (OG) metadata, Twitter Card elements, accessible image `alt` attributes, and crawlable text hierarchies.
*   **Boot Loader Sequence**: Custom inline loader running in the HTML document head/body that animates and fades out within **360ms** (well below the 500ms cap), ensuring no delays to Time to Interactive (TTI).

### 4. Visual Aesthetics & Motion Matching
*   **Three.js Interactive Backdrop**: Features a responsive 3D WebGL particle constellation field with smooth mouse-movement parallax drift.
*   **Strict Color Palette**: Built strictly with the six predefined brand colors:
    *   `Oceanic Noir (#172B36)` — Primary Background
    *   `Nocturnal Expedition (#114C5A)` — Teal Contrast Accent
    *   `Mystic Mint (#D9E8E2)` — Mint Secondary Accent
    *   `Arctic Powder (#F1F6F4)` — Clean Light Contrast
    *   `Forsythia (#FFC801)` — Alert Highlight Yellow
    *   `Deep Saffron (#FF9932)` — Alert Highlight Orange
*   **SVG Compliance**: All icons are loaded from folder assets. Black SVGs are inverted to white on dark sections and styled inside custom dark badges on light sections (like FAQ & Case Studies default states) for readability.

---

## 🛠️ Tech Stack & Scripts

*   **Core**: React 19, Vite (v8), Three.js, Custom CSS
*   **Scripts**:
    *   `npm run dev` — Launch the local dev server
    *   `npm run build` — Compile a minified production bundle in `dist/`
    *   `npm run lint` — Audit codebase warning-free using Oxlint

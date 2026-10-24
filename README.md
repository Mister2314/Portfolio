# Portfolio

"Morfyus" — my personal site: five routes (home, about, work, blog, contact) built on React 19 + Vite, evolved from the original multi-page HTML version while keeping its bento-grid identity.

**Live demo:** <https://portfolio-morpheus2314s-projects.vercel.app>

<div align="center">

<img src="docs/demo.gif" alt="Portfolio — animated demo" width="700">

| Desktop | Mobile |
|---|---|
| <img src="docs/shot-desktop.png" alt="Desktop view" width="700"> | <img src="docs/shot-mobile.png" alt="Mobile view" width="290"> |

<details>
<summary>More screenshots</summary>

| Desktop | Mobile |
|---|---|
| <img src="docs/preview.png" alt="Desktop, alternate view" width="700"> | <img src="docs/preview-mobile.png" alt="Mobile, alternate view" width="290"> |

</details>

</div>

## What it does

A personal portfolio in near-black monochrome: the home page is an asymmetric bento grid of cards, each route injects only its own stylesheet (so page styles can never collide), and every page carries a short loading beat that client-side navigation now preserves as a smooth surface swap.

## Tech stack

React 19 · TypeScript · Vite · React Router 7 · Bootstrap 5 (home grid only) · View Transitions API

## Features

- Five routes with per-route CSS `<link>` injection — page styles mount and unmount cleanly
- Route transitions via the View Transitions API (260ms cross-fade), with a CSS-fade fallback for older browsers
- Varied reveal rhythm per page (mask-rise titles, staggered card rises) instead of one uniform fade
- Work cards with hover zoom, arrow nudge and press feedback; keyboard-focusable with visible focus rings
- Blog typewriter with a blinking caret and a static reduced-motion fallback
- Contact form with real states — validation, sending, success, error — instead of `alert()` + reload, via EmailJS
- Full mobile compositions for all five routes (single-column bento, stacked header, 1-col work grid)
- `prefers-reduced-motion` honored everywhere: no loader beat, static reveals, no caret blink

## Run locally

```bash
git clone https://github.com/Mister2314/Portfolio.git
cd Portfolio
npm install
npm run dev      # dev server
npm run build    # type-check + production build
```

## Structure

```
src/
├── main.tsx              # router + route table
├── TransitionLink.tsx    # View Transitions wrapper around React Router Link
├── PageStyles.tsx        # per-route stylesheet injection
├── Header.tsx            # shared nav (aria-current, keyboard focus)
├── useAos.ts             # IntersectionObserver reveals with per-element stagger
├── useLoadingScreen.ts   # per-route loading beat (skipped under reduced motion)
└── pages/                # Index · MoreAbout · Work · Blog · Contact
assets/css/               # one stylesheet per page, served as static assets
```

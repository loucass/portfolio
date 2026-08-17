# Apple Design Portfolio

Lucas Monir William's portfolio in the Apple design language — quiet, gallery-like, and
animation-heavy. Built with **Vite + React + TypeScript**, **GSAP ScrollTrigger**, and **Lenis**
smooth scrolling.

## Design system

All tokens (colors, type, radius, spacing) live in `src/styles/tokens.css`, sourced from the
Apple design guide (`DESIGN-apple.md`): Action Blue `#0066cc` as the single interactive accent,
17px body copy, negative letter-spacing at display sizes, pill CTAs, `scale(0.95)` press
micro-interactions — and exactly one drop-shadow rule (product imagery only).

## Sections

Nav · Hero · Skill marquee · Specs (colorful stack cards) · Education · Experience · Projects ·
Achievements (scroll-scrubbed count-ups) · Contact (email / WhatsApp / phone / LinkedIn / GitHub) ·
Footer

## Commands

```bash
npm run dev          # local dev server
npm run build        # tsc --noEmit && vite build
npm run preview      # preview the production build
```

## Content

Every CV fact lives in `src/data/content.ts` — components never hardcode content.

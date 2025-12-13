# Degotchi Web (Landing Page)

Degotchi’s marketing/landing site (mobile-first). It communicates the core narrative: **AI agents + human-in-the-loop biometric approval + Solana-native UX**, with a clean sectioned layout.

## Sections

- **Hero**: headline + value badges + dual CTAs
- **Terminal**: simulated live logs (vibe + narrative bridge)
- **Story**: narrative + key highlights
- **How it works**: human-in-the-loop flow
- **Features**: Brain / Body / Leash + capability list
- **Moat**: security/UX/distribution loop
- **Roadmap**: phased milestones
- **FAQ**: common questions
- **CTA**: early access entry (wire to form/community/email)

## Run locally

**Prerequisites:** Node.js 18+ (recommended 20+)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Default: `http://localhost:3000`

## Build & preview

```bash
npm run build
npm run preview
```

## Environment variables

This repo keeps a `GEMINI_API_KEY` injection slot (see `vite.config.ts`). If you later wire AI/API features, create `.env.local`:

```bash
GEMINI_API_KEY=YOUR_KEY
```

> The landing page UI itself does not require this variable.

## Project structure (key files)

```
body/
  App.tsx
  constants.ts
  types.ts
  index.html
  index.css
  components/
    Navbar.tsx
    Terminal.tsx
    Features.tsx
    HowItWorks.tsx
    Moat.tsx
    Roadmap.tsx
    FAQ.tsx
    CTA.tsx
    Footer.tsx
    Button.tsx
    SectionHeading.tsx
  assets/
    degotchi.webp
```

## Deployment

- **Build command**: `npm run build`
- **Output directory**: `dist/`

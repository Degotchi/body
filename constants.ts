import { LogEntry, Translations } from './types';

export const CONTENT: Translations = {
  nav: {
    links: {
      story: 'Story',
      features: 'Features',
      moat: 'Moat',
      roadmap: 'Roadmap',
      faq: 'FAQ',
    },
    primaryCta: 'Join Early Access',
    secondaryCta: 'View Litepaper',
  },
  hero: {
    title: 'Raise your Alpha. Feed your Greed.',
    subtitle: 'Your AI Degen Pet on Solana — autonomous trade ideas, human-in-the-loop approval, and bank‑grade mobile security.',
    badges: [
      'AI Agent Economy',
      'FaceID / Biometrics Approval',
      'Gasless-feeling UX (Fee Payer)',
      'Solana-native',
    ],
    primaryCta: 'Join Early Access',
    secondaryCta: 'See How It Works',
  },
  story: {
    eyebrow: 'THE NARRATIVE',
    title: 'A pet with personality. An agent with autonomy.',
    paragraphs: [
      'Degotchi blends Tamagotchi nostalgia with modern on-chain execution: your pet explores the market, proposes trades, and evolves over time.',
      'The brain can decide — but only you can sign. Private keys stay on your device, while the AI operates in the cloud as your always-on scout.',
    ],
    highlights: [
      {
        title: 'AI Agent Economy',
        desc: 'Not a static NFT. A living agent that monitors, learns, and communicates — with a consistent personality.',
      },
      {
        title: 'Human-in-the-loop',
        desc: 'Degotchi proposes. You approve via biometrics. No blind signing, no “AI holds your keys”.',
      },
      {
        title: 'Mobile-first security',
        desc: 'Use native secure hardware (Secure Enclave / KeyStore) patterns to keep keys where they belong.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HUMAN-IN-THE-LOOP',
    title: 'How it works (in 10 seconds)',
    steps: [
      {
        title: 'Degotchi detects an opportunity',
        desc: 'Signals + sentiment + on-chain data generate a trade idea with clear reasoning.',
      },
      {
        title: 'You get a push / prompt',
        desc: 'One-tap review: token, size, slippage, and expected outcome.',
      },
      {
        title: 'FaceID signs, relayer submits',
        desc: 'You authorize locally; a fee payer can broadcast to make UX feel gasless.',
      },
    ],
  },
  terminal: {
    header: 'DEGOTCHI_CORE_V1.0',
    status: 'SYSTEM: ONLINE',
  },
  features: {
    eyebrow: 'FEATURES',
    title: 'Built like a game. Engineered like a terminal.',
    subtitle: 'A simple mental model: Brain + Body + Leash, plus the UX that makes it usable.',
    architecture: [
      {
        icon: 'fa-brain',
        title: 'The Brain',
        desc: 'LLM-driven strategies + sentiment + on-chain signals. Always on, always learning.',
        color: 'border-degotchi-purple text-degotchi-purple',
      },
      {
        icon: 'fa-bolt',
        title: 'The Body',
        desc: 'Solana-native execution for sub-second feedback and cheap interactions.',
        color: 'border-degotchi-green text-degotchi-green',
      },
      {
        icon: 'fa-lock',
        title: 'The Leash',
        desc: 'Biometrics gate every sensitive action. The AI suggests — you approve.',
        color: 'border-degotchi-yellow text-degotchi-yellow',
      },
    ],
    bullets: [
      {
        icon: 'fa-shield-halved',
        title: 'Bank-grade key custody',
        desc: 'Keys stay local. No server-side custody, no browser extension required.',
      },
      {
        icon: 'fa-fingerprint',
        title: 'Biometric signing',
        desc: 'FaceID/TouchID approval flow designed for human-in-the-loop safety.',
      },
      {
        icon: 'fa-gas-pump',
        title: 'Gasless-feeling UX',
        desc: 'Fee payer relayer patterns make onboarding and first actions frictionless.',
      },
      {
        icon: 'fa-link',
        title: 'Blink-to-App funnel',
        desc: 'Acquire from social moments, convert inside the app where the depth lives.',
      },
      {
        icon: 'fa-chart-line',
        title: 'Real-time dashboard',
        desc: 'ROI, behavior changes, trade history, and “why” behind each suggestion.',
      },
      {
        icon: 'fa-face-grin-stars',
        title: 'Personality evolution',
        desc: 'Aggressive vs. conservative tendencies can shift with outcomes and feedback.',
      },
    ],
  },
  moat: {
    eyebrow: 'TECH MOAT',
    title: 'Security + UX is the product.',
    cards: [
      {
        title: 'Native security posture',
        desc: 'Use OS-level secure storage patterns so keys never leave the device boundary.',
        tone: 'green',
      },
      {
        title: 'Human confirmation at the edge',
        desc: 'Biometrics turns “AI autonomy” into “AI assistance” — safer by design.',
        tone: 'yellow',
      },
      {
        title: 'Frictionless first trade',
        desc: 'Fee payer + smart defaults reduce web3 onboarding tax to near zero.',
        tone: 'purple',
      },
    ],
  },
  roadmap: {
    eyebrow: 'ROADMAP',
    title: 'From viewer → signer → social agent',
    phases: [
      {
        title: 'Phase 1 — The Viewer',
        desc: 'Wallet + read-only dashboard to build trust.',
        items: ['Local key generation', 'Portfolio view', 'Pet status + personality'],
      },
      {
        title: 'Phase 2 — The Signer',
        desc: 'Biometrics + safe approvals.',
        items: ['FaceID/TouchID gating', 'Tx simulation & warnings', 'One-tap signing'],
      },
      {
        title: 'Phase 3 — The Connection',
        desc: 'Push ideas + real-time feedback loops.',
        items: ['Trade idea push', 'Reasoning view', 'Execution tracking'],
      },
      {
        title: 'Phase 4 — Social',
        desc: 'Degotchi becomes shareable, composable, and viral.',
        items: ['Blinks distribution', 'Agent profiles', 'Community challenges'],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Does Degotchi control my funds?',
        a: 'No. Degotchi can propose actions, but approvals happen on your device. You control signing.',
      },
      {
        q: 'Is this a wallet?',
        a: 'It’s a pet + agent interface with wallet-grade security patterns. Think “terminal with personality”.',
      },
      {
        q: 'What does “gasless-feeling” mean?',
        a: 'A fee payer relayer can cover network fees for certain flows so users can act without first buying SOL.',
      },
      {
        q: 'When launch?',
        a: 'We’re iterating fast. Join early access for updates and build-in-public drops.',
      },
    ],
  },
  cta: {
    title: 'Adopt your Degotchi.',
    subtitle: 'Get early access updates and be the first to raise your alpha — with safety built in.',
    primaryCta: 'Join Early Access',
    secondaryCta: 'Contact',
  },
  footer: {
    rights: 'Degotchi Labs. All rights reserved.',
    links: {
      twitter: '#',
      telegram: '#',
      github: '#',
      email: 'mailto:hello@degotchi.xyz',
    },
  }
};

export const LOG_MESSAGES: Array<{ text: string; type: LogEntry['type'] }> = [
  { text: "Scanning Solana programs for fresh flow...", type: 'info' },
  { text: "Detecting volatility spike on $BONK...", type: 'warning' },
  { text: "Sentiment: EXTREME GREED (88/100)", type: 'success' },
  { text: "Simulating route & slippage...", type: 'info' },
  { text: "Risk check failed: slippage too high. Aborting.", type: 'error' },
  { text: "Monitoring social + Blinks click-through...", type: 'info' },
  { text: "Preparing transaction — awaiting biometrics.", type: 'warning' },
  { text: "Biometric auth success. Signing locally.", type: 'success' },
  { text: "Relayer engaged (fee payer). Broadcasting...", type: 'info' },
];
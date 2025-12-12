import { Translations } from './types';

export const CONTENT: Translations = {
  nav: {
    connect: 'Connect Wallet',
  },
  hero: {
    title: 'Raise your Alpha. Feed your Greed.',
    subtitle: 'Autonomous AI Agent on Solana. Managed by FaceID. Powered by Python & Gemini.',
    cta: 'Adopt Early Access',
  },
  terminal: {
    header: 'DEGOTCHI_CORE_V1.0',
    status: 'SYSTEM: ONLINE',
  },
  features: {
    brainTitle: 'The Brain',
    brainDesc: 'Gemini AI powered strategies analyzing market sentiment in real-time.',
    bodyTitle: 'The Body',
    bodyDesc: 'Built on Solana for sub-second latency and minimal gas fees.',
    leashTitle: 'The Leash',
    leashDesc: 'Biometric FaceID security. The AI suggests, but YOU approve.',
  },
  footer: {
    rights: 'Degotchi Labs. All rights reserved.',
  }
};

export const LOG_MESSAGES = [
  { text: "Scanning Solana Chain for high-volume wallets...", type: 'info' },
  { text: "Gemini AI detecting $BONK volatility spike...", type: 'warning' },
  { text: "Sentiment Analysis: EXTREME GREED (88/100)", type: 'success' },
  { text: "Calculating optimal entry point...", type: 'info' },
  { text: "Wait... Slippage too high. Aborting trade.", type: 'error' },
  { text: "Checking Twitter trends for $WIF mentions...", type: 'info' },
  { text: "Preparing trade execution... Waiting for FaceID.", type: 'warning' },
  { text: "Biometric auth success. Transaction signed.", type: 'success' },
];
export interface Translations {
  nav: {
    links: {
      story: string;
      features: string;
      moat: string;
      roadmap: string;
      faq: string;
    };
    primaryCta: string;
    secondaryCta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: Array<{ title: string; desc: string }>;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; desc: string }>;
  };
  terminal: {
    header: string;
    status: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    architecture: Array<{ icon: string; title: string; desc: string; color: string }>;
    bullets: Array<{ icon: string; title: string; desc: string }>;
  };
  moat: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; desc: string; tone: 'green' | 'purple' | 'yellow' }>;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    phases: Array<{ title: string; desc: string; items: string[] }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    rights: string;
    links: {
      twitter: string;
      telegram: string;
      github: string;
      email: string;
    };
  };
}

export interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}
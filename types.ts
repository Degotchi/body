export interface Translations {
  nav: {
    connect: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  terminal: {
    header: string;
    status: string;
  };
  features: {
    brainTitle: string;
    brainDesc: string;
    bodyTitle: string;
    bodyDesc: string;
    leashTitle: string;
    leashDesc: string;
  };
  footer: {
    rights: string;
  };
}

export interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}
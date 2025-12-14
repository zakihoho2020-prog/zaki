export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  lesson: string;
  solution: string;
  icon: string;
}

export interface PhishingEmail {
  id: number;
  sender: string;
  subject: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
}

export interface MythFact {
  id: number;
  myth: string;
  fact: string;
}

export interface ToolItem {
  name: string;
  description: string;
  category: 'password' | 'email' | 'vpn' | 'privacy';
  link?: string;
}
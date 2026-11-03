export type Language = 'EN' | 'PT';

export type SocialId = 'github' | 'linkedin' | 'huggingface' | 'email';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  external: boolean;
}

export interface TextLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  problem: string;
  solution: string;
  impact: string;
  note?: string;
  tags: readonly string[];
  links: readonly TextLink[];
}

export interface EcosystemItem {
  title: string;
  detail: string;
}

export interface EcosystemCard {
  id: string;
  kicker: string;
  title: string;
  description: string;
  items: readonly EcosystemItem[];
  links: readonly TextLink[];
}

export interface TimelineEntry {
  org: string;
  role: string;
  period: string;
  summary: string;
  points?: readonly string[];
}

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export interface NavCopy {
  projects: string;
  ecosystem: string;
  experience: string;
  about: string;
  contact: string;
  available: string;
  language: string;
  skip: string;
}

export interface HeroCopy {
  titleName: string;
  titleRole: string;
  tagline: string;
  badges: readonly string[];
  primaryCta: string;
  secondaryCta: string;
  stackLabel: string;
  stack: readonly string[];
  photoAlt: string;
}

export interface ProjectsCopy {
  kicker: string;
  title: string;
  lead: string;
  featured: string;
  problem: string;
  solution: string;
  impact: string;
  items: readonly Project[];
}

export interface EcosystemCopy {
  kicker: string;
  title: string;
  lead: string;
  cards: readonly EcosystemCard[];
}

export interface ExperienceCopy {
  kicker: string;
  title: string;
  lead: string;
  education: string;
  download: string;
  items: readonly TimelineEntry[];
}

export interface AboutCopy {
  kicker: string;
  title: string;
  paragraphs: readonly string[];
  groups: readonly SkillGroup[];
}

export interface ContactCopy {
  kicker: string;
  title: string;
  lead: string;
  emailLabel: string;
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  sent: string;
  fillAllFields: string;
  invalidEmail: string;
  emailSubject: string;
  emailError: string;
}

export interface SiteContent {
  nav: NavCopy;
  hero: HeroCopy;
  social: readonly SocialLink[];
  projects: ProjectsCopy;
  ecosystem: EcosystemCopy;
  experience: ExperienceCopy;
  about: AboutCopy;
  contact: ContactCopy;
  footer: string;
}

export interface VideoProject {
  id: string;
  title: string;
  hook: string;
  subtitle: string;
  duration: string;
  aspectRatio: string;
  resolution: string;
  role: string;
  client: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  editingTechniques: string[];
  videoSrc?: string;
  instagramUrl?: string;
  posterThumb: string;
  transcriptHook: string;
  transcriptBullets: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  deliverables: string[];
  tags: string[];
  clientOrOrg: string;
  dateRange: string;
  color: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  honors?: string;
  description: string;
  accentColor: string;
  badge: string;
}

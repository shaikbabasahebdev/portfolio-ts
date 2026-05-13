export interface Skill {
  icon: string;
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  date: string;
  role: string;
  points: string[];
}

export interface Project {
  year: string;
  icon: string;
  image: string;
  title: string;
  desc: string;
  tech: string[];
  link: string | null;
  linkLabel: string;
}

export interface FormState {
  name: string;
  email: string;
  subject: string;
  msg: string;
}

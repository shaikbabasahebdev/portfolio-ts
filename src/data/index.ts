import type { Skill, ExperienceItem, Project } from '../types';

export const navItems: string[] = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const skills: Skill[] = [
  {
    icon: '⟨/⟩',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'Java', 'Golang'],
  },
  {
    icon: '◈',
    title: 'Front-End',
    items: ['React.js', 'Next.js', 'Material-UI', 'TailwindCSS', 'Bootstrap'],
  },
  {
    icon: '⬡',
    title: 'Back-End',
    items: ['Node.js', 'Express.js', 'Gin (Go)', 'GORM', 'REST APIs'],
  },
  {
    icon: '◎',
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    icon: '☁',
    title: 'Cloud & Tools',
    items: ['AWS Lambda', 'AWS S3', 'Git / GitHub', 'Linux', 'JWT', 'NextAuth'],
  },
  {
    icon: '★',
    title: 'Certifications',
    items: ['Google IT Automation', 'Python · Coursera', 'Brilliant Beginner Award'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'SoftSuave Technologies Pvt Ltd',
    date: 'Jul 2023 — Present',
    role: 'Full Stack Developer · Bangalore, India',
    points: [
      'Enhanced UI of an analytics platform using React.js, TypeScript, and Next.js; integrated AWS Lambda, S3, and PostgreSQL for scalability and performance.',
      'Built a full-stack Trello web application clone using React.js, TypeScript, and Golang — task management with boards, lists, cards, and real-time notifications.',
      'Implemented authentication and authorization using JWT for secure user access; participated in code reviews, debugging, and testing.',
      'Collaborated with senior developers to build responsive, user-friendly React.js front-end components aligned with design specifications.',
    ],
  },
  {
    company: 'Qualex Consulting Services, Inc',
    date: 'May 2023 — Jul 2023',
    role: 'Software Development Engineer · Hyderabad, India',
    points: [
      'Integrated React.js front-end with Node.js back-end services, using PostgreSQL and MongoDB for efficient data storage and retrieval.',
      'Collaborated with cross-functional teams on bug identification, reporting, and quality assurance across the development lifecycle.',
    ],
  },
];

export const projects: Project[] = [
  {
    year: '2025',
    icon: '🗺️',
    image: '/MasterMind.png',
    title: 'MasterMind',
    desc: 'Web application for the Ohio government to manage road strips, replicating legacy Stripe Master functionality with 3D map views and geometry editing.',
    tech: ['Next.js', 'TypeScript', 'NextAuth', 'WebGL'],
    link: 'https://www.onlinemastersuite.com/',
    linkLabel: 'Live Site ↗',
  },
  {
    year: '2024',
    icon: '🛒',
    image: '/EasternGate.png',
    title: 'Eastern Gate Online',
    desc: 'Responsive e-commerce application for construction hardware tools with seamless mobile and desktop shopping experience, full product catalog and cart.',
    tech: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL'],
    link: 'https://www.easterngate.online/',
    linkLabel: 'Live Site ↗',
  },
  {
    year: '2023',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=700&q=80',
    title: 'Trello Clone',
    desc: 'Full-stack Trello clone with task management (boards, lists, cards), real-time messaging and notification APIs for team collaboration.',
    tech: ['React.js', 'TypeScript', 'Golang', 'PostgreSQL'],
    link: null,
    linkLabel: 'Private Repo',
  },
  {
    year: '2024',
    icon: '🎨',
    image: '/ChromaCraft.png',
    title: 'ChromaCraft – Paint Business',
    desc: 'Full-featured paint business web app for ChromaCraft Painting Services, Bengaluru. Includes service listings (interior, exterior, texture, waterproofing), before & after portfolio, cost calculator, color visualizer, and client testimonials — serving 1200+ projects with 98% client satisfaction.',
    tech: ['React.js', 'TypeScript', 'TailwindCSS', 'Vite'],
    link: 'https://shaikbabasahebdev.github.io/paint-business/',
    linkLabel: 'Live Site ↗',
  },
  {
    year: '2025',
    icon: '🏨',
    image: '/Nirantara.png',
    title: 'Nirantara Resort',
    desc: 'A modern, responsive resort website for Nirantara — Bangalore\'s premier nature retreat. Features multi-page layout with room bookings, curated experiences (spa, archery, zipline, trekking), event venues, dining, packages, and guest testimonials. 90 min from Bangalore, 12+ acres of nature.',
    tech: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'App Router'],
    link: 'https://shaikbabasahebdev.github.io/nirantara/',
    linkLabel: 'Live Site ↗',
  },
];

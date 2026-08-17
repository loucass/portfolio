// ─── ALL content on this site lives here. Components never hardcode facts. ───

export const profile = {
  name: 'Lucas Monir William',
  firstName: 'Lucas',
  role: 'Backend Software Engineer',
  location: 'Alexandria, Egypt',
  phone: '+201225704530',
  phoneHref: 'tel:+201225704530',
  whatsapp: '+201225704530',
  whatsappHref: 'https://wa.me/201225704530',
  email: 'loucasmonir@gmail.com',
  emailHref: 'mailto:loucasmonir@gmail.com',
  linkedin: 'linkedin.com/in/loucas-monir',
  linkedinHref: 'https://www.linkedin.com/in/loucas-monir',
  github: 'github.com/loucass',
  githubHref: 'https://github.com/loucass',
  summary:
    'Backend Software Engineer building concurrency-safe, real-time, and event-driven systems with NestJS, Express, Laravel, PostgreSQL, Redis, and RabbitMQ.',
}

export type NavLink = { id: string; label: string }

export const navLinks: NavLink[] = [
  { id: 'specs', label: 'Specs' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const marqueeItems: string[] = [
  'NestJS',
  'TypeScript',
  'PostgreSQL',
  'Redis',
  'RabbitMQ',
  'Socket.IO',
  'React',
  'Laravel',
  'Python',
  'Docker',
  'Prisma',
  'CI/CD',
  'Node.js',
  'MySQL',
  'WebSockets',
  'Swagger',
]

export type SpecGroup = { label: string; items: string[] }

export const specGroups: SpecGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP'] },
  { label: 'Backend', items: ['NestJS', 'Express', 'Laravel', 'Node.js', 'Socket.IO', 'WebSockets'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma'] },
  { label: 'Messaging & Queues', items: ['RabbitMQ', 'BullMQ'] },
  { label: 'API & Security', items: ['REST', 'Swagger', 'JWT', 'RBAC', 'Helmet', 'Rate Limiting'] },
  { label: 'Frontend', items: ['React', 'Blade'] },
  { label: 'Testing', items: ['Unit', 'Integration'] },
  { label: 'Tools & Infra', items: ['Docker', 'Linux', 'Git', 'CI/CD'] },
]

/** The headline technologies, each with its brand color. */
export const featuredStack: { name: string; color: string }[] = [
  { name: 'NestJS', color: '#e0234e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'PostgreSQL', color: '#4169e1' },
  { name: 'Redis', color: '#d82c20' },
  { name: 'RabbitMQ', color: '#ff6600' },
  { name: 'React', color: '#61dafb' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Laravel', color: '#ff2d20' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Node.js', color: '#5fa04e' },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  type: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'Bunyan Tech',
    period: 'Jun 2025 – Apr 2026',
    location: 'Alexandria, Egypt',
    type: 'Full-time',
    points: [
      'Engineered production REST APIs in NestJS and TypeScript powering core business systems for 1,000+ active users, cutting average response time through PostgreSQL query optimization, database indexing, and Redis caching.',
      'Designed and implemented concurrency control using Mutex locks and database transactions, eliminating race conditions and guaranteeing data consistency under concurrent multi-user writes.',
      'Built a real-time task management system using React, Express, and WebSockets with role-based access and live status updates, reducing internal task-tracking overhead.',
    ],
  },
  {
    role: 'Technical Trainee',
    company: 'TEDx Dokki Youth',
    period: 'Feb 2025 – Sep 2025',
    location: 'Alexandria, Egypt',
    type: 'Hybrid',
    points: [
      'Designed and built a full-stack event booking system using Express, React, and PostgreSQL processing registrations for 200+ attendees, using transactional writes to prevent double-booking under concurrent requests.',
      'Automated registration and data-handling workflows for live events, replacing manual spreadsheet-based tracking during peak sign-up periods.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Prodigy InfoTech',
    period: 'Aug 2024 – Sep 2024',
    location: 'Remote',
    type: 'Internship',
    points: [
      'Built a full-stack job portal platform using React, Node.js, and MySQL with JWT authentication and role-based access for recruiters and workers, including REST APIs.',
    ],
  },
  {
    role: 'Backend Development Intern',
    company: 'Code Alpha',
    period: 'Jul 2024 – Aug 2024',
    location: 'Remote',
    type: 'Internship',
    points: [
      'Developed backend services in Node.js for a restaurant management platform, a ticket-booking system, and a URL shortener, designing normalized MySQL schemas and transaction-safe booking APIs to prevent double-booking.',
    ],
  },
]

export type Project = {
  title: string
  description: string
  href: string
  repo: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Egypt Supply Chain Visibility Platform',
    description:
      'Real-time shipment tracking with a self-hosted OSRM routing engine, live map-based shipment visualization and route-aware tracking. Redis cache layer for high-frequency dashboard reads, 20+ documented Swagger endpoints, hardened with Helmet, rate limiting, and signed tokens. CI pipeline builds and publishes images to GHCR.',
    href: 'https://github.com/ahmedmedhat-se/egypt-supply-chain-visibility',
    repo: 'ahmedmedhat-se/egypt-supply-chain-visibility',
    tags: ['NestJS', 'React', 'PostgreSQL', 'Prisma', 'Redis', 'RabbitMQ', 'Socket.IO', 'Docker', 'CI/CD'],
  },
  {
    title: 'Tournament Management System',
    description:
      'A custom PHP MVC framework built from scratch — front controller, PSR-4 autoloader, router — powering a multi-role tournament platform with live scoring on a normalized 6-table schema. Hardened with CSRF tokens and prepared statements, validated by 50 tests plus a GitHub Actions CI pipeline.',
    href: 'https://github.com/loucass/Tournament-management-system',
    repo: 'loucass/Tournament-management-system',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Blade', 'CI/CD'],
  },
  {
    title: 'ExifWipe',
    description:
      'Python CLI for lossless EXIF/metadata removal across 15+ image and document formats — JPEG, PNG, TIFF/RAW, HEIC, PDF and more — using file-signature detection instead of trusting extensions. Output integrity validated by a 131-test suite verified against ExifTool across 3 Python versions.',
    href: 'https://github.com/loucass/exifwipe',
    repo: 'loucass/exifwipe',
    tags: ['Python', 'CLI', 'CI/CD'],
  },
]

export type Achievement = {
  rank: string
  label: string
  detail: string
}

export const achievements: Achievement[] = [
  {
    rank: '#1',
    label: 'IEEE YESIST12 Junior Einstein',
    detail:
      'Ranked #1 nationally (2024) and Top 10 (2025); qualified for the international rounds in Malaysia and Tunisia.',
  },
  {
    rank: 'Top 7',
    label: 'Tech Tank Egypt — National',
    detail:
      'Pitched "WattWizard", an industrial energy-efficiency platform, to national industry leaders including Ahmed El-Sewedy, Dina Ghabbour, and Abdallah Sallam.',
  },
  {
    rank: '#3',
    label: 'Egypt Science & Engineering Fair (ISEF)',
    detail: 'Achieved 3rd place nationally (2024) and Top 10 (2025).',
  },
]

export type Education = { degree: string; school: string; period: string }

export const education: Education[] = [
  {
    degree: "Bachelor's degree in Computer Science",
    school: 'Alexandria University — Faculty of Computer and Data Science',
    period: '2025 – Expected 2029',
  },
  {
    degree: 'Programming Department — High School Diploma',
    school: 'WE Applied Technology School',
    period: 'Graduated 2025',
  },
]

export const year = new Date().getFullYear()
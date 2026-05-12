export const meta = {
  name: "Rohan Singh Rawat",
  title: "Full-Stack Software Engineer",
  email: "rsrofficial99.work@gmail.com",
  phone: "+91 9807474610",
  linkedin: "https://linkedin.com/in/rsroff",
  github: "https://github.com/rsroff",
  location: "Remote",
  tagline: "I build things for the web.",
  subTagline:
    "5+ years crafting full-stack products — from hospitality platforms to crypto dashboards.",
  bio: [
    "I'm a senior software engineer with 5+ years of experience shipping production applications across hospitality, blockchain, and e-commerce domains. I own the full stack — from database schema to pixel-perfect UI.",
    "Currently at Majestic Vacation Management, I've architected platforms handling 1,500+ bookings/month and built crypto infrastructure tracking $250K+ in transactions. Previously at Devslane, I designed multi-tenant systems, integrated blockchain smart contracts, and led performance initiatives that halved API response times.",
    "I work best at the intersection of clean architecture and tangible product impact. Whether it's an NPM package, a real-time dashboard, or a multi-chain wallet system — I build it end to end.",
  ],
  quote: "Shipping fast isn't reckless — it's a skill.",
  resumeUrl: "/resume.pdf",
} as const;

export const stats = [
  { label: "Production Apps", value: "10+" },
  { label: "Transactions Tracked", value: "$250K+" },
  { label: "Bookings / Month", value: "1,500+" },
  { label: "Years Experience", value: "5+" },
] as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Majestic Vacation Management",
    role: "Full-Stack Software Engineer",
    period: "April 2025 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Delivered 3 production full-stack applications using Next.js, TypeScript, and Prisma, owning end-to-end architecture.",
      "Architected a hospitality platform supporting bookings, Pro memberships, and Priority Pass integration — handling 1,500+ bookings/month.",
      "Revamped the UI of a crypto payment gateway for fiat-priced products, shipped as an NPM package with a pay-to-address flow for wallet-less payments.",
      "Built a multi-chain portfolio system (EVM + Sui) and a crypto payment tracking dashboard handling $250K+ in transactions, with crypto-to-fiat conversion and token swap functionality.",
      "Streamlined backend architecture using Prisma ORM and Next.js Server Actions, improving scalability and maintainability.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Web3", "EVM", "Sui", "React"],
  },
  {
    company: "Devslane",
    role: "Software Development Engineer",
    period: "June 2022 – April 2025",
    location: "Remote",
    bullets: [
      "Designed a multi-tenant backend system, reducing infrastructure costs by 20%.",
      "Integrated blockchain smart contracts minting 10,000+ NFTs and developed an AWS Lambda-based NFT generation pipeline for automated generation.",
      "Launched real-time push notification systems (FCM) and CI/CD pipelines (GitHub Actions), improving release reliability.",
      "Improved authentication with passwordless login + OAuth, increasing registrations and reducing support overhead.",
      "Built loyalty and digital display systems, driving higher retention and sales growth.",
    ],
    stack: [
      "Node.js",
      "AdonisJS",
      "AWS Lambda",
      "AWS EC2",
      "Blockchain",
      "FCM",
      "GitHub Actions",
      "OAuth",
    ],
  },
  {
    company: "Devslane",
    role: "Software Development Engineer — Intern",
    period: "May 2019 – June 2022",
    location: "Remote",
    bullets: [
      "Optimized backend APIs, reducing response time by 50% and improving overall system performance.",
      "Replaced manual workflows with a full-stack web application, improving operational efficiency by 50%.",
      "Introduced a GraphQL-like querying layer in REST APIs, reducing payload size and improving response speed.",
    ],
    stack: ["Node.js", "REST APIs", "GraphQL", "JavaScript"],
  },
];

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Hospitality Platform",
    description:
      "End-to-end vacation management platform supporting bookings, Pro memberships, and Priority Pass integration.",
    bullets: [
      "Handles 1,500+ bookings/month with real-time availability and payment processing.",
      "Pro membership system with tiered access controls and Priority Pass entitlements.",
    ],
    stack: ["Next.js", "Prisma", "TypeScript", "PostgreSQL", "TailwindCSS"],
    featured: true,
  },
  {
    title: "Crypto Payment Gateway",
    description:
      "Crypto payment gateway for fiat-priced products, shipped as an NPM package for easy website integration.",
    bullets: [
      "Pay-to-address flow enabling wallet-less crypto payments for end users.",
      "Multi-chain support (EVM + Sui) with crypto-to-fiat conversion via bridge APIs.",
    ],
    stack: ["Web3", "TypeScript", "Next.js", "PostgreSQL", "TailwindCSS", "EVM", "Sui"],
    featured: true,
  },
  {
    title: "Clean4Wheels",
    description:
      "Full-stack web application for car detailing services with multi-location and package-based booking workflows.",
    bullets: [
      "Drove a 45% increase in online bookings through streamlined UX and booking flow.",
      "Configured Google Maps API for geolocation, distance calculation, and route optimization achieving 95% accuracy.",
    ],
    stack: ["Next.js", "TypeScript", "Nodejs", "PostgreSQL", "Google Maps API", "TailwindCSS"],
    featured: true,
  },
  {
    title: "Furniture App",
    description:
      "Mobile-responsive e-commerce platform for bulk purchasing of luxury furniture.",
    bullets: [
      "Enhanced user engagement and increased sales by 30% through optimized product discovery.",
      "Fully responsive layout with a streamlined bulk-order checkout flow.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
  },
];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "AdonisJS", "REST APIs", "Sequelize", "Prisma ORM", "PostgreSQL"],
  },
  {
    label: "Blockchain / Web3",
    skills: [
      "Smart Contract Integration",
      "EVM",
      "Sui",
      "Crypto->Fiat",
      "Bridge APIs",
      "Token Swaps",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "AWS EC2",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    label: "Patterns",
    skills: [
      "System Design",
      "Microservices",
      "Multi-tenancy",
      "Performance Optimization",
    ],
  },
];

export const milestones = [
  { year: "2019", label: "Joined Devslane as Intern" },
  { year: "2022", label: "Graduated B.Tech, AKTU" },
  { year: "2022", label: "Promoted to SDE" },
  { year: "2025", label: "Joined Majestic Vacation Management" },
  { year: "Now", label: "Building at Scale" },
];

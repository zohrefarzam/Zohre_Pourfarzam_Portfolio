import { asset } from "../utils/asset";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
  { text: "Products", imgPath: asset("images/concepts.svg") },
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
  { text: "Products", imgPath: asset("images/concepts.svg") },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "", label: "Companies Worked With" },
  { value: 2, suffix: "", label: "International Collaborations" },
  { value: 40, suffix: "%", label: "Lighthouse Score Improvement" },
];

const logoIconsList = [
  {
    name: "Impact AI",
    imgPath: asset("images/logos/impactAi-logo.webp"),
    imgClassName: "h-9 md:h-11",
  },
  {
    name: "Hera",
    imgPath: asset("images/logos/Hera-logo.webp"),
    imgClassName: "h-10 md:h-12",
  },
  {
    name: "Microsoft",
    imgPath: asset("images/logos/company-logo-2.png"),
    imgClassName: "h-8 md:h-10",
  },
  {
    name: "ESA",
    imgPath: asset("images/logos/ESA-logo-white.webp"),
    imgClassName: "h-9 md:h-11",
  },
  {
    name: "Gennova",
    imgPath: asset("images/logos/gennova.png"),
    imgClassName: "h-10 md:h-12",
  },
  {
    name: "Arsh",
    imgPath: asset("images/logos/arsh.png"),
    imgClassName: "h-14 md:h-16",
  },
  {
    name: "Flightio",
    imgPath: asset("images/logos/flightio.png"),
    imgClassName: "h-10 md:h-10",
  },
];

const abilities = [
  {
    imgPath: asset("images/seo.png"),
    title: "Front-end Architecture",
    desc: "Scalable component design, monorepo structure, and reusable UI systems.",
  },
  {
    imgPath: asset("images/chat.png"),
    title: "Cross-functional Collaboration",
    desc: "Working effectively with international teams and communicating in English.",
  },
  {
    imgPath: asset("images/time.png"),
    title: "Performance Optimization",
    desc: "Core Web Vitals, SSR, code splitting, and measurable speed improvements.",
  },
];

const techStackImgs = [
  {
    name: "React / Next.js",
    imgPath: asset("images/logos/react.png"),
  },
  {
    name: "NestJS",
    imgPath: asset("images/logos/nestjs.svg"),
  },
  {
    name: "React Native",
    imgPath: asset("images/logos/react.png"),
  },
  {
    name: "Node.js / Express",
    imgPath: asset("images/logos/node.png"),
  },
  {
    name: "WordPress",
    imgPath: asset("images/logos/wordpress.svg"),
  },
];

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "core" },
      { name: "TypeScript", level: "core" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "NestJS", level: "strong" },
      { name: "React Native", level: "strong" },
      { name: "React Query", level: "strong" },
      { name: "Redux Toolkit", level: "strong" },
      { name: "Redux-Saga", level: "working" },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    skills: [
      { name: "HTML5", level: "core" },
      { name: "CSS3", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "LESS", level: "working" },
      { name: "Sass", level: "working" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Integration",
    skills: [
      { name: "Front-End Architecture", level: "core" },
      { name: "GraphQL", level: "strong" },
      { name: "RESTful APIs", level: "core" },
      { name: "Firebase", level: "strong" },
      { name: "Node.js", level: "strong" },
      { name: "Express", level: "strong" },
      { name: "WordPress", level: "working" },
      { name: "Monorepo Management", level: "strong" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    skills: [
      { name: "Git", level: "core" },
      { name: "Figma", level: "strong" },
      { name: "Storybook", level: "strong" },
      { name: "Jest", level: "working" },
      { name: "Testing Library", level: "working" },
      { name: "Playwright", level: "working" },
      { name: "PWA", level: "working" },
      { name: "Agile / Scrum", level: "strong" },
      { name: "Prompt Engineering", level: "strong" },
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: asset("models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: asset("models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: asset("models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: asset("models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: asset("models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    highlight:
      "Delivered Gennova (Remotion) and a Next.js ecommerce storefront as an independent freelancer.",
    imgPath: asset("images/logos/gennova.png"),
    logoPath: asset("images/logos/gennova.png"),
    company: "Freelance",
    title: "Frontend Developer",
    date: "2025 – Present",
    location: "Remote",
    responsibilities: [
      "Built Gennova, an AI social media post creator, using Remotion to generate dynamic, template-driven video and motion graphics from React components.",
      "Designed reusable Remotion compositions for branded social posts, enabling clients to produce consistent video content at scale.",
      "Developed a full ecommerce storefront with Next.js, including product catalog, cart flow, and responsive UI optimized for performance.",
      "Leveraged Next.js App Router, server components, and image optimization to deliver fast load times and a smooth shopping experience.",
    ],
  },
  {
    highlight:
      "Led the Hera project in collaboration with ESA and Microsoft on an AI-powered platform.",
    imgPath: asset("images/logos/impactAi-logo.webp"),
    logoPath: asset("images/logos/impact-ai.avif"),
    company: "Impact AI",
    title: "React Developer",
    date: "June 2024 – January 2026",
    location: "Remote",
    responsibilities: [
      "Built an AI-powered platform to monitor and analyze AI products, using AI agents to automate workflows with Microsoft startups.",
      "Designed and implemented clean, user-friendly UI using Next.js and Figma.",
      "Introduced HeroUI and improved design consistency and component reuse.",
      "Set up and maintained a monorepo for better scalability and team collaboration.",
      "Added Storybook for component documentation and supported unit testing.",
    ],
  },
  {
    highlight:
      "Rebuilt the entire platform and improved Lighthouse scores by 40% through performance optimization.",
    imgPath: asset("images/logos/flightio.png"),
    logoPath: asset("images/logos/flightio-logo.png"),
    company: "Flightio",
    title: "React Developer",
    date: "June 2022 – May 2024",
    location: "Tehran, Iran",
    responsibilities: [
      "Reimplemented the whole platform with a new Figma design using Next.js and Redux Toolkit.",
      "Optimized performance using lazy loading, code splitting, React Server Components, SSR, and caching.",
      "Improved Core Web Vitals and increased Lighthouse score by 40%.",
      "Conducted rigorous code reviews to enforce best practices and maintain high code quality.",
    ],
  },
  {
    highlight:
      "Built a meeting planner and task management web app with custom Jalali calendar support.",
    imgPath: asset("images/logos/arsh.png"),
    logoPath: asset("images/logos/arsh.png"),
    company: "Arsh",
    title: "Front-End Developer",
    date: "March 2021 – July 2022",
    location: "Tehran, Iran",
    responsibilities: [
      "Built a meeting planner and task management web app comparable to Google Calendar with React.",
      "Customized calendar libraries to support the Jalali (Persian) date system using Ant Design.",
    ],
  },
  // {
  //   highlight:
  //     "Delivered a scalable financial mobile app with modular architecture and Redux-Saga state management.",
  //   imgPath: asset("images/exp4.png"),
  //   logoPath: asset("images/logo4.png"),
  //   company: "Inotec",
  //   title: "React Native Developer",
  //   date: "March 2019 – March 2020",
  //   location: "Tehran, Iran",
  //   responsibilities: [
  //     "Built a scalable financial mobile app in React Native with a modular architecture focused on performance and maintainability.",
  //     "Implemented Redux-Saga for robust async state management, improving data flow reliability and reducing side effects.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "Freelance",
    imgPath: asset("images/logos/gennova.png"),
  },
  {
    name: "Impact AI",
    imgPath: asset("images/logo1.png"),
  },
  {
    name: "Flightio",
    imgPath: asset("images/logo2.png"),
  },
  {
    name: "Arsh",
    imgPath: asset("images/logo3.png"),
  },
  {
    name: "Inotec",
    imgPath: asset("images/logo4.png"),
  },
];

const educationCards = [
  {
    degree: "Bachelor of Electronic Engineering",
    institution: "Hamadan University",
    date: "2013 – 2018",
    location: "Hamadan, Iran",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: asset("images/github.svg"),
    url: "https://github.com/zohrefarzam",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  educationCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  skillCategories,
  navLinks,
};

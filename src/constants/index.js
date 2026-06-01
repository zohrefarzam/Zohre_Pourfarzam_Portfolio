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
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Products", imgPath: "/images/concepts.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Products", imgPath: "/images/concepts.svg" },
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
    imgPath: "/images/logo1.png",
  },
  {
    name: "Flightio",
    imgPath: "/images/logo2.png",
  },
  {
    name: "Arsh",
    imgPath: "/images/logo3.png",
  },
  {
    name: "Inotec",
    imgPath: "/images/logo4.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Front-end Architecture",
    desc: "Scalable component design, monorepo structure, and reusable UI systems.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Cross-functional Collaboration",
    desc: "Working effectively with international teams and communicating in English.",
  },
  {
    imgPath: "/images/time.png",
    title: "Performance Optimization",
    desc: "Core Web Vitals, SSR, code splitting, and measurable speed improvements.",
  },
];

const techStackImgs = [
  {
    name: "React / Next.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "TypeScript",
    imgPath: "/images/code.svg",
  },
  {
    name: "React Native",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/designs.svg",
  },
  {
    name: "GraphQL / Node.js",
    imgPath: "/images/logos/node.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    highlight:
      "Led the Hera project in collaboration with ESA and Microsoft on an AI-powered platform.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
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
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
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
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    company: "Arsh",
    title: "Front-End Developer",
    date: "March 2021 – July 2022",
    location: "Tehran, Iran",
    responsibilities: [
      "Built a meeting planner and task management web app comparable to Google Calendar with React.",
      "Customized calendar libraries to support the Jalali (Persian) date system using Ant Design.",
    ],
  },
  {
    highlight:
      "Delivered a scalable financial mobile app with modular architecture and Redux-Saga state management.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    company: "Inotec",
    title: "React Native Developer",
    date: "March 2019 – March 2020",
    location: "Tehran, Iran",
    responsibilities: [
      "Built a scalable financial mobile app in React Native with a modular architecture focused on performance and maintainability.",
      "Implemented Redux-Saga for robust async state management, improving data flow reliability and reducing side effects.",
    ],
  },
];

const expLogos = [
  {
    name: "Impact AI",
    imgPath: "/images/logo1.png",
  },
  {
    name: "Flightio",
    imgPath: "/images/logo2.png",
  },
  {
    name: "Arsh",
    imgPath: "/images/logo3.png",
  },
  {
    name: "Inotec",
    imgPath: "/images/logo4.png",
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
    imgPath: "/images/github.svg",
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
  navLinks,
};

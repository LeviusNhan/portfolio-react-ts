import hero from "../assets/images/hero.png";

export interface Project {
  id: number;
  image: string;

  technologies: string[];

  title: string;

  description: string;

  live: string;

  source?: string;

  isLive: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    image: hero,

    technologies: [
      "HTML",
      "SCSS",
      "Python",
      "Flask",
    ],

    title: "ChertNodes",

    description: "Minecraft servers hosting",

    live: "#",

    source: "#",

    isLive: true,
  },

  {
    id: 2,
    image: hero,

    technologies: [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
    ],

    title: "ProtectX",

    description: "Discord anti-crash bot",

    live: "#",

    isLive: true,
  },

  {
    id: 3,
    image: hero,

    technologies: [
      "CSS",
      "Express",
      "Node.js",
    ],

    title: "Kahoot Answers Viewer",

    description: "Get answers to your kahoot quiz",

    live: "#",

    isLive: true,
  },
];
import html_Css from "../assets/images/html_Css.jpg";
import react_Ts from "../assets/images/react_Ts.jpg";
import tailwindSs from "../assets/images/taiwindss.jpg";
export interface Project {
  id: number;
  image: string;

  technologies: string[];

  title: string;

  description: string;

  live: string;

  source?: string;

  // isLive: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    image: html_Css,

    technologies: [
      "HTML",
      "CSS"
    ],

    title: "Html, CSS, SCSS",

    description: "Portfolio project with HTML, CSS and SCSS",

    live: "https://github.com/LeviusNhan/portfolio-react-ts/tree/develop",

    source: "#",
  },

  {
    id: 2,
    image: react_Ts,

    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Node.js",
    ],

    title: "Javascripts Ecosystem",

    description: "Portfolio project with React, TypeScript, Express and Node.js",

    live: "https://github.com/LeviusNhan/portfolio-react-ts/tree/develop",
  },

  {
    id: 3,
    image: tailwindSs,

    technologies: [
      "TailwindSs",
      "CSS",
      "Boostrap 5",
    ],

    title: "CSS Ecosystem",

    description: "Portfolio project with TailwindSs, CSS and Boostrap 5",

    live: "https://github.com/LeviusNhan/portfolio-react-ts/tree/develop",
  },

   {
    id: 4,
    image: tailwindSs,

    technologies: [
      "Structure projects"
    ],

    title: "My README.md",

    description: "Portfolio project with my README.md. Click to read all",

    live: "https://github.com/LeviusNhan/portfolio-react-ts/blob/develop/README.md",
  },
];
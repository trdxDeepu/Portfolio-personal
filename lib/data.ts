import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import realestate from "@/public/Real-Estate-app.png";
import wildoasis from "@/public/The-Wild-oasis.png";
import fastpizza from "@/public/Fast-React-Pizza.png";
import packaging from "@/public/Packaging.png";
import evento from "@/public/evento.png";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faGit,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: '10',
  //   location: 'Delhi,India',
  //   description:
  //     'I have done my 10 from SBBM Govt. Sarvodaya Vidyalaya with 9.8 CGPA.',
  //   icon: React.createElement(LuGraduationCap),
  //   date: '2017-2018'
  // },
  {
    title: "12",
    location: "Delhi,India",
    description:
      "I have done my 12 from SBBM Govt. Sarvodaya Vidyalaya with 72 %.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
  {
    title: "B.tech",
    location: "Delhi,India",
    description:
      "I am recently graduated in B.tech from NSUT East Campus in Electronics and communication branch with 8.4 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Web developer",
    location: "Remote",
    description:
      "I worked as a Web developer for 1 months in Sparks foundation.I have work with team and done my task within the time frame.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - May - 2022",
  },
  {
    title: "Open Source Contributer",
    location: "Remote",
    description:
      "I have successfully contributed to Hacktoberfest  in which i have contributed in some github reposiories in the field of web development. I have get an achivement of getting certifcate of planting a tree. ",
    icon: React.createElement(FaReact),
    date: "October - 2023",
  },
  {
    title: "React Developer,Intern",
    location: "Remote,Thor Solution",
    description:
      "Currently working as a React developer Intern at Thor Solution,where i have used all my skills in creating projects, and learn how to be a part of team, how to work in industry level. I have learned new things like headless CMS, and Gsap animation,Next.js ",
    icon: React.createElement(FaReact),
    date: "November 2023 - April 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate App",
    description:
      "I created a Real estate app where a user can put his/her home to on sell and rent. A user can create listings of home those he/she wants to sell and put on rent.",
    tags: ["React", "Firebase", "Tailwind", "React-Router-Dom"],
    imageUrl: realestate,
    projectLink: "https://estate-app-bice.vercel.app/",
  },
  {
    title: "Evento",
    description:
      "Created event app with Next.js, TypeScript, Prisma, Zod, and Framer Motion. Efficient data retrieval with Prisma, type safety via Zod.",
    tags: [
      "Next.js",
      "Tailwind Css",
      "Prisma",
      "TypeScript",
      "Zod",
      "Framer motion",
    ],
    imageUrl: evento,
    projectLink: "https://evento-event-nine.vercel.app/",
  },
  {
    title: "Fast React pizza",
    description:
      "A pizza web app where a user can create and order and can increase and decrease the quantities of pizza and can get location by using getposition to check delivery also.",
    tags: ["React", "Redux", "Tailwind", "Redux-Toolkit", "React-Router-Dom"],
    imageUrl: fastpizza,
    projectLink: "https://fast-react-pizza-co-blush.vercel.app/",
  },
  {
    title: "Packaging app",
    description:
      "A packaging app where a user can check what things he has packed. User can make list and sort the things according to the input order, description, and packed status.",
    tags: ["React", "css", "Hooks"],
    imageUrl: packaging,
    projectLink: "https://packing-app.vercel.app/",
  },
] as const;

export const skillsData = [
  { skill: "HTML", icon: faHtml5 },
  { skill: "CSS", icon: faCss3 },
  { skill: "JavaScript", icon: faJs },
  { skill: "Python", icon: faPython },
  { skill: "React", icon: faReact },
  { skill: "Next.js", icon: faReact },
  { skill: "Git", icon: faGit },
  { skill: "Tailwind", icon: faCss3 },
  { skill: "Redux", icon: faCodeBranch },
  { skill: "React Query", icon: faCodeBranch },
  { skill: "Firebase", icon: faDatabase },
  { skill: "Supabase", icon: faDatabase },
  { skill: "Strapi", icon: faDatabase },
  { skill: "Gsap", icon: faCss3 },
];

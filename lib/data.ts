import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import realestate from '@/public/Real-Estate-app.png'
import wildoasis from '@/public/The-Wild-oasis.png'
import fastpizza from '@/public/Fast-React-Pizza.png'
import packaging from '@/public/Packaging.png'
import { faHtml5, faCss3, faJs, faReact, faNode, faGit, faPython } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019'
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021'
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present'
  }
] as const

export const projectsData = [
  {
    title: 'Real Estate App',
    description:
      'I created a Real estate app where a user can put his/her home to on sell and rent. A user can create listings of home those he/she wants to sell and put on rent.',
    tags: ['React', 'Firebase', 'Tailwind', 'React-Router-Dom'],
    imageUrl: realestate
  },
  {
    title: 'The Wild Oasis',
    description:
      'The wild oasis app is a hotel app where user can create there own listings of cabins and can book the cabins where user can check-in, check-out the hotel.',
    tags: [
      'React',
      'TanStack',
      'Styled-Components',
      'Supabase',
      'React-Router-Dom'
    ],
    imageUrl: wildoasis
  },
  {
    title: 'Fast React pizza',
    description:
      'A pizza web app where a user can create and order and can increase and decrease the quantities of pizza and can get location by using getposition to check delivery also.',
    tags: ['React', 'Redux', 'Tailwind', 'Redux-Toolkit', 'React-Router-Dom'],
    imageUrl: fastpizza
  },
  {
    title: 'Packaging app',
    description:
      'A packaging app where a user can check what things he has packed. User can make list and sort the things according to the input order, description, and packed status.',
    tags: ['React', 'css','Hooks'],
    imageUrl: packaging
  }
] as const


export const skillsData = [
  { skill: 'HTML', icon: faHtml5 },
  { skill: 'CSS', icon: faCss3 },
  { skill: 'JavaScript', icon: faJs },
  { skill: 'Python', icon: faPython },
  { skill: 'React', icon: faReact },
  { skill: 'Next.js', icon: faReact },
  { skill: 'Git', icon: faGit },
  { skill: 'Tailwind', icon: faCss3 },
  { skill: 'Redux', icon: faCodeBranch },
  { skill: 'React Query', icon: faCodeBranch },
  { skill: 'Firebase', icon: faDatabase },
  { skill: 'Supabase', icon: faDatabase },

];

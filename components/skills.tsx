"use client";

import React from "react";
import SectionHeading from "./section-heading";


import { useSectionInView } from "@/hooks/hooks";

import IconCloud from "./ui/icon-cloud";



const slugs = [
  "typescript",
  "javascript",
  "python",
  "cpp",
  "react",
  "bootstrap",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "tailwindcss",
  "postgresql",
  "firebase",
  "styledcomponents",
  "vercel",
  "gsap",
  "git",
  "mongodb",
  "github",
  "gitlab",
  "visualstudiocode",
];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.9);

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-center gap-2
      text-lg text-gray-800
      "
      >
        {/* {skillsData.map((skill, index) => (
          // <motion.li
          //   key={index}
          //   className='bg-white borderBlack rounded-xl
          //       px-5 py-3 w-28 text-center dark:bg-white/10 dark:text-white/80 '
          //   variants={fadeInAnimationVariants}
          //   initial='initial'
          //   whileInView='animate'
          //   custom={index}
          // >
          //   <FontAwesomeIcon
          //     icon={skill.icon}
          //     className='text-gray-700 py-2 px-4 hover:text-gray-950 dark:text-white/60 dark:hover:text-white/80'
          //     size='2x'
          //   />
          //   {skill.skill}
          // </motion.li>
         
        ))} */}
        <div>
          <IconCloud iconSlugs={slugs}></IconCloud>
        </div>
      </ul>
    </section>
  );
}

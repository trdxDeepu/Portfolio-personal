'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSectionInView } from '@/hooks/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index
    }
  })
}

export default function Skills () {
  const { ref } = useSectionInView('Skills', 0.85)

  return (
    <section
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
      ref={ref}
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>
      <ul
        className='flex flex-wrap justify-center gap-2
      text-lg text-gray-800
      '
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white border border-black/[0.1] rounded-xl 
                px-5 py-3 w-28 text-center '
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className='text-gray-700 py-2 px-4 hover:text-gray-950'
              size='2x'
            />
            {skill.skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/hooks/hooks'

function About () {
  const { ref } = useSectionInView('About', 0.5)

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175
      }}
      id='about'
      ref={ref}
    >
      <SectionHeading> About me </SectionHeading>
      <p className='mb-3'>
        I have completed my graduation in
        <span className='font-medium'> B.tech </span>
        <span className='font-medium'> ECE. </span>I am passionate about
        <span className='font-medium italic'> Web development. </span>
        I have  <span className='italic'> 6 months   </span> of {' '}
        <span className='font-medium'> experience </span>
        as React Developer at 
        <span className='font-medium italic'> Thor Solutions. </span>
        My core stack is{' '}
        <span className='font-medium'>
          {' '}
          React, Next.js, Styled Component,TailwindCSS, Supabase, RESTAPI.{' '}
        </span>
        I am also familiar with{' '}
        <span className='font-medium italic'> Typescript, MongoDB. </span>
        I&apos;m currently looking for an
        <span className='font-bold'> Full time opportunity </span> and
        <span className='font-bold italic'> internship </span>
        to showcase my skills and gain some{' '}
        <span className='font-medium'> experience </span> while working
        practically.
      </p>
      <p>
        <span className='italic'>When i&apos;m not doing coding </span>
        I,enjoy playing video games, watching movies. I also enjoy
        <span className='font-medium'> learning new things </span>. I am
        currently learning about
        <span className='font-medium'>  BackEnd Development </span>
      </p>
    </motion.section>
  )
}

export default About

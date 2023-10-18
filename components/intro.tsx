'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.3
            }}
          >
            <Image
              src='/1650879848538.png'
              alt='DeependraSingh'
              width='120'
              height='80'
              quality='95'
              priority={true}
              className='rounded-full h-24 w-24 border-[0.35rem]
                border-white object-cover shadow-xl '
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 !leading-[1.5] px-4 mt-4 text-xl 
      font-medium sm:text-2xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {' '}
        Hello
        <span className='font-bold'>, I&apos;m Deependra Singh.</span> I&apos;m
        a<span className='font-bold'> FrontEnd Developer </span>
        <span> as a </span>
        <span className='italic font-bold'>Fresher</span>
        <span> who wanted to gain some </span>
        <span className='font-bold'> experience </span>
        <span>
          {' '}
          in industry field to do some practical things in real world
          applications.{' '}
        </span>
        <span>I love to do </span>
        <span>
          building
          <span className='font-bold'> websites </span>
          and learning more about{' '}
          <span className='italic font-bold'> Web development </span>
        </span>
        . My focus is
        <span className='italic font-bold underline '> React </span>
        and currently learning{' '}
        <span className='italic font-bold underline'>(Next.js)</span>.
      </motion.p>

      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'keyframes',
          duration: 0.4,
          ease: 'backInOut'
        }}
      >
        <Link
          href='#contact'
          className='flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
        >
          Contact me here{' '}
          <BsArrowRight className='transition opacity-70 group-hover:translate-x-1 ' />{' '}
        </Link>

        <a
          className='flex items-center gap-2 py-3 text-gray-900 bg-white border rounded-full outline-none cursor-pointer px-7 group focus:scale-110 hover:scale-110 active:scale-105 border-black/10'
          href='/DeependraSingh__Resume.pdf'
          download={true}
        >
          Download CV{' '}
          <HiDownload className='transition translate-y-0 opacity-70 group-hover:translate-y-1' />{' '}
        </a>
        <a className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full focus:scale-110 hover:scale-110 active:scale-105'>
          <BsLinkedin />
        </a>
        <a className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full text-[1.35rem] focus:scale-110 hover:scale-110  active:scale-105'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro

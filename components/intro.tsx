'use client'

import React,{useEffect} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

const Intro = () => {

  const { ref, inView } = useInView({
    threshold: 0.75
  })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) {
      setActiveSection('Home')
    }
  }, [inView, setActiveSection])

  return (
    <section
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
      ref={ref}
    >
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
      <motion.h1
        className='mb-10 !leading-[1.5] px-4 mt-4 text-xl 
      font-medium sm:text-2xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {' '}
        Hello
        <span className='font-bold'>, I&apos;m Deependra Singh.</span> I&apos;m
        a<span className='font-bold'> FrontEnd Developer </span>
        with skill of
        <span className='italic font-bold underline '> React </span>
        and currently learning{' '}
        <span className='italic font-bold underline'>(Next.js)</span>.
      </motion.h1>

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
          <HiDownload className='transition translate-y-0 opacity-70 group-hover:translate-y-1 hover:text-gray-950' />{' '}
        </a>
        <a
          className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950'
          href='https://www.linkedin.com/in/deependrasingh/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full text-[1.35rem] focus:scale-110 hover:scale-110  active:scale-105 hover:text-gray-950'
          href='https://github.com/trdxlucifer'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro

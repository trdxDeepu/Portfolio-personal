'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/hooks/hooks'

export default function Experience () {
  const { ref } = useSectionInView('Experience', 0.65)

  console.log(VerticalTimelineElement)

  return (
    <section id='experience' ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor='#e5e7eb' animate={true}>
        {experiencesData.map((item, index) => (
          <>
            <VerticalTimelineElement
              key={index}
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.853)',
                textAlign: 'left',
                padding: '1.3rem 2rem'
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af'
              }}
              className=''
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='capitalize font-semibold'>{item.title}</h3>
              <p className='font-normal !mt-0  '>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </>
        ))}
      </VerticalTimeline>
    </section>
  )
}

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

  return (
    <section id='experience' ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor='red'>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement>
              <h3>{experience.title}</h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

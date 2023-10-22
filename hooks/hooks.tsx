"use client"

import { useEffect } from 'react'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/lib/types'

export function useSectionInView (sectionName: SectionName,threshold = 0.2) {
  const { ref, inView } = useInView({threshold})
  const { setActiveSection, timeofLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeofLastClick, sectionName])

  return {
    ref,
  }
}

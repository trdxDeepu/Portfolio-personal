'use client'

import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'


type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeofLastClick: number
  setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({
  children
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeofLastClick, setTimeofLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeofLastClick,
        setTimeofLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider

export function useActiveSectionContext () {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used  within ActioncntextProvider'
    )
  }

  return context
}

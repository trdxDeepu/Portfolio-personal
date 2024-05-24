
import About from '@/components/about'
import Experience from '@/components/experience'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Sectiondivider from '@/components/sectiondivider'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import { OrbitingCirclesDemo } from '@/components/orbit-circle'




export default function Home () {
  return (
    <main className='flex flex-col items-center px-4'>

    <div className='flex items-center justify-between gap-x-10 px-5'>
      <Intro />
      <OrbitingCirclesDemo />

    </div>

      <Sectiondivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      
      </main>
  )
}

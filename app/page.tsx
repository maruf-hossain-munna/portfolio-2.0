import About from './components/about/About'
import Contact from './components/contact/Contact'
import Container from './components/container/Container'
import Expertise from './components/expertise/Expertise'
import HeroArea from './components/heroArea/HeroArea'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'

export default function Home() {
  return (
    <div className=''>
      <Container>
        <div className='flex flex-col gap-12 md:gap-28'>
          <HeroArea />
          <Services />
          <Projects />
          <Expertise />
          <About />
          <Contact />
        </div>
      </Container>
    </div>
  )
}

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Container from './components/container/Container'
import HeroArea from './components/heroArea/HeroArea'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'

export default function Home() {
  return (
    <div className=' mt-14'>
      <Container>
        <div className='flex flex-col gap-28'>
          <HeroArea />
          <Services />
          <Projects />
          <About />
          <Contact />
        </div>
      </Container>
    </div>
  )
}

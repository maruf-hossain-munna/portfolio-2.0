import Container from './components/container/Container'
import HeroArea from './components/heroArea/HeroArea'

export default function Home() {
  return (
    <div className=' mt-14'>
      <Container>
        <div >
          <HeroArea />
        </div>
      </Container>
    </div>
  )
}

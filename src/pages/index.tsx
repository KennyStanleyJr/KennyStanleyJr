import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Intro from '@/components/ui/Intro'
import HeroModel from '@/components/ui/HeroModel'
import { Canvas } from '@react-three/fiber'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/layout/HeroSection'

export default function Home() {
  return (
    <>
      <Main>
        <Header>
          <Logo />
          <div className="hidden md:block">
            <Navigation />
          </div>
          <DarkModeToggle />
        </Header>
        <Container>
          <HeroSection>
            <Intro />
            <Canvas>
              <HeroModel />
            </Canvas>
          </HeroSection>
        </Container>
      </Main>
    </>
  )
}

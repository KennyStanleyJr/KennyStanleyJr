import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Intro from '@/components/ui/Intro'
import HeroModel from '@/components/ui/HeroModel'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <>
      <Main>
        <Header>
          <Logo />
          <Navigation />
          <DarkModeToggle />
        </Header>
        <div className="h-full flex">
          <Intro />

          <div className="flex-1">
            <Canvas>
              <HeroModel />
            </Canvas>
          </div>
        </div>
      </Main>
    </>
  )
}

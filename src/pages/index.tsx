import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Stars } from '@react-three/drei'

import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Intro from '@/components/ui/Intro'
import HeroModel from '@/components/ui/HeroModel'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/layout/HeroSection'

const Screen = ({ starsRef }: any) => {
  useFrame(() => {
    // Rotate the model a bit
    starsRef.current.rotation.z = starsRef.current.rotation.y += 0.0002
  })
  return (
    <>
      <Html fullscreen>
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
            </HeroSection>
          </Container>
        </Main>
      </Html>
    </>
  )
}

export default function Home() {
  const starsRef = useRef()

  return (
    <>
      <div className="h-screen">
        <Canvas>
          <Screen starsRef={starsRef} />
          <Stars
            ref={starsRef}
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />

          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

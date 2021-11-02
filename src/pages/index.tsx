import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Intro from '@/components/ui/Intro'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/layout/HeroSection'

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
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
      </div>
    </>
  )
}

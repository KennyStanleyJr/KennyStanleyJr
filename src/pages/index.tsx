import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Intro from '@/components/ui/Intro'
import Container from '@/components/layout/Container'

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <Main>
          <Header>
            <Logo />
            <Navigation />
            <DarkModeToggle />
          </Header>
          <Container>
            <Intro />
          </Container>
        </Main>
      </div>
    </>
  )
}

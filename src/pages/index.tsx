import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import DarkModeToggle from '@/components/DarkModeToggle'
import Intro from '@/components/Intro'
import Container from '@/components/layout/Container'

export default function Home() {
  return (
    <>
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
    </>
  )
}

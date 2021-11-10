import Navigation from '@/components/Navigation'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import AboutContent from '@/components/AboutContent'
import DarkModeToggle from '@/components/DarkModeToggle'
import Logo from '@/components/Logo'

export default function About() {
  return (
    <Main>
      <Header>
        <Logo />
        <Navigation />
        <DarkModeToggle />
      </Header>
      <Container>
        <AboutContent />
      </Container>
    </Main>
  )
}

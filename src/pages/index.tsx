import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Section from '@/components/layout/Section'
import Intro from '@/components/ui/Intro'

export default function Home() {
  return (
    <Main>
      <Header>
        <Logo />
        <Navigation />
        <DarkModeToggle />
      </Header>
      <Section>
        <Intro />
      </Section>
    </Main>
  )
}

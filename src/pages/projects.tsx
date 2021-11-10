import Navigation from '@/components/Navigation'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import ProjectsContent from '@/components/ProjectsContent'
import DarkModeToggle from '@/components/DarkModeToggle'
import Logo from '@/components/Logo'

export default function Projects() {
  return (
    <Main>
      <Header>
        <Logo />
        <Navigation />
        <DarkModeToggle />
      </Header>
      <Container>
        <ProjectsContent />
      </Container>
    </Main>
  )
}

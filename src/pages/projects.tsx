import Navigation from '@/components/domain/Navigation'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import ProjectsContent from '@/components/ui/ProjectsContent'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Logo from '@/components/ui/Logo'

export default function Projects() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
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
    </div>
  )
}

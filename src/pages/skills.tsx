import Navigation from '@/components/domain/Navigation'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/layout/HeroSection'
import Main from '@/components/layout/Main'
import SkillsContent from '@/components/ui/SkillsContent'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Logo from '@/components/ui/Logo'

export default function Skills() {
  return (
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
            <SkillsContent />
          </HeroSection>
        </Container>
      </Main>
    </div>
  )
}

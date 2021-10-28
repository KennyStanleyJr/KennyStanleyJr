import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Logo from '@/components/ui/Logo'
import Navigation from '@/components/domain/Navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import Content from '@/components/ui/Content'

export default function Home() {
  return (
    <Main>
      <Header>
        <Logo />
        <Navigation />
        <DarkModeToggle />
      </Header>
      {/* <Content /> */}
    </Main>
  )
}

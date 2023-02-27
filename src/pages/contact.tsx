import { type NextPage } from "next";

import { Main } from "~/components/layout/Main";
import { Header } from "~/components/layout/Header";
import { Logo } from "~/components/Logo";
import { Navigation } from "~/components/Navigation";
import { ThemeToggleButton } from "~/components/ThemeToggleButton";
import { Container } from "~/components/layout/Container";
import { ContactSection } from "~/components/sections/ContactSection";

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Header>
          <Logo />
          <Navigation />
          <ThemeToggleButton />
        </Header>
        <Container>
          <ContactSection />
        </Container>
      </Main>
    </>
  )
};

export default Home;

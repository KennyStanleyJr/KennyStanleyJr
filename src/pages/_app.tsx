import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

import { ThemeProvider, useTheme } from 'next-themes'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

import { Poppins, Permanent_Marker } from "@next/font/google"
import Head from "next/head";
import { Main } from "~/components/layout/Main";
import { Header } from "~/components/layout/Header";
import { Logo } from "~/components/Logo";
import { Navigation } from "~/components/Navigation";
import { ThemeToggleButton } from "~/components/ThemeToggleButton";
import { Container } from "~/components/layout/Container";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-permanent-marker',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kenny Stanley</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider attribute="class" >
        <ThemedCanvas />

        <div className={`${poppins.variable} ${permanentMarker.variable} font-poppins`}>
          <Main>
            <Header>
              <Logo />
              <Navigation />
              <ThemeToggleButton />
            </Header>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Main>
        </div>

      </ThemeProvider>
    </>
  )
}
export default MyApp


function ThemedCanvas() {
  const { theme } = useTheme()
  return (
      <div className="h-screen-with-spacer md:h-screen">
      <Canvas >
        <Sparkles
          count={1000}
          speed={0.2}
          opacity={1}
          color={theme === 'dark' ? '#fff' : '#000'}
          size={1}
          scale={10}
          noise={0.1}
        />
        <color attach="background" args={theme === 'dark' ? ['#121212'] : ['#fff']} />
      </Canvas>
    </div>
  )
}
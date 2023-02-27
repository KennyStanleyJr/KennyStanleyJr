import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

import Head from "next/head";
import { Poppins, Permanent_Marker } from "@next/font/google"
import { ThemeProvider } from 'next-themes'

import { Canvas } from '~/components/Canvas'

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
        <Canvas />
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
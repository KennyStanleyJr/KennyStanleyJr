import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

import { ThemeProvider, useTheme } from 'next-themes'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { MutableRefObject, useRef } from 'react'

import { Poppins } from "@next/font/google"
import Head from "next/head";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kenny Stanley</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemedCanvas />

        <div className={`${poppins.variable} font-poppins`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
export default MyApp


function ThemedCanvas() {
  const starsRef = useRef<{ rotation: { x: number, y: number, z: number } }>()
  const { theme } = useTheme()
  console.log('theme', theme)
  return (
      <div className="h-screen-with-spacer md:h-screen">
      <Canvas >
        <Stars
          ref={starsRef}
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <RotateStars starsRef={starsRef} />
        <color attach="background" args={theme === 'dark' ? ['#121212'] : ['#fff']} />
      </Canvas>
    </div>
  )
}

// This is in a separate component because useFrame has to be called inside of the Canvas
const RotateStars = ({ starsRef }: { starsRef: MutableRefObject<{ rotation: { x: number, y: number, z: number } } | undefined> }) => {
  useFrame(() => {
    // Rotate the model a bit
    if (starsRef.current && starsRef.current.rotation) {
      starsRef.current.rotation.z = starsRef.current.rotation.y += 0.0002
    }
  })
  return <></>
}
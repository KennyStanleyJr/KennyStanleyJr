import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'

const RotateStars = ({ starsRef }: any) => {
  useFrame(() => {
    // Rotate the model a bit
    if (starsRef.current) {
      starsRef.current.rotation.z = starsRef.current.rotation.y += 0.0002
    }
  })
  return <></>
}

function MyApp({ Component, pageProps }: AppProps) {
  const starsRef = useRef()
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="h-screen-with-spacer md:h-screen">
        <Canvas>
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
        </Canvas>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp

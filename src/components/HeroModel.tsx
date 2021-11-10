import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as three from 'three'
import { TorusKnot } from '@react-three/drei'

export const HeroModel = () => {
  const ref = useRef<three.Mesh>()
  useFrame(() => {
    if (ref.current) ref.current.rotation.y = ref.current.rotation.x += 0.0069
  })

  return (
    <mesh ref={ref}>
      <dodecahedronBufferGeometry attach="geometry" args={[1, 0]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    // <TorusKnot ref={ref}>
    //   <meshPhongMaterial attach="material" color="#f3f3f3" />
    // </TorusKnot>
  )
}
export default HeroModel

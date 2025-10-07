'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface FloatingObjectProps {
  position: [number, number, number]
  type: 'box' | 'sphere' | 'cone'
}

export default function FloatingObject({ position, type }: FloatingObjectProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  const geometry = {
    box: <boxGeometry args={[1.5, 1.5, 1.5]} />,
    sphere: <sphereGeometry args={[1, 32, 32]} />,
    cone: <coneGeometry args={[0.8, 2, 32]} />,
  }

  return (
    <mesh ref={meshRef} position={position}>
      {geometry[type]}
      <meshStandardMaterial
        color="#E0C163"
        metalness={0.3}
        roughness={0.4}
        emissive="#E0C163"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}
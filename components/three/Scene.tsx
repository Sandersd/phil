'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera } from '@react-three/drei'
import { Group, Vector3 } from 'three'
import FloatingObject from './FloatingObject'

function SceneContent() {
  const groupRef = useRef<Group>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.1
      groupRef.current.rotation.x = mouse.current.y * 0.05
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingObject position={[-3, 2, 0]} type="box" />
        </Float>
        <Float speed={3} rotationIntensity={0.3} floatIntensity={0.7}>
          <FloatingObject position={[3, -1, -2]} type="sphere" />
        </Float>
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <FloatingObject position={[0, 0, 1]} type="cone" />
        </Float>
      </group>
      
      <Environment preset="city" />
    </>
  )
}

export default function Scene() {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  if (prefersReducedMotion) {
    return <div className="w-full h-full bg-gradient-to-b from-bg to-bg/80" />
  }

  return (
    <Canvas dpr={[1, 2]} className="w-full h-full">
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}
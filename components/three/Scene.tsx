'use client'

import { Suspense, useRef, useCallback, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera } from '@react-three/drei'
import { Group } from 'three'
import * as THREE from 'three'
import FloatingObject from './FloatingObject'

function SceneContent() {
  const { camera } = useThree()
  const groupRef = useRef<Group>(null)
  const mouseTargetRef = useRef({ x: 0, y: 0 })
  const mouseLerpRef = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mouse tracking for parallax effect
  const handleMouseMove = useCallback((event: MouseEvent) => {
    // Normalize mouse position to -1 to 1 range
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    
    mouseTargetRef.current = { x, y }
  }, [])

  // Add mouse event listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  // Mouse parallax animation frame
  useFrame((state, delta) => {
    // Smooth lerp towards mouse target
    mouseLerpRef.current.x = THREE.MathUtils.lerp(mouseLerpRef.current.x, mouseTargetRef.current.x, delta * 3)
    mouseLerpRef.current.y = THREE.MathUtils.lerp(mouseLerpRef.current.y, mouseTargetRef.current.y, delta * 3)

    // Calculate enhanced mouse influence
    const mouseInfluence = {
      x: mouseLerpRef.current.x * 0.1,  // Enhanced mouse parallax
      y: mouseLerpRef.current.y * 0.1   // Enhanced mouse parallax
    }

    // Apply mouse parallax to camera
    camera.rotation.x = mouseInfluence.y
    camera.rotation.y = mouseInfluence.x
    
    // Apply enhanced influence to the group
    if (groupRef.current) {
      groupRef.current.rotation.x = mouseInfluence.y * 0.8
      groupRef.current.rotation.y = mouseInfluence.x * 0.8
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <pointLight position={[-5, -5, 5]} intensity={0.2} color="#ffffff" />
      <pointLight position={[8, 2, -3]} intensity={0.15} color="#f0f0ff" />
      
      <group ref={groupRef}>
        {/* Always show the gem (center, most visible) */}
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <FloatingObject position={[0, 1, -3]} type="gem" />
        </Float>
        
        {/* Desktop-only models (save 58.5MB on mobile) */}
        {!isMobile && (
          <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <FloatingObject position={[-8, 3, -6]} type="bracelet" />
            </Float>
            
            <Float speed={3} rotationIntensity={0.3} floatIntensity={0.7}>
              <FloatingObject position={[7, -2, -9]} type="silver-bracelet" />
            </Float>
            
            <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.8}>
              <FloatingObject position={[9, 2, -7]} type="pearl-blossom" />
            </Float>
            
            <Float speed={3.5} rotationIntensity={0.7} floatIntensity={0.3}>
              <FloatingObject position={[-6, -1, -1]} type="floral-dress" />
            </Float>
          </>
        )}
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
'use client'

import { useRef, Suspense, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh, Group } from 'three'

interface FloatingObjectProps {
  position: [number, number, number]
  type: 'box' | 'sphere' | 'cone' | 'bracelet' | 'silver-bracelet' | 'gem' | 'pearl-blossom' | 'floral-dress'
}

function BraceletModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/golden-petal-bracelet.glb')
  const [opacity, setOpacity] = useState(0)
  const [targetOpacity, setTargetOpacity] = useState(0)

  useEffect(() => {
    // Start fade-in animation after component mounts
    const timer = setTimeout(() => setTargetOpacity(1), 100)
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timer)
      if (groupRef.current) {
        groupRef.current.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2
      groupRef.current.rotation.y += delta * 0.4
      
      // Smooth opacity animation
      setOpacity(prev => {
        const diff = targetOpacity - prev
        return prev + diff * delta * 4 // 4x speed for fade-in
      })
      
      // Apply opacity to all materials
      groupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} scale={[1.2, 1.2, 1.2]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

function SilverBraceletModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/silver-circle-bracelet.glb')
  const [opacity, setOpacity] = useState(0)
  const [targetOpacity, setTargetOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setTargetOpacity(1), 100)
    
    return () => {
      clearTimeout(timer)
      if (groupRef.current) {
        groupRef.current.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.3
      groupRef.current.rotation.y += delta * 0.2
      
      setOpacity(prev => {
        const diff = targetOpacity - prev
        return prev + diff * delta * 4
      })
      
      groupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} scale={[1.0, 1.0, 1.0]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

function GemModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/gem.glb')
  const [opacity, setOpacity] = useState(0)
  const [targetOpacity, setTargetOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setTargetOpacity(1), 100)
    
    return () => {
      clearTimeout(timer)
      if (groupRef.current) {
        groupRef.current.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.5
      groupRef.current.rotation.z += delta * 0.2
      
      setOpacity(prev => {
        const diff = targetOpacity - prev
        return prev + diff * delta * 4
      })
      
      groupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} scale={[1.8, 1.8, 1.8]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

function PearlBlossomModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/pearl-blossom.glb')
  const [opacity, setOpacity] = useState(0)
  const [targetOpacity, setTargetOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setTargetOpacity(1), 100)
    
    return () => {
      clearTimeout(timer)
      if (groupRef.current) {
        groupRef.current.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.15
      groupRef.current.rotation.y += delta * 0.35
      groupRef.current.rotation.z += delta * 0.1
      
      setOpacity(prev => {
        const diff = targetOpacity - prev
        return prev + diff * delta * 4
      })
      
      groupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} scale={[1.4, 1.4, 1.4]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

function FloralDressModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/floral-dress.glb')
  const [opacity, setOpacity] = useState(0)
  const [targetOpacity, setTargetOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setTargetOpacity(1), 100)
    
    return () => {
      clearTimeout(timer)
      if (groupRef.current) {
        groupRef.current.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.3
      groupRef.current.rotation.z += delta * 0.05
      
      setOpacity(prev => {
        const diff = targetOpacity - prev
        return prev + diff * delta * 4
      })
      
      groupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} scale={[1.5, 1.5, 1.5]}>
      <primitive object={scene.clone()} />
    </group>
  )
}



function PrimitiveObject({ position, type }: { position: [number, number, number], type: 'box' | 'sphere' | 'cone' }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  const geometry = {
    box: <boxGeometry args={[1.0, 1.0, 1.0]} />,
    sphere: <sphereGeometry args={[0.7, 32, 32]} />,
    cone: <coneGeometry args={[0.5, 1.4, 32]} />,
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

export default function FloatingObject({ position, type }: FloatingObjectProps) {
  if (type === 'bracelet') {
    return (
      <Suspense fallback={null}>
        <BraceletModel position={position} />
      </Suspense>
    )
  }

  if (type === 'silver-bracelet') {
    return (
      <Suspense fallback={null}>
        <SilverBraceletModel position={position} />
      </Suspense>
    )
  }

  if (type === 'gem') {
    return (
      <Suspense fallback={null}>
        <GemModel position={position} />
      </Suspense>
    )
  }

  if (type === 'pearl-blossom') {
    return (
      <Suspense fallback={null}>
        <PearlBlossomModel position={position} />
      </Suspense>
    )
  }

  if (type === 'floral-dress') {
    return (
      <Suspense fallback={null}>
        <FloralDressModel position={position} />
      </Suspense>
    )
  }



  return <PrimitiveObject position={position} type={type} />
}

// Only preload the gem (always visible on mobile and desktop)
useGLTF.preload('/models/gem.glb')

// Desktop models load on-demand to improve initial loading performance
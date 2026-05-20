import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function Headset() {
  const group = useRef()
  useFrame((state, dt) => {
    if (!group.current) return
    group.current.rotation.y += dt * 0.25
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08
  })
  return (
    <group ref={group}>
      {/* main body */}
      <mesh castShadow>
        <torusKnotGeometry args={[0.95, 0.28, 220, 32]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.04}
          backside
          color="#ffffff"
          attenuationColor="#ffd7c2"
          attenuationDistance={2}
        />
      </mesh>
      {/* halo ring */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 160]} />
        <meshStandardMaterial color="#14140f" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* accent sphere */}
      <mesh position={[1.4, 0.6, 0.5]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#ff6b4a" emissive="#ff6b4a" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[-1.3, -0.7, 0.3]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#7c5cff" emissive="#7c5cff" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <color attach="background" args={['#f8f7f1']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-3, -2, -4]} intensity={0.4} color="#cdb8ff" />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
          <Headset />
        </Float>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}

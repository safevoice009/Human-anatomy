import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Lighting } from './Lighting'
import { Controls } from './Controls'

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: '#1a1a1a' }}
    >
      <Suspense fallback={null}>
        <Lighting />
        <Controls />
        {/* Models will be loaded here in future */}
      </Suspense>
    </Canvas>
  )
}

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Lighting } from './Lighting'
import { Controls } from './Controls'
import { ModelLoader } from './ModelLoader'

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      shadows
      style={{ background: '#1a1a1a' }}
    >
      <Suspense fallback={null}>
        <Lighting />
        <Controls />
        <ModelLoader modelPath="/models/test.glb" />
      </Suspense>
    </Canvas>
  )
}

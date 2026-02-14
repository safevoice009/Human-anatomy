import { OrbitControls } from '@react-three/drei'

export function Controls() {
  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={2}
      maxDistance={20}
      maxPolarAngle={Math.PI / 1.5}
      minPolarAngle={Math.PI / 6}
    />
  )
}

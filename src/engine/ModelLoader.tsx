import { useGLTF } from '@react-three/drei'

interface ModelLoaderProps {
  modelPath: string
  position?: [number, number, number]
  visible?: boolean
}

export function ModelLoader({ modelPath: _modelPath, position: _position = [0, 0, 0], visible: _visible = true }: ModelLoaderProps) {
  // This will load models when provided
  // Currently inactive as no models exist

  // const gltf = useGLTF(modelPath)

  return null
}

// Preload utility for future use
export function preloadModel(path: string) {
  useGLTF.preload(path)
}

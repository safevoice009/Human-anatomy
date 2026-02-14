import { useLoader } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Box3, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface ModelLoaderProps {
  modelPath: string
  position?: [number, number, number]
  visible?: boolean
}

export function ModelLoader({ modelPath, position = [0, 0, 0], visible = true }: ModelLoaderProps) {
  const gltf = useLoader(GLTFLoader, modelPath)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene])

  useEffect(() => {
    const box = new Box3().setFromObject(scene)
    const center = box.getCenter(new Vector3())
    const size = box.getSize(new Vector3())
    const maxDimension = Math.max(size.x, size.y, size.z)

    scene.position.sub(center)

    if (maxDimension > 0) {
      const scale = 2.5 / maxDimension
      scene.scale.setScalar(scale)
    }

    scene.traverse((child) => {
      if ('castShadow' in child) {
        child.castShadow = true
      }
      if ('receiveShadow' in child) {
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} position={position} visible={visible} />
}

export function preloadModel(path: string) {
  useLoader.preload(GLTFLoader, path)
}

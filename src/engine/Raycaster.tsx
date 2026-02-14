import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { useAnatomyStore } from '../store/anatomyStore'

export function Raycaster() {
  const { camera, scene } = useThree()
  const setSelectedObject = useAnatomyStore((state) => state.setSelectedObject)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Raycasting logic will be implemented when models exist
      // For now, this is just a placeholder
      console.log('Click detected at:', event.clientX, event.clientY)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [camera, scene, setSelectedObject])

  return null
}

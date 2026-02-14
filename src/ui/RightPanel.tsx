import { useAnatomyStore } from '../store/anatomyStore'

export function RightPanel() {
  const selectedObject = useAnatomyStore((state) => state.selectedObject)

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Info</h2>
      {selectedObject ? (
        <p>Selected: {selectedObject}</p>
      ) : (
        <p style={{ color: '#888', fontSize: '14px' }}>
          Select an object to view details.
        </p>
      )}
    </div>
  )
}

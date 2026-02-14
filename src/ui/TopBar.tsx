import { useUIStore } from '../store/uiStore'

export function TopBar() {
  const searchQuery = useUIStore((state) => state.searchQuery)
  const setSearchQuery = useUIStore((state) => state.setSearchQuery)

  return (
    <div style={{ 
      height: '60px', 
      background: '#1a1a1a', 
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px'
    }}>
      <input
        type="text"
        placeholder="Search anatomy..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: '8px 12px',
          background: '#2a2a2a',
          border: '1px solid #444',
          borderRadius: '4px',
          color: '#fff',
          width: '300px'
        }}
      />
    </div>
  )
}

import { ReactNode } from 'react'
import { useUIStore } from '../store/uiStore'

interface LayoutProps {
  leftPanel: ReactNode
  rightPanel: ReactNode
  topBar: ReactNode
  canvas: ReactNode
}

export function Layout({ leftPanel, rightPanel, topBar, canvas }: LayoutProps) {
  const leftPanelOpen = useUIStore((state) => state.leftPanelOpen)
  const rightPanelOpen = useUIStore((state) => state.rightPanelOpen)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {topBar}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {leftPanelOpen && <div style={{ width: '250px', background: '#2a2a2a' }}>{leftPanel}</div>}
        <div style={{ flex: 1 }}>{canvas}</div>
        {rightPanelOpen && <div style={{ width: '300px', background: '#2a2a2a' }}>{rightPanel}</div>}
      </div>
    </div>
  )
}

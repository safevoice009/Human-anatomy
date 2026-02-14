import { Scene } from './engine/Scene'
import { Layout } from './ui/Layout'
import { LeftPanel } from './ui/LeftPanel'
import { RightPanel } from './ui/RightPanel'
import { TopBar } from './ui/TopBar'

function App() {
  return (
    <Layout
      topBar={<TopBar />}
      leftPanel={<LeftPanel />}
      rightPanel={<RightPanel />}
      canvas={<Scene />}
    />
  )
}

export default App

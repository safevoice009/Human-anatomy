import { create } from 'zustand'

interface UIState {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
  searchQuery: string
  setLeftPanelOpen: (open: boolean) => void
  setRightPanelOpen: (open: boolean) => void
  setSearchQuery: (query: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  leftPanelOpen: true,
  rightPanelOpen: true,
  searchQuery: '',
  setLeftPanelOpen: (open) => set({ leftPanelOpen: open }),
  setRightPanelOpen: (open) => set({ rightPanelOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}))

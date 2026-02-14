import { create } from 'zustand'

interface AnatomyState {
  selectedObject: string | null
  activeSystem: string | null
  visibilityToggles: Record<string, boolean>
  setSelectedObject: (id: string | null) => void
  setActiveSystem: (system: string | null) => void
  toggleVisibility: (id: string) => void
}

export const useAnatomyStore = create<AnatomyState>((set) => ({
  selectedObject: null,
  activeSystem: null,
  visibilityToggles: {},
  setSelectedObject: (id) => set({ selectedObject: id }),
  setActiveSystem: (system) => set({ activeSystem: system }),
  toggleVisibility: (id) =>
    set((state) => ({
      visibilityToggles: {
        ...state.visibilityToggles,
        [id]: !state.visibilityToggles[id],
      },
    })),
}))

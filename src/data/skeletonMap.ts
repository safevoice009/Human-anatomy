// Type definitions for anatomy data structure
// NO actual data - interfaces only for future implementation

export interface AnatomyData {
  id: string
  name: string
  modelPath: string
  system: string
  description?: string
}

export interface AnatomySystem {
  id: string
  name: string
  color: string
  parts: string[] // IDs of anatomy parts
}

// Example structure (commented out - not implemented):
// export const skeletonData: AnatomyData[] = []
// export const anatomySystems: AnatomySystem[] = []

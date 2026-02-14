// Model caching utilities for future use

export class ModelCache {
  private cache: Map<string, any> = new Map()

  get(path: string) {
    return this.cache.get(path)
  }

  set(path: string, model: any) {
    this.cache.set(path, model)
  }

  has(path: string): boolean {
    return this.cache.has(path)
  }

  clear() {
    this.cache.clear()
  }
}

export const modelCache = new ModelCache()

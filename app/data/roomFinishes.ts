/** Shared plaster map — swatches only change tint colour. */
export const WALL_MAP = '/models/maps/wall-plaster-base.jpg'

export const wallFinishes = [
  { id: 'chalk', hex: '#E8E2D6', roughness: 0.86, metalness: 0 },
  { id: 'linen', hex: '#D4CBBE', roughness: 0.88, metalness: 0 },
  { id: 'sand', hex: '#C9B89A', roughness: 0.9, metalness: 0 },
  { id: 'clay', hex: '#C3A48C', roughness: 0.9, metalness: 0 },
  { id: 'sage', hex: '#9AA392', roughness: 0.88, metalness: 0 },
  { id: 'mineral', hex: '#A7A8A3', roughness: 0.86, metalness: 0 },
  { id: 'plaster', hex: '#B7B1A6', roughness: 0.9, metalness: 0 },
  { id: 'graphite', hex: '#4A4743', roughness: 0.82, metalness: 0 }
] as const

/** Same herringbone parquet map — swatches only change tint colour. */
export const HERRINGBONE_MAP = '/models/maps/floor-herringbone.jpg'

export const floorFinishes = [
  { id: 'oak', hex: '#C9A878', roughness: 0.5, metalness: 0 },
  { id: 'honey', hex: '#D4A35C', roughness: 0.48, metalness: 0 },
  { id: 'walnut', hex: '#7A5336', roughness: 0.52, metalness: 0 },
  { id: 'sand', hex: '#D2C0A0', roughness: 0.55, metalness: 0 },
  { id: 'smoke', hex: '#9A9084', roughness: 0.54, metalness: 0 },
  { id: 'charcoal', hex: '#4A433C', roughness: 0.56, metalness: 0 }
] as const

export type WallFinish = (typeof wallFinishes)[number]['id']
export type FloorFinish = (typeof floorFinishes)[number]['id']

export function getWallFinish(id: string) {
  return wallFinishes.find(item => item.id === id) ?? wallFinishes[0]
}

export function getFloorFinish(id: string) {
  return floorFinishes.find(item => item.id === id) ?? floorFinishes[0]
}

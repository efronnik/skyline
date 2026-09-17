export const wallFinishes = [
  { id: 'plaster', hex: '#B7B1A6', roughness: 0.94, metalness: 0, bumpScale: 0.045 },
  { id: 'chalk', hex: '#E7E2D6', roughness: 0.72, metalness: 0, bumpScale: 0.012 },
  { id: 'linen', hex: '#D4CBBE', roughness: 0.86, metalness: 0, bumpScale: 0.03 },
  { id: 'sand', hex: '#C9B89A', roughness: 0.9, metalness: 0, bumpScale: 0.04 },
  { id: 'clay', hex: '#C3A48C', roughness: 0.88, metalness: 0, bumpScale: 0.05 },
  { id: 'sage', hex: '#9AA392', roughness: 0.84, metalness: 0, bumpScale: 0.028 },
  { id: 'mineral', hex: '#A7A8A3', roughness: 0.8, metalness: 0.04, bumpScale: 0.055 },
  { id: 'graphite', hex: '#4A4743', roughness: 0.7, metalness: 0.08, bumpScale: 0.02 }
] as const

export const floorFinishes = [
  { id: 'sand', hex: '#CBB79A', roughness: 0.9, metalness: 0, map: null as string | null, bumpScale: 0.035 },
  { id: 'oak', hex: '#C4A574', roughness: 0.52, metalness: 0, map: '/models/maps/oak-bleached.jpg', bumpScale: 0 },
  { id: 'walnut', hex: '#6B4A32', roughness: 0.48, metalness: 0, map: '/models/maps/oak-mocha.jpg', bumpScale: 0 },
  { id: 'stone', hex: '#B8B3A8', roughness: 0.92, metalness: 0.02, map: null as string | null, bumpScale: 0.06 },
  { id: 'concrete', hex: '#9A9893', roughness: 0.95, metalness: 0.05, map: null as string | null, bumpScale: 0.08 },
  { id: 'charcoal', hex: '#3E3A36', roughness: 0.78, metalness: 0.06, map: null as string | null, bumpScale: 0.04 }
] as const

export type WallFinish = (typeof wallFinishes)[number]['id']
export type FloorFinish = (typeof floorFinishes)[number]['id']

export function sameHex(a: string, b: string) {
  return a.replace('#', '').toLowerCase() === b.replace('#', '').toLowerCase()
}

export function wallFinishByHex(hex: string) {
  return wallFinishes.find(item => sameHex(item.hex, hex)) ?? wallFinishes[0]
}

export function floorFinishByHex(hex: string) {
  return floorFinishes.find(item => sameHex(item.hex, hex)) ?? floorFinishes[0]
}

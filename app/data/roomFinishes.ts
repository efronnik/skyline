export const wallFinishes = [
  { id: 'plaster', hex: '#B7B1A6' },
  { id: 'chalk', hex: '#E7E2D6' },
  { id: 'linen', hex: '#D4CBBE' },
  { id: 'sand', hex: '#C9B89A' },
  { id: 'clay', hex: '#C3A48C' },
  { id: 'sage', hex: '#9AA392' },
  { id: 'mineral', hex: '#A7A8A3' },
  { id: 'graphite', hex: '#4A4743' }
] as const

export const floorFinishes = [
  { id: 'sand', hex: '#CBB79A' },
  { id: 'oak', hex: '#C4A574' },
  { id: 'walnut', hex: '#6B4A32' },
  { id: 'stone', hex: '#B8B3A8' },
  { id: 'concrete', hex: '#9A9893' },
  { id: 'charcoal', hex: '#3E3A36' }
] as const

export type WallFinish = (typeof wallFinishes)[number]['id']
export type FloorFinish = (typeof floorFinishes)[number]['id']

export function sameHex(a: string, b: string) {
  return a.replace('#', '').toLowerCase() === b.replace('#', '').toLowerCase()
}

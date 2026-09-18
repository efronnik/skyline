import type { ExtraId, LeafSizeId } from '~/types/content'

export const leafSizes: { id: LeafSizeId, label: string }[] = [
  { id: '2000x600', label: '2000 × 600' },
  { id: '2000x700', label: '2000 × 700' },
  { id: '2000x800', label: '2000 × 800' },
  { id: '2000x900', label: '2000 × 900' }
]

export const extraIds: ExtraId[] = ['dropSeal', 'sound', 'closer', 'spinoff']

export const extraOrder: ExtraId[] = extraIds

export const customBounds = {
  height: { min: 2001, max: 2400 },
  width: { min: 500, max: 1000 }
} as const

export const skuByKind = {
  base: 'iD-PRIME-BASE',
  finish: 'iD-PRIME-FINISH',
  custom: 'iD-PRIME-CUSTOM'
} as const

export function clampDim(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min
  return Math.min(max, Math.max(min, Math.round(value)))
}

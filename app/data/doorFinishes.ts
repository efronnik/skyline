export const leafFinishes = [
  { id: 'paint', map: null, preview: '#FFFFFF' }
] as const

export type LeafFinish = (typeof leafFinishes)[number]['id']

export function getLeafFinish(id: string) {
  return leafFinishes.find(item => item.id === id) ?? leafFinishes[0]
}

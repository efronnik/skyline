export const leafFinishes = [
  { id: 'paint', map: null, preview: '#F4F2EE' },
  { id: 'oakLight', map: '/models/maps/leaf-005.jpg', preview: '#B7A48A' },
  { id: 'oakWarm', map: '/models/maps/leaf-008.jpg', preview: '#8B6A45' },
  { id: 'oakGrey', map: '/models/maps/leaf-006.jpg', preview: '#6E6A66' },
  { id: 'oakDark', map: '/models/maps/leaf-009.jpg', preview: '#4A4743' },
  { id: 'oakSmoke', map: '/models/maps/leaf-012.jpg', preview: '#5C534A' },
  { id: 'oakDeep', map: '/models/maps/leaf-013.jpg', preview: '#3E3832' },
  { id: 'oakBleached', map: '/models/maps/oak-bleached.jpg', preview: '#D2C4AE' },
  { id: 'oakMocha', map: '/models/maps/oak-mocha.jpg', preview: '#6B4A32' }
] as const

export type LeafFinish = (typeof leafFinishes)[number]['id']

export function getLeafFinish(id: string) {
  return leafFinishes.find(item => item.id === id) ?? leafFinishes[0]
}

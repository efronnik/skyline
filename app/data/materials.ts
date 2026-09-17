import type { Material } from '~/types/content'

export const materials: Material[] = [
  {
    id: 'paint',
    image: '/images/material-paint.jpg',
    preview: '/images/work-pair.jpg'
  },
  {
    id: 'wallpaper',
    image: '/images/interior-flush.jpg',
    preview: '/images/interior-flush.jpg'
  },
  {
    id: 'plaster',
    image: '/images/material-plaster.jpg',
    preview: '/images/after-flush.jpg'
  }
]

export function getMaterial(id: string) {
  return materials.find(item => item.id === id)
}

import type { Material } from '~/types/content'

export const materials: Material[] = [
  {
    id: 'paint',
    image: '/images/material-paint.jpg',
    preview: '/images/work-pair.jpg'
  },
  {
    id: 'plaster',
    image: '/images/material-plaster.jpg',
    preview: '/images/after-flush.jpg'
  },
  {
    id: 'oak',
    image: '/images/project-living-oak.jpg',
    preview: '/images/project-living-oak.jpg'
  },
  {
    id: 'walnut',
    image: '/images/idoors-interior-dark.jpg',
    preview: '/images/project-living-oak.jpg'
  },
  {
    id: 'glass',
    image: '/images/material-glass.jpg',
    preview: '/images/product-glass.jpg'
  }
]

export function getMaterial(id: string) {
  return materials.find(item => item.id === id)
}

import type { Product } from '~/types/content'

const sharedGallery = [
  '/images/work-pair.jpg',
  '/images/work-corner.jpg',
  '/images/work-corridor.jpg',
  '/images/work-room.jpg'
]

export const products: Product[] = [
  {
    slug: 'prime-al-c',
    image: '/images/prime-al-c.jpg',
    gallery: ['/images/prime-al-c.jpg', '/images/idoors-gray.jpg', ...sharedGallery],
    colors: [{ id: 'white', value: '#FFFFFF' }],
    leaf: 'single',
    ratio: '3 / 4',
    edge: 'silver',
    swing: 'out'
  },
  {
    slug: 'prime-al-c-inside',
    image: '/images/prime-al-c-inside.jpg',
    gallery: ['/images/prime-al-c-inside.jpg', '/images/idoors-gray.jpg', ...sharedGallery],
    colors: [{ id: 'white', value: '#FFFFFF' }],
    leaf: 'single',
    ratio: '3 / 4',
    edge: 'silver',
    swing: 'in'
  },
  {
    slug: 'prime-al-ch',
    image: '/images/prime-al-ch.jpg',
    gallery: ['/images/prime-al-ch.jpg', '/images/idoors-black.jpg', ...sharedGallery],
    colors: [{ id: 'white', value: '#FFFFFF' }],
    leaf: 'single',
    ratio: '3 / 4',
    edge: 'black',
    swing: 'out'
  },
  {
    slug: 'prime-al-ch-inside',
    image: '/images/prime-al-ch-inside.jpg',
    gallery: ['/images/prime-al-ch-inside.jpg', '/images/idoors-black.jpg', ...sharedGallery],
    colors: [{ id: 'white', value: '#FFFFFF' }],
    leaf: 'single',
    ratio: '3 / 4',
    edge: 'black',
    swing: 'in'
  }
]

export function getProduct(slug: string) {
  if (slug === 'prime-al') return products[0]
  return products.find(item => item.slug === slug)
}

export function getProductSlugs() {
  return products.map(item => item.slug)
}

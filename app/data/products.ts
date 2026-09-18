import type { CatalogProduct, ProductLook } from '~/types/content'

const sharedGallery = [
  '/images/work-pair.jpg',
  '/images/work-corner.jpg',
  '/images/work-corridor.jpg',
  '/images/work-room.jpg'
]

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'prime-base',
    sku: 'iD-PRIME-BASE',
    kind: 'base',
    image: '/images/after-flush.jpg',
    gallery: ['/images/after-flush.jpg', '/images/prime-al-c.jpg', '/images/idoors-gray.jpg', ...sharedGallery],
    ratio: '3 / 4'
  },
  {
    slug: 'prime-finish',
    sku: 'iD-PRIME-FINISH',
    kind: 'finish',
    image: '/images/project-living-oak.jpg',
    gallery: ['/images/project-living-oak.jpg', '/images/material-glass.jpg', '/images/interior-flush.jpg', ...sharedGallery],
    ratio: '3 / 4'
  },
  {
    slug: 'prime-custom',
    sku: 'iD-PRIME-CUSTOM',
    kind: 'custom',
    image: '/images/idoors-install-standard.jpg',
    gallery: ['/images/idoors-install-standard.jpg', '/images/after-flush.jpg', '/images/project-living-oak.jpg', ...sharedGallery],
    ratio: '3 / 4'
  }
]

export const productLooks: ProductLook[] = [
  { slug: 'prime-al-c', image: '/images/prime-al-c.jpg', ratio: '3 / 4', edge: 'silver', swing: 'out' },
  { slug: 'prime-al-c-inside', image: '/images/prime-al-c-inside.jpg', ratio: '3 / 4', edge: 'silver', swing: 'in' },
  { slug: 'prime-al-ch', image: '/images/prime-al-ch.jpg', ratio: '3 / 4', edge: 'black', swing: 'out' },
  { slug: 'prime-al-ch-inside', image: '/images/prime-al-ch-inside.jpg', ratio: '3 / 4', edge: 'black', swing: 'in' }
]

export const products = catalogProducts

export const productRedirects: Record<string, { path: string, query?: Record<string, string> }> = {
  'prime-al': { path: '/products/prime-base' },
  'prime-al-c': { path: '/products/prime-base', query: { swing: 'out', edge: 'silver' } },
  'prime-al-c-inside': { path: '/products/prime-base', query: { swing: 'in', edge: 'silver' } },
  'prime-al-ch': { path: '/products/prime-base', query: { swing: 'out', edge: 'black' } },
  'prime-al-ch-inside': { path: '/products/prime-base', query: { swing: 'in', edge: 'black' } }
}

export function getProduct(slug: string) {
  return catalogProducts.find(item => item.slug === slug)
}

export function getProductSlugs() {
  return catalogProducts.map(item => item.slug)
}

export function heroImage(params: {
  kind: CatalogProduct['kind']
  swing: ProductLook['swing']
  edge: ProductLook['edge']
  finish: 'primer' | 'veneer' | 'mirror'
}) {
  if (params.finish === 'mirror' && (params.kind === 'finish' || params.kind === 'custom')) {
    return '/images/material-glass.jpg'
  }
  if (params.finish === 'veneer' && (params.kind === 'finish' || params.kind === 'custom')) {
    return '/images/project-living-oak.jpg'
  }
  if (params.edge === 'black') {
    return params.swing === 'in' ? '/images/prime-al-ch-inside.jpg' : '/images/prime-al-ch.jpg'
  }
  return params.swing === 'in' ? '/images/prime-al-c-inside.jpg' : '/images/prime-al-c.jpg'
}

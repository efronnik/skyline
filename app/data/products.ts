import type { CatalogProduct, ExtraId, ProductLook } from '~/types/content'

const flushInteriors = [
  '/images/prime-al-c.jpg',
  '/images/prime-al-c-inside.jpg',
  '/images/prime-al-ch.jpg',
  '/images/prime-al-ch-inside.jpg',
  '/images/idoors-interior-light.jpg',
  '/images/work-corridor.jpg',
  '/images/after-flush.jpg',
  '/images/interior-flush.jpg',
]

const finishInteriors = [
  '/images/prime-al-c.jpg',
  '/images/prime-al-ch.jpg',
  '/images/project-living-oak.jpg',
  '/images/material-paint.jpg',
  '/images/idoors-interior-dark.jpg',
  '/images/product-glass.jpg',
  '/images/work-corridor.jpg',
]

export const homeHeroShot = '/images/idoors-interior-light.jpg'

export const homeSlides = {
  hero: flushInteriors,
  primed: [
    '/images/prime-al-c.jpg',
    '/images/prime-al-ch.jpg',
    '/images/after-flush.jpg',
    '/images/work-corridor.jpg',
  ],
  finished: [
    '/images/prime-al-c.jpg',
    '/images/project-living-oak.jpg',
    '/images/idoors-interior-dark.jpg',
    '/images/material-paint.jpg',
  ],
  size: [
    '/images/prime-al-ch-inside.jpg',
    '/images/work-corridor.jpg',
    '/images/after-flush.jpg',
    '/images/idoors-install-standard.jpg',
  ]
} as const

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'prime-base',
    sku: 'iD-PRIME-BASE',
    kind: 'base',
    image: '/images/idoors-interior-light.jpg',
    gallery: flushInteriors,
    ratio: '3 / 4'
  },
  {
    slug: 'prime-finish',
    sku: 'iD-PRIME-FINISH',
    kind: 'finish',
    image: '/images/project-living-oak.jpg',
    gallery: finishInteriors,
    ratio: '3 / 4'
  },
  {
    slug: 'prime-custom',
    sku: 'iD-PRIME-CUSTOM',
    kind: 'custom',
    image: '/images/work-corridor.jpg',
    gallery: finishInteriors,
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
  if (params.finish === 'mirror' && (params.kind === 'finish' || params.kind === 'custom'))
    return '/images/product-glass.jpg'
  if (params.finish === 'veneer' && (params.kind === 'finish' || params.kind === 'custom'))
    return '/images/idoors-interior-dark.jpg'
  return '/images/idoors-interior-light.jpg'
}

/** Factory shots for extras. Empty until the file is in public/images. */
export const optionShots: Partial<Record<ExtraId, string>> = {
  dropSeal: ''
}

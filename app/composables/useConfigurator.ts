import { getProduct, products } from '~/data/products'

export type ConfigEdge = 'silver' | 'black'
export type ConfigSwing = 'in' | 'out'

export function useConfigurator() {
  const selectedSlug = useState('cfg-slug', () => 'prime-al-c')
  const edge = useState<ConfigEdge>('cfg-edge', () => 'silver')
  const swing = useState<ConfigSwing>('cfg-swing', () => 'out')

  watch([edge, swing], () => {
    const match = products.find(item => item.edge === edge.value && item.swing === swing.value)
    if (match) selectedSlug.value = match.slug
  })

  async function openProduct(slug: string, next?: { edge?: ConfigEdge, swing?: ConfigSwing }) {
    const product = getProduct(slug)
    selectedSlug.value = product?.slug ?? 'prime-al-c'
    if (next?.edge) edge.value = next.edge
    else if (product) edge.value = product.edge
    if (next?.swing) swing.value = next.swing
    else if (product) swing.value = product.swing
    if (import.meta.client && window.location.pathname === '/') {
      document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    await navigateTo({ path: '/', hash: '#configurator', query: { system: selectedSlug.value } })
  }

  return { selectedSlug, edge, swing, openProduct }
}

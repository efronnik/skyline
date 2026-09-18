import type { ExtraId, LeafFinish, LeafSizeId, ProductKind } from '~/types/content'
import { clampDim, customBounds, extraIds, leafSizes, skuByKind } from '~/data/primeConfig'

function parseExtras(raw: unknown) {
  const value = Array.isArray(raw) ? raw.join(',') : String(raw ?? '')
  const set = new Set(value.split(',').filter((id): id is ExtraId => extraIds.includes(id as ExtraId)))
  return extraIds.reduce((acc, id) => {
    acc[id] = set.has(id)
    return acc
  }, {} as Record<ExtraId, boolean>)
}

function parseFinish(kind: ProductKind, raw: unknown): LeafFinish {
  if (kind === 'custom') {
    if (raw === 'veneer' || raw === 'mirror' || raw === 'primer') return raw
    return 'primer'
  }
  return raw === 'mirror' ? 'mirror' : 'veneer'
}

export function usePrimeConfig(kind: ProductKind) {
  const route = useRoute()
  const router = useRouter()
  const { t } = useLocale()

  const finish = ref<LeafFinish>(parseFinish(kind, route.query.finish))
  const swing = ref<'in' | 'out'>(route.query.swing === 'in' ? 'in' : 'out')
  const edge = ref<'silver' | 'black'>(route.query.edge === 'black' ? 'black' : 'silver')
  const size = ref<LeafSizeId>(
    leafSizes.some(item => item.id === route.query.size) ? route.query.size as LeafSizeId : '2000x800'
  )
  const height = ref(route.query.h
    ? clampDim(Number(route.query.h), customBounds.height.min, customBounds.height.max)
    : 2100)
  const width = ref(clampDim(Number(route.query.w) || 800, customBounds.width.min, customBounds.width.max))
  const extras = reactive(parseExtras(route.query.opts))
  const sizeError = ref('')

  const querySnapshot = computed(() => {
    const opts = extraIds.filter(id => extras[id]).join(',')
    const next: Record<string, string> = {
      swing: swing.value,
      edge: edge.value
    }
    if (kind === 'custom') {
      next.finish = finish.value
      next.h = String(height.value)
      next.w = String(width.value)
    } else {
      next.size = size.value
      if (kind === 'finish') next.finish = finish.value
    }
    if (opts) next.opts = opts
    return next
  })

  if (import.meta.client) {
    watch(querySnapshot, (next) => {
      const same = Object.keys(next).every(key => String(route.query[key] ?? '') === next[key])
        && Object.keys(route.query).every(key => key in next || !route.query[key])
      if (same) return
      router.replace({ query: next })
    }, { deep: true })
  }

  const extraLabels = computed(() => extraIds
    .filter(id => extras[id])
    .map(id => id === 'spinoff' && kind !== 'base' ? t('pdp.extras.spinoffFinish') : t(`pdp.extras.${id}`)))

  const finishLabel = computed(() => {
    if (kind === 'custom') return t(`pdp.customFinish.${finish.value}`)
    if (kind === 'finish') return t(`pdp.finishKind.${finish.value === 'primer' ? 'veneer' : finish.value}`)
    return ''
  })

  const swingLabel = computed(() => {
    if (kind !== 'base' && swing.value === 'out') return t('pdp.swing.outFinish')
    return t(`pdp.swing.${swing.value}`)
  })

  const sizeLabel = computed(() => {
    if (kind === 'custom') return `${height.value} × ${width.value} ${t('specs.mm')}`
    return leafSizes.find(item => item.id === size.value)?.label ?? size.value
  })

  const summary = computed(() => {
    const lines = [
      `${t('pdp.line.product')}: ${t(`pdp.${kind}.title`)} (${skuByKind[kind]})`,
      finishLabel.value ? `${t('pdp.line.finish')}: ${finishLabel.value}` : '',
      `${t('pdp.line.swing')}: ${swingLabel.value}`,
      `${t('pdp.line.size')}: ${sizeLabel.value}`,
      `${t('pdp.line.edge')}: ${t(`pdp.edge.${edge.value}`)}`,
      `${t('pdp.line.extras')}: ${extraLabels.value.join('; ') || t('pdp.none')}`
    ]
    return lines.filter(Boolean).join('\n')
  })

  function clampCustomSize() {
    height.value = clampDim(height.value, customBounds.height.min, customBounds.height.max)
    width.value = clampDim(width.value, customBounds.width.min, customBounds.width.max)
    sizeError.value = ''
  }

  function validateCustomSize() {
    const hOk = height.value >= customBounds.height.min && height.value <= customBounds.height.max
    const wOk = width.value >= customBounds.width.min && width.value <= customBounds.width.max
    if (hOk && wOk) {
      sizeError.value = ''
      return true
    }
    sizeError.value = t('pdp.sizeErr')
    return false
  }

  return {
    finish,
    swing,
    edge,
    size,
    height,
    width,
    extras,
    extraLabels,
    summary,
    sizeError,
    clampCustomSize,
    validateCustomSize
  }
}

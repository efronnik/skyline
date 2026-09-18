import type { ProductKind, QuoteLine } from '~/types/content'

const STORAGE = 'limen-quote'
const maxQty = 99

function clampQty(value: number) {
  if (!Number.isFinite(value)) return 1
  return Math.min(maxQty, Math.max(1, Math.round(value)))
}

function sameLine(a: QuoteLine, b: Pick<QuoteLine, 'kind' | 'summary'>) {
  return a.kind === b.kind && a.summary === b.summary
}

export function useQuoteList() {
  const { t } = useLocale()
  const lines = useState<QuoteLine[]>('quote-lines', () => [])
  const hydrated = useState('quote-hydrated', () => false)
  const watching = useState('quote-watching', () => false)

  onMounted(() => {
    if (hydrated.value) return
    hydrated.value = true
    try {
      const raw = sessionStorage.getItem(STORAGE)
      const parsed = raw ? JSON.parse(raw) : []
      if (Array.isArray(parsed))
        lines.value = parsed.filter(item => item && typeof item.summary === 'string' && item.qty)
    } catch {
      lines.value = []
    }
  })

  if (import.meta.client && !watching.value) {
    watching.value = true
    watch(lines, (value) => {
      sessionStorage.setItem(STORAGE, JSON.stringify(value))
    }, { deep: true })
  }

  const total = computed(() => lines.value.reduce((sum, item) => sum + item.qty, 0))

  function add(input: { kind: ProductKind, sku: string, summary: string, qty: number }) {
    const qty = clampQty(input.qty)
    const existing = lines.value.find(item => sameLine(item, input))
    if (existing) {
      existing.qty = clampQty(existing.qty + qty)
      return existing
    }
    const line: QuoteLine = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind: input.kind,
      sku: input.sku,
      summary: input.summary,
      qty
    }
    lines.value = [...lines.value, line]
    return line
  }

  function setQty(id: string, qty: number) {
    const line = lines.value.find(item => item.id === id)
    if (line) line.qty = clampQty(qty)
  }

  function remove(id: string) {
    lines.value = lines.value.filter(item => item.id !== id)
  }

  function clear() {
    lines.value = []
  }

  function message() {
    if (!lines.value.length) return ''
    const blocks = lines.value.map((item, index) => (
      `${index + 1}. ${t('pdp.line.qty')} ${item.qty} ${t('pdp.pcs')}\n${item.summary}`
    ))
    return `${t('pdp.quoteLead')}\n\n${blocks.join('\n\n')}\n\n${t('pdp.quoteTotal')}: ${total.value}`
  }

  return {
    lines,
    total,
    maxQty,
    clampQty,
    add,
    setQty,
    remove,
    clear,
    message
  }
}

import { localeList, messages, type Locale } from '~/i18n/messages'

type Dict = Record<string, unknown>

function getPath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) return (acc as Dict)[key]
    return undefined
  }, source)
}

function pickLocale<T>(node: unknown, locale: Locale): T | undefined {
  if (!node || typeof node !== 'object') return undefined
  const bag = node as Record<Locale, T>
  return bag[locale] ?? bag.ru
}

export function useLocale() {
  const cookie = useCookie<Locale>('idoors-locale', {
    default: () => 'es',
    sameSite: 'lax',
    path: '/'
  })
  const locale = useState<Locale>('idoors-locale-state', () => {
    const saved = cookie.value
    return localeList.some(item => item.id === saved) ? saved : 'es'
  })

  const htmlLang = computed(() => locale.value)

  function t(path: string): string {
    const node = getPath(messages, path)
    const value = pickLocale<string>(node, locale.value)
    return typeof value === 'string' ? value : path
  }

  function ta(path: string): string[] {
    const node = getPath(messages, path)
    const value = pickLocale<string[]>(node, locale.value)
    return Array.isArray(value) ? value : []
  }

  function tl<T>(path: string): T[] {
    const node = getPath(messages, path)
    const value = pickLocale<T[]>(node, locale.value)
    return Array.isArray(value) ? value : []
  }

  function setLocale(next: Locale) {
    locale.value = next
    cookie.value = next
  }

  return {
    locale,
    htmlLang,
    locales: localeList,
    t,
    ta,
    tl,
    setLocale
  }
}

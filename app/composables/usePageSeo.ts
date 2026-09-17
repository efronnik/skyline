interface SeoInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

const ogLocales = {
  ru: 'ru_RU',
  uk: 'uk_UA',
  es: 'es_ES',
  en: 'en_US'
} as const

export function usePageSeo(input: SeoInput | (() => SeoInput)) {
  const config = useRuntimeConfig()
  const { locale } = useLocale()
  const resolved = computed(() => typeof input === 'function' ? input() : input)

  function absolute(path: string) {
    if (path.startsWith('http')) return path
    return `${config.public.siteUrl}${path}`
  }

  function imageUrl() {
    return absolute(resolved.value.image || '/images/hero-poster.jpg')
  }

  useSeoMeta({
    title: () => `${resolved.value.title} — LIMEN`,
    description: () => resolved.value.description,
    robots: () => resolved.value.noindex ? 'noindex, follow' : 'index, follow',
    ogTitle: () => `${resolved.value.title} — LIMEN`,
    ogDescription: () => resolved.value.description,
    ogType: () => resolved.value.type ?? 'website',
    ogUrl: () => absolute(resolved.value.path),
    ogImage: () => imageUrl(),
    ogImageAlt: () => resolved.value.title,
    ogSiteName: () => String(config.public.siteName),
    ogLocale: () => ogLocales[locale.value],
    ogLocaleAlternate: () => Object.values(ogLocales).filter(item => item !== ogLocales[locale.value]),
    twitterCard: 'summary_large_image',
    twitterTitle: () => `${resolved.value.title} — LIMEN`,
    twitterDescription: () => resolved.value.description,
    twitterImage: () => imageUrl(),
    twitterImageAlt: () => resolved.value.title
  })

  useHead({
    link: computed(() => [{ rel: 'canonical', href: absolute(resolved.value.path) }])
  })
}

export function useJsonLd(schema: Record<string, unknown> | (() => Record<string, unknown>)) {
  useHead({
    script: computed(() => [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(typeof schema === 'function' ? schema() : schema)
      }
    ])
  })
}

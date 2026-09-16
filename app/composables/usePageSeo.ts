interface SeoInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function usePageSeo(input: SeoInput) {
  const config = useRuntimeConfig()
  const url = `${config.public.siteUrl}${input.path}`
  const image = input.image
    ? `${config.public.siteUrl}${input.image}`
    : `${config.public.siteUrl}/images/hero-wall.png`
  const fullTitle = `${input.title} — LIMEN`

  useSeoMeta({
    title: fullTitle,
    description: input.description,
    ogTitle: fullTitle,
    ogDescription: input.description,
    ogType: input.type ?? 'website',
    ogUrl: url,
    ogImage: image,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: input.description,
    twitterImage: image
  })

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })
}

export function useJsonLd(schema: Record<string, unknown>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify(schema)
      }
    ]
  })
}

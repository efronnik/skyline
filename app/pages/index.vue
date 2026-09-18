<script setup lang="ts">
import { products } from '~/data/products'

const { t, locale } = useLocale()
const route = useRoute()
const { open } = useInquiryModal()

definePageMeta({
  darkHeader: true
})

usePageSeo(() => ({
  title: t('seo.homeTitle'),
  description: t('seo.homeDesc'),
  path: '/',
  image: '/images/hero-poster.jpg'
}))

const config = useRuntimeConfig()
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'LIMEN',
      url: config.public.siteUrl,
      email: 'studio@limen.example',
      sameAs: ['https://www.instagram.com/idoors.es/']
    },
    {
      '@type': 'WebSite',
      name: 'LIMEN',
      url: config.public.siteUrl,
      inLanguage: locale.value,
      description: t('seo.homeDesc')
    },
    {
      '@type': 'ItemList',
      name: t('collection.kicker'),
      numberOfItems: products.length,
      itemListElement: products.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${config.public.siteUrl}/products/${item.slug}`,
        name: t(`products.${item.slug}.name`)
      }))
    }
  ]
}))

onMounted(() => {
  const id = route.hash.replace('#', '')
  if (id === 'contact') {
    open()
    return
  }
  if (!id) return
  document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
})
</script>

<template>
  <div>
    <HomeHero />
    <RevealOnView>
      <IdoorsOffer />
    </RevealOnView>
    <RevealOnView stagger=".sku">
      <CollectionSection />
    </RevealOnView>
    <RevealOnView stagger=".swatch">
      <MaterialsSection detail-to="/materials" />
    </RevealOnView>
    <RevealOnView>
      <SizeOffer />
    </RevealOnView>
    <CtaBand />
  </div>
</template>

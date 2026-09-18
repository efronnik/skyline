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
      <CopyOffer
        id="primed"
        copy-key="offers.primed"
        src="/images/after-flush.jpg"
        image="right"
        cta-to="#collection"
      />
    </RevealOnView>
    <RevealOnView stagger=".sku">
      <CollectionSection />
    </RevealOnView>
    <RevealOnView>
      <CopyOffer
        id="finished"
        copy-key="offers.finished"
        src="/images/project-living-oak.jpg"
        invert
        cta-to="#contact"
      />
    </RevealOnView>
    <RevealOnView>
      <CopyOffer
        id="size"
        copy-key="offers.size"
        src="/images/idoors-install-standard.jpg"
        image="right"
        cta-to="#contact"
      />
    </RevealOnView>
    <RevealOnView>
      <CopyOffer
        id="hardware"
        copy-key="offers.hardware"
        src="/images/detail-handle.jpg"
        invert
        cta-to="#contact"
        ratio="1 / 1"
      />
    </RevealOnView>
    <CtaBand />
  </div>
</template>

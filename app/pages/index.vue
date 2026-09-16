<script setup lang="ts">
import { site } from '~/data/site'
import { products } from '~/data/products'

definePageMeta({
  darkHeader: true
})

usePageSeo({
  title: 'Двери скрытого монтажа',
  description: site.description,
  path: '/',
  image: '/images/hero-wall.png'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  description: site.description,
  url: site.url,
  makesOffer: products.map(item => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Product',
      name: `LIMEN ${item.name}`,
      description: item.summary
    }
  }))
})
</script>

<template>
  <div>
    <HomeHero />
    <PhilosophySection />
    <CollectionSection />
    <MaterialsSection />
    <TechnologySection />
    <BeforeAfterSection />
    <ProjectsSection />
    <BespokeSection />
    <ProcessSection />
    <QualitySection />
    <ArchitectsTeaser />
    <CtaBand />
  </div>
</template>

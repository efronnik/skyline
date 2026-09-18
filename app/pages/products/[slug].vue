<script setup lang="ts">
import { getProduct, productRedirects } from '~/data/products'

const { t } = useLocale()
const slug = String(useRoute().params.slug)
const redirect = productRedirects[slug]

if (redirect) {
  await navigateTo(redirect, { redirectCode: 301, replace: true })
}

const product = getProduct(slug)

if (!product)
  throw createError({ statusCode: 404, message: t('pages.notFoundProduct') })

usePageSeo(() => ({
  title: t(`pdp.${product.kind}.title`),
  description: t(`pdp.${product.kind}.title`),
  path: `/products/${product.slug}`,
  image: product.image,
  type: 'website'
}))

const config = useRuntimeConfig()
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: t(`pdp.${product.kind}.title`),
  sku: product.sku,
  description: t(`pdp.${product.kind}.title`),
  image: `${config.public.siteUrl}${product.image}`,
  brand: { '@type': 'Brand', name: 'iDOORS' },
  category: 'Flush door'
}))
</script>

<template>
  <article v-if="product" class="page">
    <ProductBreadcrumb :kind="product.kind" />
    <ProductConfigurator :kind="product.kind" :sku="product.sku" :gallery="product.gallery" />
    <ProductDetails :kind="product.kind" />
  </article>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.2rem) var(--pad) var(--section);
  max-width: var(--max);
  width: 100%;
  min-width: 0;
  margin: 0 auto;
  display: grid;
  gap: 1.4rem;
}
</style>

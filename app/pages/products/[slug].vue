<script setup lang="ts">
import { getProduct } from '~/data/products'

definePageMeta({ darkHeader: true })

const { t, ta } = useLocale()
const { openProduct } = useConfigurator()
const slug = String(useRoute().params.slug)

if (slug === 'prime-al') {
  await navigateTo('/products/prime-al-c', { redirectCode: 301, replace: true })
}

const product = getProduct(slug)

if (!product)
  throw createError({ statusCode: 404, message: t('pages.notFoundProduct') })

usePageSeo(() => ({
  title: t(`products.${product.slug}.name`),
  description: t(`products.${product.slug}.summary`),
  path: `/products/${product.slug}`,
  image: product.image,
  type: 'website'
}))

const config = useRuntimeConfig()
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: t(`products.${product.slug}.name`),
  description: t(`products.${product.slug}.summary`),
  image: `${config.public.siteUrl}${product.image}`,
  brand: { '@type': 'Brand', name: 'LIMEN' },
  category: 'Flush door'
}))
</script>

<template>
  <article v-if="product">
    <header class="hero">
      <NuxtImg
        :src="product.image"
        :alt="t(`products.${product.slug}.summary`)"
        sizes="sm:100vw md:100vw lg:1600px"
        :width="product.ratio === '3 / 4' ? 864 : 1280"
        :height="product.ratio === '3 / 4' ? 1152 : 720"
        fit="cover"
        preload
        loading="eager"
        class="hero__img"
      />
      <div class="hero__copy">
        <p>{{ t(`products.${product.slug}.latin`) }}</p>
        <h1>{{ t(`products.${product.slug}.name`) }}</h1>
        <p>{{ t(`products.${product.slug}.summary`) }}</p>
        <AppButton invert @click="openProduct(product.slug)">{{ t('collection.configure') }}</AppButton>
      </div>
    </header>
    <div class="body">
      <p class="lead">{{ t(`products.${product.slug}.description`) }}</p>
      <ProductSpecs :product="product" />
      <div class="gallery">
        <MediaFrame
          v-for="(src, index) in product.gallery"
          :key="src"
          :src="src"
          :alt="`${t(`products.${product.slug}.name`)}`"
          :ratio="index < 2 ? '21 / 9' : '3 / 2'"
          :fit="index < 2 ? 'contain' : 'cover'"
          sizes="(min-width: 900px) 50vw, 100vw"
        />
      </div>
      <ul>
        <li v-for="item in ta(`products.${product.slug}.features`)" :key="item">{{ item }}</li>
      </ul>
    </div>
    <CtaBand />
  </article>
</template>

<style scoped>
.hero {
  min-height: 72svh;
  position: relative;
  display: grid;
  align-items: end;
  background: var(--night);
  color: var(--paper);
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  opacity: 0.78;
}

.hero__copy {
  position: relative;
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--space-7);
  max-width: 36rem;
}

.hero__copy p:first-child {
  font-family: var(--font-spec);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: var(--fs-xs);
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-display);
  line-height: var(--lh-display);
  margin: 0.5rem 0 0.8rem;
}

.body {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.lead {
  font-size: 1.25rem;
  max-width: 38rem;
}

.gallery {
  display: grid;
  gap: 0.8rem;
  margin: 1.8rem 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1.3rem;
  padding: 0;
  list-style: none;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (min-width: 800px) {
  .gallery {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>

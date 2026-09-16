<script setup lang="ts">
import { getProduct, products } from '~/data/products'

definePageMeta({ darkHeader: true })

const product = getProduct(String(useRoute().params.slug))

if (!product) {
  throw createError({ statusCode: 404, message: 'Система не найдена' })
}

usePageSeo({
  title: `${product.name} — скрытая дверь`,
  description: product.summary,
  path: `/products/${product.slug}`,
  image: product.image,
  type: 'article'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `LIMEN ${product.name}`,
  description: product.description,
  image: product.image,
  brand: { '@type': 'Brand', name: 'LIMEN' }
})
</script>

<template>
  <article v-if="product">
    <header class="hero">
      <NuxtImg :src="product.image" :alt="product.summary" sizes="sm:100vw md:100vw lg:1920px" width="1920" height="1080" preload loading="eager" class="hero__img" />
      <div class="hero__copy">
        <p>{{ product.latin }}</p>
        <h1>{{ product.name }}</h1>
        <p>{{ product.summary }}</p>
        <AppButton to="/contact" invert>Рассчитать проект</AppButton>
      </div>
    </header>
    <div class="body">
      <p class="lead">{{ product.description }}</p>
      <ProductSpecs :product="product" />
      <div class="gallery">
        <MediaFrame
          v-for="(src, index) in product.gallery"
          :key="src"
          :src="src"
          :alt="`${product.name}, кадр ${index + 1}`"
          :ratio="index === 1 ? '3 / 4' : '16 / 10'"
          sizes="(min-width: 900px) 50vw, 100vw"
        />
      </div>
      <ul>
        <li v-for="item in product.features" :key="item">{{ item }}</li>
      </ul>
      <div class="more">
        <NuxtLink v-for="item in products.filter(entry => entry.slug !== product.slug).slice(0, 3)" :key="item.slug" :to="`/products/${item.slug}`">
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
    <CtaBand title="Обсудить эту систему" />
  </article>
</template>

<style scoped>
.hero {
  min-height: 88svh;
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
  object-fit: cover;
  opacity: 0.72;
}

.hero__copy {
  position: relative;
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
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
  line-height: 0.92;
  margin: 0.6rem 0 1rem;
}

.body {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.lead {
  font-size: 1.35rem;
  max-width: 38rem;
}

.gallery {
  display: grid;
  gap: 1rem;
  margin: var(--space-7) 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.4rem;
  padding: 0;
  list-style: none;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.more {
  display: flex;
  gap: 1.2rem;
  margin-top: var(--space-7);
  font-family: var(--font-display);
  font-size: var(--fs-lg);
}

@media (min-width: 800px) {
  .gallery {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>

<script setup lang="ts">
import { products } from '~/data/products'

const { t } = useLocale()
const { openProduct } = useConfigurator()

usePageSeo(() => ({
  title: t('collection.kicker'),
  description: t('collection.hint'),
  path: '/products',
  image: '/images/interior-flush.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel :kicker="t('collection.kicker')" :spec="t('collection.spec')" />
      <h1>{{ t('collection.title') }}</h1>
      <p>{{ t('collection.hint') }}</p>
    </header>
    <div class="list">
      <button
        v-for="item in products"
        :key="item.slug"
        type="button"
        @click="openProduct(item.slug)"
      >
        <MediaFrame
          :src="item.image"
          :alt="t(`products.${item.slug}.summary`)"
          :ratio="item.ratio"
          fit="contain"
          sizes="(min-width: 900px) 22vw, 50vw"
        />
        <p>{{ t(`products.${item.slug}.latin`) }}</p>
        <h2>{{ t(`products.${item.slug}.name`) }}</h2>
        <p>{{ t(`products.${item.slug}.summary`) }}</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: var(--max);
  margin: 0 auto;
}

header {
  max-width: 36rem;
  margin-bottom: 1.8rem;
}

h1,
h2 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h1 {
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  margin: 0.8rem 0 0.5rem;
}

.list {
  display: grid;
  gap: 1.3rem;
}

button {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

button p:first-of-type {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--joint);
  margin-top: 0.6rem;
}

@media (min-width: 720px) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1100px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

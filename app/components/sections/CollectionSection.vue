<script setup lang="ts">
import { products } from '~/data/products'

const featured = products[0]
const rest = products.slice(1, 4)
</script>

<template>
  <section class="col" aria-labelledby="col-title">
    <div class="col__head">
      <SectionLabel kicker="Коллекция" spec="02 — Systems" />
      <h2 id="col-title">Шесть систем. Одна плоскость.</h2>
    </div>

    <article v-if="featured" class="col__feature">
      <NuxtLink :to="`/products/${featured.slug}`" class="col__feature-link">
        <MediaFrame
          :src="featured.image"
          :alt="`${featured.name}: ${featured.summary}`"
          ratio="16 / 9"
          sizes="100vw"
        />
        <div class="col__feature-copy">
          <p>{{ featured.latin }}</p>
          <h3>{{ featured.name }}</h3>
          <p>{{ featured.summary }}</p>
          <span>Смотреть систему</span>
        </div>
      </NuxtLink>
    </article>

    <div class="col__list">
      <NuxtLink
        v-for="item in rest"
        :key="item.slug"
        :to="`/products/${item.slug}`"
        class="col__item"
      >
        <MediaFrame
          :src="item.image"
          :alt="`${item.name}. ${item.kicker}`"
          ratio="4 / 5"
          sizes="(min-width: 900px) 30vw, 100vw"
        />
        <p class="col__k">{{ item.latin }}</p>
        <h3>{{ item.name }}</h3>
        <p>{{ item.summary }}</p>
      </NuxtLink>
    </div>

    <AppButton to="/products" variant="line">Вся коллекция</AppButton>
  </section>
</template>

<style scoped>
.col {
  padding: 0 var(--pad) var(--space-8);
  max-width: var(--max);
  margin: 0 auto;
}

.col__head {
  display: grid;
  gap: 1rem;
  margin-bottom: var(--space-6);
}

h2,
h3 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h2 {
  font-size: var(--fs-xl);
  max-width: 12ch;
  line-height: 0.95;
}

.col__feature-link {
  display: grid;
  gap: 1.2rem;
}

.col__feature-copy p:first-child,
.col__k {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

h3 {
  font-size: var(--fs-lg);
  margin: 0.3rem 0 0.6rem;
}

.col__list {
  display: grid;
  gap: var(--space-6);
  margin: var(--space-7) 0;
}

.col__item:hover h3 {
  color: var(--joint);
}

.col__item span,
.col__feature-copy span {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

@media (min-width: 900px) {
  .col__feature-link {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: end;
  }

  .col__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem var(--space-5);
  }

  .col__item:nth-child(2) {
    margin-top: 3rem;
  }
}
</style>

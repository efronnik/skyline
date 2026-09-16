<script setup lang="ts">
import { products } from '~/data/products'

usePageSeo({
  title: 'Коллекция скрытых дверей',
  description: 'Системы скрытого монтажа LIMEN: под покраску, до потолка, двустворчатые, раздвижные, стекло и шпон.',
  path: '/products',
  image: '/images/interior-flush.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Коллекция" spec="Systems" />
      <h1>Шесть способов исчезнуть в стене.</h1>
      <p>Не витрина из карточек. Системы, которые принимают геометрию помещения.</p>
    </header>
    <article v-for="(item, index) in products" :key="item.slug" :class="{ reverse: index % 2 }">
      <NuxtLink :to="`/products/${item.slug}`">
        <MediaFrame
          :src="item.image"
          :alt="`${item.name}. ${item.summary}`"
          :ratio="index === 0 ? '16 / 9' : '4 / 5'"
          sizes="(min-width: 900px) 55vw, 100vw"
        />
        <div>
          <p>{{ item.latin }}</p>
          <h2>{{ item.name }}</h2>
          <p>{{ item.summary }}</p>
          <ul>
            <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
          </ul>
          <span>Открыть систему</span>
        </div>
      </NuxtLink>
    </article>
    <DoorConfigurator />
    <CtaBand title="Подобрать систему" />
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: var(--max);
  margin: 0 auto;
}

header {
  max-width: 36rem;
  margin-bottom: var(--space-8);
}

h1,
h2 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h1 {
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0;
}

article {
  margin-bottom: var(--space-8);
}

article a {
  display: grid;
  gap: 1.2rem;
}

article p:first-child,
span,
li {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

ul {
  margin: 1rem 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.4rem;
}

@media (min-width: 900px) {
  article a {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: end;
  }

  article.reverse a {
    grid-template-columns: 0.85fr 1.15fr;
  }

  article.reverse a > :first-child {
    order: 2;
  }
}
</style>

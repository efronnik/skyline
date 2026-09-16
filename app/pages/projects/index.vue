<script setup lang="ts">
import { projects } from '~/data/projects'

usePageSeo({
  title: 'Архитектурные сценарии',
  description: 'Типологии пространств со скрытыми дверями LIMEN: анфилада, галерея, кабинет, спальня.',
  path: '/projects',
  image: '/images/project-gallery.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Проекты" spec="Scenarios" />
      <h1>Сначала пространство.</h1>
      <p>
        Это визуальные сценарии для замены реальными объектами.
        Структура страницы уже готова под портфолио.
      </p>
    </header>
    <article v-for="item in projects" :key="item.slug">
      <NuxtLink :to="`/projects/${item.slug}`">
        <MediaFrame :src="item.cover" :alt="item.title" ratio="16 / 9" sizes="100vw" />
        <div>
          <p>{{ item.typology }}</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.story }}</p>
        </div>
      </NuxtLink>
    </article>
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
  gap: 1rem;
}

p:first-child {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint);
}

@media (min-width: 900px) {
  article a {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: end;
  }
}
</style>

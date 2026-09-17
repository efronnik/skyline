<script setup lang="ts">
import { projects } from '~/data/projects'

const { t } = useLocale()

usePageSeo(() => ({
  title: t('projects.kicker'),
  description: t('projects.lead'),
  path: '/projects',
  image: '/images/work-corridor.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel :kicker="t('projects.kicker')" :spec="t('projects.spec')" />
      <h1>{{ t('projects.title') }}</h1>
      <p>{{ t('projects.lead') }}</p>
    </header>
    <div class="list">
      <article v-for="item in projects" :key="item.slug">
        <NuxtLink :to="`/projects/${item.slug}`">
          <MediaFrame :src="item.cover" :alt="t(`projects.items.${item.slug}.title`)" :ratio="item.ratio" sizes="(min-width: 900px) 45vw, 100vw" />
          <p>{{ t(`projects.items.${item.slug}.typology`) }}</p>
          <h2>{{ t(`projects.items.${item.slug}.title`) }}</h2>
        </NuxtLink>
      </article>
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
  line-height: 0.95;
  margin: 0.8rem 0 0.5rem;
}

.list {
  display: grid;
  gap: 1.3rem;
}

article p {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint);
  margin-top: 0.6rem;
}

@media (min-width: 800px) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
